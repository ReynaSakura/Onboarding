import { Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../models/todo";
import { styles } from "./TodoCard.styles";

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

