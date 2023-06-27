const cityFormEl = document.querySelector("#city-form");
const cityInputEl = document.querySelector("#city-name");
const forecastContainerEl = document.querySelector("#forecase-container");
const citySearchResult = document.querySelector("#city-search-result");

function coordinateApi (lat, lon) {
    console.log(lat, lon);
    let weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=5&appid=aeccee0135d3897dac48165b89fd0c1e&units=imperial";
    
    fetch(weatherApi)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);
    })
}


    function cityApi(cityName){
        let cityApi = "https://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid=aeccee0135d3897dac48165b89fd0c1e";
        fetch(cityApi)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let lat = data[0].lat;
            let lon = data[0].lon;
            console.log(lat,lon);
            coordinateApi(lat, lon);
        })
  }


  let formSearchHandler = function (event) {

    event.preventDefault();

    let previousSearch = cityInputEl.value.trim();

    if(previousSearch) {
        cityApi(previousSearch);
        cityInputEl.value = "";
    } else {
        alert("Please search for a City");
    }
  };


cityFormEl.addEventListener("submit", formSearchHandler)