import { useState } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import Input from "./components/input";
import ListItem from "./components/ListItem";
import { Fruits } from "./constants/data";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <View style={styles.container}>
      <Input
        icon="md-search"
        placeholder="search"
        onChangeText={(e) => {
          console.log(e);
        }}
      />

      <FlatList
        data={Fruits}
        renderItem={({ item }) => (
          <ListItem price={item.price} name={item.name} id={item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
