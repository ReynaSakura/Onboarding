import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 4,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  activeButton: {
    backgroundColor: "#3498db",
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "gray",
  },
});
