import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AppActions } from "../../store/ducks/app";

import { Container, Wrapper } from "./styles";
/* Components */
import Logo from "../../components/utils/logo";
import { Formik } from "formik";

class Login extends Component {
  componentWillReceiveProps() {}

  handleLogin = async (values, actions) => {
    const { appActions } = this.props;
    const { email, password } = values;
    await appActions.authenticate(email, password);
    actions.resetForm({});
  };
  render() {
    const {
      app: { isLogged, user }
    } = this.props;
    if (isLogged && user.access === "ADMIN") {
      return <Redirect to="/admin" />;
    }
    return (
      <Container>
        <Wrapper>
          <Logo />
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={this.handleLogin}
            render={({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Seu e-mail"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Senha secreta"
                  name="password"
                  onChange={handleChange}
                />
                <button>Entrar</button>
              </form>
            )}
          />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
