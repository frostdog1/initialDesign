// import React in our code
import React, { useState } from 'react';


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons'; 
import { Home } from './components/Screens';
import { Survey } from './components/Screens';
import { Settings } from './components/Screens';
import { Analytics } from './components/Screens';
import { Report } from './components/Screens';
import { Help } from './components/Screens';
import { Results } from './components/Screens';
import { Entypo } from '@expo/vector-icons'; 
import HomeHelpModal from './components/homeHelpModal';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo- constants).",
]);

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  // buttons on main screen
const HomeStack = createStackNavigator();

// bottom tabs
const Tabs = createBottomTabNavigator();

const SettingsStack = createStackNavigator();



const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={Settings} />
  </SettingsStack.Navigator>
);


const resultsStack = createStackNavigator();

const ResultsStackScreen = () => (
  <ResultsStack.Navigator>
    <ResultsStack.Screen name="Result" component={PrevResults} />
  </ResultsStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{headerRight: () => {
      return(
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>LOGOUT</Text>
        </TouchableOpacity>

        
      );
    }}}/>
    <HomeStack.Screen name="Survey" options={{headerRight: () => {
      
        
      
      

      /* return(
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>Logout</Text>
        </TouchableOpacity>

        
      ) */
    }}} component={Survey} />
    <HomeStack.Screen name="Analytics" component={Analytics} options={{headerTitle: 'Insights'}} />
    <HomeStack.Screen name="Report" component={Report} />
    <HomeStack.Screen name="Results" component={Results} options={{headerTitle: 'Previous Survey Results'}
  
  
  }/>
    

  </HomeStack.Navigator>

);

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleThinStyle}>{item.title}</Text>
        <Text style={styles.introTitleStyle}>{item.title1}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <NavigationContainer>
        <Tabs.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = "home-sharp"
            return <Ionicons name="home-sharp" size={24} color="#8C05B4" />
            } else if (route.name === 'Settings') {
              iconName ='ios-list-box';
            
            return <Ionicons name="md-settings-sharp" size={24} color="#8C05B4" />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
          <Tabs.Screen name="Home" component={HomeStackScreen} />
          <Tabs.Screen name="Settings" component={SettingsStackScreen} />
          
        </Tabs.Navigator>

        </NavigationContainer>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#572882',
    alignItems: 'center',
    padding: 1,
    justifyContent: 'center',
  },

  titleStyle: { // not the slider
    paddingTop: 60, //10 // 50
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'normal',
  },
  paragraphStyle: { // not the slider
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 350,
    height: 300, 
    resizeMode: 'contain'
    
  },

  introTextStyle: { 
    fontSize: 20,
    fontWeight: "100",
    color: 'white',
    textAlign: 'center',
    paddingTop: 0,
    paddingHorizontal: 50,
  },
  introTitleStyle: { // Lumbago
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    //marginTop: -40,
    textShadowRadius: 2,
    textShadowColor: "black",
    paddingTop: 10,
    
  },

  introTitleThinStyle: { // title
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,

  },

  introTitleThin1Style: { // the low back pain management tool
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,

  },

  helpButton:{
    marginRight: 20,
    borderRadius: 2,
    borderWidth: 3,
    borderColor: "#8C05B4",
  },

  helpButtonText:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: '#8C05B4',
    padding: 5,
    

  },
  
});

const slides = [
  {
    key: 's1',
    text: 'Follow this quick tutorial to learn how it can benefit you.',
    title: 'Welcome!',
    //title: 'Welcome to Lumbago',
    title2: '',
    image: require('./assets/medicalTransparent.png'),
    backgroundColor: '#572882',
  },
  {
    key: 's2',
    title: 'Evaluate Your Recovery',

    text: 'Complete short questionnaires designed to assess pain-related disability',
    
    //Using a clinically proven method for assessing pain related disability',
    image: require('./assets/addDoc1.png'),
    backgroundColor: '#572882',
  },
  {
    key: 's3',
    title: 'View your analytics',
    text: 'Gather insights into the nature of \n your lower-back pain',
    image: require('./assets/stats.png'),
    backgroundColor: '#572882',
  },
  {
    key: 's4',
    title: 'Gain a deeper understanding',
    text: 'Automated summaries to give \n you a breakdown of your recovery',
    image: require('./assets/fileAnalysis.png'),
    backgroundColor: '#572882',
  },

];

 {/* <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>HELP</Text>
        </TouchableOpacity> */}
