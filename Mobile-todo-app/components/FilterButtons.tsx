import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FilterStatus } from "../types";

type FilterButtonsProps = {
  filter: FilterStatus;
  setFilter: (filter: FilterStatus) => void;
};

export default function FilterButtons({
  filter,
  setFilter,
}: FilterButtonsProps) {
  const getButtonStyle = (status: FilterStatus) => [
    styles.button,
    filter === status ? styles.activeButton : styles.inactiveButton,
  ];

  const getTextStyle = (status: FilterStatus) => [
    styles.buttonText,
    filter === status ? styles.activeText : styles.inactiveText,
  ];

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={getButtonStyle("all")}
        onPress={() => setFilter("all")}
      >
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle("active")}
        onPress={() => setFilter("active")}
      >
        <Text style={getTextStyle("active")}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle("completed")}
        onPress={() => setFilter("completed")}
      >
        <Text style={getTextStyle("completed")}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
