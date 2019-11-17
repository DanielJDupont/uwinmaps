import React, { useState, useEffect } from "react";
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

const PhotosPage = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

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
            <CropperInput setImage={setImage} imagePreview={files[0].preview} />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="blue" content="Step 3 - Preview & Upload" />
          {files.length > 0 && (
            <div
              className="img-preview"
              src={files[0].preview}
              style={{
                minHeight: "200px",
                minWidth: "200px",
                overflow: "hidden"
              }}
            />
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
    </Segment>
  );
};

export default PhotosPage;
