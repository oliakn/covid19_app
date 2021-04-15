// import React, {useState} from 'react';
// import ReactMapGL, {Marker} from 'react-map-gl'
// import * as parkDate from '../data/skateboard-parks.json'
// export default function Map() {
//     const [viewport, setViewport] = useState({
//         width: '100vw',
//         height: 400,
//         latitude: 37.7577,
//         longitude: -122.4376,
//         zoom: 8
//     });
//
//     return (
//         <>
//             <ReactMapGL
//                 {...viewport}
//                 mapboxApiAccessToken={"pk.eyJ1Ijoib2xpYWtuIiwiYSI6ImNrbmY0MGFvdzF4dG0yd2xjbmVrd2syMnkifQ.XfcVNRX_NwzjEUHajTDvqQ"}
//                 mapStyle="mapbox://styles/oliakn/cknf4fof93lkb17n0mjpdszk4"
//                 onViewportChange={viewport => {
//                     setViewport(viewport)
//                 }}
//             />
//             {
//                 parkDate.features.map(park => (
//                     <Marker longitude={park.geometry.coordinates[0]} latitude={park.geometry.coordinates[1]}></Marker>
//                 ))
//             }
//             </>
//     );
// }