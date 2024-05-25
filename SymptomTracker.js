import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import theme from "./Theme";

const SymptomTracker = ({ navigation }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [visibleSymptomsCount, setVisibleSymptomsCount] = useState(2);

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get(
        "http://192.168.18.14:8000/api/symptoms"
      );
      setSymptoms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSymptoms();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchSymptoms();
    }, [])
  );

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  const handleShowMore = () => {
    setVisibleSymptomsCount((prevCount) =>
      Math.min(prevCount + 2, symptoms.length)
    );
  };

  const handleShowLess = () => {
    setVisibleSymptomsCount((prevCount) => Math.max(prevCount - 2, 2));
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Symptom Tracker</Text>
        {symptoms.length > 0 ? (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SymptomTracker2")}
            >
              <Text style={styles.buttonText}>Record Symptoms</Text>
            </TouchableOpacity>
            {symptoms.slice(0, visibleSymptomsCount).map((symptom) => (
              <View key={symptom._id} style={styles.symptomItem}>
                <View style={styles.dateContainer}>
                  <Text style={styles.date}>
                    {formatDate(symptom.createdAt)}
                  </Text>
                  <View style={styles.dateLineSeperator}></View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Pain Level:</Text>
                  <Text style={styles.value}>{symptom.painLevel} /10</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Pain in Side:</Text>
                  <Text style={styles.value}>{symptom.painInSide}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Frequent Urination:</Text>
                  <Text style={styles.value}>{symptom.frequentUrination}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Urgency:</Text>
                  <Text style={styles.value}>{symptom.urgency}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Pain While Urination:</Text>
                  <Text style={styles.value}>{symptom.painWhileUrination}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Blood in Urine:</Text>
                  <Text style={styles.value}>{symptom.bloodInUrine}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Nausea:</Text>
                  <Text style={styles.value}>{symptom.nausea}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Other Symptoms:</Text>
                  <Text style={styles.value}>{symptom.otherSymptoms}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Duration:</Text>
                  <Text style={styles.value}>{symptom.duration}</Text>
                </View>
              </View>
            ))}
            <View style={styles.arrowButtonContainer}>
              {symptoms.length > visibleSymptomsCount && (
                <TouchableOpacity
                  style={styles.arrowButton}
                  onPress={handleShowMore}
                >
                  <View style={styles.arrowButtonContent}>
                    <Ionicons
                      style={styles.arrowUpDownIcons}
                      name="chevron-down"
                      size={24}
                      color="black"
                    />
                    <Text style={styles.viewMoreLessTexts}>View More</Text>
                  </View>
                </TouchableOpacity>
              )}
              {visibleSymptomsCount > 2 && (
                <TouchableOpacity
                  style={styles.arrowButton}
                  onPress={handleShowLess}
                >
                  <View style={styles.arrowButtonContent}>
                    <Ionicons
                      style={styles.arrowUpDownIcons}
                      name="chevron-up"
                      size={24}
                      color="black"
                    />
                    <Text style={styles.viewMoreLessTexts}>View Less</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </>
        ) : (
          <View style={styles.noSymptomsContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="clipboard-outline" size={64} color="grey" />
              <Text style={styles.subtitle}>No symptoms Logged In</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SymptomTracker2")}
            >
              <Text style={styles.buttonText}>Record Symptoms</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  symptomItem: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 5,
  },
  dateContainer: {
    position: "relative",
    marginBottom: 10,
  },
  dateLineSeperator: {
    position: "absolute",
    top: 16,
    left: 185,
    height: 1,
    width: "46%",
    backgroundColor: "#51ACFF",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    lineHeight: 35,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "grey",
  },
  noSymptomsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 180,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
  },
  button: {
    width: "100%",
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowButtonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  arrowButton: {
    alignItems: "center",
    padding: 10,
  },
  arrowButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowUpDownIcons: {
    color: theme.colors.primary,
    marginRight: 5,
  },
  viewMoreLessTexts: {
    color: theme.colors.primary,
  },
});

export default SymptomTracker;
