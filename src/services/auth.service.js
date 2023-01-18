import axios from "axios";

//const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post("http://localhost:7083/signup/", {
    username,
    password,
    email
  });
};
const login = async (username, password) => {
  const response = await axios
    .post("http://localhost:7083/login/", {
      username,
      password,
    });
  if (response.data.jwt) {
    localStorage.setItem("user", JSON.stringify(response.data));

  }
  console.log(response.data);
  return response.data;
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  console.log(JSON.parse(localStorage.getItem("user")));
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;