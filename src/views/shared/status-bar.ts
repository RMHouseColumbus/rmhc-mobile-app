import {StatusBar} from "react-native";
import React from "react";
import {NavigationScreenProps} from "react-navigation";

export function setStatusBar(component: React.Component<NavigationScreenProps>, color: string) {
    component.props.navigation.addListener('willFocus', payload => {
            StatusBar.setBackgroundColor(color, true);
            StatusBar.setBarStyle('dark-content', true);
        }
    );
}
