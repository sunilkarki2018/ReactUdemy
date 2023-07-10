import React, { useState } from "react";

function UpdateFormObject() {
  const [obj, setobj] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setobj((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(obj);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="username"
        />
        <input
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="city"
        />
      </form>
    </div>
  );
}

export default UpdateFormObject;
