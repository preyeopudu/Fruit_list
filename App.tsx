import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Input from "./components/input";
import ListItem from "./components/ListItem";
import { Fruit, Fruits } from "./constants/data";
import { stringify, v4 as uuidv4 } from "uuid";

export default function App() {
  const [fruits, setFruits] = useState<Fruit[] | null>(null);
  const [inputShown, setInputShown] = useState<boolean>(false);
  const [newFruit, setNewFruit] = useState<Fruit | null>(null);

  const idValue = Math.random();

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
    if (newFruit !== null && fruits !== null) {
      setFruits([...fruits, newFruit]);
    }

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
              if (newFruit !== null) {
                setNewFruit({ ...newFruit, name: e });
              } else {
                setNewFruit({ name: e, id: idValue, price: 0 });
              }
            }}
          />
          <Input
            icon="add-circle-outline"
            placeholder="Fruit Price"
            onChangeText={(e) => {
              if (newFruit !== null) {
                setNewFruit({ ...newFruit, price: +e });
              } else {
                setNewFruit({ name: "", id: idValue, price: +e });
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
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
    paddingTop: 40,
  },
});
