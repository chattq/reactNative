import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function FoodCard({
  imgUrl,
  nameFood,
  country,
  address,
  rating,
  des,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="mr-4"
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate("Restaurant", {
          imgUrl,
          nameFood,
          country,
          address,
          rating,
          des,
        });
      }}>
      <View className="h-36 w-64 rounded-t-md overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          source={{
            uri: imgUrl,
          }}
        />
      </View>
      <View className="bg-white px-3 pt-2 pb-5 rounded-b-md">
        <Text className="font-bold text-base">{nameFood}</Text>
        <View className="flex-row items-center mt-1">
          <StarIcon size={23} color="green" opacity={0.5} />
          <Text className="text-lime-800 opacity-[0.5] ml-1">
            {rating} • {country}
          </Text>
        </View>
        <View className="flex-row items-center mt-1">
          <MapPinIcon size={23} color="black" opacity={0.5} />
          <Text className="opacity-[0.5] ml-1">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
