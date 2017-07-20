import { Alert } from 'react-native';
export const showErrorAlert = (message) => {
  Alert.alert('Oops!', message);
};

export const showInfoAlert = (title, message) => {
  Alert.alert(title, message);
};
