import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";

import List from "./app/screens/List";
import Details from "./app/screens/Details";
import Login from "./app/screens/Login";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My Todos" component={List} />
      <InsideStack.Screen name="Details" component={Details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: true }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
//   <Stack.Navigator initialRouteName="Login">
//     <Stack.Screen name="My Todos" component={List}></Stack.Screen>
//     <Stack.Screen name="Login" component={Login}></Stack.Screen>
//   </Stack.Navigator>
// </NavigationContainer>;
