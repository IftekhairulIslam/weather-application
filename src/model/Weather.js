class Weather {
    constructor(data) {
        this.cityName = data.cityName;
        this.temperature = data.temperature;
        this.humidity = data.humidity;
        this.windSpeed = data.windSpeed;
        this.weatherCondition = data.weatherCondition;
    }
}

export default Weather;