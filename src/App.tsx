import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useDispatch } from "react-redux";
import { getTokenFromLocalStorage } from "./helpers/localstorage.helper";
import { useGetUserQuery } from "./services/user.service";
import { useEffect } from "react";
import { login, logout } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const token = getTokenFromLocalStorage();

  const { data: userData } = useGetUserQuery("", {
    skip: !token,
  });

  useEffect(() => {
    if (userData) {
      dispatch(login({
        accessToken: token
      }));
    } else {
      dispatch(logout());
    }
  }, [userData, dispatch, token]);

  return <RouterProvider router={router} />
}

export default App
