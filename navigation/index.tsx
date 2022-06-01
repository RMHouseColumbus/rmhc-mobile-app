/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ParamListBase, RouteProp } from "@react-navigation/native";
import {
  DarkTheme,
  DefaultTheme,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import type { ColorSchemeName } from "react-native";
import { Linking } from "react-native";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Box, Button, Text } from "native-base";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/home/HomeScreen";
import type {
  AboutStackList,
  HospitalStackList,
  NeighborhoodStackList,
  RootTabParamList,
  RootTabScreenProps,
  YourStayStackList,
} from "../types";
import FindUs from "../screens/find_us/FindUs";
import Facilities from "../screens/facilities/Facilities";
import Updates from "../screens/updates/Updates";
import Meals from "../screens/meals/Meals";
import Activities from "../screens/activities/Activities";
import HospitalServices from "../screens/hospital_services/HospitalServices";
import Riverside from "../screens/hospital_services/Riverside";
import BHP from "../screens/hospital_services/BHP";
import Neighborhood from "../screens/neighborhood/Neighborhood";
import Delivery from "../screens/neighborhood/food_delivery/Delivery";
import Transportation from "../screens/neighborhood/transportation/Transportation";
import About from "../screens/about/About";
import StayInvolved from "../screens/about/stay_involved/StayInvolved";
import CareMobile from "../screens/about/care_mobile/CareMobile";
import FamilyRoom from "../screens/about/family_room/FamilyRoom";
import YourStay from "../screens/your_stay/YourStay";
import AfterYourStay from "../screens/your_stay/after_your_stay/AfterYourStay";
import DuringYourStay from "../screens/your_stay/during_your_stay/DuringYourStay";
import BeforeYourStay from "../screens/your_stay/before_your_stay/BeforeYourStay";

import {
  FacebookSVG,
  FloorPlanIcon,
  HomeIcon,
  LinkedinSVG,
  LocationIcon,
  MealsIcon,
  TwitterSVG,
  UpdatesIcon,
  YoutubeSVG,
} from "./Icons";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#638dc9",
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

function AppDrawer(props: DrawerContentComponentProps) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Updates"
          onPress={() => props.navigation.navigate("Updates")}
        />
        <DrawerItem
          label="Meals"
          onPress={() => props.navigation.navigate("Meals")}
        />
        <DrawerItem
          label="Activities"
          onPress={() => props.navigation.navigate("Activities")}
        />
        <DrawerItem
          label="Facilities/Floor Plan"
          onPress={() => props.navigation.navigate("Facilities")}
        />
        <DrawerItem
          label="In Hospital Services"
          onPress={() => props.navigation.navigate("In Hospital Services")}
        />
        <DrawerItem
          label="Neighborhood Guide"
          onPress={() => props.navigation.navigate("Neighborhood")}
        />
        <DrawerItem
          label="About"
          onPress={() => props.navigation.navigate("About")}
        />
        <DrawerItem
          label="Your Stay"
          onPress={() => props.navigation.navigate("YourStay")}
        />
        <DrawerItem
          label="Prescription Services"
          onPress={() => Linking.openURL("http://go.scripthero.com/RMHC")}
        />

        <Box alignItems={"center"}>
          <Button
            backgroundColor={"#0077B5"}
            borderRadius={10}
            width={"90%"}
            onPress={() =>
              Linking.openURL("http://rmhc-centralohio.org/app_donation_page/")
            }
          >
            <Text fontFamily={"Raleway-SemiBold"} color={"white"}>
              Donate
            </Text>
          </Button>
        </Box>
      </DrawerContentScrollView>
      <Box flexDirection={"row"} justifyContent={"space-evenly"} mb={10}>
        <FacebookSVG
          onPress={() =>
            Linking.openURL("https://www.facebook.com/RMHCofCentralOhio")
          }
        />
        <LinkedinSVG
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/company/rmhccolumbus")
          }
        />
        <YoutubeSVG
          onPress={() =>
            Linking.openURL("https://www.youtube.com/user/RMHCofCentralOhio")
          }
        />
        <TwitterSVG
          onPress={() => Linking.openURL("https://twitter.com/RMHCofCentralOH")}
        />
      </Box>
    </>
  );
}

