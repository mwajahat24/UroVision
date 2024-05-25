import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Header from "./Header"; // Ensure the path is correct
import theme from "./Theme";

function ScanScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Upload CT scan</Text>
        <Text style={styles.subtitle}>
          Upload a clear image of the CT scan of your kidney and we will analyze
          it for you.
        </Text>
        <TouchableOpacity style={styles.uploadContainer}>
          <Ionicons name="cloud-upload-outline" size={64} color="grey" />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
        <View style={styles.privacyContainer}>
          <Ionicons name="lock-closed-outline" size={30} color="grey" />
          <View style={styles.privacyTextContainer}>
            <Text style={styles.privacyText}>
              By uploading I agree to the{" "}
              <Text style={styles.privacyLink}>Privacy Policy</Text>
            </Text>
            <Text style={styles.privacyText}>
              Your personal data is protected and will never be shared with
              anyone.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Loading")}
        >
          <Text style={styles.buttonText}>Analyze Scan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "left",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "grey",
    textAlign: "left",
    marginBottom: 20,
  },
  uploadContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
    textAlign: "center",
  },
  privacyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
  },
  privacyTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  privacyText: {
    fontSize: 14,
    color: "grey",
    textAlign: "left",
  },
  privacyLink: {
    color: "#2196F3",
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ScanScreen;
