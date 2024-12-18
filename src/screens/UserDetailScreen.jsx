import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import {useNavigation} from '@react-navigation/native';

const UserDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {userId} = route.params;
  const {users} = useContext(UserContext);
  const user = users.find(user => user.id === userId);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>{user.phone}</Text>
        <Button
          title="Wiew Tasks"
          onPress={() => navigation.navigate('Task', {userId})}
        />
      </View>
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#eeedeb',
    shadowColor: '#000',
    borderRadius: 10,
    padding: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: '10',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});
