import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';

export class MainHeader extends React.Component {
  render() {
    return (
      <Header style={styles.container}>
        <StatusBar
          backgroundColor="#FCCB00"
          barStyle="dark-content" />
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
  container: {
    backgroundColor: '#FCCB00'
    
  },
  headerText:{
    fontFamily:"sans-serif-thin",
    fontSize:35,
    color:'#000000'
  }
});