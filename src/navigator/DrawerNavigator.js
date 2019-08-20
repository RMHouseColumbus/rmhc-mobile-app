import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/home.js';
import Updates from '../components/updates.js';
import About from '../components/about.js';
import Faq from '../components/faq.js';
import Meals from '../components/meals.js';
import Neighborhood from '../components/neighborhood.js';
import Activities from '../components/activities.js';
import Facilities from '../components/facilities.js';
import Menu from '../components/menu.js'

const WIDTH = Dimensions.get("window").width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent:({ navigation }) => {
        return(<Menu navigation={navigation }/>)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
      Home:{
          screen: Home
      },
      Updates:{
        screen: Updates
      },
      About:{
        screen: About
      },
      FAQ:{
        screen: Faq
      },
      Meals:{
        screen: Meals
      },
      Neighborhood:{
        screen: Neighborhood
      },
      Activities:{
        screen: Activities
      },
      Facilities:{
        screen:Facilities
      }
    },
    DrawerConfig
    
    
  );
  
  export default createAppContainer(DrawerNavigator);