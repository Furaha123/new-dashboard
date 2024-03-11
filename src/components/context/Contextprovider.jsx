import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const statement = createContext();

export const Appcontext = ({ children }) => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/Case/getAllCasesUser",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${auth.access_token}`,
            },
          }
        );
        console.log(response.data);
        setCases(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <statement.Provider value={{ cases, setCases }}>
      {children}
    </statement.Provider>
  );
};
export const mycontext = () => useContext(statement);
