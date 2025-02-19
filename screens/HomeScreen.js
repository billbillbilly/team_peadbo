import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, FlatList, TouchableOpacity, Text, TextInput } from "react-native";
import { userSlice } from '../Reducer';
import renderBoard from "../components/renderBoard";


function HomeScreen(props) {
    const { navigation, route } = props;
    const dispatch = useDispatch();

    // Use useSelector to access the current user from the Redux state
    const currentUser = useSelector((state) => state.user.currentUser);

    const boards = [
      {
        id: '1',
        title: 'Academic Team',
        description: 'Keep up with team chats, share updates, and stay on top of tasks.',
        type: 'Advisory',
        users: ['https://randomuser.me/api/portraits/women/1.jpg', 'https://randomuser.me/api/portraits/men/2.jpg', 'https://randomuser.me/api/portraits/men/3.jpg'],
      },
      {
        id: '2',
        title: 'Swimming Group',
        description: 'Here’s the update on training plans. Also share the progress!',
        type: 'Personal',
        users: ['https://randomuser.me/api/portraits/women/4.jpg', 'https://randomuser.me/api/portraits/men/5.jpg'],
      },
    ];

    // useEffect(() => {
    //     if (currentUser.key) {
    //       dispatch(fetchUserBoardsThunk(currentUser.key));
    //     }
    // }, [currentUser]);

    return(
      <View style={styles.container}>
        {/* Fixed Greeting and Search Input */}
        <View style={styles.fixedHeader}>
            <Text style={styles.greeting}>
                Hello, {currentUser?.displayName}
            </Text>
            <TextInput style={styles.searchInput} placeholder="Search here..." />
        </View>

        {/* Scrollable Content */}
        <ScrollView style={styles.scrollContent}>
          <Text style={styles.sectionTitle}>My Board</Text>
          <FlatList
            data={boards}
            scrollEnabled={false}
            renderItem={renderBoard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />

          <TouchableOpacity 
            style={styles.createBoardButton}
            onPress={() => navigation.navigate('BoardDetailsScreen')} 
          >
            <Text style={styles.createBoardText}>+</Text>
            <Text style={styles.createBoardText}>Create a new board</Text>
          </TouchableOpacity>


          <Text style={styles.sectionTitle}>Other Board</Text>
          <FlatList
            data={boards}
            scrollEnabled={false}
            renderItem={renderBoard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#F9F9F9',
      padding: 10,
    },
    fixedHeader: {
      backgroundColor: '#F9F9F9',
      padding: 10,
      borderBottomColor: '#DDD',
      paddingBottom: 0,
    },
    scrollContent: {
      flex: 1,
      padding: 10,
      paddingTop: 0,
    },
    listContent: {
      marginBottom: 10,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    searchInput: {
      backgroundColor: '#EFEFEF',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10,
    },
    createBoardButton: {
      alignItems: 'center',
      padding: 40,
      borderRadius: 15,
      marginBottom: 15,
      backgroundColor: '#F9F9F9',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: 'lightgrey',
    },
    createBoardText: {
      color: 'lightgrey',
    },
  });
  
  export default HomeScreen;