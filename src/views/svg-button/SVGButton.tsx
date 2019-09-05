import * as React from "react";
import { GestureResponderEvent, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing } from "../shared/spacing";

interface SVGButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string
}

const VIEW  : ViewStyle = {
    flex: 1,
    paddingBottom: 15
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
    alignContent: 'flex-end',
    justifyContent: 'flex-end'
};

const TEXT: TextStyle = {
    fontSize: 25,
    // flex: 1,
    paddingTop: 22,
    alignSelf: 'flex-start',
    position: "absolute",
    left: 20,
    width: 180
};

export class SVGButton extends React.Component<SVGButtonProps, {}> {
    render() {
        return (
            <View style={VIEW}>
                <TouchableOpacity onPress={this.props.onPress} style={PARENT}>
                    <Text style={{flex: 1}}></Text>
                    <Text style={TEXT}>{this.props.text}</Text>
                    <View style={SVG}>{this.props.children}</View>
                </TouchableOpacity>
            </View>
        )
    }
}
