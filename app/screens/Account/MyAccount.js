import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import * as firebase from "firebase";
import USerLogged from "./UserLogged";
import UserGuest from "./UserGuest";

const MyAccount = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

    if (login === null) {
      return <Loading isVisible={true} text="Loading..." />
    }

    return login ? <USerLogged /> : <UserGuest />
};

export default MyAccount;
