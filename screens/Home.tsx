import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ForYou from "../components/ForYou";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export type Question = {
	type: string;
	id: number;
	playlist: string;
	description: string;
	image: string;
	question: string;
	options: {
		id: string;
		answer: string;
	}[];
	user: {
		name: string;
		avatar: string;
	};
};

const Home: React.FC = () => {
	const [questions, setQuestions] = useState<Question[]>([]);

	const getQuestion = async () => {
		try {
			const response = await fetch("https://cross-platform.rp.devfactory.com/for_you");
			const data = await response.json();

			setQuestions((prev) => [...prev, data]);
		} catch (error) {
			console.log("Error", error);
		}
	};

	useEffect(() => {
		getQuestion();
	}, []);

	return (
		<View>
			<View>
				<View style={styles.header}>
					<Header />
				</View>
				<View>
					<FlatList
						data={questions}
						renderItem={({ item }) => <ForYou question={item} />}
						keyExtractor={(item) => item.id.toString()}
						snapToInterval={Dimensions.get("window").height}
						snapToAlignment={"start"}
						decelerationRate={"fast"}
						showsVerticalScrollIndicator={false}
						onEndReached={getQuestion}
						onEndReachedThreshold={0.5}
					/>
				</View>
			</View>
			<View style={styles.navbar}>
				<Navbar />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
	},
	navbar: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
});
