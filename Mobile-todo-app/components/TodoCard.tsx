import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";

type TodoCardProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (todo: Todo) => void;
};

export default function TodoCard({ todo, onDelete, onToggleComplete }: TodoCardProps) {
  return (
    <View style={[styles.card, todo.completed && styles.completedCard]}>
      <View>
        <Text style={[styles.title, todo.completed && styles.completedText]}>
          {todo.title}
        </Text>
        <Text style={todo.completed && styles.completedText}>
          {todo.description}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.cardButton,
            todo.completed ? styles.activeBtn : styles.doneBtn,
          ]}
          onPress={() => onToggleComplete(todo)}
        >
          <Text style={styles.cardButtonText}>
            {todo.completed ? "Undo" : "Done"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cardButton, styles.deleteBtn]}
          onPress={() => onDelete(todo.id)}
        >
          <Text style={styles.cardButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  completedCard: {
    backgroundColor: "#f9f9f9",
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  cardButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 60,
    alignItems: "center",
  },
  cardButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  doneBtn: {
    backgroundColor: "#2ecc71",
  },
  activeBtn: {
    backgroundColor: "#95a5a6",
  },
  deleteBtn: {
    backgroundColor: "#e74c3c",
  },
});
