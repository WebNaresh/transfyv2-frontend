import React, { useContext, useState } from "react";
import UseContext from "../UseState/UseContext";
import TestContext from "./TestContext";
export const TestState = (props) => {
  const {
    setAppAlert,
    setAppLoading,
    setUser,
    setFriends,
    setCurrentUser,
    messages,
    setMessages,
    setSearchInput,
    dummyarray,
  } = useContext(UseContext);

  const [state, setState] = React.useState(false);
  const [time, setTime] = useState(true);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(value);
  };
  setTimeout(() => {
    setTime(false);
  }, 3000);

  const handleAlert = (alert, type, msg) => {
    setAppAlert({
      alert: alert || false,
      type: type || "success",
      msg: msg || "this is test message",
    });
  };
  const handleLoader = (load, color) => {
    setAppLoading({
      load: load || true,
      color: color || "#fff",
    });
    setTimeout(() => {
      setAppLoading({
        load: false,
      });
    }, 2000);
  };
  const makeItNull = () => {
    setUser({
      name: null,
      email: null,
      avatar: null,
      status: null,
      _id: null,
    });
    setFriends([]);
  };

  const concatTheUser = (object) => {
    setCurrentUser({
      name: object.name,
      email: object.email,
      avatar: object.avatar,
      status: null,
      _id: object._id,
    });
  };
  const addMessageArray = (data) => {
    setMessages((oldData) => [
      ...oldData,
      { userId: data.from, msg: [data.msg] },
    ]);
  };
  const addRecentMessageArray = (data) => {
    messages[messages.length - 1].msg.push(data.msg);
    setMessages([...messages]);
  };
  const handleSearch = (value) => {
    setSearchInput(value.target.value);
    const newArray = dummyarray.filter((element) => {
      return element.email.includes(value.target.value);
    });
    setFriends([...newArray]);
  };

  const playMusic = () => {
    let audio = new Audio("ting.mp3");
    audio.play();
  };
  const makeCurrentUserNull = () => {
    setCurrentUser({
      name: null,
      email: null,
      avatar: null,
      status: null,
      _id: null,
    });
  };
  return (
    <TestContext.Provider
      value={{
        state,
        setState,
        toggleDrawer,
        time,
        handleAlert,
        handleLoader,
        makeItNull,
        concatTheUser,
        addMessageArray,
        addRecentMessageArray,
        handleSearch,
        playMusic,
        makeCurrentUserNull,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default TestState;
