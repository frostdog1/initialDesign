import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal, TouchableOpacity} from 'react-native';
{/* <Button style={{styles.}}title="View" onPress={this.handleModal} /> */}
class RmdqModal extends Component{

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

                <TouchableOpacity style={styles.resultsButton} onPress={this.handleModal} >
                    <Text style={styles.resultsButtonText}>View</Text>
                </TouchableOpacity>


                <Modal animationType={'slide'} visible={this.state.modal}>
                    <View style={{marginTop:50, paddingHorizontal:25, backgroundColor: 'red'}}>
                        <Text>These are the statements that you selected:</Text>
                    </View>
                    <TouchableOpacity style={styles.resultsButton} onPress={this.handleModal} >
                        <Text style={styles.resultsButtonText}>Close</Text>
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
});

export default RmdqModal;