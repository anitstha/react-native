import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex items-center justify-center w-full h-screen">
          <Text className="text-4xl font-bold text-orange-400">Profile Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}