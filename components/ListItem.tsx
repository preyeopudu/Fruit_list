import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fruit } from "../constants/data";

const ListItem: FC<Fruit> = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {props.name}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#aaa",
    borderBottomWidth: 0.75,
    marginVertical: 5,
  },
});

export default ListItem;
