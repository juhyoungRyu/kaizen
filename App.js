import { Fontisto } from "@expo/vector-icons";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "4bcaab66989317ea045f8fe69082616f";
const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Rain: "rain",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "rains",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setcity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setcity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        persistentScrollbar={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="#222"
              size="large"
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto
                  style={styles.icon}
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="#f5f6f7"
                />
              </View>
              <Text style={styles.desc}>{day.weather[0].main}</Text>
              <Text style={styles.descript}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    marginTop: 50,
    color: "#f5f6f7",
    fontSize: 48,
    fontWeight: "100",
  },
  weather: {},
  day: {
    color: "#f5f6f7",
    width: SCREEN_WIDTH,
  },
  temp: {
    color: "#f5f6f7",
    fontSize: 98,
    marginLeft: 22,
    marginTop: 20,
  },
  desc: {
    color: "#f5f6f7",
    marginTop: -5,
    marginLeft: 30,
    fontSize: 60,
  },
  descript: {
    marginLeft: 35,
    color: "#f5f6f7",
    fontSize: 20,
  },
  icon: {
    marginRight: 25,
  },
});
