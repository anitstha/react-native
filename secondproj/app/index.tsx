import "../global.css";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-green-600 h-screen w-full">
      <Text className="text-white">Page</Text>
    </SafeAreaView>
  );
}
