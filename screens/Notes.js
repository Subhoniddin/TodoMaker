import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Notes = ({navigation, ...props}) => {
  return (
    <View style={style.containerView}>
      <View style={style.headingContainer}>
        <Text style={style.title}>Your Notes....</Text>
        <View style={style.iconContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('DeleteNote')}>
            <Icon name="delete" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('AddNotes')}>
            <Icons name="add" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.count}>
        <Text style={{fontWeight: '800', fontSize: 18, color: '#0F52BA'}}>
          Total:
        </Text>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          color="#000"
          placeholder="Search..."
          placeholderTextColor="#0F52BA"
          style={style.TextInput}
        />
        <TouchableOpacity style={style.button}>
          <Icons name="search" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Icons name="clear" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollView}>
        {props.notes.length === 0 ? (
          <View style={style.emptyContainer}>
            <Text style={style.emptyText}>
              There is no note yet! Click on the + plus button to add new
              note...
            </Text>
          </View>
        ) : (
          props.notes.map((item, idx) => (
            <View style={style.items} key={idx}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}></View>
              <TouchableOpacity>
                <Text style={style.text}>X</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Date: </Text>
                <TouchableOpacity>
                  <Text>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Notes;
export const style = StyleSheet.create({
  containerView: {
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingLeft: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F52BA',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0F52BA',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  count: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#0F52BA',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  TextInput: {
    width: '70%',
    height: '90%',
    paddingHorizontal: 20,
    borderColor: '#0F52BA',
    borderWidth: 3,
    borderRadius: 5,
  },
  scrollView: {
    width: '100%',
    justifyContent: 'center',
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F52BA',
  },
  items: {
    borderLeftColor: '#0F52BA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: 80,
    marginTop: 10,
    borderLeftWidth: 10,
    borderWidth: 3,
    borderColor: '#0F52BA',
    color: '#000',
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
  },
  text: {
    color: '#000',
  },
});
