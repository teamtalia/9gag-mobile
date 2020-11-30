/* eslint-disable*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const useGetDataString = async (key: string) => {
  const [error, setError] = useState<any>(false);
  const [data, setData] = useState<any>(null);
  try {
    const value = await AsyncStorage.getItem(`@talia@${key}`);
    if (value !== null) {
      setData(data);
    }
  } catch (e) {
    setError(e);
  }
  return { data, error };
};
export const getDataString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@talia@${key}`);
    if (value !== null) {
      return {
        data: value,
        error: false
      };
    }
  } catch (e) {
    return {
      data: null,
      error: e
    };
  }
  return {
    data: null,
    error: true
  };
};

export const useGetDataObject = async (key: string) => {
  const [error, setError] = useState<any>(false);
  const [data, setData] = useState<any>(null);
  try {
    const jsonValue = await AsyncStorage.getItem(`@talia@${key}`)
    if (jsonValue !== null) {
      setData(JSON.parse(jsonValue));
    } else {
      setError(true);
    }
  } catch (e) {
    setError(e);
  }
  return {
    data,
    error
  };
}

export const getDataObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@talia@${key}`)
    if (jsonValue !== null) {
      return {
        data: JSON.parse(jsonValue),
        error: false
      };
    } else {
      return {
        data: false,
        error: true
      };
    }
  } catch (e) {
    return {
      data: false,
      error: e
    };
  }
}

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`@talia@${key}`);
    return true;
  } catch (err) {
    return false;
  }
}
