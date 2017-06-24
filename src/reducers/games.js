import { FETCHED_GAMES } from "../actions/games/fetch";
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED
} from "../actions/games/subscribe";
import {USER_SIGNED_OUT} from '../actions/user/sign-out'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GAMES:
      return [...payload];

    case GAME_CREATED:
      const newGame = { ...payload };
      return [newGame].concat(state);

    case GAME_UPDATED:
      return state.map(game => {
        if (game._id === payload._id) {
          return { ...payload };
        }
        return game;
      });

    case GAME_REMOVED:
      return state.filter(game => game._id !== payload._id);

    case USER_SIGNED_OUT:
      return [];

    default:
      return state;
  }
};
