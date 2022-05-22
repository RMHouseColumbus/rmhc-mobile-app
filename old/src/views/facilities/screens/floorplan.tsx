import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';
import BaseFooter from '../../shared/footer'
import * as Progress from 'react-native-progress';


import {NavigationScreenProps} from "react-navigation";
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

const source = {
    uri: "https://rmhc-central-oh.s3.us-east-2.amazonaws.com/floorplan_asset.pdf"
};

export interface FloorPlanNavigationScreenProps extends NavigationScreenProps {
}

export interface FloorPlanState {
    loaded: boolean,
    percent: number
}

export default class FloorPlan extends React.Component<FloorPlanNavigationScreenProps, FloorPlanState> {

    constructor(props: Readonly<FloorPlanNavigationScreenProps>) {
        super(props);
        setStatusBar(this, "#1c5ca3", 'light-content');
        this.state = {
            loaded: false,
            percent: 0
        }
    }

    static navigationOptions = {
        title: 'FLOOR PLAN',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    private updateLoad = (percent: number) => {
        this.setState({
            percent,
            loaded: false
        })
    };

    private doneLoad = () => {
        this.setState({
            loaded: true
        })
    };

    private progressBar = () => {
        const {percent, loaded} = this.state;
        const style = styles.floorProgressContainer;
        if(loaded){
            return null;
        }
        return (
            <View style={style}>
                <Progress.Bar progress={percent} width={400}/>
            </View>
        )

    };

    render() {
        return (
            <View style={styles.main}>
                <View style={{flex: 1}}>
                    {
                        this.progressBar()
                    }
                    <Pdf
                        onLoadProgress={this.updateLoad}
                        onLoadComplete={this.doneLoad}
                        source={source}
                        style={styles.pdf}
                    />
                </View>
                <View style={styles.footer}>
                    <BaseFooter navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1, backgroundColor: "#F1F1F1"
    },
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    welcomeText: {
        fontFamily: "Raleway-Regular",
        fontSize: 45,
        color: 'black'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
        flex: 0.1
    },
    floorProgressContainer: {
        top: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
