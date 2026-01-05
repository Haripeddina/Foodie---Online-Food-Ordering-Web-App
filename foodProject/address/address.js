let locationButton = document.getElementById("currentLocation");
let map;
let form = document.querySelector("form");
locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((value) => {
    let lat = value.coords.latitude;
    let lon = value.coords.longitude;
    // console.log(lat);
    // console.log(lon);
    if (map) {
      map.remove();
    }
    map = L.map("map").setView([lat, lon], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([lat, lon]).addTo(map).bindPopup("Your Location").openPopup();

    var requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=3a04aa59cd67445d8284ca1fe7b07328`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let state = document.getElementsByName("state");
        let city = document.getElementsByName("city");
        let pincode = document.getElementsByName("pincode");
        console.log(state);
        state[0].value = result.features[0].properties.state;
        city[0].value = result.features[0].properties.city;
        pincode[0].value = result.features[0].properties.postcode;
        console.log(result.features[0].properties.state);
        console.log(result.features[0].properties.city);
        console.log(result.features[0].properties.postcode);
      })
      .catch((error) => console.log("error", error));
  });
});

form.addEventListener("submit", () => {
  alert("Your order successfully placed ");
  location.replace("../homepage/index.html");
});
