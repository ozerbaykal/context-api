import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {useNavigation} from '@react-navigation/native';

const UserListScreen = () => {
  const {users, loading, error} = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserDetails', {userId: item.id})
              }>
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    textShadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'semi-bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
});
