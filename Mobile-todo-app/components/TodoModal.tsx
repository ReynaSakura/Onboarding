import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type FormData = { 
  title: string; 
  description: string 
};

type TodoModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
};

export default function TodoModal({ visible, onClose, onSubmit }: TodoModalProps) {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { 
      title: "", 
      description: "" 
    },
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <Modal 
      visible={visible} 
      onRequestClose={onClose} 
      transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Create a New To-Do</Text>
          <Controller
            control={control}
            name="title"
            render={({ field: { 
              onChange, onBlur, value 
            } }) => (
              <TextInput
                style={styles.input}
                placeholder="Todo Title"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { 
              onChange, onBlur, value 
            } }) => (
              <TextInput
                style={styles.input}
                placeholder="Todo Description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.submitButton]}
              onPress={handleSubmit(handleFormSubmit)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => {
                reset();
                onClose();
              }}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "85%",
    maxWidth: 400,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "#fafafa",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  modalButton: {
    flex: 0.45,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#3498db",
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
