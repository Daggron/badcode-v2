import fetch from 'isomorphic-unfetch';
import querystring from 'qs';
import apiMap from '../constants/apiMap';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  const response = await fetch(apiMap.SPOTIFY_ACCESS_TOKEN, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(apiMap.SPOTIFY_GET_CURRENT_PLAYING_TRACK, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
