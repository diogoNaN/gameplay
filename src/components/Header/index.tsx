import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './style';
import { theme } from '../../global/styles/theme';
import { useCallback } from 'react';

type Props = {
  title: string;
  action?: ReactNode;
}

const Header = ({ title, action}: Props ) => {
  const navigation = useNavigation();

  const {
    secondary100,
    secondary40,
    heading
  } = theme.colors;

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary100, secondary40]}
    >

      <BorderlessButton onPress={handleGoBack}>

        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />

      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      { action && 
        <View>
          {action}
        </View>
      }
    </LinearGradient>
  );
};

export { Header };