import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Background } from "../../components/Background";

const Home = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("1");

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
  ];

  const handleSelectCategory = useCallback((categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }, [category]);

  const handleAppointmentDetails = useCallback(() => {
    navigation.navigate('AppointmentDetails');
  }, []);

  const handleAppointmentCreate = useCallback(() => {
    navigation.navigate('AppointmentCreate');
  }, []);

  return (
    <Background>

      <View style={styles.container}>

        <View style={styles.header}>

          <Profile />

          <ButtonAdd onPress={handleAppointmentCreate}/>

        </View>

        <View>

          <CategorySelect
            selectedCategory={category}
            setCategory={handleSelectCategory}
          />

          <View style={styles.content}>

            <ListHeader
              title="Partidas agendadas"
              subtitle="Total 6"
            />

            <FlatList
              style={styles.matches}
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={handleAppointmentDetails}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              showsVerticalScrollIndicator={false}
            />

          </View>

        </View>

      </View>

    </Background>
  )
}

export { Home };