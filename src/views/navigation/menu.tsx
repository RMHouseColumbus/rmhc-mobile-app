import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Image } from 'react-native'
import Facebook from "./assets/facebook.svg";
import Linkedin from "./assets/linkedin.svg";
import Youtube from "./assets/youTube.svg";
import Twitter from "./assets/twitter.svg";
import { NavigationScreenProps } from "react-navigation";



export default class Menu extends React.Component<NavigationScreenProps, {}> {

    public constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 8, borderColor: 'black' }}>
                    {this.navLink("Home", "Home")}
                    {this.navLink("Updates", "Updates")}
                    {this.navLink("Meals", "Meals")}
                    {this.navLink("Activities", "Activities")}
                    {this.navLink("Facilities", "Facilities/Floor Plan")}
                    {this.navLink("Neighborhood", "Neighborhood Guide")}
                    {this.navLink("About", "About")}
                    {this.navLink("Faq", "FAQ")}
                    <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity={.5}
                        onPress={() => Linking.openURL("http://rmhc-centralohio.org/app_donation_page/")}>
                        <Text style={styles.TextStyle}>Donate</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkRow}>
                
                <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/RMHCofCentralOhio")}>
                <Facebook {...SVG}/></TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL("https://www.linkedin.com/company/rmhccolumbus")}>
                <Linkedin {...SVG}/></TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL("https://www.youtube.com/user/RMHCofCentralOhio")}>
                <Youtube {...SVG}/></TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL("https://twitter.com/RMHCofCentralOH")}>
                <Twitter {...SVG}/></TouchableOpacity>
                </View>
               
            </View>
        )
    }

    private navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => this.navigateAndCloseDrawer(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    private navigateAndCloseDrawer(nav) {
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(nav);
    }
}
const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
        color: 'black'
    },
    linkRow:{flex:2, flexDirection:'row', justifyContent:"space-between", marginLeft:'7%',width:'80%'},
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    SubmitButtonStyle: {

        marginTop: 5,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 12,
        marginRight: 25,
        backgroundColor: '#0077B5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});