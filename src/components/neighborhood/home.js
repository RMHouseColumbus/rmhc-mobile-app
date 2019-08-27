import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';


export default class Neighborhood extends React.Component {

    static navigationOptions = {

        title: 'Neighborhood',
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={main.container}>
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
            </View>
        );
    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'black'
    }
});
