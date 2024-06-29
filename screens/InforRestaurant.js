import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

export default function InforRestaurant() {
  const {
    params: { imgUrl, nameFood, country, address, rating, des },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <View className="h-56 w-full">
            <Image source={{ uri: imgUrl }} className="w-full h-full" />
            <TouchableOpacity
              activeOpacity={0.5}
              className="bg-white p-2 rounded-full left-5 top-10 absolute"
              onPress={navigation.goBack}>
              <ArrowLeftIcon size={25} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white px-5 pt-4">
          <Text className="font-bold text-2xl">{nameFood}</Text>
          <View className="flex-row items-center mt-1">
            <StarIcon size={23} color="green" opacity={0.5} />
            <Text className="mr-2 opacity-[0.5] ml-1">
              <Text className="text-lime-800">
                {rating} •{"  "}
              </Text>
              {country}
            </Text>
          </View>
          <View className="flex-row items-center mt-2">
            <MapPinIcon size={23} color="black" opacity={0.3} />
            <Text className="opacity-[0.5] ml-1">Nearby • {address}</Text>
          </View>
          <Text
            numberOfLines={3}
            className="line-clamp-2 pb-5 pt-3 opacity-[0.5]">
            {des}
          </Text>
          <View className="flex-row items-center justify-between py-4 border-t border-opacity-[0.1]">
            <View className="flex-row items-center">
              <QuestionMarkCircleIcon size={25} color="black" opacity={0.5} />
              <Text className="font-bold text-sm ml-6">
                Have a food allergy?
              </Text>
            </View>
            <ChevronRightIcon size={25} color="#00CCBB" />
          </View>
        </View>
        <View className="pb-36">
          <Text className="px-5 pt-8 font-bold pb-4 text-xl">Menu</Text>
          <DishRow
            nameFood="Gà Quay"
            des="Gà quay là thịt gà được chế biến làm thức ăn bằng phương pháp quay dù là trong nhà bếp gia đình, trên bếp lửa, hoặc bằng một lò quay. "
            money="12.000đ"
            imgUrl="https://i.pinimg.com/564x/8c/16/57/8c165710b8fe5af57d4905f67dd55f12.jpg"
          />
          <DishRow
            nameFood="Gà Quay"
            des="Gà quay là thịt gà được chế biến làm thức ăn bằng phương pháp quay dù là trong nhà bếp gia đình, trên bếp lửa, hoặc bằng một lò quay. "
            money="12.000đ"
            imgUrl="https://i.pinimg.com/564x/8c/16/57/8c165710b8fe5af57d4905f67dd55f12.jpg"
          />
        </View>
      </ScrollView>
    </>
  );
}
