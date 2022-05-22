'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
    card: {
        marginLeft: "7%",
        marginRight: "7%",
        width: "86%",
        borderRadius: 15
    },

    textType: {
        fontFamily: "Raleway-Regular",
        fontSize: 12,
        color: 'black'
    },
    textTitle: {
        fontFamily: "Raleway-Regular",
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    },
    textContent: {
        marginTop: "1%",
        fontFamily: "Raleway-Regular",
        fontSize: 14,
        color: 'black'
    }
});
