import React from "react";
import {
  Button,
  Divider,
  Form,
  Header,
  Segment,
  TextArea
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import RadioInput from "../../../app/common/form/RadioInput";
import SelectInput from "../../../app/common/form/SelectInput";
import TextInput from "../../../app/common/form/TextInput";
import PlaceInput from "../../../app/common/form/PlaceInput";

const interests = [
  { key: "tech", text: "Tech", value: "tech" },
  { key: "business", text: "Business", value: "business" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your profile to get the most out of UWinMaps.</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <label>Tell us your education: </label>
        <Form.Group inline>
          <Field
            name="educationStatus"
            component={RadioInput}
            type="radio"
            value="bachelor"
            label="Bachelor"
          />
          <Field
            name="educationStatus"
            component={RadioInput}
            type="radio"
            value="masters"
            label="Masters"
          />
          <Field
            name="educationStatus"
            component={RadioInput}
            type="radio"
            value="phd"
            label="PhD"
          />
          <Field
            name="educationStatus"
            component={RadioInput}
            type="radio"
            value="faculty"
            label="Faculty"
          />
          <Field
            name="educationStatus"
            component={RadioInput}
            type="radio"
            value="other"
            label="Other"
          />
        </Form.Group>
        <Divider />
        <label>Tell us about yourself:</label>
        <Field
          name="about"
          type="text"
          component={TextArea}
          placeholder="About Me"
        />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />
        <Field
          width={8}
          name="origin"
          options={{ types: ["(regions)"] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />
        <Button
          disabled={pristine || submitting}
          size="large"
          color="blue"
          content="Update Profile"
        />
      </Form>
    </Segment>
  );
};

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(AboutPage);
