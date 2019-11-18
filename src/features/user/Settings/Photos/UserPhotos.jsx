import React, { Fragment } from "react";
import { Divider, Header, Card, Button, Image } from "semantic-ui-react";

const UserPhotos = ({ photos, profile, deletePhoto, setMainPhoto }) => {
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
          <Image
            src={
              profile.photoURL ||
              "https://images.pexels.com/photos/948331/pexels-photo-948331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
          />
          <Button color="blue">Main Photo</Button>
        </Card>
        {photos &&
          filteredPhotos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <div className="ui two buttons">
                <Button
                  onClick={() => setMainPhoto(photo)}
                  icon="chevron up"
                  basic
                  color="blue"
                />
                <Button
                  onClick={() => deletePhoto(photo)}
                  basic
                  icon="trash"
                  color="red"
                />
              </div>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
