/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { getDataString } from './useGetData';

export const useStoreString = async (key: string, value: any) => {
  const [error, setError] = useState<any>(false);
  try {
    await AsyncStorage.setItem(`@talia@${key}`, value);
    setError(false);
  } catch (e) {
    setError(e);
  }
  return { error };
};
export const storeString = async (key: string, value: any) => {
  try {
    const { error } = await getDataString(`@talia@${key}`);
    if (!error) {
      await AsyncStorage.mergeItem(`@talia@${key}`, value);
    } else {
      await AsyncStorage.setItem(`@talia@${key}`, value);
    }
    return {
      error: false,
    };
  } catch (e) {
    return {
      error: e,
    };
  }
};

export const useStoreObject = async (key: string, value: any) => {
  const [error, setError] = useState<any>(false);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@talia@${key}`, jsonValue);
    setError(false);
  } catch (e) {
    setError(e);
  }
  return { error };
};

export const storeObject = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@talia@${key}`, jsonValue);
    return { error: false };
  } catch (e) {
    return { error: e };
  }
};
