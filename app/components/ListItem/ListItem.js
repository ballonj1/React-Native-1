import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight, Platform } from 'react-native';
import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';
import { contacts } from '../../config/data';
import Icon from 'react-native-vector-icons/Ionicons';


const ListItem = ({ contact, onPress}) => {
  const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`

  
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <Image
          source={{ uri: contact.picture.thumbnail }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name="ios-arrow-forward"
            size={CHEVRON_SIZE}
            color={colors.subtleText}
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ListItem;
