import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})