import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";
export const fetchPosts = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};
export const fetchUser = (id) => (dispatch) => {
  // const res = await jsonplaceholder.get(`/users/${id}`);
  // dispatch({
  //   type: "FETCH_USER",
  //   payload: res.data,
  // });

  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
});
