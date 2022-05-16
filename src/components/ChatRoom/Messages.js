import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "../../style/chatroom.css";
import {
  fetchChatTargetUser,
  fetchUser,
} from "../../redux/actions/userActions";
import { getUserId } from "../../helpers/helpers";
import firebase from "../../firebase";
import { setChatMessages } from "../../redux/actions/chatActions";

const Messages = (props) => {
  const { userId } = useParams();
  const {
    fetchChatTargetUser,
    fetchUser,
    user,
    chatTargetUser,
    setChatMessages,
    chatMessages,
  } = props;

  const chatsRef = firebase.firestore().collection("chats");

  const getChatHandler = (chatIdValue) => {
    chatsRef
      .doc(chatIdValue)
      .get()
      .then((doc) => {
        setChatMessages(doc.data().messages);
      });
  };

  useEffect(() => {
    if (user && chatTargetUser) {
      const chatIdValue = user.id + chatTargetUser.id;
      getChatHandler(chatIdValue);
    }
  }, [user != undefined && chatTargetUser != undefined]);

  useEffect(() => {
    fetchChatTargetUser(userId);
    fetchUser(getUserId());
  }, []);

  console.log(chatMessages);

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <div className="card" id="chat2">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
            </div>
            <div
              className="card-body"
              data-mdb-perfect-scrollbar="true"
              style={{
                position: "relative",
                height: "400px",
                overflow: "scroll",
              }}
            >
              {chatMessages &&
                chatMessages.map((userMessage, index) => {
                  console.log("if", userMessage.userId == chatTargetUser.id);
                  console.log("else", userMessage.userId == user.id);
                  if (userMessage.userId == chatTargetUser.id) {
                    return (
                      <div
                        key={index}
                        className="d-flex flex-row justify-content-start"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                        <div>
                          <p
                            className="small p-2 ms-3 mb-1 rounded-3"
                            style={{ backgroundColor: "#f5f6f7" }}
                          >
                            {userMessage.message}
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted">
                            {userMessage.createdAt}
                          </p>
                        </div>
                      </div>
                    );
                  } else if (userMessage.userId == user.id) {
                    return (
                      <div
                        key={index}
                        className="d-flex flex-row justify-content-end mb-4 pt-1"
                      >
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            {userMessage.message}
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                            {userMessage.createdAt}
                          </p>
                        </div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "100%" }}
                        />
                      </div>
                    );
                  }
                })}
            </div>
            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "40px", height: "100%" }}
              />
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              />
              <a className="ms-1 text-muted" href="#!">
                <i className="fas fa-paperclip"></i>
              </a>
              <a className="ms-3 text-muted" href="#!">
                <i className="fas fa-smile"></i>
              </a>
              <a className="ms-3" href="#!">
                <i className="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  chatTargetUser: state.user.chatTargetUser,
  chatMessages: state.chat.chatMessages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatTargetUser: (userId) => dispatch(fetchChatTargetUser(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    setChatMessages: (messages) => dispatch(setChatMessages(messages)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
