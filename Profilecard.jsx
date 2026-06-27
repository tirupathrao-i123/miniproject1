import { useState } from "react";

function ProfileCard(props) {
  const [follow, setFollow] = useState(false);

  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.role}</p>

      <button onClick={() => setFollow(!follow)}>
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;