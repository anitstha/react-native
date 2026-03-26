import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClockIcon, CheckBadgeIcon, ArrowPathIcon } from "react-native-heroicons/solid";

export default function History() {
  const orders = [
    { id: "DT-9921", name: "The Burger Joint", date: "Today, 12:30 PM", status: "Delivered", price: "$24.50", items: "2x Cheeseburger, 1x Fries" },
    { id: "DT-8812", name: "Pasta Bella Italia", date: "Yesterday", status: "Cancelled", price: "$18.20", items: "1x Penne Arrabbiata" },
    { id: "DT-7701", name: "Sushi Zen", date: "24 Mar 2026", status: "Delivered", price: "$42.00", items: "3x Salmon Nigiri, 1x Miso Soup" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-4 border-b border-gray-100">
        <Text className="text-2xl font-black text-gray-900">Order History</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-4 bg-gray-50">
        {orders.map((order) => (
          <View key={order.id} className="p-4 mb-4 bg-white border border-gray-100 shadow-sm rounded-3xl">
            <View className="flex-row items-start justify-between">
              <View className="flex-row items-center space-x-3">
                <View className="items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl">
                  <ClockIcon size={24} color="#f97316" />
                </View>
                <View>
                  <Text className="text-lg font-bold text-gray-900">{order.name}</Text>
                  <Text className="text-xs font-medium text-gray-500">{order.date}</Text>
                </View>
              </View>
              <Text className="font-black text-gray-900">{order.price}</Text>
            </View>

            <View className="py-3 mt-4 border-t border-b border-gray-50">
              <Text className="text-sm leading-5 text-gray-600">{order.items}</Text>
            </View>

            <View className="flex-row items-center justify-between mt-4">
              <View className="flex-row items-center">
                {order.status === "Delivered" ? (
                  <CheckBadgeIcon size={18} color="#16a34a" />
                ) : (
                  <View className="items-center justify-center w-4 h-4 bg-red-100 rounded-full" />
                )}
                <Text className={`ml-1 font-bold text-xs ${order.status === 'Delivered' ? 'text-green-600' : 'text-red-500'}`}>
                  {order.status}
                </Text>
              </View>

              <TouchableOpacity className="flex-row items-center px-4 py-2 bg-orange-500 rounded-full">
                <ArrowPathIcon size={14} color="white" />
                <Text className="ml-2 text-xs font-bold text-white">Reorder</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}