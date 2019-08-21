import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base'
import { MainHeader } from '../components/header.js';


const content = require('../services/content.json');
export default class Updates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            content:content.content
        }
    }
    //TODO Uncomment when ready to call the data from S3
    // componentDidMount() {
    //     return fetch("")
    //         .then( (response) =>response.json() )
    //         .then( (responseJson) =>{
    //             this.setState({
    //                 isLoading:false,
    //                 content:responseJson.content
    //             })
    //         })
    //         .catch((error)=> {
    //             console.log(error)
    //     });
    
            
    // }


    render() {
       
        if(this.state.isLoading){
            return(
                <View style={{ flex: 1 }}>
                <MainHeader title="Updates" navigation={this.props.navigation} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={main.container}>
                       <ActivityIndicator />
                    </View>
                </View>
            </View>
            )
        }else{
            return(
            <Container>
                <MainHeader title="Updates" navigation={this.props.navigation} />
            <Content style={main.body}>
               
                   {
                       this.state.content.map((item, index)=>{
                           return (
                            <Card  key={index} style={main.card}>
                               <CardItem bordered key={index} style={{borderRadius:20}}>
                                   <View>
                                       <Text style={main.textType}>{item.type}</Text>
                                       <Text style={main.textTitle}>{item.title}</Text>
                                       <Text style={main.textContent}>{item.text}</Text>
                                   </View>
                               </CardItem>
                               </Card>
                           )
                       })
                   }
               
           </Content>
         </Container>
            )
        }

    }
}

const main = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        top:50
    },
    text:{
        fontFamily:"sans-serif",
        fontSize:20,
        color:'black'
    },
    card:{
        marginLeft:"7%",
        marginRight:"7%",
        top:"2%",
        width:"86%" 
    },
    body:{ flex: 1, backgroundColor:"#FCCB00"},
    textType:{
        fontFamily:"sans-serif",
        fontSize:12,
        color:'black'
    },
    textTitle:{
        fontFamily:"sans-serif",
        fontSize:20,
        color:'black',
        fontWeight:"bold"
    },
    textContent:{
        marginTop:"1%",
        fontFamily:"sans-serif",
        fontSize:14,
        color:'black'
    },
});
