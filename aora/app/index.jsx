import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-black font-pblack">Hello World</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-500">
        Go to home
      </Link>
    </View>
  );
}
