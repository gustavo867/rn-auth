import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { login } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignIn = useCallback(() => {
    dispatch(login());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.title}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },
  button: {
    width: width * 0.7,
    height: height * 0.08,
    borderRadius: 8,
    backgroundColor: '#7159c1',
    borderColor: '#FFF',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
