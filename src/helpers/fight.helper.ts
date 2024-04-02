import 'dotenv/config';
import axios from 'axios';
import Fight from '../interfaces/fight/Fight.interface';

const API_URL = `${<string>process.env.API_URL}/fights`;

export const getFights = async (jwt: string): Promise<Fight[] | void> => {
  const fights: Fight[] | void = await axios
    .get(`${API_URL}/find`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(response => {
      const result: Fight[] = response.data;
      return result;
    })
    .catch(error => {
      console.log(error);
    });
  return fights;
};

export const getFightById = async (
  jwt: string,
  id_fight: number
): Promise<Fight | void> => {
  const fight: Fight | void = await axios
    .get(`${API_URL}/find/id/${id_fight}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(response => {
      const result: Fight = response.data;
      return result;
    })
    .catch(error => {
      console.log(error);
    });
  return fight;
};

export const saveFight = async (
  jwt: string,
  {winner, loser, turns}: Fight
): Promise<Fight | void> => {
  const fight: Fight | void = await axios
    .post(
      `${API_URL}/save`,
      {
        winner,
        loser,
        turns,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then(response => {
      const result: Fight = response.data;
      return result;
    })
    .catch(error => {
      console.log(error);
    });
  return fight;
};
