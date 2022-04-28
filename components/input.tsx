import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name={props.icon} size={22} color="#555" />
      </View>
      <View>
        <TextInput
          style={{ paddingHorizontal: 10 }}
          placeholderTextColor="#555"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 10,
    borderBottomColor: "#aaaa",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 20,
  },
});

export default Input;
