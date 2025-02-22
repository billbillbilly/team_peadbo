import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

const RenderBoard = (props) => {
  const { item, navigation } = props;
  return (
    <View style={styles.boardCard}>
      <View style={styles.boardHeader}>
        <View style={styles.boardHeader}>
          <Text style={styles.boardTitle}>{item.title}</Text>
          <Text style={[styles.boardType, item.type=="Personal"? {}:{backgroundColor:"#e7c2ff"}]}>{item.type}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('BoardDetail', { board: item })}>
          <Text>...</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.boardDescription}>{item.description}</Text>
      <View style={styles.userImages}>
        {item.users.map((user, index) => (
          <Image key={index} source={{ uri: user }} style={styles.userImage} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    margintop: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  boardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  boardType: {
    backgroundColor: '#f7ed92',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    color: 'black',
  },
  boardDescription: {
    marginTop: 10,
    color: '#777',
  },
  userImages: {
    flexDirection: 'row',
    marginTop: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default RenderBoard;