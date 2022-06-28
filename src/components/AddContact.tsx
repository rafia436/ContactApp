import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import {useDispatch} from 'react-redux';
import {add_contact} from '../store/contactSlice';

export interface IContact {
  name: string;
  email: string;
  mobile?: number;
}

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (!name || !email) {
      Alert.alert('Make sure both name and email fields are filled.');
    }  else {
      let newdata = {
        name: name,
        email: email,
        mobile: number,
      };
        console.log('name')
      dispatch(add_contact(newdata));
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container} >
 
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          value={email}
          onChangeText={q => {
            setemail(q);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          keyboardType="numeric"
          value={number}
          onChangeText={q => {
            setnumber(q);
          }}
        />
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={() => handleAddContact()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },

  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    paddingHorizontal: 10,
    marginHorizontal:20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#fea013',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical:10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: 'black', fontWeight: '500'},
});

export default AddContact;
