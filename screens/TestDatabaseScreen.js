import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../src/graphql/queries';
import { gql, useQuery } from '@apollo/client';

const TestDatabaseScreen = ({ navigation, route }) => {
  // Apollo Query
  const Query_TASKS = gql(queries.listPeadboUsers);

  const { loading, error, data } = useQuery(Query_TASKS);

  if (loading) {
    return <Text style={{marginTop:60}}>Loading...</Text>;
  }

  const client = generateClient();
  const fetchdata = async () => {
    try {
      const result = await client.graphql({ query: queries.listPeadboUsers });
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <View style={{margin:100}}>
      <TouchableOpacity
        onPress={()=>{
          // console.log(Query_TASKS);
          // console.log(data);
          fetchdata();
      }}
      >
         <Text>click to check data</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestDatabaseScreen;