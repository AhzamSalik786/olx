import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect, useDispatch, useSelector } from 'react-redux'

const mapStyles = {
  width: '100%',
  height: '100%',
}

class MapScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
    }
  }
  
  // bag = useSelector((state) => state.bag)
  // { shippingLocation } = bag
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.currentLocation.latitude? this.props.currentLocation.latitude : 24.8607,
            lng: this.props.currentLocation.longitude? this.props.currentLocation.longitude : 67.0011,
            
            
          }}
          center={{
            lat: this.props.currentLocation.latitude,
            lng: this.props.currentLocation.longitude,
          }}
          >
          <Marker
            onClick={this.onMarkerClick}
            name={'Xord'}
            position={{
              lat: this.props.currentLocation.latitude,
              lng: this.props.currentLocation.longitude,
            }}
            />
        </Map>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  // console.log("aaabbb", this.props.currentLocation.latitude)
  console.log('state', state.sellProductList.currentLocation)
  return {
    currentLocation: state.sellProductList.currentLocation
      ? state.sellProductList.currentLocation
      : '',
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    // dispatchName: (data) => dispatch(reducer(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyDIh8kBv6YPNLX2mqojWNLcGXb2sD67480',
  })(MapScreen)
)