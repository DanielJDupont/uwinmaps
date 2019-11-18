import React, { useState, useEffect, Fragment } from "react";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card
} from "semantic-ui-react";

import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import Swal from "sweetalert2";

import { uploadProfileImage } from "../../userActions";
import UserPhotos from "./UserPhotos";

const query = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "photos" }],
      storeAs: "photos"
    }
  ];
};

const actions = {
  uploadProfileImage
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos
});

const PhotosPage = ({ uploadProfileImage, photos, profile }) => {
  const [files, setFiles] = useState([]);
  const [cropResult, setCropResult] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
      URL.revokeObjectURL(cropResult);
    };
  }, [files, cropResult]);

  const handleUploadImage = async () => {
    try {
      await uploadProfileImage(image, files[0].name);

      toastr.success("Success", "Photo has been uploaded");
      Swal.fire({
        type: "success",
        title: "Success!",
        text: "Photo Uploaded",
        confirmButtonText: "Great!"
      });
    } catch (error) {
      toastr.error("Oops...", "Something went wrong!");
    }
  };

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
    setCropResult("");
  };

  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="blue" sub content="Step 1 - Add Photo" />
          <DropzoneInput setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="blue" content="Step 2 - Resize image" />
          {files.length > 0 && (
            <CropperInput
              imagePreview={files[0].preview}
              setImage={setImage}
              setCropResult={setCropResult}
            />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="blue" content="Step 3 - Preview & Upload" />
          {files.length > 0 && (
            <Fragment>
              <Image
                src={cropResult}
                style={{
                  minHeight: "200px",
                  minWidth: "200px"
                }}
              />
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  style={{ width: "100px" }}
                  positive
                  icon="check"
                />
                <Button
                  onClick={handleCancelCrop}
                  style={{ width: "100px" }}
                  icon="close"
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Column>
      </Grid>

      <Divider />
      <Header sub color="blue" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Button color="blue">Main Photo</Button>
        </Card>

        <Card>
          <Image src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <div className="ui two buttons">
            <Button basic color="blue">
              Main
            </Button>
            <Button basic icon="trash" color="red" />
          </div>
        </Card>
      </Card.Group>

      <Divider />
      <UserPhotos photos={photos} profile={profile} />
    </Segment>
  );
};

export default compose(
  connect(mapState, actions),
  firestoreConnect(auth => query(auth))
)(PhotosPage);
