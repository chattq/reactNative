import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FoodCard from "./FoodCard";

export default function FoodRow({ title, des }) {
  return (
    <View className="px-4 pt-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon size={25} color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500">{des}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 15,
        }}>
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/b4/9e/e5/b49ee558f641ed45040dd206d240978f.jpg"
          nameFood="Xiên Sạch"
          country="Việt Nam"
          address="Đà Lạt"
          rating="4.8"
          des="Xiên bẩn thực chất là tên gọi chung của các món ăn vặt như cá viên, thịt viên, xúc xích, nem chua... được chế biến bằng cách chiên trong dầu sôi."
        />
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/dc/03/e3/dc03e3f402862087310f75c35beedbf3.jpg"
          nameFood="Măng tỏi ớt"
          country="Việt Nam"
          address="Tây Bắc"
          rating="4.1"
          des="Măng trắng, giòn, hơi cay cay vị của ớt và mùi thơm đặc trưng từ tỏi."
        />
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/f5/79/e7/f579e7be54b16556751da48f3ff701b0.jpg"
          nameFood="Kim chi"
          country="Korean"
          address="Hà Nội"
          rating="5"
          des="Kim chi là một món muối chua truyền thống của Hàn Quốc. Được làm từ các loại rau, củ muối và lên men như bắp cải napa, củ cải Hàn Quốc, được ủ chua với nhiều loại gia vị khác nhau như ớt bột, hành lá, tỏi, gừng hay hải sản muối…"
        />
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/77/2d/02/772d02edbcdb8f10cab60df9fbfaa476.jpg"
          nameFood="Cơm Tấm"
          country="Việt Nam"
          address="TP Hồ Chí Minh"
          rating="4.8"
          des="Cơm tấm là món ăn đặc sản của miền Nam Việt Nam, nó là một trong những món ăn sáng được ưa chuộng nhất của người Sài Thành."
        />
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/f8/a3/de/f8a3debd0d5ab52411431607a0439101.jpg"
          nameFood="Bánh Gối"
          country="Việt Nam"
          address="Hà Nội"
          rating="4.5"
          des="Bánh gối hay còn gọi là bánh xếp hoặc bánh quai vạc chiên. Đây là món bánh rất quen thuộc với người dân Việt Nam và xuất xứ từ bánh há cảo chiên của người Hoa. Đặc trưng của bánh là vỏ bánh khi chiên lên giòn tan, thơm lừng."
        />
        <FoodCard
          imgUrl="https://i.pinimg.com/564x/dd/96/db/dd96dbed2cd28831fab24b9eac231ef7.jpg"
          nameFood="Sầu Riêng"
          country="Việt Nam"
          address="Lâm Đồng"
          rating="4.8"
          des="Sầu riêng là một loại trái cây có nguồn gốc nhiệt đới, vỏ ngoài cứng và nhọn, kích thước quả lớn. Sầu riêng có mùi rất nặng và nồng, tuy nhiên khi ăn lại rất ngọt và ngon, đặc biệt có rất nhiều chất dinh dưỡng."
        />
      </ScrollView>
    </View>
  );
}
