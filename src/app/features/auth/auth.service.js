// import api from "../../../utils/api";

// Static User Login
// const login = async (userData) => {
//   const response = await api.post(`/api/Account/login`, userData);
//   if (response?.data?.succeeded && response?.data?.data) {
//     localStorage.setItem(
//       "leadingly_user",
//       JSON.stringify(response?.data?.data)
//     );
//   }
//   return response.data;
// };

// Static User Login
const login = async (userData) => {
  const rolesInfo = [
    {
      email: "admin@leadingly.com",
      role: "admin",
      name: "Admin",
    },
    {
      email: "user@leadingly.com",
      role: "user",
      name: "John Doe",
    },
  ];
  const userInfo = rolesInfo.find((item) => item.email === userData.email);
  if (
    userData.email === "admin@leadingly.com" ||
    userData.email === "user@leadingly.com"
  ) {
    localStorage.setItem(
      "leadingly_user",
      JSON.stringify({
        email: userData.email,
        name: userInfo.name,
        role: userInfo.role,
      })
    );
  } else {
    throw new Error("Invalid Email or Password!");
  }
  return {
    email: userData.email,
    role: userInfo.role,
    name: userInfo.name,
  };
};

// Logout user
const logout = () => {
  localStorage.removeItem("leadingly_user");
};

const authService = {
  logout,
  login,
};

export default authService;
