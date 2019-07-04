import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Creators as AppActions } from "../../store/ducks/app";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/pt-br";
import { Container, TopBar } from "./styles";
import Logo from "../../components/utils/logo";

class Admin extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    const {
      app: { user }
    } = this.props;
    moment.locale("pt-br");
    const orders = user.orders.map(order => {
      order.time = moment(order.created_at).fromNow();
      return order;
    });
    console.log(orders);
    this.setState({
      orders
    });
  }

  handleLogout = () => {
    const { appActions } = this.props;
    appActions.logout_user();
  };

  render() {
    const {
      app: { isLogged, user }
    } = this.props;
    if (!isLogged) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <TopBar>
          <div>
            <Logo />
            <span className="title">Pizzaria Don Juan</span>
          </div>
          <div className="userInfo">
            <span className="userName">{user.username}</span>
            <span className="logout" onClick={this.handleLogout}>
              Sair
            </span>
          </div>
        </TopBar>
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
  )(Admin)
);
