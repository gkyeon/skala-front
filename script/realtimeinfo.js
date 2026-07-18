
import { getLiveWeather } from './weatherAPI.js';

const citySelect = document.querySelector('#city-select');
const weatherBox = document.querySelector('#weather-box');

citySelect.addEventListener('change', async function(event) {

    console.log("선택된 옵션의 값:", event.target.value); // 디버깅용 로그

    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }

    const coords = selectedValue.split(',');
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>모듈을 통해 실시간 수신 중... 📡</p>";

    
    const weatherInfo = await getLiveWeather(coords[0], coords[1]);

    if (weatherInfo) {
        weatherBox.innerHTML = `
            <h4>🌍 ${cityName} 실시간 날씨</h4>
            <p>🌡️ 현재 기온: <strong>${weatherInfo.temp}°C</strong></p>
            <p>💧 현재 습도: <strong>${weatherInfo.humidity}%</strong></p>
        `;
    } else {
        weatherBox.innerHTML = "<p>데이터를 불러오지 못했습니다.</p>";
    }
});


// --- 내 위치 기반 실시간 날씨 ---
const currentWeatherBox = document.querySelector('#current-weather');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const weatherInfo = await getLiveWeather(lat, lon);

            if (weatherInfo) {
                currentWeatherBox.innerHTML = `
                    <p>🌡️ 현재 기온: <strong>${weatherInfo.temp}°C</strong></p>
                    <p>💧 현재 습도: <strong>${weatherInfo.humidity}%</strong></p>
                `;
            } else {
                currentWeatherBox.innerHTML = "<p>⚠️ 날씨 정보를 가져오지 못했습니다.</p>";
            }
        },
        (error) => {
            // 사용자가 위치 권한을 거부했거나 실패한 경우
            currentWeatherBox.innerHTML = "<p>⚠️ 위치 접근이 거부되었습니다.</p>";
            console.error(error);
        }
    );
} else {
    currentWeatherBox.innerHTML = "<p>이 브라우저는 위치 정보를 지원하지 않습니다.</p>";
}