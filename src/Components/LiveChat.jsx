import React, { useEffect, useState } from "react";
import Chatmessages from "./Chatmessages";
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../utils/chatSlice";
import { generateRandomName, makerandommessages } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [livemessage, setlivemessage] = useState();
  const chatmessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("APi Polling");
      dispatch(
        addmessages({
          name: generateRandomName(),
          message: makerandommessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-[500px] w-full mx-5 p-2 border border-gray-300 rounded-lg bg-white flex flex-col">
      <div className="bg-gray-50 h-full w-full overflow-y-scroll flex flex-col-reverse px-2 space-y-2">
        {chatmessages.map((c, i) => (
          <Chatmessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="h-[60px] border-t border-gray-300 flex items-center gap-2 px-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addmessages({
              name: "Shambhavi Pandey",
              message: livemessage,
            })
          );
          setlivemessage("");
        }}
      >
        <input
          className="border border-gray-300 rounded-full px-3 py-2 w-full outline-none focus:border-blue-500"
          value={livemessage}
          onChange={(e) => setlivemessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
