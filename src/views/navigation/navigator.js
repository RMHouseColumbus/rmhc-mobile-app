import React from 'react';
import {Dimensions} from 'react-native'
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Home from '../main/screens/home';
import About from '../about/screens/home';
import Faq from '../faq/screens/home';
import Meals from '../main/screens/meals';
import Neighborhood from '../neighborhood/screens/home';
import Facilities from '../facilities/screens/home';
import FloorPlan from '../facilities/screens/floorplan';
import Menu from './menu'
import {Icon} from 'native-base';
import Delivery from "../neighborhood/screens/delivery";
import Restaurants from "../neighborhood/screens/restaurants";
import Shopping from "../neighborhood/screens/shopping";
import Transportation from "../neighborhood/screens/transportation";
import Updates from "../main/screens/updates";
import Activities from "../main/screens/activities";
import CareMobile from "../about/screens/care-mobile";
import StayInvolved from "../about/screens/stay-involved";
import Before from "../faq/screens/before"
import During from "../faq/screens/during"
import After from "../faq/screens/after"
import FamilyRoom from "../about/screens/family-room";


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
        StayInvolved: StayInvolved,
        FamilyRoom: FamilyRoom
    }, defaultNavConfigs,
    {initialRouteName: "About"});

const subFAQ = createStackNavigator(
    {
        Faq: Faq,
        Before: Before,
        During: During,
        After: After
    }, defaultNavConfigs,
    {initialRouteName:"Faq"});


const DrawerNavigator = createDrawerNavigator(
    {
        Home: createStackNavigator({Home: Home}, defaultNavConfigs),
        Meals: createStackNavigator({Meals: Meals}, defaultNavConfigs),
        Facilities: subFacilities,
        Updates: createStackNavigator({Updates: Updates}, defaultNavConfigs),
        About: subAbout,
        Activities: createStackNavigator({Activities: Activities}, defaultNavConfigs),
        Neighborhood: subNeigborhood,
        Faq: subFAQ,
    }, {
        drawerWidth: Dimensions.get("window").width * 0.83,
        contentComponent: ({navigation}) => {
            return (<Menu navigation={navigation}/>)
        }
    });

export default createAppContainer(DrawerNavigator);