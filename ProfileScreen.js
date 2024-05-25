import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Header from "./Header"; // Ensure the path is correct
import theme from "./Theme";

function ProfileScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/userprofile.png")} // Replace with your profile image URI
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Wajahat Imran</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="camera-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.hrline}></View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="create-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput style={styles.input} value="Obaid" editable={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender:</Text>
            <TextInput style={styles.input} value="Male" editable={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth:</Text>
            <TextInput
              style={styles.input}
              value="10-08-1993"
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address:</Text>
            <TextInput
              style={styles.input}
              value="chowdary@yahoo.com"
              editable={false}
            />
          </View>
        </View>
        <View style={styles.hrline}></View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Medical Information</Text>
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="create-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Any Medical condition:</Text>
            <TextInput style={styles.input} value="No" editable={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Allergies:</Text>
            <TextInput style={styles.input} value="No" editable={false} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
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
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  hrline: {
    height: 1,
    width: "100%",
    backgroundColor: "#D2D2D2",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    position: "relative",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  editButton: {
    position: "absolute",
    top: 70,
    right: 130,
    // bottom: 0,
    // right: 10,
    backgroundColor: theme.colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    // backgroundColor: '#F5F5F5',
    // borderColor: "#51ACFF",
    // borderWidth: 1,
    borderRadius: 10,
    // padding: 15,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editIcon: {
    padding: 5,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "grey",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    // paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
