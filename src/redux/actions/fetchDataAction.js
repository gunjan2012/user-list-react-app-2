import axios from "axios";
import { API_STATUS, FETCH_USERS } from "../constants";

export const fetchDataAction = (currentPage) => async (dispatch) => {
  // Status Before Fetching API
  dispatch({
    type: API_STATUS,
    status: "pending",
  });

  const fetchData = async () => {
    const response = await axios.get(
      `https://servers-omega.vercel.app/users/p?limit=9&page=${currentPage}`
    );
    return response.data;
  };

  try {
    const data = await fetchData();
    dispatch({
      type: API_STATUS,
      status: "success",
    });
    dispatch({
      type: FETCH_USERS,
      data: data,
      users: data.users,
    });
  } catch (error) {
    dispatch({
      type: API_STATUS,
      status: "error",
    });
  }
};
