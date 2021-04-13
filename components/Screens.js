import { Roboto_100Thin } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import Rmdq from './components/Rmdq';
import Flat from './flatList';
import { StyleSheet, Text, View, Image, Pressable, Button, Alert, ScrollView, FlatList, TouchableOpacity, Animated, Modal} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import TiledMenu from './TiledMenu';
//import { ProgressBar, Colors } from 'react-native-paper';
import RmdqModal from './Modal';
import HomeHelpModal from './homeHelpModal.js';
import SurveyHelpModal from './surveyHelp.js';
import Entypo from '@expo/vector-icons'; 
import InsightsHelp from './insightsHelp';
import ReportHelp from './ReportHelp';
import { response } from 'express';
const menu = [
  {id:0, title: "Survey",   image:require("../assets/addDoc2.png"), goTo:"Survey"},
  {id:1, title: "Insights", image:require("../assets/data_growing.png"), goTo:"Analytics"},
  {id:2, title: "Report", image:require("../assets/fileAnalysis.png"), goTo:"Report"} ,
  {id:3, title: "Results", image:require("../assets/pastResults.png"), goTo:"Results"},
];

const ScreenContainer = ({ children }) => (
  
  
  <View style={styles.container}>{children}</View>


);

// add a navigation prop
// can now use this prop for navigation.push()
// push is stacknavigator function that is used when your in the same stack
// use navigation.naviagte for going back to other screens/stacks

// onPress={() => navigation.push('Survey', { name: 'Example'})}
export const Home = ({navigation}) => (
  // create fragment
  <>
  <ScreenContainer>
  <View style={styles.container}>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={menu}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        } }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.goTo)}>
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={item.image} />
              <View style={styles.cardHeader}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        } } />
    </View>

    <HomeHelpModal/>

    {/* <TouchableOpacity style={styles.helpButton}>
      <Text style={styles.helpButtonText}>HELP</Text>
    </TouchableOpacity> */}
    

    </ScreenContainer>
    
    </>

);

export const Settings = () => (

  <ScreenContainer>
    <Text>Settings</Text>
  </ScreenContainer>

);

export const Help = () => (

  <ScreenContainer>
    <Text>Help Page</Text>
  </ScreenContainer>

);

export const Analytics = () => (

  <ScreenContainer>
    <Text>Analytics page</Text>

    <InsightsHelp/>
  </ScreenContainer>

);

const resultData = [
  {key:0, title: "04/01/2021", score: "Roland-Morris score: 8/24"},
  {key:1, title: "Insights", image:require("../assets/data_growing.png"), goTo:"Analytics"},
  {key:2, title: "Report", image:require("../assets/fileAnalysis.png"), goTo:"Report"} ,
  {key:3, title: "Results", image:require("../assets/pastResults.png"), goTo:"Results"},
]


export const Report = () => (

  <ScreenContainer>
    

    <ReportHelp/>
  </ScreenContainer>

);

// this is the screen where you view a
// specific result
export const PrevResults = () => (

  <ScreenContainer>
    <Text>this is ur prev results</Text>
  </ScreenContainer>

);



const questions = [
  {id: 0, question: 'I stay at home most of the time because of my back.'},
  {id: 1, question: 'I change position frequently to try and get my back comfortable.'},
  {id:2, question: 'I walk more slowly than usual because of my back.'} ,
  {id:3, question: 'Because of my back I am not doing any of the jobs that I usually do around the house.'},
  {id:4, question: 'Because of my back, I use a handrail to get upstairs.'},
  {id:5, question: 'Because of my back, I lie down to rest more often.'},
  {id:6, question: 'Because of my back, I have to hold on to something to get out of an easy chair.'},
  {id:7, question: 'Because of my back, I try to get other people to do things for me.'},
  {id:8, question: 'I get dressed more slowly then usual because of my back.'},
  {id:9, question: 'I only stand for short periods of time because of my back.'},
  {id:10, question: 'Because of my back, I try not to bend or kneel down.'},
  {id:11, question: 'I find it difficult to get out of a chair because of my back.'},
  {id:12, question: 'My back is painful almost all the time.'},
  {id:13, question: 'I find it difficult to turn over in bed because of my back.'},
  {id:14, question: 'My appetite is not very good because of my back pain.'},
  {id:15, question: 'I have trouble putting on my socks (or stockings) because of the pain in my back.'},
  {id:16, question: 'I only walk short distances because of my back.'},
  {id:17, question: 'I sleep less well because of my back.'},
  {id:18, question: 'Because of my back pain, I get dressed with help from someone else.'},
  {id:19, question: 'I sit down for most of the day because of my back.'},
  {id:20, question: 'I avoid heavy jobs around the house because of my back.'},
  {id:21, question: 'Because of my back pain, I am more irritable and bad tempered with people than usual.'},
  {id:22, question: 'Because of my back, I go upstairs more slowly than usual.'},
  {id:23, question: 'I stay in bed most of the time because of my back.'}
];

