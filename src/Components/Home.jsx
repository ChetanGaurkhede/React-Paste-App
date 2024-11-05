import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        className="px-3 py-1 rounded-md mt-3"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>
        Enter Paste
      </button>
    </div>
  );
};

export default Home;
