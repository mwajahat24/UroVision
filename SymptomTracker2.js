import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import { RadioButton, Snackbar } from "react-native-paper";
import axios from "axios";

function SymptomTracker2({ navigation }) {
  const [painLevel, setPainLevel] = useState(0);
  const [answers, setAnswers] = useState({
    painInSide: "",
    frequentUrination: "",
    urgency: "",
    painWhileUrination: "",
    bloodInUrine: "",
    nausea: "",
    otherSymptoms: "",
    duration: "",
  });
  const [visible, setVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      await axios.post("http://192.168.18.14:8000/api/symptoms", {
        user: "Your User",
        painLevel,
        painInSide: answers.painInSide,
        frequentUrination: answers.frequentUrination,
        urgency: answers.urgency,
        painWhileUrination: answers.painWhileUrination,
        bloodInUrine: answers.bloodInUrine,
        nausea: answers.nausea,
        otherSymptoms: answers.otherSymptoms,
        duration: answers.duration,
      });
      setVisible(true);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Symptom Tracker</Text>
        <Text style={styles.description}>
          Fill out the symptom tracking form accurately and regularly to monitor
          kidney stone-related symptoms effectively.
        </Text>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            1. Are you experiencing any pain in your side or lower back?
          </Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setAnswers({ ...answers, painInSide: value })
            }
            value={answers.painInSide}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            2. How would you rate your pain on a scale of 0 to 10?
          </Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={painLevel}
              onValueChange={(value) => setPainLevel(value)}
            />
            <Text style={styles.sliderValue}>{painLevel}</Text>
          </View>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            3. Do you experience frequent urination?
          </Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setAnswers({ ...answers, frequentUrination: value })
            }
            value={answers.frequentUrination}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            4. Do you feel a sense of urgency when urinating?
          </Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setAnswers({ ...answers, urgency: value })
            }
            value={answers.urgency}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            5. Do you have pain or discomfort while urinating (dysuria)?
          </Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setAnswers({ ...answers, painWhileUrination: value })
            }
            value={answers.painWhileUrination}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="sometimes" />
              <Text>Sometimes</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            6. Have you noticed blood in your urine (hematuria)?
          </Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setAnswers({ ...answers, bloodInUrine: value })
            }
            value={answers.bloodInUrine}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="sometimes" />
              <Text>Sometimes</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            7. Do you experience nausea or vomiting?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => setAnswers({ ...answers, nausea: value })}
            value={answers.nausea}
          >
            <View style={styles.radioButton}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="sometimes" />
              <Text>Sometimes</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            8. Are there any other symptoms you would like to mention?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="fever, chills etc."
            value={answers.otherSymptoms}
            onChangeText={(text) =>
              setAnswers({ ...answers, otherSymptoms: text })
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            9. How long have you been experiencing these symptoms?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="1 week, 1 month etc."
            value={answers.duration}
            onChangeText={(text) => setAnswers({ ...answers, duration: text })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log Symptoms</Text>
        </TouchableOpacity>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000}
      >
        Symptoms logged successfully!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  description: {
    fontSize: 14,
    color: "grey",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    flex: 1,
    height: 40,
  },
  sliderValue: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SymptomTracker2;
