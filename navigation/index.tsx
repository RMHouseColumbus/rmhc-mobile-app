/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ParamListBase, RouteProp } from "@react-navigation/native";
import {
  DefaultTheme,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
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
import {
  Box,
  Button,
  ChevronLeftIcon,
  Icon,
  IconButton,
  Text,
  HamburgerIcon,
} from "native-base";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/home/HomeScreen";
import type {
  AboutStackList,
  HospitalStackList,
  NeighborhoodStackList,
  RootTabParamList,
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
import Fonts from "../constants/Fonts";
import StaffUse from "../screens/staff_use/StaffUse";
import FacilitiesPDF from "../screens/facilities/FacilitiesPDF";

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
import HelpfulResources from "../screens/helpful_resources/HelpfulResources";
import { color } from "native-base/lib/typescript/theme/styled-system";

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

      <DrawerContentScrollView >
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home", { screen: "RMHC Central Ohio" })}
        />
        <DrawerItem
          label="Updates"
          onPress={() => props.navigation.navigate("Home", { screen: "Updates" })}
        />
        <DrawerItem
          label="Meals"
          onPress={() => props.navigation.navigate("Home", { screen: "Meals" })}
        />
        <DrawerItem
          label="Activities"
          onPress={() => props.navigation.navigate("Home", {screen: "Activities"})}
        />
        <DrawerItem
          label="Facilities/Floor Plan"
          onPress={() => props.navigation.navigate("Home", { screen: "Facilities" })}
        />
        <DrawerItem
          label="Helpful Resources"
          onPress={() => props.navigation.navigate("Home", {screen: "Helpful Resources"})}
        />
        <DrawerItem
          label="In Hospital Services"
          onPress={() => props.navigation.navigate("Home", {screen: "HospitalHome"})}
        />
        <DrawerItem
          label="Neighborhood Guide"
          onPress={() => props.navigation.navigate("Home", {screen:"NeighborhoodHome"})}
        />
        <DrawerItem
          label="About"
          onPress={() => props.navigation.navigate("Home", {screen: "AboutHome"})}
        />
        <DrawerItem
          label="Your Stay"
          onPress={() => props.navigation.navigate("Home", {screen:"YourStayHome"})}
        />

        <Box flex={1} flexDirection={"column"} alignSelf={"end"} mb={10}>

          <Box alignItems={"center"} paddingY={10} >
            <Button
              backgroundColor={Colors.buttonBlue}
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
          <Box flexDirection={"row"} justifyContent={"space-evenly"}>
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
        </Box>
      </DrawerContentScrollView>
  );
}
function showHeaderTitle(route: RouteProp<ParamListBase>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;

  switch (routeName) {
    case "AboutHome":
    case "HospitalHome":
    case "YourStayHome":
    case "NeighborhoodHome":
    case "FacilitiesPDF":
      return false;
    default:
      return true;
  }
}

function getHeaderTitle(route: RouteProp<ParamListBase>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  switch (routeName) {
    case "RMHC Central Ohio":
      return routeName;
    case "Home":
      return "RMHC Central Ohio";
    default:
      return routeName.toUpperCase();
  }
}

function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={"Home"}
      backBehavior={"history"}
      screenOptions={(props) => {
        return {
          ...blueHeaderStyle,
          headerShown: showHeaderTitle(props.route),
          headerLeft: () => (
            <IconButton
              icon={<HamburgerIcon color={Colors.black} />}
              onPress={() => props.navigation.openDrawer()}
            />
          ),
          drawerType: 'front',
        };
      }}
      drawerContent={(props) => <AppDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={(props) => {
          return {
            headerTitle: getHeaderTitle(props.route),
          };
        }}
      />
    </Drawer.Navigator>
  );
}

const blueHeaderStyle = {
  headerTitleStyle: {
    fontFamily: Fonts.Semibold,
    color: Colors.white,
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: Colors.statusBarBlue,
  }
};

const nestedHeader = ({ route }: NativeStackScreenProps<any>) => {
  return {
    headerTintColor: Colors.black,
    headerShown: true,
    gestureEnabled: true,
    headerBackTitleVisible: false,
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      fontFamily: Fonts.Semibold,
      color: Colors.black,
      fontSize: 20,
    },
    headerStyle: {
      backgroundColor: Colors.white,
    },
    tabBarShowLabel: false,
  };
};

const HospitalServiceStack = createNativeStackNavigator<HospitalStackList>();
const NeighborhoodStackNav =
  createNativeStackNavigator<NeighborhoodStackList>();

