import React from 'react';
import { ViewStyle, View, TouchableOpacity } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { ContentService } from '../../services/ContentService';
import { Text } from 'native-base';
import LeftArrow from '../../images/left_arrow.svg';
import { getStatusBar } from '../../components/shared/statusBar';
import { CONTENTSTYLE, LINKSTYLE, TEXTSTYLE } from '../../components/shared/fonts';
import { spacing } from "../../components/shared/spacing";


const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};

interface BeforeProps extends NavigationScreenProps{}

interface BeforeState {
    isLoading: boolean,
    beforeData: any
}

export default class Before extends React.Component<BeforeProps, BeforeState> {

    static navigationOptions = {
        title: 'Before Your Stay'
    };

    public constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            beforeData: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("before")
            .then((result) => {
                this.setState({
                    isLoading: false,
                    beforeData: result.content.Before
                })
            }
        );
    }

    render(){

        const isLoading = this.state.isLoading;
        const beforeData = this.state.beforeData;
        const backTo = () => this.props.navigation.navigate("Faq");

        return (
            <View style={FULL}>
                {
                    getStatusBar()
                }
                <View>
                    <TouchableOpacity style={{ height: 50, flexDirection: 'row' }} onPress={backTo}>
                        <LeftArrow stle={{ flex: 1 }} width={20} height={20}/>
                        <Text style={{ flex: 1, marginLeft: 5 }}>Back</Text>
                    </TouchableOpacity>
                    <View style={SECTION}>
                        <Text style={TEXTSTYLE}>fakeText</Text>
                    </View>
                </View>
            </View>
        )
    }    
}

const SECTION: ViewStyle = {
    marginTop: spacing[5]
}

// const SECTION: ViewStyle = {
//     marginTop: spacing[5]
// };