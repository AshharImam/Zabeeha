import AsyncStorage from '@react-native-async-storage/async-storage';
export const getUserAsync = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== 'null' && value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {}
};

export const loginAsync = async user => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {}
};

export const logoutAsync = async () => {
  try {
    await AsyncStorage.setItem('user', '');
  } catch (error) {}
};
