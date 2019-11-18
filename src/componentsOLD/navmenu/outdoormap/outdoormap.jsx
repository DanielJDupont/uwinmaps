import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.3043,
      lng: -83.066,
    },
    zoom: 17,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY,
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={42.3043}
              lng={-83.066}
              text="University of Windsor"
            />
            <AnyReactComponent
              lat={42.305293}
              lng={-83.065379}
              text="Erie Hall Building"
            />
            <AnyReactComponent
              lat={42.304666}
              lng={-83.065755}
              text="University Welcome Centre"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
