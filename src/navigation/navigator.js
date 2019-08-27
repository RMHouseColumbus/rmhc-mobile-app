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


const defaultNavConfigs = {
    defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: (
            <Icon type="Ionicons" name='menu'
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={30}
            />),
        headerStyle: {
            backgroundColor: '#FCCB00',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,

        }
    })
}
const defaultTabIcons = {
    showLabel: false,
    showIcon: true,
    activeTintColor: 'red',
    inactiveTintColor: 'black',
}

// const BottomTabBar = createBottomTabNavigator({
//         Home: {
//             screen: createStackNavigator({Home: Home}, defaultNavConfigs), navigationOptions: () => ({
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon
//                         type="Ionicons" name='home'
//                         color={tintColor}
//                         size={24}
//                     />
//                 )
//                 , tabBarOptions: defaultTabIcons
//             })
//         },
//         Map: {
//             screen: createStackNavigator({Home: Home}, defaultNavConfigs), navigationOptions: () => ({
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon
//                         type="Ionicons" name='pin'
//                         color={tintColor}
//                         size={24}
//                     />
//                 )
//                 , tabBarOptions: defaultTabIcons
//             })
//         },
//         Facilities: {
//             screen: createStackNavigator({Facilities: Facilities}, defaultNavConfigs), navigationOptions: () => ({
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon
//                         type="Ionicons" name='map'
//                         color={tintColor}
//                         size={24}
//                     />
//                 )
//                 , tabBarOptions: defaultTabIcons
//             })
//         },
//         Meals: {
//             screen: createStackNavigator({Meals: Meals}, defaultNavConfigs), navigationOptions: () => ({
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon
//                         type="FontAwesome5" name='utensils'
//                         color={tintColor}
//                         size={5}
//                     />
//                 )
//                 , tabBarOptions: defaultTabIcons
//             })
//         },
//         Updates: {
//             screen: createStackNavigator({Updates: Updates}, defaultNavConfigs), navigationOptions: () => ({
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon
//                         type="SimpleLineIcons" name='bell'
//                         color={tintColor}
//                         size={30}
//                     />
//                 )
//                 , tabBarOptions: defaultTabIcons
//             })
//         }
//     },
//     {initialRouteName: 'Home'},
//     {
//         order: ['Home', 'Map', 'Facilities', 'Meals', 'Updates']
//     });

const neigborhood = createStackNavigator(
    {
        Neighborhood: Neighborhood,
        Delivery:Delivery,
        Restaurants:Restaurants,
        Shopping:Shopping,
        ThingsToDo:ThingsToDo,
        Transportation:Transportation,
        AdultCare: AdultCare
    },
    {initialRouteName:"Neighborhood"},
    defaultNavConfigs);


const DrawerNavigator = createDrawerNavigator(
    {

        Home: createStackNavigator({ Home: Home }, defaultNavConfigs),
        Updates: createStackNavigator({ Updates: Updates }, defaultNavConfigs),
        About: createStackNavigator({ About: About }, defaultNavConfigs),
        Activities: createStackNavigator({ Activities: Activities }, defaultNavConfigs),
        Neighborhood: neigborhood,
        FAQ: createStackNavigator({ Faq: Faq }, defaultNavConfigs),
    }, {
        drawerWidth: Dimensions.get("window").width * 0.83,
        contentComponent: ({ navigation }) => {
            return (<Menu navigation={navigation} />)
        }
    });

export default createAppContainer(DrawerNavigator);