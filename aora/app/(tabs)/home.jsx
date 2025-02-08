import { View, Text } from "react-native";
import React from "react";

const home = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-2xl font-bold">Welcome to the Home Screen</Text>
      <Text className="text-base text-center">
        This is a basic home screen layout.
      </Text>
    </View>
  );
};

export default home;
