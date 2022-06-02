/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
} from "native-base";
import DrawerToggleButton from "@react-navigation/drawer/src/views/DrawerToggleButton";

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
          onPress={() => props.navigation.navigate("RMHC Central Ohio")}
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
          onPress={() => props.navigation.navigate("HospitalHome")}
        />
        <DrawerItem
          label="Neighborhood Guide"
          onPress={() => props.navigation.navigate("NeighborhoodHome")}
        />
        <DrawerItem
          label="About"
          onPress={() => props.navigation.navigate("AboutHome")}
        />
        <DrawerItem
          label="Your Stay"
          onPress={() => props.navigation.navigate("YourStayHome")}
        />
        <DrawerItem
          label="Prescription Services"
          onPress={() => Linking.openURL("http://go.scripthero.com/RMHC")}
        />
        <DrawerItem
          label="Staff Use"
          onPress={() => props.navigation.navigate("Staff Use")}
        />

        <Box alignItems={"center"}>
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
function showHeaderTitle(route: RouteProp<ParamListBase>, navigation: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  const state = navigation.getState();
  let actualRoute = state.routes[state.index];

  while (actualRoute.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }
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
    default:
      return routeName.toUpperCase();
  }
}

function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={"Tabs"}
      screenOptions={(props) => {
        return {
          ...blueHeaderStyle,
          headerShown: showHeaderTitle(props.route, props.navigation),
          headerLeft: (drawerProps) => (
            <DrawerToggleButton {...drawerProps} tintColor={Colors.black} />
          ),
        };
      }}
      drawerContent={(props) => <AppDrawer {...props} />}
    >
      <Drawer.Screen
        name="Tabs"
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
  },
  tabBarShowLabel: false,
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
        options={(props) => {
          return {
            headerLeft: (hprops) => (
              <DrawerToggleButton {...hprops} tintColor={Colors.black} />
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
        options={(props) => {
          return {
            headerLeft: (hprops) => (
              <DrawerToggleButton {...hprops} tintColor={Colors.black} />
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
        options={(props) => {
          return {
            headerLeft: (hprops) => (
              <DrawerToggleButton {...hprops} tintColor={Colors.black} />
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

function YourStayStack() {
  return (
    <YourStayStackNav.Navigator
      initialRouteName={"Your Stay"}
      screenOptions={nestedHeader}
    >
      <YourStayStackNav.Screen
        name="Your Stay"
        component={YourStay}
        options={(props) => {
          return {
            headerLeft: (hprops) => (
              <DrawerToggleButton {...hprops} tintColor={Colors.black} />
            ),
          };
        }}
      />
      <YourStayStackNav.Screen
        name="Before Your Stay"
        component={BeforeYourStay}
      />
      <YourStayStackNav.Screen
        name="During Your Stay"
        component={DuringYourStay}
      />
      <YourStayStackNav.Screen
        name="After Your Stay"
        component={AfterYourStay}
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
        tabBarLabelPosition: "beside-icon",
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
              headerShown: true,
              headerTitle: "FLOOR PLAN",
              headerLeft: (hprops) => (
                <IconButton
                  icon={<ChevronLeftIcon />}
                  onPress={() => props.navigation.navigate("Facilities")}
                />
              ),
              tabBarButton: (props) => <></>,
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
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="HospitalHome"
          component={HospitalStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="NeighborhoodHome"
          component={NeighborhoodStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="AboutHome"
          component={AboutStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="YourStayHome"
          component={YourStayStack}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
        <BottomTab.Screen
          name="Staff Use"
          component={StaffUse}
          options={{
            tabBarButton: (props) => <></>,
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
}
