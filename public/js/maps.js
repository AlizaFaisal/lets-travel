// JAVASCRIPT


// APP ID
// eZYrSkkMTUNP8E7Vs7m6
// Create a Platform object (one per application):
let platform = new H.service.Platform({
    'app_id': 'CNROc8gRYVSqbIz8zTpX',
    'app_code': 'amW9mGjJ4VnGxN_Ynj5nUg'
    // 'apikey': 'Mx9Z2MwGZV4tqEBIBwgFQNhMS7bMJWvhGwvkRjyt2IQ'
});

/**
 * Calculates and displays the location of the 'Eiffel Tower'
 * using a landmark geocoding search
 *
 *
 * A full list of available request parameters can be found in the Geocoder API documentation.
 * see: http://developer.here.com/rest-apis/documentation/geocoder/topics/resource-search.html
 *
 */
function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    let geocoder = platform.getGeocodingService(),
        landmarkGeocodingParameters = {
            searchtext: title,
            jsonattributes: 1
        };

    geocoder.search(
        landmarkGeocodingParameters,
        showMap,
        (e) => console.log(e)
    );
}


// Instantiate the map using the vecor map with the
// default style as the base layer:
function showMap(result) {
    let location = result.response.view[0].result[0].place.locations[0].displayPosition;
    // console.log(location);
    // Get an object containing the default map layers:
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(document.querySelector('.map'),
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: location.latitude, lng: location.longitude }
        });
    /**
* Adds markers to the map highlighting the locations
*/
    let marker = new H.map.Marker({ lat: location.latitude, lng: location.longitude });
    map.addObject(marker);

    //for map controls
    var ui = H.ui.UI.createDefault(map, defaultLayers);
}
landmarkGeocode();