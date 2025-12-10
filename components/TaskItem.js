import React from "react";
import { Text, View ,StyleSheet} from "react-native";

const TaskItem = ({taskItem}) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{taskItem.task}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,

    backgroundColor: "#5e0acc",
  },
  taskText: {
    color: "#fff",
  },
});