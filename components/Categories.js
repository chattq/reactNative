import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 15,
      }}>
      <CategoriesCard
        title="Việt Nam"
        imgUrl="https://i.pinimg.com/736x/17/b6/3e/17b63e83c22ed3804d269feb09b8e78e.jpg"
      />
      <CategoriesCard
        title="Asian"
        imgUrl="https://i.pinimg.com/236x/8f/75/09/8f75092297597296723936dbda19058e.jpg"
      />
      <CategoriesCard
        title="China"
        imgUrl="https://i.pinimg.com/236x/63/de/d3/63ded3c0439191a40702ab1161eb1deb.jpg"
      />
      <CategoriesCard
        title="Kore"
        imgUrl="https://i.pinimg.com/236x/5d/20/29/5d2029fd2ded1fc8ce742d0ff7ac31cc.jpg"
      />
      <CategoriesCard
        title="Asian"
        imgUrl="https://i.pinimg.com/236x/a0/87/3e/a0873e107bfd47f38909832be3e96465.jpg"
      />
    </ScrollView>
  );
}
