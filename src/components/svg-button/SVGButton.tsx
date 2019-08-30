import * as React from "react";
import { GestureResponderEvent, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing } from "../shared/spacing";

interface SVGButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string
}

const VIEW  : ViewStyle = {
    flex: 1,
}

const PARENT  : ViewStyle = {
    marginBottom: spacing[1],
    flexDirection : 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingLeft: 20
};

const SVG : ViewStyle = {
    alignSelf: 'flex-end',
    alignContent: 'flex-end'
};

const TEXT: TextStyle = {
    fontSize: 25,
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingTop: 19
};

export class SVGButton extends React.Component<SVGButtonProps, {}> {
    render() {
        return (
            <View style={VIEW}>
                <TouchableOpacity onPress={this.props.onPress} style={PARENT}>
                    <Text style={TEXT}>{this.props.text}</Text>
                    <View style={SVG}>{this.props.children}</View>
                </TouchableOpacity>
            </View>
        )
    }
}
