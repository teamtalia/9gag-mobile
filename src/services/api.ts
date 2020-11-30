import axios from 'axios';
import Constants from 'expo-constants';

const { manifest } = Constants;

const baseURL =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(':').shift().concat(':5000')}`
    : `https://talia-9gag.herokuapp.com/`;

const api = axios.create({
  baseURL,
});

export default api;
