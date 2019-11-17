import React from "react";
import { Form, Segment, Button, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { TextInput } from "../../../app/common/form/TextInput";

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="blue">
            Register
          </Button>
          <Divider horizontal>OR</Divider>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({ form: "registerForm" })(RegisterForm);
