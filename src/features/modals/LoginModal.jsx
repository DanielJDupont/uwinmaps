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
        style={{ position: "static", height: "325px" }}
        size="mini"
        open={true}
        onClose={this.props.closeModal}
      >
        <Modal.Header>Login to UWinMaps</Modal.Header>
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
