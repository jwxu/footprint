import React from 'react';
// import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

// The path of the picked image
// const [pickedImagePath, setPickedImagePath] = useState('');

export default class ProductCam extends React.Component {

  // This function is triggered when the "Select an image" button pressed
  showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your photos!");
    return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
    // setPickedImagePath(result.uri);
    console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  openCamera = async () => {
    const { navigation } = this.props;
    
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
    alert("You've refused to allow this app to access your camera!");
    return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      navigation.navigate('Product Details')
    }
  }

  render() {
    return (
      
        <View style={styles.screen}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              onPress={this.showImagePicker}
              >
              <MaterialCommunityIcons
                  name="folder"
                  style={{ color: "#000", fontSize: 40}}
              />
              <Text color="black" size={18}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              onPress={this.openCamera}
              >
              <FontAwesome
                  name="camera"
                  style={{ color: "#000", fontSize: 40}}
              />
              <Text color="black" size={18}>Open Camera</Text>
            </TouchableOpacity>
          </View>
    
          {/* <View style={styles.imageContainer}>
            {
              <Image
                // source={{ uri: pickedImagePath }}
                style={styles.image}
              />
            }
          </View> */}
        </View>
    );
  }
}

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});