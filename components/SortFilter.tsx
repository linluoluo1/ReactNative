import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setSortOrder } from '../redux/sortSlice';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const SortFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleSortByChange = (sortBy: 'id' | 'title' | 'body' | null) => {
    dispatch(setSortBy(sortBy));
  };

  const handleSortOrderChange = (sortOrder: 'asc' | 'desc') => {
    dispatch(setSortOrder(sortOrder));
  };

  return (
    <View>
      <Picker
        selectedValue={null}
        onValueChange={(itemValue: string | null) => handleSortByChange(itemValue as 'id' | 'title' | 'body' | null)}
      >
        <Picker.Item label="None" value="" />
        <Picker.Item label="ID" value="id" />
        <Picker.Item label="Title" value="title" />
        <Picker.Item label="Description" value="body" />
      </Picker>
      <Picker
        selectedValue="asc"
        onValueChange={(itemValue: string) => handleSortOrderChange(itemValue as 'asc' | 'desc')}
      >
        <Picker.Item label="Ascending" value="asc" />
        <Picker.Item label="Descending" value="desc" />
      </Picker>
    </View>
  );
};

export default SortFilter;
