import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { Guild } from '../../components/Guild';
import { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

const Guilds = ({ handleGuildSelect }: Props) => {
  const guilds = [
    {
      id: '1',
      name: 'Servidor 1',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Servidor 2',
      icon: 'image.png',
      owner: true
    }
  ];

  return (
    <View style={styles.container}>

      <FlatList 
        style={styles.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}    
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />

    </View>
  );
};

export { Guilds }