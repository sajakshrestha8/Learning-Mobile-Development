import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
    return(
        <View>
            <Text>Ma about page ho hai sathi haru</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: '#fff',
      },
})

export default AboutScreen;