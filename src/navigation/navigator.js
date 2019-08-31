import React from 'react';
import {Dimensions} from 'react-native'
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Home from '../components/base/home.js';
import About from '../components/about/home';
import Faq from '../components/faq/home.js';
import Meals from '../components/base/meals.js';
import Neighborhood from '../components/neighborhood/home.js';
import Facilities from '../components/facilities/home.js';
import FloorPlan from '../components/facilities/floorplan.js';
import Menu from './menu.js'
import {Icon} from 'native-base';
import Delivery from "../screens/delivery/delivery";
import Restaurants from "../screens/restaurants/restaurants";
import Shopping from "../screens/shopping/shopping";
import ThingsToDo from "../screens/things-to-do/things-to-do";
import Transportation from "../screens/transportation/transportation";
import Updates from "../components/base/updates";
import Activities from "../components/base/activities";
import CareMobile from "../screens/care-mobile/care-mobile";
import StayInvolved from "../screens/stay-involved/stay-involved";
import Before from "../screens/before/before"
import During from "../screens/during/during"


const navHeaderStyle = {
    backgroundColor: '#4872ae',
};

const navHeaderTitleStyle = {
    color: '#FFFFFF',
    fontFamily: "System",
    fontSize: 35,
    alignSelf: 'center',
    justifyContent: 'space-between',
    textAlign: 'center'
};

const defaultNavConfigs = {
    defaultNavigationOptions: ({navigation}) => ({
        headerLeft: (
            <Icon type="Ionicons" name='menu'
                  style={{paddingLeft: 10, color: "#000000"}}
                  onPress={() => navigation.openDrawer()}
                  name="md-menu"
                  size={30}
            />),
        headerStyle: navHeaderStyle,
        headerTitleStyle: navHeaderTitleStyle,
        headerLayoutPreset: 'center',
        headerMode: 'none'
    })
};

const subNeigborhood = createStackNavigator(
    {
        Neighborhood: Neighborhood,
        Delivery: Delivery,
        Restaurants: Restaurants,
        Shopping: Shopping,
        ThingsToDo: ThingsToDo,
        Transportation: Transportation
    }, defaultNavConfigs,
    {initialRouteName: "Neighborhood"});


    const subFacilities = createStackNavigator(
        {
            Facilities:Facilities, FloorPlan: FloorPlan}, defaultNavConfigs,
        {initialRouteName: "Facilities"});


const subAbout = createStackNavigator(
    {
        About: About,
        CareMobile: CareMobile,
        StayInvolved: StayInvolved
    }, defaultNavConfigs,
    {initialRouteName: "About"});

const subFAQ = createStackNavigator(
    {
        Faq: Faq,
        Before: Before,
        During: During
    }, defaultNavConfigs,
    {initialRouteName:"FAQ"});


const DrawerNavigator = createDrawerNavigator(
    {
        Home: createStackNavigator({Home: Home}, defaultNavConfigs),
        Meals: createStackNavigator({Meals: Meals}, defaultNavConfigs),
        Facilities: subFacilities,
        Updates: createStackNavigator({Updates: Updates}, defaultNavConfigs),
        About: subAbout,
        Activities: createStackNavigator({Activities: Activities}, defaultNavConfigs),
        Neighborhood: subNeigborhood,
        FAQ: subFAQ,
    }, {
        drawerWidth: Dimensions.get("window").width * 0.83,
        contentComponent: ({navigation}) => {
            return (<Menu navigation={navigation}/>)
        }
    });

export default createAppContainer(DrawerNavigator);