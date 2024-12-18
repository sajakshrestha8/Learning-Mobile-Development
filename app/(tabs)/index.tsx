import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "../components/IconButton";
import CircleIcon from "../components/CircleIcon";
import EmojiPicker from "../components/EmojiPicker";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOption, setShowAppOption] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOption(true);
      console.log(result);
    }else{
      alert(`you didn't select any image`);
    }
  }

  const onReset = () =>{
    setShowAppOption(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onSave = () =>{
    console.log("Saving the image");
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource = {PlaceholderImage}  selectedImage={selectedImage} />
      </View>
      {showAppOption ? (
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleIcon onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSave} />
        </View>
      </View>
      ):(
      <View style={styles.footerContainer}>
        <Button theme="primary" btnLabel="Choose a photo" onPress={pickImageAsync} />
        <Button onPress={()=>{setShowAppOption(true)}} btnLabel="Use this photo"  />
      </View>
    )}
    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} ></EmojiPicker>
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})