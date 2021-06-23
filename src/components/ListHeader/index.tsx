import React from "react";
import { Text, View } from "react-native";

import { styles } from './styles';


type DataProps = {
  title: string;
  subtitle: string;
} 

const ListHeader = ({
  title,
  subtitle
}: DataProps) => {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  )
}

export { ListHeader };