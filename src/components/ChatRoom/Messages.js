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
import { setChat } from "../../redux/actions/chatActions";

const Messages = (props) => {
  const { userId } = useParams();
  const {
    fetchChatTargetUser,
    fetchUser,
    user,
    chatTargetUser,
    setChat,
    chat,
  } = props;

  const [message, setMessage] = useState("");
  const [docId, setDocId] = useState("");

  const chatsRef = firebase.firestore().collection("chats");

  const handleCreateChat = () => {
    const chatIdValue = user.id + chatTargetUser.id;
    const reverseChatIdValue = chatTargetUser.id + user.id;
    chatsRef.doc(chatIdValue);

    chatsRef
      .doc(reverseChatIdValue)
      .get()
      .then((doc) => {
        if (doc.exists) {
          getChatHandler(reverseChatIdValue);
          return;
        }
      });

    chatsRef
      .doc(chatIdValue)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return;
        } else {
          chatsRef.doc(chatIdValue).set({
            messages: [],
          });
        }
      });
  };

  const handleSendMessage = (e) => {
    if (e.key == "Enter" && message.length > 0) {
      const obj = { userId: user.id, message: message };
      chatsRef
        .doc(docId)
        .update({ messages: firebase.firestore.FieldValue.arrayUnion(obj) });
      setMessage("");
    }
  };

  const getChatHandler = () => {
    const chatIdValue = user.id + chatTargetUser.id;
    const reverseChatIdValue = chatTargetUser.id + user.id;

    chatsRef.doc(chatIdValue).onSnapshot((doc) => {
      if (!doc.data()) {
        chatsRef.doc(reverseChatIdValue).onSnapshot((doc) => {
          setDocId(doc.id);
          setChat(doc.data());
        });
      } else {
        setDocId(doc.id);
        setChat(doc.data());
      }
    });
  };

  useEffect(() => {
    if (user && chatTargetUser) {
      getChatHandler();
    }
  }, [user != undefined && chatTargetUser != undefined && docId != undefined]);

  useEffect(() => {
    if (user && chatTargetUser) {
      handleCreateChat();
    }
    fetchChatTargetUser(userId);
    fetchUser(getUserId());
  }, [user != undefined && chatTargetUser != undefined]);

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
              {chat &&
                chat.messages &&
                chat.messages.map((userMessage, index) => {
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
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
  chat: state.chat.chat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatTargetUser: (userId) => dispatch(fetchChatTargetUser(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    setChat: (chat) => dispatch(setChat(chat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
