import React, { useContext } from "react";
import { UserContext } from "../components/AppContext";
import Log from "../components/Log";

const Home = () => {
	const userConnection = useContext(UserContext);

	return <div>{userConnection ? <h1>POSTS</h1> : <Log />}</div>;
};

export default Home;