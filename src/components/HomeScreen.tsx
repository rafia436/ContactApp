import React, {useState} from 'react';
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
import {FlatList} from 'react-native-gesture-handler';
import {Card, CardProps} from 'react-native-elements';
const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const contacts = useSelector(
    (state: RootState) => state.contact.all_contacts,
  );

  const [viewed, setviewed] = useState('');

  const dispatch = useDispatch();

  const viewdetails = (item: any) => {
    setviewed(item.name);
    const selectedcontact = {
      name: item.name,
      id: item.id,
      mobile: item.mobile,
      email: item.email,
    };
    dispatch(get_contact(selectedcontact));

    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingtext}>Contacts</Text>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => navigation.navigate('Form')}>
          <Text style={styles.btntext}>Add Contact</Text>
        </TouchableOpacity>
      </View>
      {contacts.length != 0 ? (
        <FlatList
          data={contacts}
          keyExtractor={id => id.id.toString()}
          renderItem={({item, index}) => {
            console.log('item', item);
            return (
              <View style={styles.listcontainer}>
                <View style={styles.profile}>
                  <Text style={[styles.listtxt, {fontSize:18}]}>{item.name} </Text>

                  <Text style = {styles.listtxt}>{item.email}</Text>


                </View>
                <TouchableOpacity
                  style={styles.viewbtn}
                  onPress={() => viewdetails(item)}>
                  <Text style={styles.viewtxt}>View</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.nocontacts}>No contacts to display!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  heading: {
    marginVertical: 0,
    marginHorizontal: 5,
    padding: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: 0.5,
    paddingVertical: 20,
  },
  addbutton: {
    backgroundColor: '#fea013',
    height: 50,
    width: 100,
    paddingHorizontal: 10,
    borderRadius: 5,

    color: 'black',
    justifyContent: 'center',
  },
  headingtext: {
    width: 100,
    alignItems: 'center',
    paddingTop: 15,
    fontSize: 18,
    color: 'black',
  },
  btntext: {
    color: 'black',
  },
  nocontacts: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop:20,
  },
  listcontainer: {
    width: Dimensions.get('screen').width - 20,
    paddingTop: 15,
    paddingBottom: 15,
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
    marginTop: 20,
    alignContent: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
  },
  viewbtn: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#007dc8',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewtxt: {
    color: 'white',
    fontWeight: '500',
  },
  listtxt: {
    paddingTop: 5,
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default HomeScreen;
