import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DataViewer, Scanner, Home } from './src';

// import { NavigationContainer } from '@react-navigation/native';
// import Screens from './navigation/Screens';

export default function App() {
  return (
    <Home></Home>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>TREEHACKS!!! LETS GOOOOO!!</Text>
    //   <StatusBar style="auto" />
    //   <DataViewer></DataViewer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
