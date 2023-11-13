import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Header: React.FC = () => {
	const [seconds, setSeconds] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [seconds]);

	return (
		<View style={styles.header}>
			<View style={styles.timer}>
				<MaterialCommunityIcons name="timer" size={24} color="#f1f5f9" />
				<Text style={styles.timerText}>{seconds < 60 ? <Text>{seconds}s</Text> : <Text>{Math.floor(seconds / 60)}m</Text>}</Text>
			</View>
			<View style={{ alignItems: "center", gap: 5 }}>
				<Text style={styles.forYou}>For You</Text>
				<View style={styles.forYouUnderline} />
			</View>
			<Text>
				<Entypo name="magnifying-glass" size={24} color="#f5f5f4" />
			</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "auto",
		alignItems: "center",
		padding: 15,
	},
	timer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
	timerText: {
		color: "#f1f5f9",
		fontSize: 15,
		fontWeight: "200",
	},
	forYou: {
		color: "#f5f5f4",
		fontSize: 18,
		fontWeight: "600",
	},
	forYouUnderline: {
		borderBottomColor: "#f5f5f4",
		borderBottomWidth: 3,
		width: 30,
	},
});
