/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DrawerScreenProps } from "@react-navigation/drawer";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type HospitalStackScreenProps<Screen extends keyof HospitalStackList> =
  NativeStackScreenProps<HospitalStackList, Screen>;

export type NeighborhoodStackScreenProps<
  Screen extends keyof NeighborhoodStackList
> = NativeStackScreenProps<NeighborhoodStackList, Screen>;

export type AboutStackScreenProps<Screen extends keyof AboutStackList> =
  NativeStackScreenProps<AboutStackList, Screen>;

export type YourStayStackScreenProps<Screen extends keyof YourStayStackList> =
  NativeStackScreenProps<YourStayStackList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  FindUs: undefined;
  Facilities: undefined;
  Meals: undefined;
  Updates: undefined;
  Activities: undefined;
  "In Hospital Services": undefined;
  Neighborhood: undefined;
  About: undefined;
  YourStay: undefined;
};

export type HospitalStackList = {
  Hospitals: undefined;
  Riverside: undefined;
  BHP: undefined;
};

export type NeighborhoodStackList = {
  NeighborhoodHome: undefined;
  Delivery: undefined;
  Transportation: undefined;
};

export type AboutStackList = {
  AboutHome: undefined;
  "Stay Involved": undefined;
  "Care Mobile": undefined;
  "Family Room": undefined;
};

export type YourStayStackList = {
  YourStayHome: undefined;
  Before: undefined;
  During: undefined;
  After: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    DrawerScreenProps<RootStackParamList>
  >;