export const Survey = () => {
    
    //const [ counter, setCounter ] = React.useState(0)
    return(
      <>
        <ScreenContainer>
      <Text style={styles.progressText}>Progress</Text>

    <View style={styles.progressBar}>

      <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8C05B4", width: '4.16%'}}/>

    </View>
    <Text style={styles.progressCounter}>1/24</Text>

    <View style={styles.questionBox}>
      <Text name={"hello"} style={styles.questionBoxText}>hello</Text>
    </View>

    <TouchableOpacity style={styles.questionNoButton}>
      <Text style={styles.questionButtonText}>No</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.questionYesButton}>
      <Text style={styles.questionButtonText}>Yes</Text>
    </TouchableOpacity>


    <SurveyHelpModal/>
    </ScreenContainer>
      </>
    )

    
  

    };

// past results from the questionnaires can be seen
// and exported or shared
export const Results = () => (
  
  <>
      <View style={styles.resultsContainer}>
  
          <Text style={styles.resultsText}>
            04/01/2021
          </Text>
          <Text style={styles.resultsText}>
            Roland-Morris score: 8/24
          </Text>

          <RmdqModal/>


          {/* onPress={() => navigation.navigate(item.goTo) */}
          {/* <Modal transparent={true} visible={false} animationType="slide" >
            <View style={{backgroundColor:"green", flex:1}}>
              <View style={{backgroundColor: "white", margin:50, padding:40, borderRadius:10, flex:1}}>
                <Text>Hello</Text>

              </View>

            </View>

          </Modal> */}

          {/* <TouchableOpacity style={styles.resultsButton} >
            <Text style={styles.resultsButtonText}>View</Text>
          </TouchableOpacity> */}
        
      </View>

      <View style={styles.resultsContainer1}>
  
          <Text style={styles.resultsText}>
            06/02/2021
          </Text>
          <Text style={styles.resultsText}>
            Roland-Morris score: 4/24
          </Text>
          {/* onPress={() => navigation.navigate(item.goTo) */}
          <TouchableOpacity style={styles.resultsButton} >
            <Text style={styles.resultsButtonText}>View</Text>
          </TouchableOpacity>
        
      </View>
    
  
  </>
  
  );
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // #################### RESULTS STYLING #############################
  resultsContainer:{
    paddingLeft: 40,
    paddingTop: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,

  },

  resultsButton:{
    backgroundColor: "#761989",
    borderRadius: 31,
    width: 100,
    height: 40,
    //alignItems: 'flex-start',
    
  },
  resultsText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
    //color: "white"

  },
  resultsButtonText:{
    fontSize:20,
    flex:1,
    alignSelf:'center',
    justifyContent: 'center',
    paddingTop: '4.5%',
    color:'#fff',
  },

  // ##### repeat code #####
  resultsContainer1:{
    paddingLeft: 40,
    paddingTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,

  },

  bottomBorder:{


  },

  // ############### END RESULTS STYLING ###################
  button:{
    paddingHorizontal:10,
    paddingVertical: 10,
    marginVertical:10,
    borderRadius: 28,
  },
  list: {
    paddingHorizontal: 0,
    paddingBottom: 10,

    backgroundColor: '#fff',
    
  },
  listContainer:{
    alignItems:'center',
    borderRadius: 28,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 7,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexBasis: '40%',
    flex: 0,
    marginHorizontal: 10,
    
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    borderRadius: 28,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardImage:{
    height: 90,
    width: 100,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"black",
    
  },
  //############# survey 
  questionBox: {
    marginTop: '20%',
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 28,
    shadowColor: "rgba(127,123,123,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 40,
    shadowOpacity: 1,
    shadowRadius: 10,
    width: '88%',
    height: 144,
  },
  questionNoButton: {
    backgroundColor: "rgba(140,5,180,1)",
    borderRadius: 28,
    width: '88%',
    marginTop: '5%',
    height: '12%',
  },
  questionYesButton: {
    backgroundColor: '#B40508',
    borderRadius: 28,
    width: '88%',
    marginTop: '5%',
    height: '12%',
  },
  questionButtonText:{
    fontSize:30,
    flex:1,
    alignSelf:'center',
    justifyContent: 'center',
    paddingTop: '4.5%',
    color:'#fff',
  
  },
  questionBoxText:{
    fontSize:24,
    textAlign:'center',
    //justifyContent: 'center',
    paddingTop: 35,
    //marginTop: '50%',
    color:'black',
    padding: 5,

    
  },

// ######### PROGRESS BAR ########
  progressBar: {
    height: 20,
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row", 
  },

  progressText:{
    marginTop: '-20%',
    color: 'black',

  },

  progressCounter:{
    marginTop: 1,
    color: 'black'

  },

  helpButton:{
    marginBottom: 10,
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
