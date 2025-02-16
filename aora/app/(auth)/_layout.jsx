import { StatusBar } from "expo-status-bar";
import { Stack, Redirect } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import Loader from "@/components/Loader";

const AuthLayout = () => {
  const { isLogged, loading } = useGlobalContext();

  if (!loading && isLogged) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />

      <Stack.Screen name="sign-up" />
      <StatusBar style="light" backgroundColor="#161622" />
      <Loader isLoading={loading} />
    </Stack>
  );
};

export default AuthLayout;
