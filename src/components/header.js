import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, Left, Body, Title, Icon } from 'native-base';



export class MainHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        headerStyle:["updates"].includes(this.props.title.toLowerCase()) ? styles.whiteContainer : styles.yellowContainer,
        statusBarStyleColor:["updates"].includes(this.props.title.toLowerCase()) ? "#FFFFFF" : "#FCCB00"
        
    }
}

  render() {
    return (
      <Header style={this.state.headerStyle}>
        <StatusBar barStyle="dark-content" backgroundColor={this.state.statusBarStyleColor} />
        <Left>
          <Icon type="Ionicons" name='menu' size={30} onPress={this.props.navigation.openDrawer}/>
        </Left>
        <Body>
          <Title style={styles.headerText}>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  yellowContainer: {
    backgroundColor: '#FCCB00'
    
  },
  whiteContainer: {
    backgroundColor: '#FFFFFF'
    
  },
  yellowStatusBar:{
    backgroundColor:"#FCCB00"
  },
  whiteStatusBar:{
    backgroundColor:"#FFFFFF",
    
  },

  headerText:{
    fontFamily:"sans-serif-thin",
    fontSize:35,
    color:'#000000'
  }
});