import { Link } from "react-router-dom";

import classes from "./EventsList.module.css";
function MembersList({ members }) {
  return (
    <div className={classes.events}>
      <h1>All Members</h1>
      <ul className={classes.list}>
        {members.map((member) => (
          <li key={member.id} className={classes.item}>
            <Link to={member.id}>
              <img src={member.image} alt={member.title} />
              <div className={classes.content}>
                <h2>{member.title}</h2>
                <time>{member.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersList;
