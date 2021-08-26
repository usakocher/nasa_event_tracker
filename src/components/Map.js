import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import FireMarker from './FireMarker';
import LocationInfoBox from './LocationInfoBox';
import StormMarker from './StormMarker';

const API_KEY = process.env.REACT_APP_API_KEY

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }else if(ev.categories[0].id === 10){
            return <StormMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }
        return null
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 
                    API_KEY}}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
