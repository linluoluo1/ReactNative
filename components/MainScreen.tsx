import React from 'react';
import { View } from 'react-native';
import PostList from './PostList';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortFilter from './SortFilter';
import { StyleSheet } from 'react-native';

const MainScreen: React.FC = () => {
  return (

    <View style={styles.container}>
      <SearchBar />
      {/* <SortFilter /> */}
      <PostList />
      <Pagination />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "scroll",
    marginTop: 30,
  },

});

export default MainScreen;