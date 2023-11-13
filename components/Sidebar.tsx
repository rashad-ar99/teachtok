import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Sidebar = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.7} style={{ position: "relative" }}>
				<Image style={styles.img} source={{ uri: "https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png" }} width={50} height={50} />
				<AntDesign name="pluscircle" size={20} color="green" style={styles.avatarPlusIcon} />
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.icon}>
				<Ionicons name="ios-heart" size={38} color="white" />
				<Text style={styles.iconText}>87</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.icon}>
				<Ionicons name="md-chatbubble-ellipses-sharp" size={38} color="white" />
				<Text style={styles.iconText}>2</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.icon}>
				<MaterialIcons name="bookmark" size={38} color="white" />
				<Text style={styles.iconText}>203</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} style={styles.icon}>
				<MaterialCommunityIcons name="share" size={38} color="white" />
				<Text style={styles.iconText}>87</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Sidebar;

const styles = StyleSheet.create({
	container: {
		paddingBottom: 15,
		gap: 5,
		width: "15%",
		alignItems: "center",
		rowGap: 10,
	},
	avatarPlusIcon: {
		position: "absolute",
		bottom: -10,
		left: 15,
		backgroundColor: "white",
		borderRadius: 10,
	},
	img: {
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 25,
	},
	icon: {
		alignItems: "center",
	},
	iconText: {
		fontSize: 12,
		color: "white",
	},
});
