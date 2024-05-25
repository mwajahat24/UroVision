import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header"; // Ensure the path is correct
import theme from "./Theme";

function AlertsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ALERTS</Text>

        <Text style={styles.sectionTitle}>Medication Alerts</Text>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./assets/medicinepill.png")}
              style={styles.alertIcon}
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTextTitle}>Take Allopurinol</Text>
            <Text style={styles.alertTextSubtitle}>Every day at 9:00pm</Text>
          </View>
          <Ionicons name="ellipse" size={15} color="#90EE90" />
        </View>

        <Text style={styles.sectionTitle}>Dietary and Hydration Alerts</Text>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./assets/glassofwater.png")}
              style={styles.alertIcon}
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTextTitle}>
              Drink 6-8 glasses of water
            </Text>
            <Text style={styles.alertTextSubtitle}>
              Every day after 2 hours
            </Text>
          </View>
          <Ionicons name="ellipse" size={15} color="#90EE90" />
        </View>

        <Text style={styles.sectionTitle}>Appointments</Text>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./assets/calendar.png")}
              style={styles.alertIcon}
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTextTitle}>Dr. Smith</Text>
            <Text style={styles.alertTextSubtitle}>On Wednesday at 12pm</Text>
          </View>
          <Ionicons name="ellipse" size={15} color="#90EE90" />
        </View>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./assets/calendar.png")}
              style={styles.alertIcon}
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTextTitle}>Dr. Smith</Text>
            <Text style={styles.alertTextSubtitle}>On March 12 at 12pm</Text>
          </View>
          <Ionicons name="ellipse" size={15} color="#90EE90" />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          /* Add action here */
        }}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 80, // Add padding to avoid content being hidden behind the FAB
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  alertIcon: {
    width: 22,
    height: 22,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  alertTextSubtitle: {
    fontSize: 14,
    color: "grey",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});

export default AlertsScreen;
