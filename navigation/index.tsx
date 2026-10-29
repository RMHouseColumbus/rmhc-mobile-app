/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ParamListBase, RouteProp } from "@react-navigation/native";
import {
  DefaultTheme,
  DrawerActions,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import type { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
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
import Tickets from "../screens/neighborhood/Tickets";
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
          background: Colors.background,
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

function AppDrawer(props: DrawerContentComponentProps) {
  // Select the top-level section so nested details keep their parent highlighted.
  const activeRoute = getFocusedRouteNameFromRoute(props.state.routes[props.state.index])
    ?? "RMHC Central Ohio";
  const activeSection = activeRoute === "FacilitiesPDF" ? "Facilities" : activeRoute;
  const drawerItemProps = (screen: keyof RootTabParamList) => ({
    focused: activeSection === screen,
    activeBackgroundColor: "transparent",
    activeTintColor: Colors.action,
    pressOpacity: 0.55,
    pressColor: `${Colors.action}20`,
    labelStyle: [
      drawerLabelStyle,
      activeSection === screen && { color: Colors.action, textDecorationLine: "underline" as const },
    ],
  });

  const navigateTo = (screen: keyof RootTabParamList) => {
    props.navigation.closeDrawer();
    props.navigation.navigate("Home", { screen });
  };
  const openLink = (url: string) => {
    props.navigation.closeDrawer();
    return Linking.openURL(url);
  };

  return (

      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ backgroundColor: Colors.background }}
      >
        <DrawerItem
          label="Home"
          {...drawerItemProps("RMHC Central Ohio")}
          onPress={() => navigateTo("RMHC Central Ohio")}
        />
        <DrawerItem
          label="Updates"
          {...drawerItemProps("Updates")}
          onPress={() => navigateTo("Updates")}
        />
        <DrawerItem
          label="Meals"
          {...drawerItemProps("Meals")}
          onPress={() => navigateTo("Meals")}
        />
        <DrawerItem
          label="Activities"
          {...drawerItemProps("Activities")}
          onPress={() => navigateTo("Activities")}
        />
        <DrawerItem
          label="Facilities/Floor Plan"
          {...drawerItemProps("Facilities")}
          onPress={() => navigateTo("Facilities")}
        />
        <DrawerItem
          label="Helpful Resources"
          {...drawerItemProps("Helpful Resources")}
          onPress={() => navigateTo("Helpful Resources")}
        />
        <DrawerItem
          label="Family Rooms"
          {...drawerItemProps("HospitalHome")}
          onPress={() => navigateTo("HospitalHome")}
        />
        <DrawerItem
          label="Neighborhood Guide"
          {...drawerItemProps("NeighborhoodHome")}
          onPress={() => navigateTo("NeighborhoodHome")}
        />
        <DrawerItem
          label="About"
          {...drawerItemProps("AboutHome")}
          onPress={() => navigateTo("AboutHome")}
        />
        <DrawerItem
          label="Your Stay"
          {...drawerItemProps("YourStayHome")}
          onPress={() => navigateTo("YourStayHome")}
        />

        <Box flex={1} flexDirection={"column"} alignSelf={"end"} mb={10}>

          <Box alignItems={"center"} paddingY={10} >
            <Button
              backgroundColor={Colors.action}
              borderRadius={10}
              width={"90%"}
              onPress={() =>
                openLink("http://rmhc-centralohio.org/app_donation_page/")
              }
            >
              <Text fontFamily={Fonts.Bold} color={Colors.onAction}>
                Donate
              </Text>
            </Button>
          </Box>
          <Box flexDirection={"row"} justifyContent={"space-evenly"}>
            <FacebookSVG
              onPress={() =>
                openLink("https://www.facebook.com/RMHCofCentralOhio")
              }
            />
            <LinkedinSVG
              onPress={() =>
                openLink("https://www.linkedin.com/company/rmhccolumbus")
              }
            />
            <YoutubeSVG
              onPress={() =>
                openLink("https://www.youtube.com/user/RMHCofCentralOhio")
              }
            />
            <TwitterSVG
              onPress={() => openLink("https://twitter.com/RMHCofCentralOH")}
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
    case "Staff Use":
      return false;
    default:
      return true;
  }
}

