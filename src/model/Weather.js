class Weather {
    constructor(data) {
        this.cityName = data?.name;
        this.temperature = data?.main?.temp;
        this.humidity = data?.main?.humidity; 
        this.windSpeed = data?.wind?.speed; 
        this.weatherCondition = data?.weather?.[0]?.main;
    }
}

export default Weather;