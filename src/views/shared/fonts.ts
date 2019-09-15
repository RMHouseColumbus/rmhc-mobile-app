import { TextStyle, Platform, Dimensions } from "react-native";

export const CONTENTSTYLE : TextStyle = {
    fontWeight: 'bold',
    fontFamily: "Raleway-Bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 1,
};

export const TEXTSTYLE : TextStyle = {
    fontFamily: "Raleway-Regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 1,
};

export const LINKSTYLE : TextStyle = {
    color: "#0078d7",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 15
};

export const TITLE: TextStyle = {
    fontWeight: 'bold',
    fontFamily: "Raleway-Bold",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom: 20
};

export const PAGETITLE: TextStyle = {
    color: '#000000',
    fontFamily: "Raleway-Regular",
    fontSize: 20
}

export const HEADERSTYLEWHITE: TextStyle = {
    backgroundColor: `#FFFFFF`,
    height: 65
}

export const HEADERSTYLEBLUE: TextStyle = {
    backgroundColor: `#1c5ca3`,
    height: 65
}

export const HEADERTITLESTYLEWHITE: TextStyle = {
    color: `#FFFFFF`,
    fontSize: 24,
    fontFamily: "Raleway-Regular",
    width : Dimensions.get('window').width,
    ...Platform.select({
        android: {
            textAlign: "center", flex:.8
        }})
   
}

export const HEADERTITLESTYLEBLACK: TextStyle = {
    color: `#000000`,
    fontSize: 24,
    fontFamily: "Raleway-Regular",
    width : Dimensions.get('window').width,
    ...Platform.select({
        android: {
            textAlign: "center", flex:.8
        }})
}