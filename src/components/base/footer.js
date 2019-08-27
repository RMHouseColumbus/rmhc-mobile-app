import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class BaseFooter extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon type="Ionicons" name='home' size={24}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon type="Ionicons" name='pin' size={24}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Facilities")}>
                <Icon type="Ionicons" name='map' size={24}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Meals")}>
            <Icon type="FontAwesome5" name='utensils' size={24}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Updates")}>
            <Icon type="SimpleLineIcons" name='bell' size={24}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}