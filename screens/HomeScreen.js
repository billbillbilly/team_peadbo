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
  const currentUser = useSelector((state) => state.user.currentUser);
  const fallbackUser = firebase.auth().currentUser;
  const allBoards = useSelector((state) => state.user.allBoards);

  // Filter boards by the logged-in user's ID
  const userId = currentUser?.id || fallbackUser?.uid; // Use currentUser ID or fallbackUser UID
  const userBoards = allBoards.filter((board) => board.author === userId);

  // ========== SECTIONLIST DEFINITION ==========
  const sections = [
    {
      title: 'My Boards',
      data: userBoards,
      renderItem: ({ item }) => <RenderBoard item={item} navigation={navigation} />,
      keyExtractor: (item) => item.id,
    },
    {
      title: '',
      data: [{ key: 'createBoardButton' }],
      renderItem: () => (
        <TouchableOpacity
          style={styles.createBoardButton}
          onPress={() => navigation.navigate('BoardCreation')}
        >
          <Text style={styles.createBoardText}>+ Create a new board</Text>
        </TouchableOpacity>
      ),
      keyExtractor: (item) => item.key,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <Text style={styles.greeting}>
          Hello, {currentUser?.name || fallbackUser?.displayName || 'Guest'}
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#666"
        />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) =>
          item.id ? item.id + index : index.toString()
        }
        renderSectionHeader={({ section }) => {
          if (section.title) {
            return <Text style={styles.sectionTitle}>{section.title}</Text>;
          }
          return null;
        }}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 10,
  },
  fixedHeader: {
    marginTop: 50,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  createBoardButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginVertical: 16,
    backgroundColor: '#F9F9F9',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'lightgrey',
  },
  createBoardText: {
    color: 'lightgrey',
    fontSize: 16,
  },
});