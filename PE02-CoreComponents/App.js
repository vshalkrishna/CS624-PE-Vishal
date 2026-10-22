
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Course lists
const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourses = [
  'CS 687 Computer Science Capstone',
];

// Arrow function component
const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <StatusBar style="auto" />

      {/* Image component */}
      <Image
        source={require('./assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Favorite course input */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        {favoriteCourse.trim() !== '' && (
          <Text style={styles.favorite}>
            Your favorite course: {favoriteCourse}
          </Text>
        )}
      </View>

      {/* Core requirements */}
      <View style={styles.section}>
        <Text style={styles.heading}>
          Core Requirements (24 Credits)
        </Text>

        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      {/* Depth of study */}
      <View style={styles.section}>
        <Text style={styles.heading}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      {/* Capstone */}
      <View style={styles.section}>
        <Text style={styles.heading}>
          Capstone (3 Credits)
        </Text>

        {capstoneCourses.map((course, index) => (
          <Text key={index} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

// Internal styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 50,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 35,
  },
  inputSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  favorite: {
    fontSize: 16,
    color: '#1a73e8',
    marginTop: 10,
  },
  section: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    color: '#000',
    padding: 8,
    marginBottom: 10,
  },
  course: {
    fontSize: 16,
    color: '#222',
    marginBottom: 6,
  },
});

export default App;
