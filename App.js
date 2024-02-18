import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Tvmana1 from './Pages/Tvmana1';
import Tvmana2 from './Pages/Tvmana2';
import Kuriakostv from './Pages/Kuriakostv';
import Oracaomana from './Pages/Oracaomana';
import Igrejamanaonline from './Pages/Igrejamanaonline';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TV Mana 1')}>
        <Image
          source={require('./assets/images/tv_mana_1.png')} // Provide the path to your image
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TV Mana 2')}>
        <Image
          source={require('./assets/images/tv_mana_2.png')} // Provide the path to your image
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Kuriakos TV')}>
        <Image
          source={require('./assets/images/kuriakostv.png')} // Provide the path to your image
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Oração Maná')}>
        <Image
          source={require('./assets/images/oracaomana.png')} // Provide the path to your image
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Igreja Online Maná')}>
        <Image
          source={require('./assets/images/Igrejamanaonline.png')} // Provide the path to your image
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    marginBottom: 20,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { color: 'black' }
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="TV Mana 1" component={Tvmana1} />
        <Stack.Screen name="TV Mana 2" component={Tvmana2} />
        <Stack.Screen name="Kuriakos TV" component={Kuriakostv} />
        <Stack.Screen name="Oração Maná" component={Oracaomana} />
        <Stack.Screen name="Igreja Online Maná" component={Igrejamanaonline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
