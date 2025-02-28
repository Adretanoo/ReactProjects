import React, { useState } from "react";
import { View, Text, Button, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const items = [
  { id: '1', title: "Інтерстеллар", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7iJGkbpGBcG_kCUquXQUpw-SFmeUr4NHKQ&s" },
  { id: '2', title: "Темний лицар", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvZ9sOFk3pzMHRtGq6yg-CuQn7PoEmTjQ4w&s" },
  { id: '3', title: "Віднесені вітром", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIErKJyU3vDGfnqXnNO8wq58KyZitk9NxA&s" },
  { id: '4', title: "Володар перснів: Співдружність персня", image: "https://upload.wikimedia.org/wikipedia/uk/0/0c/The_Fellowship_Of_The_Ring.jpg" },
  { id: '5', title: "Кримінальне чтиво", image: "https://upload.wikimedia.org/wikipedia/uk/8/82/Pulp_Fiction_cover.jpg" },
  { id: '6', title: "Титанік", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwD7b_p_4s1E0NNXAwsTQ4guf3BmpjMRi7gQ&s" },
  { id: '7', title: "Матриця", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS530tChTweGZ5S4L171ePfubDbNVL4zu13zg&s" },
  { id: '8', title: "Початок", image: "https://s9.vcdn.biz/static/f/1396166031/image.jpg" },
  { id: '9', title: "Гладіатор", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMxCkNabic-0_3vPA55BxDSo0_rDpJtlKFg&s" },
  { id: '10', title: "Шоушенк", image: "https://upload.wikimedia.org/wikipedia/ru/d/de/Movie_poster_the_shawshank_redemption.jpg" },
  { id: '11', title: "Відпочинок за межами міста", image: "https://uaserial.com/images/serials/65/6554cf3c9fa9f601713540.webp" },
  { id: '12', title: "Зеленая миля", image: "https://upload.wikimedia.org/wikipedia/ru/b/b0/Green_mile_film.jpg" },
  { id: '13', title: "Джокер", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NaVOqL9k3su9EBdF35uCEdhNakaEGK26yw&s" },
  { id: '14', title: "Паразити", image: "https://uaserial.com/images/serials/64/640b4fc6b7fb9217157538.webp" },
  { id: '15', title: "Великі очікування", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO1-vuJpCuzWqWgHy9TmiiGY9ow6mXtjR-A&s" },
  { id: '16', title: "Гаррі Поттер", image: "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg" },
  { id: '17', title: "Форрест Гамп", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP4PQ3OCmvWQpYjpWMZEekOroyxQLmzmKvg&s" },
  { id: '18', title: "Загублене місто", image: "https://upload.wikimedia.org/wikipedia/uk/c/c1/%D0%97%D0%B0%D0%B3%D1%83%D0%B1%D0%BB%D0%B5%D0%BD%D0%B5_%D0%BC%D1%96%D1%81%D1%82%D0%BE_2022_-_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg" },
  { id: '19', title: "Космічна одіссея", image: "https://uaserials.pro/posters/5574.webp" },
  { id: '20', title: "Кандидат", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFfNdvtiVSCBcg6FbidmU9s9b9TosdTPHxw&s" }
];

export default function KioskApp() {
  const [screen, setScreen] = useState("list");
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <View style={[styles.container, darkTheme && styles.darkBackground]}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.navButton, screen === "list" && styles.activeButton]}
          onPress={() => setScreen("list")}
        >
          <Text style={styles.navText}>🎬 Список фільмів</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, screen === "settings" && styles.activeButton]}
          onPress={() => setScreen("settings")}
        >
          <Text style={styles.navText}>⚙️ Налаштування</Text>
        </TouchableOpacity>
      </View>

      {screen === "list" ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.settings}>
          <Text style={styles.text}>Тема додатку</Text>
          <Button title={darkTheme ? "🌞 Світла тема" : "🌙 Темна тема"} onPress={() => setDarkTheme(!darkTheme)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f8f9fa",
  },
  darkBackground: {
    backgroundColor: "#2c2c2c",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#007bff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navButton: {
    padding: 10,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
  },
  navText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  settings: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
