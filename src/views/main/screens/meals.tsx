import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import BaseFooter from '../../shared/footer'
import { NavigationNavigatorProps } from "react-navigation";

export interface MealsScreenProps extends NavigationNavigatorProps {
}

export default class Meals extends React.Component <MealsScreenProps,{}>{

    static navigationOptions = {

        title: 'Meals',   
    } 
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#4872ae" barStyle="light-content" />
                <View style={{ flex: 0.9 }}>
                    <View style={styles.container}>
                       
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
        flex: 1, backgroundColor: "#F1F1F1" 
    },
    container:{
        flex:1,
        marginLeft:20,
        top:50
    },
    welcomeText:{
        fontFamily:"System",
        fontSize:45,
        color:'black'
    }
});