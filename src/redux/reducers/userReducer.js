import { SHOW_CARD, HIDE_CARD, FETCH_USERS, API_STATUS } from "../constants";

const initialState = {
  userId: null,
  singleUser: {},
  apiData: [],
  apiStatus: null,
  totalPages: 0,
  currentPage: 0,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        apiData: action.users,
        totalPages: action.data.totalPages,
        currentPage: action.data.currentPage,
      };
    case API_STATUS:
      return {
        ...state,
        apiStatus: action.status,
      };
    case HIDE_CARD:
      return { ...state, userId: action.userId };
    case SHOW_CARD:
      return {
        ...state,
        userId: action.userId,
        singleUser: state.apiData.find((obj) => {
          return obj._id === action.userId;
        }),
      };
    default:
      return state;
  }
};

export default UserReducer;
