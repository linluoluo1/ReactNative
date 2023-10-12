import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    dispatch(setSearchQuery(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          value={searchTerm}
          onChangeText={(text) => handleSearch(text)}
          style={styles.input}
        />
        <Icon name="search" style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'darkgrey',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  input: {
    flex: 1,
    padding: 10,

  },
  searchIcon: {
    fontSize: 20,
    color: 'gray',
  },
});

export default SearchBar;
