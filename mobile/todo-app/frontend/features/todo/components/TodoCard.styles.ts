import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
