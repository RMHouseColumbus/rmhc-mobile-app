import * as React from "react"
import { View, ViewStyle, TextStyle, Button,Text } from "react-native"
import { spacing } from "../shared/spacing";
import { IconTypes } from "../icon/icons";
import { Icon } from "../icon/icon";

export interface HeaderProps {

    headerText?: string,
    leftIcon?: IconTypes,
    onLeftPress?(): void,
    rightIcon?: IconTypes,
    onRightPress?(): void,
    style?: ViewStyle,
    titleStyle?: TextStyle
}

// static styles
const ROOT: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    alignItems: "center",
    paddingTop: spacing[5],
    paddingBottom: spacing[5],
    justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export class Header extends React.Component<HeaderProps, {}> {
    render() {
        const {
            onLeftPress,
            onRightPress,
            rightIcon,
            leftIcon,
            headerText,
            titleStyle,
        } = this.props;
        const header = headerText || "";

        return (
            <View style={{ ...ROOT, ...this.props.style }}>
                {leftIcon ? (
                    <Button title={"back"} onPress={onLeftPress} >
                        <Icon icon={leftIcon} />
                    </Button>
                ) : (
                    <View style={LEFT} />
                )}
                <View style={TITLE_MIDDLE}>
                    <Text style={{ ...TITLE, ...titleStyle }}>
                        {header}
                    </Text>
                </View>
                {rightIcon ? (
                    <Button title={"forward"} onPress={onRightPress}>
                        <Icon icon={rightIcon} />
                    </Button>
                ) : (
                    <View style={RIGHT} />
                )}
            </View>
        )
    }
}