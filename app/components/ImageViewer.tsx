import { Image, type ImageSource } from "expo-image";
import { StyleSheet} from "react-native";

type Props = {
    imgSource: ImageSource;
    selectedImage?: String;
};

const ImageViewer = ({imgSource, selectedImage}: Props) => {
    const imageSource = selectedImage ? selectedImage : imgSource;
    return(
        <Image source={imageSource} style={styles.image} />
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