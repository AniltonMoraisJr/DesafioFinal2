import React, { Component } from "react";

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar
} from "react-native";

import fundo from "../../assets/images/fundo.jpg";
import logo from "../../assets/images/logo.png";

import { Container, Input, CustomButton } from "./styles";

import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  logo: {
    height: 72,
    marginVertical: Dimensions.get("window").height * 0.02,
    width: 72
  }
});

class SignUp extends Component {
  handleOnPress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Container source={fundo} resizeMode="cover">
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)"]}
          style={styles.container}
        >
          <Image source={logo} style={styles.logo} />
          <Input placeholder="Nome completo" placeholderTextColor="#999999" />
          <Input placeholder="Seu e-mail" placeholderTextColor="#999999" />
          <Input
            placeholder="Senha secreta"
            placeholderTextColor="#999999"
            secureTextEntry
          />
          <CustomButton>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
              Criar conta
            </Text>
          </CustomButton>
          <Button
            color="#fff"
            title="Já tenho login"
            onPress={this.handleOnPress}
          />
        </LinearGradient>
      </Container>
    );
  }
}

export default SignUp;
