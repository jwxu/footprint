import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DataViewer, Scanner, Home, UserProfile, ProductCam } from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Block, GalioProvider } from 'galio-framework';
import { materialTheme } from './src/constants/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTransparent: true
              }}
            />
            {/* <Stack.Screen
              name="Scanner"
              component={Scanner}
              option={{
                headerTransparent: true
              }}
            /> */}
            <Stack.Screen
              name="Scanner"
              component={ProductCam}
              option={{
                headerTransparent: true
              }}
            />
            <Stack.Screen
              name="My Profile"
              component={UserProfile}
              option={{
                  headerTransparent: true
              }}
            />
            <Stack.Screen
              name="Product Details"
              component={DataViewer}
              options={{
                headerTransparent: true
              }}
            />
          </Stack.Navigator>

        </Block>
      </GalioProvider>
    </NavigationContainer>
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
