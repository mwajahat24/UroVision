import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header"; // Ensure the path is correct
import SymptomTrackerStack from "./SymptomTrackerStack";
import theme from "./Theme";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.welcomeCard}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTitle}>Welcome Mr Obaid!</Text>
            <Text style={styles.welcomeSubtitle}>
              We're here to help you learn about kidney stones and how to manage
              them.
            </Text>
          </View>
          <Image
            source={require("./assets/kidneylogo.png")}
            style={styles.welcomeIcon}
          />
        </View>
        <Text style={styles.sectionTitle}>Your Quick Status</Text>
        <View style={styles.statusContainer}>
          <View style={[styles.statusCard, styles.stoneStatusCard]}>
            {/* <Ionicons name="water-outline" size={40} color="black" style={styles.icon} /> */}
            <Image
              source={require("./assets/stonestatus.png")}
              style={styles.icon}
            />
            <View style={styles.statusTextContainer}>
              <Text style={[styles.statusTitle, styles.stoneStatusText]}>
                Stone Status
              </Text>
              <Text style={[styles.statusSubtitle, styles.stoneStatusText]}>
                No Stone Found
              </Text>
            </View>
          </View>
          <View style={[styles.statusCard, styles.totalScansCard]}>
            {/* <Ionicons name="document-text-outline" size={40} color="black" style={styles.icon} /> */}
            <Image
              source={require("./assets/totalscans.png")}
              style={styles.icon}
            />
            <View style={styles.statusTextContainer}>
              <Text style={[styles.statusTitle, styles.totalScansText]}>
                Total Scans
              </Text>
              <Text style={[styles.statusSubtitle, styles.totalScansText]}>
                0 scans
              </Text>
            </View>
          </View>
          <View style={[styles.statusCard, styles.symptomsCard]}>
            {/* <Ionicons name="heart-outline" size={40} color="black" style={styles.icon} /> */}
            <Image
              source={require("./assets/symptomsrecorded.png")}
              style={styles.icon}
            />
            <View style={styles.statusTextContainer}>
              <Text style={[styles.statusTitle, styles.symptomsText]}>
                Symptoms Recorded
              </Text>
              <Text style={[styles.statusSubtitle, styles.symptomsText]}>
                0 recorded
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>What would you like to do?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionCard, styles.trackSymptomsCard]}
            onPress={() => navigation.navigate("SymptomTracker")} // Navigate to SymptomTracker
          >
            <Text style={[styles.optionTitle, styles.trackSymptomsText]}>
              Track Symptoms
            </Text>
            <View style={styles.optionSubtitleContainer}>
              <Text style={[styles.optionSubtitle]}>
                Log and track your symptoms over time.
              </Text>
              <Image
                source={require("./assets/tracksymptoms.png")}
                style={[styles.profileImage, styles.tracksymptomsimage]}
              />
              {/* <Ionicons name="list-circle-outline" size={30} color="#000000" style={styles.optionIcon} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionCard, styles.findDoctorCard]}>
            <Text style={[styles.optionTitle, styles.findDoctorText]}>
              Find a Doctor
            </Text>
            <View style={styles.optionSubtitleContainer}>
              <Text style={[styles.optionSubtitle]}>
                Connect with kidney stone experts.
              </Text>
              <Image
                source={require("./assets/findadoctor.png")}
                style={[styles.profileImage, styles.findadoctorimage]}
              />
              {/* <Ionicons name="people-circle-outline" size={30} color="#000000" style={styles.optionIcon} /> */}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  welcomeCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.primary,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  welcomeTextContainer: {
    flex: 0.9, // Make text container smaller
    marginRight: 10, // Add some space between text and image
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10, // Add vertical spacing between title and subtitle
  },
  welcomeSubtitle: {
    color: "white",
    fontSize: 13,
    textAlign: "justify",
  },
  welcomeIcon: {
    width: 78, // Make image bigger
    height: 78, // Make image bigger
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    color: "#333",
  },
  statusContainer: {
    marginHorizontal: 20,
    marginTop: 10, // Added spacing between section title and status cards
  },
  statusCard: {
    flexDirection: "row", // Added to make status cards display content in a row
    borderRadius: 10,
    padding: 20,
    paddingTop: 25,
    marginLeft: -6,
    marginBottom: 20, // Added spacing between status cards
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    height: 40,
    width: 40, // Ensure icons have the same width
  },
  stoneStatusCard: {
    // backgroundColor: '#4CAF50',
  },
  totalScansCard: {
    // backgroundColor: '#FF9800',
  },
  symptomsCard: {
    // backgroundColor: '#F44336',
  },
  statusTextContainer: {
    marginLeft: 10, // Add some space between the icon and text
    flex: 1, // Ensure the text container takes the remaining space
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusSubtitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "left",
  },
  stoneStatusText: {},
  totalScansText: {},
  symptomsText: {},
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 22, // Added spacing between section title and option cards
  },
  optionCard: {
    borderRadius: 10,
    padding: 20,
    alignItems: "flex-start",
    width: "45%",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  optionSubtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10, // Add space between title and subtitle
  },
  optionTextContainer: {
    flex: 1, // Ensure the text container takes the remaining space
  },
  optionIcon: {
    marginLeft: 10, // Add space between the text and icon
  },
  trackSymptomsCard: {
    backgroundColor: "#FFFFFF",
  },
  findDoctorCard: {
    backgroundColor: "#FFFFFF",
  },
  profileImage: {
    flex: 0.5,
    height: 70,
    width: 70,
  },
  tracksymptomsimage: {
    resizeMode: "contain",
    transform: "rotate(-10deg)",
    marginBottom: 5,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000000",
    width: "100%",
  },
  optionSubtitle: {
    fontSize: 12,
    textAlign: "left",
    color: "#000000",
    flex: 1, // Take up the available space
  },
  trackSymptomsText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000000",
  },
  findDoctorText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000000",
  },
});

export default Home;
