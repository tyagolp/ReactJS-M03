/**
 * Types
 */
export const Types = {
  ADD_FAVORITE_REQUEST: 'favorites/ADD_REQUEST',
  ADD_FAVORITE_SUCCESS: 'favorites/ADD_FAVORITE_SUCCESS',
  ADD_FAVORITE_FAILURE: 'favorites/ADD_FAVORITE_FAILURE',
};

/*
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_FAVORITE_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAVORITE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/*
 * Actions
 */
export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_FAVORITE_REQUEST,
    payload: { repository },
  }),
  addFavoriteSuccess: data => ({
    type: Types.ADD_FAVORITE_SUCCESS,
    payload: { data },
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAVORITE_FAILURE,
    payload: { error },
  }),
};
