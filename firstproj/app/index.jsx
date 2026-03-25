import { Image, ScrollView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import logo from "../assets/images/dinetimelogo.png";
import frame from "../assets/images/Frame.png";

const { width } = Dimensions.get("window");

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-between">

          {/* Top Section: Logo */}
          <View className="items-center pt-16">
            <View className="relative">
              <View className="absolute inset-0 bg-orange-500/15 blur-3xl rounded-full" />
              <Image
                source={logo}
                className="w-60 h-60"
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Middle Section: Actions */}
          <View className="px-8 w-full mt-8">
            <View className="gap-y-4">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.push("/signup")}
                className="bg-orange-400 h-16 rounded-2xl flex-row items-center justify-center shadow-xl"
                style={{
                  shadowColor: "#fb923c",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  elevation: 10,
                }}
              >
                <Text className="text-black font-bold text-lg">Get Started</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/home")}
                className="h-16 rounded-2xl border border-gray-800 bg-[#111111] items-center justify-center"
              >
                <Text className="text-white font-semibold text-lg">
                  Continue as Guest
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center my-8">
              <View className="flex-1 h-[1px] bg-gray-900" />
              <Text className="mx-4 text-gray-600 font-bold text-xs tracking-widest">OR</Text>
              <View className="flex-1 h-[1px] bg-gray-900" />
            </View>

            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="items-center"
            >
              <Text className="text-gray-400 text-base">
                Already have an account?{" "}
                <Text className="text-orange-400 font-bold">Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Image Section: Anchored at the Bottom */}
          <View className="flex-1 items-center justify-end">
            <Image
              source={frame}
              style={{ width: width, height: 260 }}
              className="mt-12"
              resizeMode="contain"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}