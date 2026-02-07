import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./AddTodoModal.styles";

type FormData = { 
  title: string; 
  description: string 
};

type AddTodoModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
};

export default function AddTodoModal({ visible, onClose, onSubmit }: AddTodoModalProps) {
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



