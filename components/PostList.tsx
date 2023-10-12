import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPosts } from '../redux/postSlice';
import { setCurrentPage } from '../redux/paginationSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { setSortBy, setSortOrder } from '../redux/sortSlice';


const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const sortKey = useSelector((state: RootState) => state.sort.sortBy);
  const sortOrder = useSelector((state: RootState) => state.sort.sortOrder);
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(setCurrentPage(currentPage));
    dispatch(fetchPosts());
  }, [dispatch, currentPage]);

  const filteredTableData = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const tableHead = ['ID', 'Title', 'Description'];
  const tableData = filteredTableData.map((post) => [post.id, post.title, post.body]);

  const handleSort = (key: string | null) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      direction = 'desc';
    }
    dispatch(setSortBy(key));
    dispatch(setSortOrder(direction));
  };

  const renderSortArrow = (column: string) => {
    if (column === sortKey) {
      return sortOrder === 'asc' ? '▼' : '▲';
    }
    return null;
  };

  const compareItems = (a: string | number, b: string | number) => {
    if (a === b) {
      return 0;
    }
    if (sortOrder === 'asc') {
      return a < b ? -1 : 1;
    } else {
      return a > b ? -1 : 1;
    }
  };

  return (
    <View style={styles.container}>
      {loading === 'pending' ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <ScrollView horizontal>
          <Table borderStyle={{ borderWidth: 1, borderColor: 'grey' }}>
            <Row
              data={tableHead.map((head, index) => (
                <TouchableOpacity key={index} onPress={() => handleSort(head)}>
                  <Text>{head} {sortKey === head ? (sortOrder === 'asc' ? '▼' : '▲') : ''}</Text>

                </TouchableOpacity>
              ))}
              style={styles.head}
              widthArr={[50, 200, 200]}
            />
            {tableData
              .sort((a, b) => {
                if (sortKey === 'ID') {
                  return compareItems(a[0], b[0]);
                } else if (sortKey === 'Title') {
                  return compareItems(a[1], b[1]);
                } else if (sortKey === 'Description') {
                  return compareItems(a[2], b[2]);
                } else {
                  return 0;
                }
              })
              .map((rowData, index) => (
                <Row data={rowData.map((cell, cellIndex) => (
                  <Text key={cellIndex}>{cell}</Text>
                ))} style={styles.row} widthArr={[50, 200, 200]} key={index} />
              ))}
          </Table>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
  },
  head: { height: 40, backgroundColor: 'grey', margin: 6 },
  row: { height: 'auto', borderColor: 'black', borderWidth: 1, textAlign: 'center' },
});

export default PostList;
