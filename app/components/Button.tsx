import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    btnLabel: String;
    theme?: 'primary';
    onPress: ()=>void;
}

const Button = ({btnLabel, theme, onPress}: Props) => {
  if(theme === 'primary'){
    return(
      <View style={[Styles.buttonContainer,{borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
        <Pressable style={[Styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={Styles.buttonIcon} />
          <Text style={[Styles.buttonLabel, { color: '#25292e' }]}>{btnLabel}</Text>
        </Pressable>
      </View>
    )
  }
    return (
        <View style={Styles.buttonContainer}>
          <Pressable style ={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonLabel}>{btnLabel}</Text>
        </Pressable>
        </View>
    )
}
const Styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
})

export default Button;