import { useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import FilterButtons from "../components/FilterButtons";
import TodoCard from "../components/TodoCard";
import AddTodoModal from "../components/AddTodoModal";
import { useTodos } from "../queries/useTodos";
import { FilterStatus, Todo } from "../models/todo";
import { styles } from "./TodoScreen.styles";

export default function TodoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const { todos, isLoading, isError, error, addTodo, updateTodo, deleteTodo } = useTodos();

  const handleAddTodo = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => { 
    addTodo({
      title,
      description,
      completed: false,
    });
    setModalVisible(false);
  };

  const filteredTodos = todos.filter((todo: Todo) => {
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
        keyExtractor={
          (item) => item.id.toString()
        }
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
      <AddTodoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddTodo}
      />
    </View>
  );
}
