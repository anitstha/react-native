import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  MapPinIcon,
  CreditCardIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  ArrowRightOnRectangleIcon,
} from "react-native-heroicons/outline";

export default function Profile() {
  const [notifications, setNotifications] = useState(true);

  const menuItems = [
    {
      id: 1,
      icon: UserIcon,
      title: "Personal Info",
      sub: "Name, Email, Phone",
    },
    { id: 2, icon: MapPinIcon, title: "Addresses", sub: "Home, Office, Other" },
    {
      id: 3,
      icon: CreditCardIcon,
      title: "Payment Methods",
      sub: "Visa **4421, Apple Pay",
    },
    {
      id: 4,
      icon: BellIcon,
      title: "Notifications",
      sub: "Promos, Order Updates",
      toggle: true,
    },
    {
      id: 5,
      icon: QuestionMarkCircleIcon,
      title: "Help Center",
      sub: "FAQs, Live Chat",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="items-center py-10">
          <View className="items-center justify-center w-24 h-24 bg-orange-100 border-4 rounded-full shadow-sm border-orange-50">
            <Text className="text-3xl font-black text-orange-500">AN</Text>
          </View>
          <Text className="mt-4 text-2xl font-black text-gray-900">Anit</Text>
          <Text className="font-medium text-gray-500">anit@dinetime.app</Text>

          <TouchableOpacity className="mt-4 bg-gray-100 px-8 py-2.5 rounded-full">
            <Text className="font-bold text-gray-700">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Section */}
        <View className="px-5 mt-2">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              className="flex-row items-center justify-between py-4 border-b border-gray-50"
            >
              {/* Corrected: Replaced <div> with <View> */}
              <View className="flex-row items-center space-x-4">
                <View className="items-center justify-center w-11 h-11 bg-gray-50 rounded-2xl">
                  <item.icon size={22} color="#4b5563" />
                </View>
                <View className="ml-3">
                  <Text className="text-base font-bold text-gray-800">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-400">{item.sub}</Text>
                </View>
              </View>

              {item.toggle ? (
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: "#eee", true: "#fb923c" }}
                  thumbColor="#fff"
                />
              ) : (
                <ChevronRightIcon size={20} color="#d1d5db" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Modern Logout Button */}
        <View className="px-5 mt-10 mb-10">
          <TouchableOpacity className="flex-row items-center justify-center py-4 border border-red-100 bg-red-50 rounded-3xl">
            <ArrowRightOnRectangleIcon size={22} color="#ef4444" />
            <Text className="ml-2 font-black text-red-500">Log Out</Text>
          </TouchableOpacity>
          <Text className="text-center text-gray-300 text-[10px] mt-6 tracking-widest uppercase">
            DineTime v1.0.4 • Build 2026
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
