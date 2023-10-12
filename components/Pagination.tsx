import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCurrentPage } from '../redux/paginationSlice';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const Pagination: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <View style={styles.container}>
      <Button title="Next >>" onPress={() => handlePageChange(currentPage + 1)} color="grey" />
      <Text style={styles.text}>Page {currentPage}</Text>
      <Button title="Previous <<" onPress={() => handlePageChange(currentPage - 1)} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  text: {
    margin: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2
  }
})
export default Pagination;
