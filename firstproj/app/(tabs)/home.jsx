import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  ChevronDownIcon,
  StarIcon,
  ClockIcon
} from "react-native-heroicons/solid";

const { width } = Dimensions.get("window");

export default function Home() {
  const categories = [
    { name: "Offers", icon: "🎁" },
    { name: "Burger", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Sushi", icon: "🍣" },
    { name: "Asian", icon: "🥢" },
    { name: "Dessert", icon: "🍰" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 1. Header with Location Selector */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <View>
          <View className="flex-row items-center">
            <Text className="text-xs font-bold tracking-widest text-orange-500 uppercase">Deliver Now</Text>
            <ChevronDownIcon size={14} color="#f97316" className="ml-1" />
          </View>
          <Text className="text-lg font-extrabold text-gray-900">Home • New York City</Text>
        </View>
        <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
          <View className="items-center justify-center w-6 h-6 bg-orange-400 rounded-full">
            <Text className="text-white text-[10px] font-bold">A</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
        
        {/* 2. Search Bar (Sticky-ready) */}
        <View className="px-4 py-3 bg-white">
          <View className="flex-row items-center px-4 py-3 bg-gray-100 rounded-2xl">
            <MagnifyingGlassIcon size={20} color="#9ca3af" />
            <TextInput 
              placeholder="Restaurants, groceries, drinks" 
              className="flex-1 ml-3 text-base font-medium"
            />
            <View className="h-5 w-[1px] bg-gray-300 mx-2" />
            <AdjustmentsHorizontalIcon size={22} color="#f97316" />
          </View>
        </View>

        {/* 3. Promo Banner Carousel (Static Mockup) */}
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          <View style={{ width: width - 32 }} className="flex-row h-40 p-6 mx-4 overflow-hidden bg-orange-500 rounded-3xl">
            <View className="justify-center flex-1">
              <Text className="text-2xl font-black text-white">50% OFF</Text>
              <Text className="font-semibold text-white">On your first 3 orders</Text>
              <TouchableOpacity className="self-start px-4 py-2 mt-4 bg-white rounded-full">
                <Text className="font-bold text-orange-500">Order Now</Text>
              </TouchableOpacity>
            </View>
            <View className="self-center w-24 h-24 rounded-full bg-orange-400/50" /> 
          </View>
        </ScrollView>

        {/* 4. Horizontal Categories */}
        <View className="mt-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {categories.map((item, index) => (
              <TouchableOpacity key={index} className="items-center mr-6">
                <View className="items-center justify-center w-16 h-16 mb-2 bg-gray-100 border rounded-2xl border-gray-50">
                  <Text className="text-3xl">{item.icon}</Text>
                </View>
                <Text className="text-xs font-bold text-gray-600">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 5. "Featured Brands" Horizontal List */}
        <View className="mt-8">
          <View className="flex-row items-end justify-between px-4 mb-4">
            <Text className="text-xl font-black text-gray-900">Featured Brands</Text>
            <Text className="font-bold text-orange-500">See all</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {[1, 2, 3].map((_, i) => (
              <TouchableOpacity key={i} className="w-64 mr-4">
                <View className="mb-3 overflow-hidden bg-gray-200 h-36 rounded-3xl">
                  {/* Image goes here */}
                </View>
                <Text className="text-lg font-bold text-gray-800">Pasta Bella Italia</Text>
                <View className="flex-row items-center space-x-2">
                  <View className="flex-row items-center bg-green-100 px-2 py-0.5 rounded">
                    <StarIcon size={12} color="#16a34a" />
                    <Text className="ml-1 text-xs font-bold text-green-700">4.5</Text>
                  </View>
                  <View className="flex-row items-center">
                    <ClockIcon size={14} color="#9ca3af" />
                    <Text className="ml-1 text-xs text-gray-500">25-35 min</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 6. Main Feed (Vertical List) */}
        <View className="px-4 pb-10 mt-8">
          <Text className="mb-4 text-xl font-black text-gray-900">All Restaurants</Text>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} className="mb-8">
              <View className="h-52 bg-gray-100 rounded-[30px] overflow-hidden relative">
                <View className="absolute z-10 px-3 py-1 rounded-full top-4 right-4 bg-white/90">
                   <Text className="text-xs font-bold">Free Delivery</Text>
                </View>
              </View>
              <View className="flex-row items-start justify-between mt-3">
                <View>
                  <Text className="text-lg font-extrabold text-gray-900">Green Garden Salads</Text>
                  <Text className="font-medium text-gray-500">Healthy • Bowls • Vegan</Text>
                </View>
                <View className="items-center justify-center p-2 bg-gray-100 rounded-xl">
                   <Text className="font-bold text-gray-800">4.9</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}