function getHeaderTitle(route: RouteProp<ParamListBase>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  switch (routeName) {
    case "RMHC Central Ohio":
    case "Home":
      return "Ronald McDonald House";
    case "In Hospital Services":
      return "FAMILY ROOMS";
    default:
      return routeName;
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
              icon={<HamburgerIcon color={Colors.onHeader} />}
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

const drawerLabelStyle = {
  fontFamily: Fonts.Regular,
  color: Colors.text,
  fontSize: 16,
};

const blueHeaderStyle = {
  headerTitleStyle: {
    fontFamily: Fonts.Bold,
    color: Colors.onHeader,
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: Colors.header,
  }
};

const nestedHeader = ({ route, navigation }: NativeStackScreenProps<any>): NativeStackNavigationOptions => {
  return {
    headerTintColor: Colors.onHeader,
    headerShown: true,
    gestureEnabled: true,
    headerBackVisible: false,
    headerLeft: ({ canGoBack }) => canGoBack
      ? <BackButton onPress={() => navigation.goBack()} />
      : null,
    unstable_headerLeftItems: ({ canGoBack }) => canGoBack ? [{
      type: "custom",
      element: <BackButton onPress={() => navigation.goBack()} />,
      hidesSharedBackground: true,
    }] : [],
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      fontFamily: Fonts.Bold,
      color: Colors.onHeader,
      fontSize: 20,
    },
    headerStyle: {
      backgroundColor: Colors.header,
    },
  };
};

function drawerHeaderOptions(onPress: () => void): NativeStackNavigationOptions {
  const button = (
    <IconButton
      accessibilityLabel="Open menu"
      variant="unstyled"
      backgroundColor="transparent"
      _pressed={{ backgroundColor: "transparent", opacity: 0.55 }}
      icon={<HamburgerIcon color={Colors.onHeader} />}
      onPress={onPress}
    />
  );

  return {
    headerLeft: () => button,
    // iOS 26 adds a system background around custom native header buttons.
    unstable_headerLeftItems: () => [
      { type: "custom", element: button, hidesSharedBackground: true },
    ],
  };
}

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
        options={({ navigation }) => drawerHeaderOptions(
          () => navigation.dispatch(DrawerActions.openDrawer())
        )}
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
        options={({ navigation }) => drawerHeaderOptions(
          () => navigation.dispatch(DrawerActions.openDrawer())
        )}
      />
      <NeighborhoodStackNav.Screen name="Delivery" component={Delivery} />
      <NeighborhoodStackNav.Screen name="Tickets" component={Tickets} />
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
        options={({ navigation }) => drawerHeaderOptions(
          () => navigation.dispatch(DrawerActions.openDrawer())
        )}
      />
      <HospitalServiceStack.Screen
        name="Riverside Family Room"
        component={Riverside}
      />
      <HospitalServiceStack.Screen name="BHP Family Rooms" component={BHP} />
    </HospitalServiceStack.Navigator>
  );
}

function BackButton(props: { onPress: () => void }) {
  return <IconButton
    accessibilityLabel="Back"
    variant="unstyled"
    backgroundColor="transparent"
    _pressed={{ backgroundColor: "transparent", opacity: 0.55 }}
    icon={<ChevronLeftIcon color={Colors.onHeader} />}
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
        options={({ navigation }) => drawerHeaderOptions(
          () => navigation.dispatch(DrawerActions.openDrawer())
        )}
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
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.cardBorder,
        },
        // Center icons in the button now that labels are hidden.
        tabBarIconStyle: { flex: 1 },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTab.Group>
        <BottomTab.Screen
          name="RMHC Central Ohio"
          component={HomeScreen}
          options={{
            tabBarAccessibilityLabel: "Home",
            tabBarIcon: ({ color, size }) => <HomeIcon fill={color} width={size} height={size} accessible={false} />,
          }}
        />
        <BottomTab.Screen
          name="Find Us"
          component={FindUs}
          options={{
            tabBarAccessibilityLabel: "Find Us",
            tabBarIcon: ({ color, size }) => <LocationIcon fill={color} width={size} height={size} accessible={false} />,
          }}
        />
        <BottomTab.Screen
          name="Facilities"
          component={Facilities}
          options={{
            tabBarAccessibilityLabel: "Facilities",
            tabBarIcon: ({ color, size }) => <FloorPlanIcon fill={color} width={size} height={size} accessible={false} />,
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
              headerTitleStyle: {
                fontFamily: Fonts.Bold,
                color: Colors.onHeader,
                fontSize: 20,
              },
              headerStyle: {
                backgroundColor: Colors.header,
              },
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
            tabBarAccessibilityLabel: "Meals",
            tabBarIcon: ({ color, size }) => <MealsIcon fill={color} width={size * 1.25} height={size} accessible={false} />,
          }}
        />
        <BottomTab.Screen
          name="Updates"
          component={Updates}
          options={{
            tabBarAccessibilityLabel: "Updates",
            tabBarIcon: ({ color, size }) => <UpdatesIcon fill={color} width={size} height={size} accessible={false} />,
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
          options={({ navigation }) => ({
            ...HideTab,
            ...blueHeaderStyle,
            headerShown: true,
            headerTitle: "Staff Use",
            headerLeft: () => (
              <BackButton onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
                else navigation.navigate("RMHC Central Ohio");
              }} />
            ),
          })}
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
