import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex items-center justify-center w-full h-screen">
          <Text className="text-red-700">History</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}