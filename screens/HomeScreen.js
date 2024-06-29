import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FoodRow from "../components/FoodRow";

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-2 pb-10">
      <View className="px-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="h-9 w-9 rounded-full overflow-hidden">
              <Image
                source={{
                  uri: "https://i.pinimg.com/564x/e8/3c/cf/e83ccf1458f50be6a571157cd8bd7783.jpg",
                }}
                className="w-full h-full object-cover"
              />
            </View>
            <View className="ml-3">
              <Text className="text-gray-400 font-bold text-xs">
                Deliver now!
              </Text>
              <View className="flex-row items-center">
                <Text className="text-xl font-bold">Current Location</Text>
                <View className="mt-1 ml-2">
                  <ChevronDownIcon size={20} color="#00CCBB" />
                </View>
              </View>
            </View>
          </View>
          <View>
            <UserIcon size={28} color="#00CCBB" />
          </View>
        </View>
        {/* search */}
        <View className="flex-row justify-between items-center mt-4 pb-3">
          <View className="bg-gray-200 h-11 flex-row items-center flex-1 px-3 mr-2 rounded">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              className="w-[96%] px-2"
              placeholder="Restaurants and cuisines"
            />
          </View>
          <AdjustmentsVerticalIcon size={26} color="#00CCBB" />
        </View>
      </View>
      {/* border */}
      <ScrollView
        className="bg-[#f2f2f2]"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}>
        <Categories />
        <FoodRow
          title="Offers near you"
          des="Why not support your local restaurant tonight!"
        />
        <FoodRow title="Featured" des="Paid placements from our partners" />
        <FoodRow title="Featured" des="Paid placements from our partners" />
      </ScrollView>
    </SafeAreaView>
  );
}
