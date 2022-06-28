import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import {useSelector, useDispatch} from 'react-redux';
import {add_contact, get_contact} from '../store/contactSlice';
import {RootState} from '../store';

const ViewDetails = () => {
  const selected_contact = useSelector(
    (state: RootState) => state.contact.selected_contact,
  );

  return (
    <View style={styles.listcontainer}>
      <View style={styles.profile}>
        <Text style={styles.listtxt}>Name: {selected_contact.name} </Text>

        <Text style={styles.listtxt}>Email: {selected_contact.email}</Text>

        <Text style={styles.listtxt}>
          Phone Number: {selected_contact.mobile}{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listcontainer: {
    width: Dimensions.get('screen').width - 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginHorizontal: 10,

    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 1,
    borderLeftColor: '#007dc8',
    borderLeftWidth: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: 30,
    alignContent: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
  },
  listtxt: {
    paddingVertical: 5,
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewDetails;
