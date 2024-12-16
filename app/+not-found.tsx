import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const NotFound = () => {
    return(
        <>
            <Stack.Screen options={{title: "Oops! your page is not found"}} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go to home
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  });

export default NotFound;