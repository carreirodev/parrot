import React from "react";
import Header from "../../components/Header";
import Publicar from "../../components/Publicar";
import Posts from "../../components/Posts";
import * as S from "./styled";

const Feed: React.FC = () => {
	return (
		<div>
			<Header />
			<Publicar />
			<S.FeedPost>
				<Posts />
			</S.FeedPost>
		</div>
	);
};

export default Feed;
