import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SectionList,
} from 'react-native';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import RenderBoard from '../components/RenderBoard';

export default function HomeScreen({ navigation }) {
  // Redux state
  const currentUser = useSelector((state) => state.user.currentUser); // Retrieve the current user from Redux
  const fallbackUser = firebase.auth().currentUser; // Fallback to Firebase user if Redux state is unavailable
  const allBoards = useSelector((state) => state.user.allBoards); // Retrieve all boards from Redux

  // Filter boards by the logged-in user's ID
  const userId = currentUser?.id || fallbackUser?.uid; // Use currentUser ID or fallbackUser UID
  const userBoards = allBoards.filter((board) => board.author === userId); // Filter boards authored by the user

  // ========== SECTIONLIST DEFINITION ==========
  const sections = [
    {
      title: 'My Boards', // Section title
      data: userBoards, // Data for the section (user's boards)
      renderItem: ({ item }) => <RenderBoard item={item} navigation={navigation} />, // Render each board
      keyExtractor: (item) => item.id, // Unique key for each board
    },
    {
      title: '', // Empty title for the "Create Board" button section
      data: [{ key: 'createBoardButton' }], // Placeholder data for the button
      renderItem: () => (
        <TouchableOpacity
          style={styles.createBoardButton}
          onPress={() => navigation.navigate('BoardCreation')} // Navigate to the board creation screen
        >
          <Text style={styles.createBoardText}>+ Create a new board</Text>
        </TouchableOpacity>
      ),
      keyExtractor: (item) => item.key, // Unique key for the button
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <Text style={styles.greeting}>
          Hello, {currentUser?.name || fallbackUser?.displayName || 'Guest'} {/* Display user's name or fallback to "Guest" */}
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..." // Placeholder text for the search bar
          placeholderTextColor="#666"
        />
      </View>

      {/* SectionList to display boards and the "Create Board" button */}
      <SectionList
        sections={sections} // Sections for the list
        keyExtractor={(item, index) =>
          item.id ? item.id + index : index.toString() // Generate unique keys for items
        }
        renderSectionHeader={({ section }) => {
          if (section.title) {
            return <Text style={styles.sectionTitle}>{section.title}</Text>; // Render section title if it exists
          }
          return null;
        }}
        contentContainerStyle={styles.listContent} // Style for the list content
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, // Take up the full screen height
    backgroundColor: '#F9F9F9', // Light gray background
    padding: 10, // Padding around the content
  },
  fixedHeader: {
    marginTop: 50, // Space from the top of the screen
    marginBottom: 10, // Space below the header
  },
  greeting: {
    fontSize: 24, // Font size for the greeting text
    fontWeight: 'bold', // Bold font weight
  },
  searchInput: {
    backgroundColor: '#EFEFEF', // Light gray background for the search bar
    padding: 10, // Padding inside the input
    borderRadius: 10, // Rounded corners
    marginTop: 8, // Space above the input
  },
  listContent: {
    paddingBottom: 20, // Space at the bottom of the list
  },
  sectionTitle: {
    fontSize: 18, // Font size for section titles
    fontWeight: '600', // Semi-bold font weight
    marginVertical: 12, // Vertical spacing around the title
  },
  createBoardButton: {
    alignItems: 'center', // Center the button content
    padding: 20, // Padding inside the button
    borderRadius: 15, // Rounded corners
    marginVertical: 16, // Vertical spacing around the button
    backgroundColor: '#F9F9F9', // Light gray background
    borderWidth: 2, // Dashed border width
    borderStyle: 'dashed', // Dashed border style
    borderColor: 'lightgrey', // Light gray border color
  },
  createBoardText: {
    color: 'lightgrey', // Light gray text color
    fontSize: 16, // Font size for the button text
  },
});