import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>login</Link>
      <Link href={"/(modals)/booking"}>booking</Link>
      <Link href={"/listing/1337"}>listing details</Link>
    </View>
  );
};

export default Page;
