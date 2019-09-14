import React, {Component} from 'react';
import {Button, Footer, FooterTab} from 'native-base';
import {StyleSheet} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import Bell from "./assets/bell_icon.svg"
import FloorPlan from "./assets/floorplan_icon.svg";
import Location from "./assets/location_icon.svg";
import HomeIcon from "./assets/home_icon.svg";
import MealIcon from "./assets/meals_icon.svg";

export interface FooterScreenProps extends NavigationScreenProps {

}

export interface FooterScreenState {
    routeName: string
}


export default class BaseFooter extends Component <FooterScreenProps, FooterScreenState> {
    constructor(props) {
        super(props);
        this.state = {
            routeName: ""
        }
    }

    tab(route: string, icon: JSX.Element) {

        return (
            <Button key={route}
                    onPress={() => this.props.navigation.navigate(route)}
                    style={{backgroundColor: "transparent"}}
            >
                {icon}
            </Button>
        )
    }

    fillFunction = (route : string) => {

        const routeName = this.props.navigation.state.routeName;
        const active = routeName === route;
        return active ? 'red' : 'black';
    };

    tabs() {

        return [
            {
                route: "Home",
                icon: <HomeIcon fill={this.fillFunction("Home")} {...styles.homeSvg}/>,
            },
            {
                route: "FindUs",
                icon: <Location fill={this.fillFunction("FindUs")} {...styles.findUsSvg}/>,
            },
            {
                route: "Facilities",
                icon: <FloorPlan fill={this.fillFunction("Facilities")} {...styles.facilitiesSvg}/>,
            },
            {
                route: "Meals",
                icon: <MealIcon fill={this.fillFunction("Meals")} {...styles.mealSvg}/>,
            },
            {
                route: "Updates",
                icon: <Bell fill={this.fillFunction("Updates")} {...styles.updatesSvg}/>,
            }
        ];
    }

    render() {

        return (
            <React.Fragment>
                <Footer>
                    <FooterTab style={styles.footer}>
                        {
                            this.tabs().map(tab => {
                                return this.tab(tab.route, tab.icon)
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
    },
    footer: {
        backgroundColor: '#F9F9F9'
    },
    homeSvg: {
        height:"23",
        width: "23"
    },
    findUsSvg: {
        height:"23",
        width: "23"
    },
    facilitiesSvg: {
        height:"23",
        width: "23"
    },
    mealSvg: {
        height:"23",
        width: "35.4"
    },
    updatesSvg:{
        height:"23",
        width: "18.7"
    }
});
