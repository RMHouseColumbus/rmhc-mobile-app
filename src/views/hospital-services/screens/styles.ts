import { TextStyle, Platform, Dimensions } from "react-native";
export const titleStyle: TextStyle = {
    color: `#000000`,
    fontSize: 20,
    fontFamily: "Raleway-Regular",
    width : Dimensions.get('window').width,
    ...Platform.select({
        android: {
            textAlign: "center", flex:.8
        }})
}