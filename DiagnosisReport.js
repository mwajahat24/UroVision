import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import DynamicWidthText from "./DynamicWidthText";
import theme from "./Theme";

function DiagnosisReport({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>CT Scan Report</Text>
        <Text style={styles.subtitle}>
          Report generated based on the provided CT scan images details the
          current kidney condition, including kidney stone specifics.
          Consultation with a doctor is recommended upon receiving the report.
        </Text>
        <Image
          source={require("./assets/kidneystonexray2.png")} // Replace with your CT scan image URI
          style={styles.scanImage}
        />
        <View style={styles.section}>
          <DynamicWidthText
            text="Patient Information"
            style={styles.sectionTitle}
          />
          <View style={styles.reportContainer}>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Name :</Text>
              <Text style={[styles.reportValue]}>Obaidullah</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Phone :</Text>
              <Text style={[styles.reportValue]}>0321-5679904</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Gender :</Text>
              <Text style={[styles.reportValue]}>Male</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>City :</Text>
              <Text style={[styles.reportValue]}>Multan</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Age :</Text>
              <Text style={[styles.reportValue]}>24</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <DynamicWidthText text="Current Report" style={styles.sectionTitle} />
          <View style={styles.reportContainer}>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Number of Stones :</Text>
              <Text style={[styles.reportValue, { color: "red" }]}>01</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Stone Size :</Text>
              <Text style={[styles.reportValue, { color: "red" }]}>4mm</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Stone Shape :</Text>
              <Text style={[styles.reportValue, { color: "red" }]}>Oval</Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Location :</Text>
              <Text style={[styles.reportValue, { color: "red" }]}>
                Right Kidney
              </Text>
            </View>
            <View style={styles.reportRow}>
              <Text style={styles.reportLabel}>Report Date :</Text>
              <Text style={[styles.reportValue, { color: "red" }]}>
                Jan 24, 2024
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <DynamicWidthText
            text="Recommendations"
            style={styles.sectionTitle}
          />
          <View style={styles.recommendationContainer}>
            <Ionicons
              name="water-outline"
              size={24}
              color="black"
              style={styles.recommendationIcon}
            />
            <View style={styles.recommendationTextContainer}>
              <Text style={styles.recommendationTitle}>Hydration</Text>
              <Text style={styles.recommendationText}>
                Drink 6-8 glasses of water every day after 2 hours.
              </Text>
            </View>
          </View>
          <View style={styles.recommendationContainer}>
            <Ionicons
              name="nutrition-outline"
              size={24}
              color="black"
              style={styles.recommendationIcon}
            />
            <View style={styles.recommendationTextContainer}>
              <Text style={styles.recommendationTitle}>Dietary Changes</Text>
              <Text style={styles.recommendationText}>
                Reduce intake of protein, sodium, and oxalate.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.downloadButton]}>
            <Text style={[styles.buttonText, styles.downloadButtonText]}>
              Download PDF
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#2196F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingTop: Constants.statusBarHeight - 15,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 10,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "justify",
    fontSize: 14,
    color: "#777777",
    marginBottom: 20,
  },
  scanImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  section: {
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: "white",
    marginBottom: 20,
    position: "relative",
  },
  reportContainer: {
    backgroundColor: "#EEF5F8",
    // backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  reportRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  reportLabel: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 34,
    // color: "white",
  },
  reportValue: {
    fontSize: 14,
    // color: "white",
  },
  recommendationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  recommendationIcon: {
    marginRight: 10,
    backgroundColor: "#EEF5F8",
    padding: 18,
  },
  recommendationTextContainer: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recommendationText: {
    fontSize: 14,
    color: "grey",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 5,
  },
  downloadButton: {
    backgroundColor: "white",
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  downloadButtonText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "400",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DiagnosisReport;
