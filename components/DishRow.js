import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  countItem,
} from "../features/BasketSlice";

export default function DishRow({ nameFood, des, money, imgUrl }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.basket.count);
  const addItemToBasket = () => {
    dispatch(addToBasket({ nameFood, des, money, imgUrl }));
    dispatch(countItem());
  };
  return (
    <>
      <View className="bg-white px-5 pt-4 mb-3 ">
        <TouchableOpacity activeOpacity={0.5}>
          <View className="flex-row justify-between mt-1 ">
            <View className="flex-1 mr-3">
              <Text className="text-lg font-normal">{nameFood}</Text>
              <Text numberOfLines={2} className="opacity-[0.5] text-sm">
                {des}
              </Text>
              <Text className="opacity-[0.5] text-sm mt-1">{money}</Text>
            </View>
            <View className="h-[90px] w-[90px] rounded-md overflow-hidden">
              <Image
                source={{ uri: imgUrl }}
                className="h-full w-full object-cover"
              />
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex-row items-center space-x-2 mt-2 mb-4">
          <TouchableOpacity>
            <MinusCircleIcon size={40} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="text-lg">{count}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={40} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
