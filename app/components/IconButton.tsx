import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: String;
    onPress: ()=>void;
}

const IconButton = ({ icon, label, onPress } : Props) => {
    return(
        <Pressable>
            <MaterialIcons name={icon} size={24} onPress={onPress} />
            <Text>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
      },
});

export default IconButton;