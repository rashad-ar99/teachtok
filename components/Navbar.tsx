import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Navbar: React.FC = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<Fontisto name="home" size={30} color="white" />
				<Text style={styles.text}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<MaterialCommunityIcons name="compass" size={30} color="gray" />
				<Text style={styles.text}>Discover</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<MaterialCommunityIcons name="timer" size={30} color="gray" />
				<Text style={styles.text}>Activity</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<MaterialIcons name="bookmark" size={30} color="gray" />
				<Text style={styles.text}>Bookmarks</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.button}>
				<FontAwesome name="user-circle" size={30} color="gray" />
				<Text style={styles.text}>Profile</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Navbar;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "black",
		justifyContent: "space-evenly",
		paddingTop: 5,
		height: 50,
	},
	button: {
		alignItems: "center",
	},
	text: {
		fontSize: 10,
		fontWeight: "200",
		color: "white",
		marginTop: 3,
	},
});
