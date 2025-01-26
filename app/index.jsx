import { View, Text, StyleSheet, ImageBackground,Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>To-Let Globe</Text>

        <Link href="/menu" style={{marginHorizontal:'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Our menu</Text>
        </Pressable>
       </Link>
        <Link href="/contact" style={{marginHorizontal:'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact us</Text>
        </Pressable>
       </Link>

      </ImageBackground>
    </View>
  );
};
  
export default app;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom:120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine:"underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding:9,
  },
  button:{
   height:60,
   width:150,
   borderRadius:20,
   backgroundColor:'rgba(164, 32, 32, 0.75)',
   padding:10,
   justifyContent:'center',
   marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding:4,
  },
});
