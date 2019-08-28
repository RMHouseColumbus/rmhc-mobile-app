import React from 'react';
import { Dimensions } from 'react-native'
import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import Home from '../components/base/home.js';
import Updates from '../components/base/updates.js';
import About from '../components/about/home.js';
import Faq from '../components/faq/home.js';
import Meals from '../components/base/meals.js';
import Neighborhood from '../components/neighborhood/home.js';
import Activities from '../components/base/activities.js';
import Facilities from '../components/facilities/home.js';
import Menu from './menu.js'
import { Icon } from 'native-base';
import Delivery from "../screens/delivery/delivery";
import Restaurants from "../screens/restaurants/restaurants";
import Shopping from "../screens/shopping/shopping";
import ThingsToDo from "../screens/things-to-do/things-to-do";
import Transportation from "../screens/transportation/transportation";
import AdultCare from "../screens/adult-care/adult-care";


const navHeaderStyle= {
    backgroundColor: '#4872ae',
}

const navHeaderTitleStyle = {
    color: '#FFFFFF',
    fontFamily: "System",
    fontSize: 35,
    alignSelf:'center',
    justifyContent: 'space-between',
    textAlign: 'center'
}

const defaultNavConfigs = {
    defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: (
            <Icon type="Ionicons" name='menu'
                style={{ paddingLeft: 10, color:"#000000"}}
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={30}
            />),
        headerStyle: navHeaderStyle,
        headerTitleStyle: navHeaderTitleStyle,
        headerLayoutPreset:'center',
        headerMode:'none'
    })
}

const subNeigborhood = createStackNavigator(
    {
        Neighborhood: Neighborhood,
        Delivery:Delivery,
        Restaurants:Restaurants,
        Shopping:Shopping,
        ThingsToDo:ThingsToDo,
        Transportation:Transportation,
        AdultCare: AdultCare
    },defaultNavConfigs,
    {initialRouteName:"Neighborhood"});


const DrawerNavigator = createDrawerNavigator(
    {
        Home: createStackNavigator({ Home: Home }, defaultNavConfigs),
        Meals: createStackNavigator({ Meals: Meals }, defaultNavConfigs),
        Facilities: createStackNavigator({ Facilities: Facilities }, defaultNavConfigs),
        Updates: createStackNavigator({ Updates: Updates }, defaultNavConfigs),
        About: createStackNavigator({ About: About }, defaultNavConfigs),
        Activities: createStackNavigator({ Activities: Activities }, defaultNavConfigs),
        Neighborhood: subNeigborhood,
        FAQ: createStackNavigator({ Faq: Faq }, defaultNavConfigs),
    }, {
        drawerWidth: Dimensions.get("window").width * 0.83,
        contentComponent: ({ navigation }) => {
            return (<Menu navigation={navigation} />)
        }
    });

export default createAppContainer(DrawerNavigator);