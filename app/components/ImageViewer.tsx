import { Image, type ImageSource } from "expo-image";
import { StyleSheet} from "react-native";

type Props = {
    imgSource: ImageSource;
};

const ImageViewer = ({imgSource}: Props) => {
    return(
        <Image source={imgSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },

})

export default ImageViewer;