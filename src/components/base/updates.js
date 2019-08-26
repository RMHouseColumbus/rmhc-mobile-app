import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base'



const content = require('../../services/content.json');
export default class Updates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            updates:content.updates.content
        }
    }

    static navigationOptions = {

        title: 'Updates',  
        headerStyle: {
            backgroundColor: '#FFFFFF',
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
                
            <Content style={main.body}>
               
                   {
                       this.state.updates.map((item, index)=>{
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