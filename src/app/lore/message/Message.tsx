"use client";
import { GetMessages, PostReply, SendMessage } from "@/db/messages";
import React, { CSSProperties, useEffect, useState } from "react";

type Props = {};

const colors = {
  list: [
    { title: "Pink", value: "#E4009F" },
    { title: "Red", value: "#E6356C" },
    { title: "Purple", value: "#B400FF" },
    { title: "Green", value: "#00DF73" },
    { title: "Yellow", value: "#F1E53D" },
    { title: "Blue", value: "#8ADCEC" },
  ],
};
export default function Message({}: Props) {
  // Display
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [changes, setChanges] = useState(true);
  useEffect(() => {
    const loadMessage = async () => {
      const message = await GetMessages();
      setMessagesList(message);
    };
    if (changes) {
      console.log("updating data");
      loadMessage();
      setChanges(false);
    }
  }, [changes]);

  // Submit
  const [selectedColor, setSelectedColor] = useState(colors.list[0].value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const postMessages = async () => {
    await SendMessage(name, email, messages, selectedColor);
    alert("Message posted successfully!");
    setName("");
    setMessages("");
    setEmail("");
    setChanges(true);
  };

  return (
    <section id="message">
      <div className="win-panel">
        <div className="panel-head">
          <h2>contact.exe</h2>
          <img src="/de/closebtn.png" alt="" className="btn close-icon" />
        </div>
        <div className="panel-content">
          <div className="info">
            <h2>LEAVE A MESSAGE</h2>
            <p>
              (CONTACT Description) ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="form-group">
            <div className="input">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                placeholder="Your name here!"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="email">EMAIl</label>
              <input
                type="text"
                name="email"
                placeholder="Your email here!"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input textarea">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here!"
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
            />
          </div>

          <div className="action">
            <div className="color-select">
              <p>PICK A COLOR</p>
              <div className="colors">
                {colors.list.map((clr) => {
                  return (
                    <div
                      className={`color ${
                        selectedColor === clr.value ? "selected" : ""
                      }`}
                      key={"color-select" + clr.title}
                      onClick={() => {
                        setSelectedColor(clr.value);
                      }}
                      style={{ background: clr.value }}
                    ></div>
                  );
                })}
              </div>
            </div>

            <button className="btn btn-submit btn-basic" onClick={postMessages}>
              POST MESSAGE
            </button>
          </div>
        </div>
        <img src="/de/gpack.png" alt="" className="gpack l" />
        <img src="/de/gpack2.png" alt="" className="gpack r" />
      </div>

      <div className="message-board eared">
        <h2 className="title">MESSAGE LIST</h2>
        <div className="message-list">
          {messagesList &&
            messagesList.map((mess) => {
              return (
                <MessageItem
                  mess={mess}
                  key={mess._id}
                  onUpdate={() => {
                    setChanges(true);
                  }}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

type MessageItemProps = {
  mess: any;
  onUpdate: () => void;
};
function MessageItem({ mess, onUpdate }: MessageItemProps) {
  const [showReply, setShowReply] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const replyToMessage = async () => {
    await PostReply(mess._id, name, message);
    alert("Message successfuly posted!");
    setName("");
    setMessage("");
    onUpdate();
  };

  return (
    <div className={`message ${showReply ? "open" : "closed"}`} key={mess._id}>
      {/* Main Message */}
      <div
        className="btn main eared small"
        style={
          {
            background: mess.color,
            "--accent": mess.color,
          } as CSSProperties
        }
        onClick={() => {
          setShowReply((val) => !val);
        }}
      >
        <h2>
          {!mess.name ? "Anonymous" : "@" + mess.name} -{" "}
          {new Date(mess._createdAt).toDateString()} says:
        </h2>
        <p>{mess.message}</p>
        <p className="reply"> {"<-"} Click to show replies</p>
      </div>

      {/* Replies list */}
      <div className="replies">
        {mess.replies &&
          mess.replies.map((reply: any) => {
            return (
              <div
                className="reply"
                style={{
                  background: mess.color,
                }}
                key={mess._id + "reply" + reply._key}
              >
                <h2>
                  {!reply.name ? "Anonymous" : "@" + reply.name} - REPLIED:
                </h2>
                <p>{reply.messages}</p>
              </div>
            );
          })}

        <div className="reply-bar">
          <h2>REPLY TO THIS COMMENT</h2>
          <div className="input ">
            <label htmlFor="replies">Name</label>
            <input
              name="name"
              placeholder="Your name here!"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input textarea">
            <label htmlFor="replies">Message</label>
            <textarea
              name="replies"
              placeholder="Write your replies here!"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>

          <div className="action">
            <button className="btn btn-basic" onClick={replyToMessage}>
              REPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
