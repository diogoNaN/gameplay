import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { useCallback } from 'react';


const AppointmentCreate = () => {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = useCallback(() => {
    setOpenGuildsModal(true);
  }, []);

  const handleGuildSelect = useCallback((guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }, [])

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.container}
    >
      <ScrollView>

        <Header title="Agendar partida" />

        <Text style={[
          styles.label, 
          { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
        >
          Categoria
        </Text>

        <CategorySelect 
          hasCheckBox
          setCategory={setCategory}
          selectedCategory={category}
        />

        <View style={styles.form}>

          <RectButton onPress={handleOpenGuilds}>

            <View style={styles.select}>

              {
                guild.icon 
                ? <GuildIcon /> 
                : <View style={styles.image} />
              }

              <View style={styles.selectBody}>

                <Text style={styles.label}>
                  { 
                    guild.name 
                    ? guild.name 
                    : 'Selecione um servidor' 
                  }
                </Text>

              </View>

              <Feather 
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />

            </View>

          </RectButton>
          
          <View style={styles.field}>

            <View>

              <Text style={styles.label}>
                Dia e m??s
              </Text>

              <View style={styles.column}>

                <SmallInput maxLength={2} />

                <Text style={styles.divider}>
                  /
                </Text>

                <SmallInput maxLength={2} />

              </View>

            </View>

            <View>

              <Text style={styles.label}>
                Hora e minuto
              </Text>

              <View style={styles.column}>

                <SmallInput maxLength={2} />

                <Text style={styles.divider}>
                  :
                </Text>

                <SmallInput maxLength={2} />

              </View>

            </View>  

          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>

            <Text style={styles.label}>
              Descri????o
            </Text>

            <Text style={styles.characterLimit}>
              Max 100 caracteres
            </Text>

          </View>

          <TextArea 
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>

            <Button title="Agendar" />

          </View>

        </View>

      </ScrollView>

      <ModalView visible={openGuildsModal}>

        <Guilds handleGuildSelect={handleGuildSelect}/>

      </ModalView>

    </KeyboardAvoidingView>
  );
}

export { AppointmentCreate };