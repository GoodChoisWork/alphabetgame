import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import AlphabetGame from './screens/AlphabetGame';
import About from './screens/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HowToPlay from './screens/HowToPlay';
import initializeApp from "./components/Routing";
import { useEffect} from 'react';
const Stack = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
    initializeApp()
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Game') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            }
            else if (route.name === 'How To Play') {
              iconName = focused ? 'ios-help' : 'ios-help-outline';
            }
            else if (route.name === 'About') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3f08a6',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={AlphabetGame} options={{ headerShown: false }} />
          <Stack.Screen name="How To Play" component={HowToPlay} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        </Stack.Navigator>
        <StatusBar style='auto'></StatusBar>
      </NavigationContainer>
  );
}

