import { StackNavigator } from 'react-navigation';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = StackNavigator({
  Contact: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    }
  },
  Detail: {
    screen: Details,
    // navigationOptions: {
    //   title: 'Details'
    // }
    navigationOptions: ({ navigation }) => ({
      title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
    }),
  }
});
