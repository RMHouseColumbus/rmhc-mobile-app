import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Footer from './footer.js'

export default class Home extends React.Component {

    static navigationOptions = {

        title: 'Welcome'
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#FCCB00" barStyle="dark-content"/>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.container}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={{ fontSize: 30, padding: 5 }}>to</Text>
                        <Text style={{ fontSize: 40 }}>Central Ohio</Text>
                    </View>
                </View>
                
                <Footer navigation={this.props.navigation}/>
                
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    yellowContainer: {
        backgroundColor: '#FCCB00'
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'red'
    },
    centralOHText: {
        fontFamily: "System",
        fontSize: 40,
        color: 'black'
    },
    headerText: {
        fontFamily: "System",
        fontSize: 35,
        color: '#000000'
    }

});


// const styles = StyleSheet.create({
//    

//     },
//     whiteContainer: {
//       backgroundColor: '#FFFFFF'

//     },
//     yellowStatusBar:{
//       backgroundColor:"#FCCB00"
//     },
//     whiteStatusBar:{
//       backgroundColor:"#FFFFFF",

//     },

//     headerText:{
//       fontFamily:"System",
//       fontSize:35,
//       color:'#000000'
//     }
//   });