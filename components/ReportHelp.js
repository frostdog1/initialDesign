import { RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal, TouchableOpacity} from 'react-native';
{/* <Button style={{styles.}}title="View" onPress={this.handleModal} /> */}
class ReportHelp extends Component{

    state = {
        modal:false
    }

    handleModal = () => {
        this.setState({
            // check state of modal, if false change to true (true to false aslo)
            modal: !this.state.modal ? true : false
        })
    }

    render(){
        return(
            <View style={{width: '100%'}}>
                {/* <Text style={{color:"black"}}>Hello hello hello</Text> */}

                <TouchableOpacity style={styles.helpButton} onPress={this.handleModal} >
                    <Text style={styles.helpButtonText}>HELP</Text>
                </TouchableOpacity>

                <Modal animationType={'slide'} visible={this.state.modal}>
                    <View style={{marginTop:50, paddingHorizontal:25, }}>
                        <Text style={{fontWeight:'bold', fontSize: 23}}>About - Automated Summary Reports</Text>
                        <Text style={{fontSize: 16}}>The information gathered about your low-back pain can be summarized in plain English to explain your current recovery. </Text>
                        <Text style={{fontSize: 16}}></Text>
                    </View>

                    <TouchableOpacity style={styles.helpButton} onPress={this.handleModal} >
                        <Text style={styles.helpButtonText}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View>

            
        )
    }

}

const styles = StyleSheet.create({

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
    helpButton:{
        marginRight: 0,
        marginBottom: 20,
        borderRadius: 2,
        borderWidth: 3,
        borderColor: "#8C05B4",
        width: 70,
        alignSelf: 'center',
      },
    
    helpButtonText:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: '#8C05B4',
        padding: 5,
        
    
      },
});

export default ReportHelp;