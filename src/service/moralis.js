import React from "react";
import { useMoralis } from "react-moralis";

export function Moralis() {

    const { authenticate, isAuthenticated, user } = useMoralis();

    const login = async () => {

        await authenticate()
          .then(function (user) {
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    

      if (!isAuthenticated) {
        login()
      }

}