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

  const [message, setMessage] = useState("");

  const chatsRef = firebase.firestore().collection("chats");

  const handleSendMessage = (e) => {
    if (e.key == "Enter" && message.length > 0) {
      const chatIdValue = user.id + chatTargetUser.id;
      const obj = { userId: user.id, message: message };
      chatsRef
        .doc(chatIdValue)
        .update({ messages: firebase.firestore.FieldValue.arrayUnion(obj) });
      setMessage("");
    }
  };

  const getChatHandler = (chatIdValue) => {
    chatsRef.doc(chatIdValue).onSnapshot((doc) => {
      if (doc.exists) {
        setChatMessages(doc.data().messages);
      }
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
                  if (
                    userMessage.userId.replace(/[^a-zA-Z0-9]/g, "") ==
                    chatTargetUser.id
                  ) {
                    return (
                      <div
                        key={index}
                        className="d-flex flex-row justify-content-start"
                      >
                        {chatTargetUser.profileImage && (
                          <img
                            src={chatTargetUser.profileImage}
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        )}
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
                  } else if (
                    userMessage.userId.replace(/[^a-zA-Z0-9]/g, "") == user.id
                  ) {
                    return (
                      <div
                        key={index}
                        className="d-flex flex-row justify-content-end mb-4 pt-1"
                      >
                        <div>
                          <p
                            className="small p-2 me-3 mb-1 text-white rounded-3"
                            style={{ backgroundColor: "#17a2b8" }}
                          >
                            {userMessage.message}
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                            {userMessage.createdAt}
                          </p>
                        </div>
                        {user.profileImage && (
                          <img
                            src={user.profileImage}
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        )}
                      </div>
                    );
                  }
                })}
            </div>
            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              {user && user.profileImage && (
                <img
                  src={user.profileImage}
                  alt="avatar 3"
                  style={{ width: "40px", height: "100%" }}
                />
              )}
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  handleSendMessage(e);
                }}
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
