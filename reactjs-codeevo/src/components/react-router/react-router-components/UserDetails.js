import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const { userId } = params;
  return <div>Details About User - {userId}</div>;
};

export default UserDetails;
