import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function BasketIcon() {
  const navigation = useNavigation();
  const count = useSelector((state) => state.basket.count);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        activeOpacity={0.6}
        className="mx-5 rounded-lg bg-[#00CCBB] flex-row p-4 items-center space-x-1">
        <Text className="py-1 px-3 bg-[#01A296] font-extrabold text-white text-lg">
          {count}
        </Text>
        <Text className="text-white flex-1 font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white text-lg font-extrabold text-center">
          12000
        </Text>
      </TouchableOpacity>
    </View>
  );
}
