import fetch from 'isomorphic-unfetch';
import querystring from 'qs';
import apiMap from '../constants/apiMap';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

const getAccessToken = async () => {
  const response = await fetch(apiMap.SPOTIFY_ACCESS_TOKEN, {
    method: 'POST',
    headers: {
      // eslint-disable-next-line quote-props
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetch(apiMap.SPOTIFY_GET_CURRENT_PLAYING_TRACK, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetch(apiMap.SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
