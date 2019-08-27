import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { Icon } from 'native-base'
import BaseFooter from '../base/footer.js'

export default class Neighborhood extends React.Component {

    static navigationOptions = {

        title: 'Neighborhood',
        
        

    }
    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.container}>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("Delivery")}>
                            <Text>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("Restaurants")}>
                            <Text>Restaurants</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("Shopping")}>
                            <Text>Shopping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("ThingsToDo")}>
                            <Text>Things To Do</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("Transportation")}>
                            <Text>Transportation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("AdultCare")}>
                            <Text>Adult Care</Text>
                        </TouchableOpacity>
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
        flex: 10, backgroundColor: "#638dc9" 
    },
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50,
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'black'
    }
});
