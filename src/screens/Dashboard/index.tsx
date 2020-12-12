import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/actions';
import { State } from '../../redux/types';

const { width, height } = Dimensions.get('window');

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const signed = useSelector((state: State) => state.user.signed);
  const user = useSelector((state: State) => state.user.user);

  console.log(signed);

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: user?.profilePic }} />
        <Text style={styles.name}>{user?.name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleLogOut()}>
        <Text style={styles.title}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#312e38',
    paddingTop: 50,
    justifyContent: 'space-around',
  },
  name: {
    fontWeight: '600',
    fontSize: 30,
    color: '#FFF',
    letterSpacing: 1.2,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderColor: '#FFF',
    borderWidth: 1.5,
  },
  button: {
    width: width * 0.7,
    height: height * 0.08,
    borderRadius: 8,
    backgroundColor: '#7159c1',
    borderColor: '#FFF',
    borderWidth: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default Dashboard;
