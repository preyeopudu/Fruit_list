import { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import Input from "./components/input";
import ListItem from "./components/ListItem";
import { Fruit, Fruits } from "./constants/data";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fruits, setFruits] = useState<Fruit[]>();

  useEffect(() => {
    setFruits(Fruits);
  }, []);

  Fruits.sort((a: Fruit, b: Fruit) => {
    return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
  });

  const handleSearch = (text: string) => {
    const fruits = Fruits.filter((fruit) => fruit.name.includes(text));
    setFruits(fruits);
  };
  return (
    <View style={styles.container}>
      <Input
        icon="md-search"
        placeholder="search"
        onChangeText={(e) => {
          handleSearch(e);
        }}
      />

      <FlatList
        data={fruits}
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
