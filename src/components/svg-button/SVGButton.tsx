import * as React from "react";
import { GestureResponderEvent, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing } from "../shared/spacing";

interface SVGButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string
}

const VIEW  : ViewStyle = {
    marginBottom: spacing[1],
    flex: 1,
    justifyContent: "space-evenly"
};

const SVG : ViewStyle = {
    flexDirection : 'row',
    width: 333,
    height: 81,
    backgroundColor: '#FFFFFF',
};

const BOLD: TextStyle = { fontWeight: "bold" };

const TEXT: TextStyle = {
    ...BOLD,
    fontSize: 15,
    lineHeight: 38,
    textAlign: "center",
    maxWidth: 162
};

export class SVGButton extends React.Component<SVGButtonProps, {}> {
    render() {
        return (
            <View style={VIEW}>
                <TouchableOpacity onPress={this.props.onPress} style={SVG}>
                    <Text style={TEXT}>{this.props.text}</Text>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}