import api from "../config/api";

export default function handleAuthentication(payload) {
  const { username, password } = payload;

  return api.post("login", {
    email: username,
    password
  });
}
