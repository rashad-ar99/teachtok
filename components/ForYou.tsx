import { Animated, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Sidebar from "./Sidebar";
import { Question } from "../screens/Home";

interface ForYouProps {
	question: Question;
}

export interface Answer {
	correct_options: {
		answer: string;
		id: string;
	}[];
	id: number;
}

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const ForYou: React.FC<ForYouProps> = ({ question }) => {
	const [answered, setAnswered] = useState<Boolean>(false);
	const [correctAnswer, setCorrectAnswer] = useState<String>("");
	const [selectedAnswer, setSelectedAnswer] = useState<String>("");

	const handlePress = async (questionId: number, answer: string) => {
		try {
			const response = await fetch(`https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`);
			const data: Answer = await response.json();

			setCorrectAnswer(data.correct_options[0].id);
			setAnswered(true);
			setSelectedAnswer(answer);
		} catch (error) {
			console.log("Error", error);
		}
	};

	const animatedWidth = useRef(new Animated.Value(0)).current;

	const handleViewClick = () => {
		Animated.timing(animatedWidth, {
			toValue: 300,
			delay: 750,
			duration: 1500,
			useNativeDriver: false,
		}).start();
	};

	return (
		<ImageBackground
			source={{
				uri: question.image,
			}}
			resizeMode="cover"
			style={styles.img}
		>
			<View style={styles.container}>
				<View style={styles.question}>
					<Text>
						{question.question.split(" ").map((word, i) => (
							<View key={i} style={styles.questionText}>
								<Text style={{ color: "white", fontSize: 25 }}>{word} </Text>
							</View>
						))}
					</Text>
				</View>

				<View>
					<View style={styles.bottomContainer}>
						<View>
							<View style={{ padding: 15, gap: 5 }}>
								{question.options.map((option) => (
									<TouchableOpacity
										onPress={() => {
											if (!answered) {
												handleViewClick();
												handlePress(question.id, option.id);
											}
										}}
										activeOpacity={0.8}
										key={option.id}
										style={styles.option}
									>
										{(option.id === selectedAnswer || option.id === correctAnswer) && (
											<View style={styles.widthAnimation}>
												<Animated.View
													style={[
														{
															height: 150,
															backgroundColor: option.id === correctAnswer ? "rgba(21, 128, 61, 0.6)" : option.id === selectedAnswer ? "rgba(220, 38, 38,0.4)" : "rgba(241, 245, 249, 0.3)",
															width: animatedWidth,
														},
													]}
												></Animated.View>
											</View>
										)}
										<View style={styles.answerView}>
											<Text style={styles.answerText}>{option.answer}</Text>

											{option.id === correctAnswer && option.id === selectedAnswer ? (
												<Image style={{ width: 20, height: 20 }} source={{ uri: "https://media.tenor.com/Hj2-u4VELREAAAAi/655.gif" }} />
											) : (
												option.id === selectedAnswer && <Image style={{ width: 20, height: 20 }} source={{ uri: "https://media.tenor.com/hqJZKOzhoXMAAAAi/emoji-dislike.gif" }} />
											)}
										</View>
									</TouchableOpacity>
								))}
							</View>
							<View style={{ padding: 15, gap: 5 }}>
								<Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>{question.user.name}</Text>
								<Text style={{ fontSize: 12, color: "white", fontWeight: "400" }}>{question.description}</Text>
							</View>
						</View>

						<Sidebar />
					</View>
					<View style={styles.playlist}>
						<View style={styles.playlistView}>
							<MaterialCommunityIcons name="play-box-multiple" size={24} color="white" />
							<Text style={styles.playlistText}>Playlist • Unit 5: {question.playlist}</Text>
						</View>
						<TouchableOpacity>
							<Entypo name="chevron-right" size={24} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

export default ForYou;

const styles = StyleSheet.create({
	img: {
		height: screenHeight,
		width: screenWidth,
		justifyContent: "flex-end",
	},
	container: {
		width: "100%",
	},
	question: {
		padding: 15,
		width: "90%",
	},
	questionText: {
		backgroundColor: "rgba(30, 41, 59, 0.6)",
		paddingVertical: 5,
		paddingLeft: 5,
	},
	bottomContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	option: {
		marginTop: 15,
		width: 300,
		padding: 10,
		borderRadius: 10,
		backgroundColor: "rgba(241, 245, 249, 0.4)",
		overflow: "hidden",
	},
	widthAnimation: {
		width: 300,
		height: 150,
		flexDirection: "row",
		justifyContent: "flex-end",
		position: "absolute",
	},
	answerView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	answerText: {
		color: "white",
		fontSize: 13,
		textShadowColor: "black",
		textShadowRadius: 15,
	},
	playlist: {
		backgroundColor: "#292524",
		flexDirection: "row",
		padding: 10,
		paddingBottom: "17%",
		justifyContent: "space-between",
	},
	playlistView: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	playlistText: {
		fontSize: 13,
		color: "white",
		fontWeight: "400",
	},
});
