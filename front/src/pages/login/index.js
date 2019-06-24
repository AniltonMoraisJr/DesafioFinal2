import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Wrapper } from "./styles";
/* Components */
import Logo from "../../components/utils/logo";

class Login extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Logo />
          <form>
            <input type="text" placeholder="Seu e-mail" />
            <input type="password" placeholder="Senha secreta" />
            <button>Entrar</button>
          </form>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Login);
