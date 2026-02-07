import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./WelcomeScreen.styles";

import { useRouter } from "expo-router";
import { useAuth } from "../../shared/hooks/useAuth";

export default function WelcomeScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    await login();
    router.replace("/(protected)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleLogin}>
        <Text style={styles.addButtonText}>Login to Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
