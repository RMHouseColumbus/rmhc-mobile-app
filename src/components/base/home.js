import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from 'native-base'
import BaseFooter from './footer.js'

export default class Home extends React.Component {

    static navigationOptions = {

        title: 'Welcome'
    }
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content" style={{color:"#FFFFFF"}}/>
                <View style={{ flex: 0.9 }}>
                    <View style={styles.container}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={{ fontSize: 30, padding: 5 }}>to</Text>
                        <Text style={{ fontSize: 40 }}>Central Ohio</Text>
                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BaseFooter navigation={this.props.navigation} />
                </View>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1, backgroundColor: "#F9F9F9" 
    },
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50,
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'red'
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