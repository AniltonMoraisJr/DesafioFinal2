export const Types = {
  AUTHENTICATE: "app/AUTHENTICATE",
  AUTHENTICATE_SUCCESS: "app/AUTHENTICATE_SUCCESS",
  AUTHENTICATE_ERROR: "app/AUTHENTICATE_ERROR",
  LOGOUT_USER: "app/LOGOUT_USER"
};

const INITIAL_STATE = {
  token: localStorage.getItem("@RocketSeat:token")
    ? localStorage.getItem("@RocketSeat:token")
    : "",
  refresh_token: localStorage.getItem("@RocketSeat:refresh_token")
    ? localStorage.getItem("@RocketSeat:refresh_token")
    : "",
  user: localStorage.getItem("@RocketSeat:user")
    ? JSON.parse(localStorage.getItem("@RocketSeat:user"))
    : {},
  error: null,
  isLogged: localStorage.getItem("@RocketSeat:logged")
    ? localStorage.getItem("@RocketSeat:logged")
    : false,
  isLoading: false
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTHENTICATE:
      return { ...state, isLoading: true };
    case Types.AUTHENTICATE_SUCCESS:
      const { token, refreshToken, user } = action.payload.data;
      localStorage.setItem("@RocketSeat:token", token);
      localStorage.setItem("@RocketSeat:refresh_token", refreshToken);
      localStorage.setItem("@RocketSeat:logged", true);
      const userAuthenticated = {
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
        access: user[0].user_type,
        orders: user[0].orders
      };
      localStorage.setItem(
        "@RocketSeat:user",
        JSON.stringify(userAuthenticated)
      );
      return {
        ...state,
        token: token,
        refresh_token: refreshToken,
        user: userAuthenticated,
        isLoading: false,
        isLogged: true
      };
    case Types.AUTHENTICATE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.data
      };

    case Types.LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        token: "",
        refresh_token: "",
        user: {},
        isLogged: false
      };
    default:
      return state;
  }
}

export const Creators = {
  authenticate: (username, password) => ({
    type: Types.AUTHENTICATE,
    payload: {
      username,
      password
    }
  }),
  authenticate_success: data => ({
    type: Types.AUTHENTICATE_SUCCESS,
    payload: { data }
  }),
  authenticate_error: data => ({
    type: Types.AUTHENTICATE_ERROR,
    payload: { data }
  }),
  logout_user: () => ({
    type: Types.LOGOUT_USER,
    payload: {}
  })
};
