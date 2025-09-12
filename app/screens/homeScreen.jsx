import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

// Reusable ExploreCard component
function ExploreCard({ text }) {
  return (
    <View style={styles.exploreCard}>
      <Text style={styles.cardText}>{text}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionBtn}><Text>👤</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}><Text>❤️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}><Text>🎟️</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomePage() {
  // Example items
  const exploreItems = [
    "[ Explore Item / Image ]",
    "[ Explore Item 2 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
    "[ Explore Item 3 ]",
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Top Header */}
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Promotions</Text>
          <TouchableOpacity style={styles.notifBtn}>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Promotions Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>[ Promotion Banner ]</Text>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#777"
        />

        {/* Explore Section */}
        <Text style={styles.sectionTitle}>Explore</Text>
        {exploreItems.map((item, idx) => (
          <ExploreCard key={idx} text={item} />
        ))}

        
{/* 
        Another Example Post
        <View style={styles.exploreCard}>
          {/* You can add new items here if needed *}
        </View>
      {/* End of ScrollView content */}
      </ScrollView>

      {/* Sticky Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navItem}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>📍 Location</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notifBtn: {
    padding: 10,
  },
  banner: {
    height: 150,
    backgroundColor: "#ddd",
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bannerText: {
    color: "#555",
    fontSize: 16,
  },
  searchBar: {
    backgroundColor: "#f1f1f1",
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  exploreCard: {
    backgroundColor: "#f8e1e1",
    margin: 15,
    borderRadius: 10,
    padding: 20,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  actionBtn: {
    marginHorizontal: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    paddingBottom: 40, // extra padding for system nav bar
    backgroundColor: "#fff", // solid color for visibility
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    elevation: 10, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  navItem: {
    fontSize: 16,
  },
  itemBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
