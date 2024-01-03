import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  doc,
  addDoc,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
type Props = {
  navigation: any;
};

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

const List: React.FC<Props> = ({ navigation }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, "todos");
    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const loadedTodos: Todo[] = [];
        snapshot.docs.forEach((doc) => {
          loadedTodos.push({
            id: doc.id,
            ...doc.data(),
          } as Todo);
        });
        setTodos(loadedTodos);
      },
    });
    return () => subscriber();
  }, []);

  const addTodo = async () => {
    try {
      const doc = await addDoc(collection(FIRESTORE_DB, "todos"), {
        title: todo,
        done: false,
      });
      console.log("Document written with ID: ", doc.id);
      setTodo("");
    } catch (error) {
      console.error("error adding todo", error);
    }
  };

  const renderTodo = ({ item }: { item: Todo }) => {
    const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

    const toggleDone = async () => {
      updateDoc(ref, { done: !item.done });
    };

    const deleteItem = async () => {
      try {
        await deleteDoc(ref);
      } catch (error) {
        console.error("error deleting todo", error);
      }
    };

    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={toggleDone} style={styles.todo}>
          {item.done && (
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          )}
          {!item.done && <Entypo name="circle" size={32} color="black" />}
          <Text style={styles.todoText}> {item.title}</Text>
        </TouchableOpacity>
        <Ionicons
          name="trash-bin-outline"
          size={24}
          color="red"
          onPress={deleteItem}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Add new Todo"
          onChangeText={(text: string) => setTodo(text)}
          value={todo}
          style={styles.input}
        />
        <Button
          onPress={() => addTodo()}
          title="Add Todo"
          disabled={todo === ""}
        />
      </View>
      {todos.length > 0 && (
        <FlatList
          data={todos}
          renderItem={renderTodo}
          keyExtractor={(todo: Todo) => todo.id}
        />
      )}
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Open Details"
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  todoContainer: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
