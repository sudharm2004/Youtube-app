import React, { useEffect, useState } from "react";
import LiveComment from "./LiveComment";
import { generateName, generateComment } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/Comments";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveInputComment, setliveInputComment] = useState();
  const liveComments = useSelector((store) => store.comments.liveComments);
  {
    // console.log(liveComments);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("interval");
      let name = generateName();
      let comment = generateComment();
      dispatch(addComment({ name: name, comment: comment }));
      //   console.log(liveComments);
    }, [2000]);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col h-[520px] ml-4 border-2 w-1/4 rounded-lg">
      <div className=" p-4 bg-slate-100 w-full  box-border overflow-y-scroll h-[95%] flex flex-col-reverse">
        {liveComments.map((liveComment) => {
          return (
            <LiveComment
              name={liveComment.name}
              comment={liveComment.comment}
            />
          );
        })}
      </div>

      <form
        className="h-[5%] w-full"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addComment({ name: "Sudharm Jadhav", comment: liveInputComment })
          );
          console.log(liveInputComment);
          setliveInputComment("");
        }}
      >
        <input
          type="text"
          className="h-full mb-1 w-full border-2 rounded-lg border-black   p-2 box-border"
          value={liveInputComment}
          placeholder="Type Something..."
          onChange={(event) => {
            setliveInputComment(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default LiveChat;
