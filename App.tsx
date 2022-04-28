import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Input from "./components/input";
import ListItem from "./components/ListItem";
import { Fruit, Fruits } from "./constants/data";

export default function App() {
  const [fruits, setFruits] = useState<Fruit[]>();
  const [inputShown, setInputShown] = useState<boolean>(false);

  useEffect(() => {
    setFruits(Fruits);
    Fruits.sort((a: Fruit, b: Fruit) => {
      return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    });
  }, []);

  const handleSearch = (text: string) => {
    const fruits = Fruits.filter((fruit) => fruit.name.includes(text));
    setFruits(fruits);
  };

  const handleSubmit = () => {
    setInputShown(false);
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
        style={{ marginTop: 20 }}
        data={fruits}
        renderItem={({ item }) => (
          <ListItem price={item.price} name={item.name} id={item.id} />
        )}
      />

      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setInputShown(true);
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: "rgba(81,135,200,1)",
            alignSelf: "center",
            display: inputShown ? "none" : "flex",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              paddingVertical: 7,
              paddingHorizontal: 20,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
        <View style={{ display: inputShown ? "flex" : "none" }}>
          <Input
            icon="add-circle-outline"
            placeholder="Fruit Name"
            onChangeText={(e) => {
              handleSearch(e);
            }}
          />
          <Input
            icon="add-circle-outline"
            placeholder="Fruit Price"
            onChangeText={(e) => {
              handleSearch(e);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setInputShown(!inputShown);
            }}
            activeOpacity={0.8}
            style={{
              backgroundColor: "rgba(81,135,200,1)",
              alignSelf: "center",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingVertical: 7,
                paddingHorizontal: 20,
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight * 2,
  },
});
