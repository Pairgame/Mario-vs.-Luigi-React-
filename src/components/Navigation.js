import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import GameLogo from "material-ui/svg-icons/hardware/videogame-asset";
import FlatButton from "material-ui/FlatButton";
import signOut from "../actions/user/sign-out";


class Navigation extends PureComponent {
  signUp() {
    this.props.push("/sign-up");
  }

  goHome() {
    this.props.push("/");
  }

  render() {
    const { signedIn } = this.props;
    return (
      <AppBar
        title="Games"
        iconElementLeft={
          <IconButton onClick={this.goHome.bind(this)}>
            <GameLogo />
          </IconButton>
        }
        iconElementRight={
          signedIn
            ? <FlatButton label="Sign out" onClick={this.props.signOut} />
            : <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />
        }
      />
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
});

export default connect(mapStateToProps, { push, signOut })(Navigation);
