import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  Button,
  ActivityIndicator,
} from "react-native";
import {StatusBar} from "expo-status-bar"
import { fetchNews } from "./api";

const App = () => {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(true);
  function handleLatest() {
    setShow(false);
    fetchNews("latest").then((news) => {
      setNews(news);
      setShow(true);
    });  }
  function handleIndia() {
    setShow(false);
    fetchNews("india").then((news) => {
      setNews(news);
      setShow(true);
    });
  }
  function handleEntertainment() {
    setShow(false);
    fetchNews("entertainment").then((news) => {
      setNews(news);
      setNews(news);
      setShow(true);
    });
  }
  function handleScience() {
    setShow(false);
    fetchNews("science").then((news) => {
      setNews(news);
      setNews(news);
      setShow(true);
    });
  }
  function handleWorld() {
    setShow(false);
    fetchNews("world").then((news) => {
      setNews(news);
      setNews(news);
      setShow(true);
    });
  }
  function handleCricket() {
    setShow(false);
    fetchNews("cricket").then((news) => {
      setNews(news);
      setNews(news);
      setShow(true);
    });
  }
  useEffect(() => {
    setShow(false);
    fetchNews("latest").then((news) => {
      setNews(news);
      setNews(news);
      setShow(true);
    });
  }, []);
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>NEWS</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <Button title="Latest" onPress={handleLatest} />
        </View>
        <View style={styles.btn}>
          <Button title="India" onPress={handleIndia} />
        </View>
        <View style={styles.btn}>
          <Button title="Entertainment" onPress={handleEntertainment} />
        </View>
        <View style={styles.btn}>
          <Button title="Science 🔬" onPress={handleScience} />
        </View>
        <View style={styles.btn}>
          <Button title="World 🌏" onPress={handleWorld} />
        </View>
        <View style={styles.btn}>
          <Button title="Cricket 🏏" onPress={handleCricket} />
        </View>
      </View>
      {show ? (
        <FlatList
          data={news}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.images}
                />
                <View style={{ maxWidth: 280, padding: 4 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.publishedAt}>{item.publishedAt}</Text>
                  <Text
                    style={{ color: "orange" }}
                    onPress={() => Linking.openURL(item.url)}
                  >
                    Full Article
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    color: "orange",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "white",
    margin: 8,
  },
  item: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "#fffD",
  },
  images: {
    width: 100,
    height: 100,
    margin: 8,
  },
  publishedAt: {
    color: "#fff8",
    fontSize: 13,
  },
  btn: {
    margin: 4,
  },
});

export default App;
