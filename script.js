// this is the javascript for the googlemaps api site

function initMap() {
	if (!navigator.geolocation) {
		map.innerHTML = "This browser does not support fun :(";
		lats.innerHTML = "Geolocation is not supported by this browser.";
	}

	function sucess(position){
		var lats = document.getElementById("lats");
		var long = document.getElementById("long");
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var location = {lat: latitude, lng: longitude};
		var map = new google.maps.Map(document.getElementById('map'),{
			zoom: 12,
			center: location
		});
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});

		lats.innerHTML = '<p>Your Latitude is: ' + latitude + '°</p>';
		long.innerHTML = '<p>Your Longitude is: ' + longitude + '°</p>';

	}

	function error(){
		var map = document.getElementById('map');
		map.innerHTML = "Error! NO MAPS FOR YOU!";
		lats.innerHTML = "<p>Unable to retrieve your latitude</p>";
		long.innerHTML = "<p>Unable to retrieve your longitude</p>";
	}

	lats.innerHTML = "<p>Connecting...</p>";
	long.innerHTML = "<p>Locating...</p>";
	map.innerHTML = "<p>Drawing...</p>";

	navigator.geolocation.getCurrentPosition(sucess, error);
}