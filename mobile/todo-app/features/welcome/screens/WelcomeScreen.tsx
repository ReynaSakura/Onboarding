import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./WelcomeScreen.styles";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Link href="/calendar" asChild>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Go to ToDo Page</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
