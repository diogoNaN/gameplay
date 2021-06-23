import React from "react";
import { ScrollView } from 'react-native';

import { styles } from './styles';

import { categories } from "../../utils/categories";

import { Category } from '../Category';

type DataProps = {
  selectedCategory: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean; 
} 

const CategorySelect = ({
  selectedCategory,
  setCategory,
  hasCheckBox = false,
}: DataProps) => {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >

      { categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      )) }

    </ScrollView>

      

  )
}

export { CategorySelect };