import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FilterButtons from "../components/FilterButtons";
import TodoCard from "../components/TodoCard";
import TodoModal from "../components/TodoModal";
import { useTodos } from "../shared/useTodos";
import { FilterStatus } from "../types";

export default function CalendarScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const { todos, isLoading, isError, error, addTodo, updateTodo, deleteTodo } =
    useTodos();

  const handleAddTodo = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    if (!title.trim()) {
      alert("Error: Title cannot be empty!");
      return;
    }
    addTodo({
      title,
      description,
      completed: false,
    });
    setModalVisible(false);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text>Error: {(error as Error).message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTodos}
        renderItem={({ item }) => (
          <TodoCard
            todo={item}
            onDelete={deleteTodo}
            onToggleComplete={updateTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>My To-Dos</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.addButtonText}>+ Add Todo</Text>
              </TouchableOpacity>
            </View>
            <FilterButtons filter={filter} setFilter={setFilter} />
          </View>
        }
      />
      <TodoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: "#f5f5f5" },
  header: {
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
