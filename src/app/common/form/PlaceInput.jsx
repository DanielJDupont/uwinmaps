import React from "react";
import PlacesAutoComplete from "react-places-autocomplete";
import { Form, Label, Segment, List } from "semantic-ui-react";

function PlaceInput({
  input: { value, onChange, onBlur },
  width,
  options,
  placeholder,
  onSelect,
  meta: { touched, error }
}) {
  return (
    <PlacesAutoComplete
      value={value}
      onChange={onChange}
      searchOptions={options}
      onSelect={onSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Form.Field error={touched && !!error}>
          <input
            placeholder={placeholder}
            {...getInputProps({ placeholder, onBlur })}
          />
          {touched && error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          {suggestions.length > 0 && (
            <Segment
              style={{
                marginTop: 0,
                position: "absolute",
                zIndex: 1000,
                width: "100%"
              }}
            >
              {loading && <div>loading ...</div>}
              <List selection>
                {suggestions.map(sug => (
                  <List.Item {...getSuggestionItemProps(sug)}>
                    <List.Header>
                      {sug.formattedSuggestion.mainText}
                    </List.Header>
                    <List.Description>
                      {sug.formattedSuggestion.secondaryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </Form.Field>
      )}
    </PlacesAutoComplete>
  );
}

export default PlaceInput;
