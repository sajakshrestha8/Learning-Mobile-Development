import { ImageSource } from "expo-image";
import { useState } from "react";
import { FlatList, Platform, Pressable } from "react-native";

type Props = {
    onSelect: (image: ImageSource)=>void;
    
}

const EmojiList = ({onSelect}: Props) =>{
    const [emoji] = useState<ImageSource[]>([
        require("../../assets/images/emoji1.jpeg"),
        require("../../assets/images/emoji2.webp"),
    ])

    return(
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS='web'}
            data={emoji}
            renderItem={({item, index}) =>{
              <Pressable onPress={()=>{
                onSelect(item)
              }}>

              </Pressable> 
            }}
        />
    )
}
export default EmojiList;