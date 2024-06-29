import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoriesCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="relative mr-3 " activeOpacity={0.6}>
      <View className="h-[105px] w-[105px] rounded-[6px] overflow-hidden">
        <Image
          source={{ uri: imgUrl }}
          className="w-full h-full object-cover"
        />
      </View>
      <Text className="text-white absolute bottom-0 px-2 pb-[1px] text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
