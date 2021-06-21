import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import { styles } from './styles';

import IllustrationImage from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

const SingIn = () => {

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IllustrationImage}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle} >
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={() => {}}
        />

      </View>

    </View>
  )
}

export { SingIn };