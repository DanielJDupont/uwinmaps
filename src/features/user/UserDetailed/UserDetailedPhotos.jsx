import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const UserDetailedPhotos = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />
        <Image.Group size="small">
          {photos &&
            photos.map(photo => (
              <LazyLoad
                key={photo.id}
                height={150}
                placeholder={
                  <Image src="https://images.pexels.com/photos/948331/pexels-photo-948331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                }
              >
                <Image src={photo.url} />
              </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;