const AboutStackNav = createNativeStackNavigator<AboutStackList>();
const YourStayStackNav = createNativeStackNavigator<YourStayStackList>();

function AboutStack() {
  return (
    <AboutStackNav.Navigator
      initialRouteName={"About"}
      screenOptions={nestedHeader}
    >
      <AboutStackNav.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <IconButton
                icon={<HamburgerIcon color={Colors.black} />}
                onPress={() => navigation.getParent()?.openDrawer()}
                color={"transparent"}
              />
            ),
          };
        }}
      />
      <AboutStackNav.Screen name="Stay Involved" component={StayInvolved} />
      <AboutStackNav.Screen name="Care Mobile" component={CareMobile} />
      <AboutStackNav.Screen name="Family Room" component={FamilyRoom} />
    </AboutStackNav.Navigator>
  );
}

function NeighborhoodStack() {
  return (
    <NeighborhoodStackNav.Navigator
      initialRouteName={"Neighborhood"}
      screenOptions={nestedHeader}
    >
      <NeighborhoodStackNav.Screen
        name="Neighborhood"
        component={Neighborhood}
        options={({ navigation }) => {
          return {

            headerLeft: () => (
              <IconButton
                icon={<HamburgerIcon color={Colors.black} />}
                onPress={() => navigation.getParent()?.openDrawer()}
              />
            ),
          };
        }}
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
      initialRouteName={"In Hospital Services"}
      screenOptions={nestedHeader}
    >
      <HospitalServiceStack.Screen
        name="In Hospital Services"
        component={HospitalServices}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <IconButton
                icon={<HamburgerIcon color={Colors.black} />}
                onPress={() => navigation.getParent()?.openDrawer()}
              />
            ),
          };
        }}
      />
      <HospitalServiceStack.Screen
        name="Riverside Family Room"
        component={Riverside}
      />
      <HospitalServiceStack.Screen name="BHP Family Rooms" component={BHP} />
    </HospitalServiceStack.Navigator>
  );
}

function BackButton(props: { onPress: () => any }) {
  return <IconButton
    icon={<ChevronLeftIcon color={Colors.black} />}
    onPress={props.onPress}
  />;
}

function YourStayStack() {
  return (
    <YourStayStackNav.Navigator
      initialRouteName={"Your Stay"}
      screenOptions={nestedHeader}
    >
      <YourStayStackNav.Screen
        name="Your Stay"
        component={YourStay}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <IconButton
                icon={<HamburgerIcon color={Colors.black} />}
                onPress={() => navigation.getParent()?.openDrawer()}
              />
            ),
          };
        }}
      />
      <YourStayStackNav.Screen
        name="Before Your Stay"
        component={BeforeYourStay}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          };
        }}
      />
      <YourStayStackNav.Screen
        name="During Your Stay"
        component={DuringYourStay}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          };
        }}
      />
      <YourStayStackNav.Screen
        name="After Your Stay"
        component={AfterYourStay}
        options={({ navigation }) => {
          return {
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          };
        }}
      />
    </YourStayStackNav.Navigator>
  );
}


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="RMHC Central Ohio"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTab.Group>
        <BottomTab.Screen
          name="RMHC Central Ohio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
          }}
        />
        <BottomTab.Screen
          name="Find Us"
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
          name="FacilitiesPDF"
          component={FacilitiesPDF}
          options={(props) => {
            return {
              ...HideTab,
              headerShown: true,
              headerTitle: "FLOOR PLAN",
              headerLeft: () => (
                <BackButton
                  onPress={() => props.navigation.navigate("Facilities")}
                />
              ),
            };
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
          options={HideTab}
        />
        <BottomTab.Screen
          name="Helpful Resources"
          component={HelpfulResources}
          options={HideTab}
        />
        <BottomTab.Screen
          name="HospitalHome"
          component={HospitalStack}
          options={HideTab}
        />
        <BottomTab.Screen
          name="NeighborhoodHome"
          component={NeighborhoodStack}
          options={HideTab}
        />
        <BottomTab.Screen
          name="AboutHome"
          component={AboutStack}
          options={HideTab}
        />
        <BottomTab.Screen
          name="YourStayHome"
          component={YourStayStack}
          options={HideTab}
        />
        <BottomTab.Screen
          name="Staff Use"
          component={StaffUse}
          options={HideTab}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
}

const HideTab :BottomTabNavigationOptions = {
  tabBarButton: (props) => null,
  tabBarItemStyle: {
    width: 0,
    display: "none",
    height: 0,
  }
}
