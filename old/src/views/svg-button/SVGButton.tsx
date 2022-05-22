import * as React from "react";
import { GestureResponderEvent, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing } from "../shared/spacing";

interface SVGButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string,
    textOverride?: TextStyle,
    buttonOverride?: ViewStyle
}

const VIEW  : ViewStyle = {
    flex: 1,
    paddingBottom: 15
};

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
    fontFamily:'Raleway-SemiBold',
    alignSelf: 'flex-start',
    position: "absolute",
    left: 20,
    width: 180
};

export class SVGButton extends React.Component<SVGButtonProps, {}> {

    render() {

        const textStyle = {...TEXT, ...this.props.textOverride};
        const buttonStyle = {...PARENT, ...this.props.buttonOverride};

        return (
            <View style={VIEW}>
                <TouchableOpacity onPress={this.props.onPress} style={buttonStyle}>
                    <Text style={{flex: 1}}/>
                    <Text style={textStyle}>{this.props.text}</Text>
                    <View style={SVG}>{this.props.children}</View>
                </TouchableOpacity>
            </View>
        )
    }
}
