import { celsiusToFahrenheit, fahrenheitToCelsius } from "./function.js";

const mainDiv = document.querySelector('.main');
const resultsDiv = document.querySelector('.results');
const backBtn = document.querySelector('.back-btn');

const city_name = document.querySelector('.city input');
const search_btn = document.querySelector('.city button');
const img = document.querySelector('.icon');

async function weather(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=AD6ZKJQSYHRB39KM7DNWKBCS9`);
        console.log(response);

        const cityData = await response.json();
        console.log(cityData);
        displayData(cityData);
        card(cityData);
        img.src = icon(cityData.days[0].icon);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

search_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (city_name.value.trim() !== "") {
        weather(city_name.value.trim());
        localStorage.setItem('lastCity', city_name.value.trim());
    }
    city_name.value = "";
});

city_name.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && city_name.value.trim() !== "") {
        weather(city_name.value.trim());
        localStorage.setItem('lastCity', city_name.value.trim());
        city_name.value = "";
    }
});

// _____________________________display result_______________________________
function displayData(cityData) {
    document.querySelector('.city-name').textContent = cityData.address;
    document.querySelector('.weather-description').textContent = cityData.description || 'Description unavailable';
    document.querySelector('.temperature').textContent = `${fahrenheitToCelsius(cityData.days[0].temp)}`;
    document.querySelector('.humidity_VALUE').textContent = `${cityData.currentConditions.humidity}%`;
    document.querySelector('.wind_VALUE').textContent = `${cityData.currentConditions.windspeed} km/h`;

    mainDiv.style.display = 'none';
    resultsDiv.style.display = 'flex';
}

backBtn.addEventListener('click', () => {
    resultsDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
});



// _______________________edit cityName__________________
const cName = document.querySelector('.city-name');
const editIcon = document.querySelector('.edit-icon img');

editIcon.addEventListener('click', () => {
    if (cName.contentEditable === "true") {
        cName.contentEditable = false;
        editIcon.src = './assets/edit.png';
    }
    else {
        cName.contentEditable = true;
        editIcon.src = './assets/save.png';
        cName.focus();
    }
})

cName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        cName.contentEditable = false;
        editIcon.src = './assets/edit.png';
        weather(cName.textContent.trim())
    }
})

// __________________________card______________________
function card(data) {
    const container = document.querySelector('.right');
    container.innerHTML = "";

    data.days.forEach(day => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'flex', 'align', 'column');

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.innerHTML = `<span class="datetime">${day.datetime}</span>`;


        const imgElement = document.createElement('img');
        imgElement.src = icon(day.icon);
        imgElement.alt = "Weather Icon";
        imgElement.classList.add('card-img');

        const tempContainer = document.createElement('div');
        tempContainer.classList.add('temp', 'flex');

        const maxTempElement = document.createElement('div');
        maxTempElement.classList.add('max-temp','flex', 'column', 'align');
        maxTempElement.innerHTML = `
            <p>Max Temp:</p>
            <span class="max-temp">${fahrenheitToCelsius(day.tempmax)}</span>
        `;

        const minTempElement = document.createElement('div');
        minTempElement.classList.add('min-temp','flex', 'column', 'align');
        minTempElement.innerHTML = `
            <p>Min Temp:</p>
            <span class="min-temp">${fahrenheitToCelsius(day.tempmin)}</span>
        `;

        tempContainer.appendChild(maxTempElement);
        tempContainer.appendChild(minTempElement);

        cardElement.appendChild(dateElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(tempContainer);

        container.appendChild(cardElement);
    });
}


// ____________________________change weather-icon____________________________________
function icon(weather) {
    switch (weather) {
        case 'clear-day':
        case 'clear-night':
            return './assets/clear.png';
        case 'snow':
        case 'snow-showers-day':
        case 'snow-showers-night':
            return './assets/snow.png';
        case 'cloudy':
        case 'partly-cloudy-night':
        case 'partly-cloudy-day':
            return './assets/clouds.png';
        case 'rain':
            return './assets/rain.png';
        case 'fog':
            return './assets/mist.png';
        case 'rain-snow-showers-day':
            return './assets/drizzle.png';
        default:
            return './assets/default.png';
    }
}


// ___________________change F to C or C to F___________________________
const temperature = document.querySelector('.temperature');
let isCelsius = true; 

temperature.addEventListener('click', () => {
    const tempValue = parseFloat(temperature.textContent); 

    if (isNaN(tempValue)) {
        console.error("Invalid temperature value");
        return;
    }

    temperature.textContent = isCelsius
    ? celsiusToFahrenheit(tempValue)
    : fahrenheitToCelsius(tempValue)
    
    toggleCardTemp(isCelsius ? 'toF': 'toC');
    isCelsius = !isCelsius; 
});

function toggleCardTemp(convert){
    const tempMax = document.querySelectorAll('.max-temp');
    const tempMin = document.querySelectorAll('.min-temp');

    tempMax.forEach( (max)=>{
         const value = parseFloat(max.textContent);
         if(!isNaN(value)){
            if(convert === 'toF'){
                max.textContent = `${celsiusToFahrenheit(value)}`
            }
            else{ 
                max.textContent = `${fahrenheitToCelsius(value)}`
            }
         }
    })
    tempMin.forEach( (min)=>{
         const value = parseFloat(min.textContent);
         if(!isNaN(value)){
            if(convert === 'toF'){
                min.textContent = `${celsiusToFahrenheit(value)}`
            }
            else{ 
                min.textContent = `${fahrenheitToCelsius(value)}`
            }
         }
    })
}

// ________________local storage________________
document.addEventListener('DOMContentLoaded', () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        weather(lastCity);
    } else {
        console.log("No last city found. Please search for a city.");
    }
});