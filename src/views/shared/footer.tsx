import React, {Component} from 'react';
import {Button, Footer, FooterTab, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

export interface FooterScreenProps extends NavigationScreenProps {

}

export interface FooterScreenState {
    routeName: string
}

const tabs = [
    {
        route: "Home",
        icon: "home",
        type: "Ionicons"
    },
    {
        route: "FindUs",
        icon: "pin",
        type: "Ionicons"
    },
    {
        route: "Facilities",
        icon: "map",
        type: "Ionicons"
    },
    {
        route: "Meals",
        icon: "utensils",
        type: "FontAwesome5"
    },
    {
        route: "Updates",
        icon: "bell",
        type: "FontAwesome5"
    }
];

export default class BaseFooter extends Component <FooterScreenProps, FooterScreenState> {
    constructor(props) {
        super(props);
        this.state = {
            routeName: ""
        }
    }

    tab(route: string, icon: string, type: string) {

        const routeName = this.props.navigation.state.routeName;
        const active = routeName === route;
        const color = active ? 'red' : 'black';
        const style = {
            ...styles.icon,
            color
        };
        return (
            <Button key={route}
                    onPress={() => this.props.navigation.navigate(route)}
                    active={active}
                    style={{backgroundColor: "transparent"}}
            >
                <Icon type={type} name={icon} style={style}/>
            </Button>
        )
    }

    render() {

        return (
            <React.Fragment>
                <Footer>
                    <FooterTab style={{backgroundColor: '#F9F9F9'}}>
                        {
                            tabs.map(tab => {
                                return this.tab(tab.route, tab.icon, tab.type)
                            })
                        }
                    </FooterTab>
                </Footer>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: "#000000"
    }
});
