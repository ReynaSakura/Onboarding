import { Redirect } from "expo-router";
import { useAuth } from "../features/shared/hooks/useAuth";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isAuthenticated) {
    return <Redirect href="/(protected)" />;
  }

  // If not authenticated, go to public
  return <Redirect href="/(public)" />;
}
