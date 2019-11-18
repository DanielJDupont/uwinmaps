import React, { Fragment } from "react";
import { Divider, Header, Card, Button, Image } from "semantic-ui-react";

const UserPhotos = ({ photos, profile }) => {
  let filteredPhotos;

  if (photos) {
    filteredPhotos = photos.filter(photo => {
      return photo.url !== profile.photoURL;
    });
  }

  return (
    <Fragment>
      <Divider />
      <Header sub color="blue" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL} />
          <Button color="blue">Main Photo</Button>
        </Card>
        {photos &&
          filteredPhotos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <div className="ui two buttons">
                <Button basic color="blue">
                  Main
                </Button>
                <Button basic icon="trash" color="red" />
              </div>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