function getHeaderTitle(route: RouteProp<ParamListBase>, navigation: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  const state = navigation.getState();
  let actualRoute = state.routes[state.index];

  while (actualRoute.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }
  console.log(actualRoute);
  switch (routeName) {
    case "Home":
      return "RMHC Central Ohio";
    case "FindUs":
      return "FIND US";
    default:
      return actualRoute.name ?? routeName.toUpperCase();
  }
}

function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={"Tabs"}
      screenOptions={(props) => {
        return {
          ...defaultHeaderStyle,
        };
      }}
      drawerContent={(props) => <AppDrawer {...props} />}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={(props) => {
          return {
            headerTitle: getHeaderTitle(props.route, props.navigation),
          };
        }}
      />
    </Drawer.Navigator>
  );
}

const defaultHeaderStyle = {
  headerTitleStyle: {
    fontFamily: "Raleway-SemiBold",
    color: "#FFFFFF",
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: "#1c5ca3",
  },
  tabBarShowLabel: false,
};

const HospitalServiceStack = createNativeStackNavigator<HospitalStackList>();
const NeighborhoodStackNav =
  createNativeStackNavigator<NeighborhoodStackList>();

const AboutStackNav = createNativeStackNavigator<AboutStackList>();
const YourStayStackNav = createNativeStackNavigator<YourStayStackList>();

function AboutStack() {
  return (
    <AboutStackNav.Navigator
      initialRouteName={"AboutHome"}
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerTitle: "",
      }}
    >
      <AboutStackNav.Screen name="AboutHome" component={About} />
      <AboutStackNav.Screen name="Stay Involved" component={StayInvolved} />
      <AboutStackNav.Screen name="Care Mobile" component={CareMobile} />
      <AboutStackNav.Screen name="Family Room" component={FamilyRoom} />
    </AboutStackNav.Navigator>
  );
}

function NeighborhoodStack() {
  return (
    <NeighborhoodStackNav.Navigator
      initialRouteName={"NeighborhoodHome"}
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerTitle: "",
      }}
    >
      <NeighborhoodStackNav.Screen
        name="NeighborhoodHome"
        component={Neighborhood}
      />
      <NeighborhoodStackNav.Screen name="Delivery" component={Delivery} />
      <NeighborhoodStackNav.Screen
        name="Transportation"
        component={Transportation}
      />
    </NeighborhoodStackNav.Navigator>
  );
}

function HospitalStack() {
  return (
    <HospitalServiceStack.Navigator
      initialRouteName={"Hospitals"}
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerTitle: "",
      }}
    >
      <HospitalServiceStack.Screen
        name="Hospitals"
        component={HospitalServices}
      />
      <HospitalServiceStack.Screen name="Riverside" component={Riverside} />
      <HospitalServiceStack.Screen name="BHP" component={BHP} />
    </HospitalServiceStack.Navigator>
  );
}

function YourStayStack() {
  return (
    <YourStayStackNav.Navigator
      initialRouteName={"YourStayHome"}
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerTitle: "",
      }}
    >
      <YourStayStackNav.Screen name="YourStayHome" component={YourStay} />
      <YourStayStackNav.Screen name="Before" component={BeforeYourStay} />
      <YourStayStackNav.Screen name="During" component={DuringYourStay} />
      <YourStayStackNav.Screen name="After" component={AfterYourStay} />
    </YourStayStackNav.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <BottomTab.Group>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }: RootTabScreenProps<"Home">) => ({
            tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
          })}
        />
        <BottomTab.Screen
          name="FindUs"
          component={FindUs}
          options={{
            tabBarIcon: ({ color }) => <LocationIcon fill={color} />,
          }}
        />
        <BottomTab.Screen
          name="Facilities"
          component={Facilities}
          options={{
            tabBarIcon: ({ color }) => <FloorPlanIcon fill={color} />,
          }}
        />
        <BottomTab.Screen
          name="Meals"
          component={Meals}
          options={{
            tabBarIcon: ({ color }) => <MealsIcon fill={color} />,
          }}
        />
        <BottomTab.Screen
          name="Updates"
          component={Updates}
          options={{
            tabBarIcon: ({ color }) => <UpdatesIcon fill={color} />,
          }}
        />
        <BottomTab.Screen
          name="Activities"
          component={Activities}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="In Hospital Services"
          component={HospitalStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="Neighborhood"
          component={NeighborhoodStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="About"
          component={AboutStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="YourStay"
          component={YourStayStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
}
