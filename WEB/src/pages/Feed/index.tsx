import React from "react";
import Header from "../../components/Header";
import Publicar from "../../components/Publicar";
import Posts from "../../components/Posts";
import "./styles.css";

const Feed: React.FC = () => {
	return (
		<div className="Feed">
			<Header />
			<Publicar />
			<div id="feed-posts">
				<Posts />
			</div>
		</div>
	);
};

export default Feed;
