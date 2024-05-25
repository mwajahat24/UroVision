import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import theme from "./Theme";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/profilepic.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Wajahat Imran</Text>
        </View>
        <Text style={styles.email}>chowdary@yahoo.com</Text>
        <Text style={styles.accountType}>Account Type: Patient</Text>
      </View>
      <DrawerItem
        label="Guide & Tips"
        icon={({ color, size }) => (
          <Ionicons name="book-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("GuideTipsDrawer")}
      />
      <DrawerItem
        label="Patient History"
        icon={({ color, size }) => (
          <Ionicons name="time-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("PatientHistoryDrawer")}
      />
      <DrawerItem
        label="Feedback"
        icon={({ color, size }) => (
          <Ionicons name="chatbox-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("FeedbackDrawer")}
      />
      <DrawerItem
        label="Help"
        icon={({ color, size }) => (
          <Ionicons name="help-circle-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("HelpDrawer")}
      />
      <DrawerItem
        label="Settings"
        icon={({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("SettingsDrawer")}
      />
      <DrawerItem
        label="LogOut"
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate("LogOutDrawer")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 0,
  },
  header: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    marginBottom: 10,
    position: "relative",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 12,
    resizeMode: "cover",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  accountType: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  closeButton: {
    position: "absolute",
    top: Constants.statusBarHeight + 5,
    right: 10,
  },
});

export default CustomDrawerContent;
