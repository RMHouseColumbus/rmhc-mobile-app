import * as React from "react"
import { View, Image, ImageStyle, ViewStyle } from "react-native"
import { icons, IconTypes } from "./icons"

export interface IconProps {
  style?: ImageStyle
  containerStyle?: ViewStyle
  icon?: IconTypes
}

const ROOT: ImageStyle = {
  resizeMode: "contain",
};

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props;
  const style: ImageStyle = { ...ROOT, ...styleOverride };

  return (
    <View style={containerStyle}>
      <Image style={style} source={icons[icon]} />
    </View>
  )
}
