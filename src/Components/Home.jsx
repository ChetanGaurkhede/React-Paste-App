import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PastSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pastId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pastId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pastId) {
      //update
      dispatch(updateToPastes(paste))
    } else {
      //create
      dispatch(addToPastes(paste))
    }
    //clearing all
    setTitle('')
    setValue('')
    searchParams({})
  }
  return (
    <div className="min-w-[800px]">
      <div className="flex flex-row justify-between w-full">
        <input
          className="px-5 py-3 rounded-md mt-3 w-[50%]"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="ml-3">
          {pastId ? "Update My Paste" : "Create New Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="w-full p-2 rounded-md mt-5"
          value={value}
          placeholder="Enter your content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
