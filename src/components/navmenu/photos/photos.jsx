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
import DropzoneInput from "./dropzoneInput";

const PhotosPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]); // files dependency

  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <DropzoneInput setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview & Upload" />
          {files.length > 0 && (
            <Image
              src={files[0].preview}
              style={{ minHeight: "200px", minWidth: "200px" }}
            />
          )}
        </Grid.Column>
      </Grid>

      <Divider />
      <Header sub color="teal" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <Button positive>Main Photo</Button>
        </Card>

        <Card>
          <Image src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <div className="ui two buttons">
            <Button basic color="green">
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
