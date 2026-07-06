import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = { id: string; text: string };

export default function TabTwoScreen() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newItem: Todo = { id: Date.now().toString(), text: trimmed };
    setListItems((prev) => [newItem, ...prev]);
    setInputValue("");
    Keyboard.dismiss();
  };

  const handleRemove = (id: string) => {
    setListItems((prev) => prev.filter((i) => i.id !== id));
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => handleRemove(item.id)}
    >
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemAction}>Remove</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Text style={styles.title}>Todo List</Text>

          <View style={styles.inputRow}>
            <TextInput
              placeholder="Add a new todo"
              placeholderTextColor="#9CA3AF"
              value={inputValue}
              onChangeText={setInputValue}
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={handleAddTodo}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={listItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            ListEmptyComponent={<Text style={styles.empty}>No todos yet</Text>}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0f1724" },
  container: { flex: 1, padding: 20 },
  title: {
    color: "#F8FAFC",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#081028",
    color: "#E6EEF8",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: "#0ea5e9",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  addButtonText: { color: "#02202f", fontWeight: "700" },
  list: { paddingTop: 16, paddingBottom: 40 },
  item: {
    backgroundColor: "#071128",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  itemText: { color: "#E6EEF8", fontSize: 16, flex: 1, marginRight: 8 },
  itemAction: { color: "#60A5FA", fontWeight: "600" },
  empty: { color: "#9CA3AF", textAlign: "center", marginTop: 30 },
});
