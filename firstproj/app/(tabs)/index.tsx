import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex items-center justify-center w-full h-screen">
          <Text className="text-green-600">Home Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
