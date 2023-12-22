import { View, StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View android_ripple={{ color: "#ffffff" }}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
