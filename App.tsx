import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import Home from "./screens/Home";

const App: React.FC = () => {
	return (
		<>
			<StatusBar translucent={true} />
			<SafeAreaView style={styles.SafeArea}>
				<Home />
			</SafeAreaView>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	SafeArea: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
