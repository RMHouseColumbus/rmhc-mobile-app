import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

export default class BaseFooter extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <React.Fragment>
      <Container style={{color:"#000000"}} >
        <Content />
        <Footer>
          <FooterTab style={styles.footer}>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon type="Ionicons" name='home' size={24}  style={styles.icon}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon type="Ionicons" name='pin' size={24}  style={styles.icon}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Facilities")}>
                <Icon type="Ionicons" name='map' size={24}  style={styles.icon}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Meals")}>
            <Icon type="FontAwesome5" name='utensils' size={24}  style={styles.icon}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Updates")}>
            <Icon type="SimpleLineIcons" name='bell' size={24}  style={styles.icon}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  icon:{color:"#000000"},
  footer:{backgroundColor:"#FFFFFF"
  } 
});
