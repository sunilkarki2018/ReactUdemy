import { useState } from "react";

function ObjectInitialize() {
  const [user, SetUser] = useState({ name: "sunil", age: 33 });

  //const user = {
  //  name: "sunil",
  //  age: 33,
  //};

  //If user is not initilaize in useState hook then to prevent undefined error below are 2 methods to access the value.

  return (
    <>
      <div className="App">Name of User: {user?.name}</div>
      <div className="App">
        {user && <span>Name of User: {user.name}</span>}
      </div>
    </>
  );
}

export default ObjectInitialize;
