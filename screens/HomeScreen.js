import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, TextInput } from "react-native";
import { Overlay } from "@rneui/base";
// import { xxx } from '../Reducer';
// import ListItem from "../components/ListItem";

function HomeScreen(props) {
    const { navigation, route } = props;
    const dispatch = useDispatch();

    let currentUser = useSelector(state => state.userSlice.currentUser);

    useEffect(() => {
        if (currentUser.key) {
          dispatch(fetchUserImagesThunk(currentUser.key));
        }
    }, [currentUser]);

    return(
      <View style={styles.container}>
        <View>
            <Text>
                Hello {currentUser?.displayName}
            </Text>
            <TextInput style={styles.searchInput} placeholder="Search here..." />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            // Show all items if "All Contacts" is selected
            data={focused==='All Contacts'? listItems:focusedListItems}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({item})=>{
              return (
                <ListItem item={item} navigation={navigation} />
              );
            }}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: '10%',
  //    paddingBottom: '5%',
      paddingTop: '25%'
    },
    headerText: {
      fontSize: 32
    },
    listContainer: {
      flex: 0.6,
      width: '100%',
      paddingLeft: '10%',
      paddingTop: '10%'
    },
    menuContainer: {
      padding: '5%'
    },
    menuText: {
      fontSize: 32
    },
    group: {
      alignItems:'center', 
      justifyContent: 'space-between', 
      width:'100%', 
      borderColor: 'lightgray',
      borderWidth:'1',
      paddingVertical: '2%'
    },
    focusedGroup: {
      backgroundColor: '#95def6',
    },
  });
  
  export default HomeScreen;