import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal } from "./modalActions";
import LoginForm from "../auth/Login/LoginForm";

const actions = { closeModal };

class LoginModal extends Component {
  render() {
    return (
      <Modal
        size="mini"
        open={true}
        className="centered"
        onClose={this.props.closeModal}
      >
        <Modal.Header>Login tfo UWinMaps</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, actions)(LoginModal);
