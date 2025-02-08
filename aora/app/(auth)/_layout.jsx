import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <StatusBar style="light" backgroundColor="#161622" />
    </Stack>
  );
};

export default AuthLayout;
