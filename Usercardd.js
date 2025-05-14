// components/UserCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.last_name} {user.first_name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserCard;
