/* import { useAuthContext } from "./useAuthContext";
export const useSignUp = () => {
  const { dispatch } = useAuthContext();
  const signup = async (firstname, lastname, email, password) => {
    const response = await fetch("http://localhost:8080/api/user/sign-up", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
    }
    if (response.ok) {
      //save the user to the localstorage
      localStorage.setItem("user", JSON.stringify(json));
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { signup };
}; */
