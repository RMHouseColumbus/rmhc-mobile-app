import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

export default class Menu extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, borderColor: 'black' }}>

                    {this.navLink("Home", "Home")}
                    {this.navLink("Updates", "Updates")}
                    {this.navLink("Meals", "Meals")}
                    {this.navLink("Activities", "Activities")}
                    {this.navLink("Facilities", "Facilities/Floor Plan")}
                    {this.navLink("Neighborhood", "Neighborhood Guide")}
                    {this.navLink("About", "About")}
                    {this.navLink("FAQ", "FAQ")}
                    
                    <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 } onPress={ this.ButtonClickCheckFunction }>
                        <Text style={styles.TextStyle}>Donate</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
        color: 'black'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    SubmitButtonStyle: {
 
        marginTop:5,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:12,
        marginRight:25,
        backgroundColor:'#0077B5',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },  
      TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize:20
    }
})