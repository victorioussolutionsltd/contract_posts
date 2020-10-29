import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';

const Lister = () => {

	const [loading, setLoading] = useState(true);
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then(data => {
			setLoading(false);
			setPosts(data);
		});
	}, []);

	const onDeletePost = (id) => {
		// TODO: implement
	}

	const onCreatePost = post => {
		// TODO: implement
	}

	if (loading) {
		return <>Loading...</>
	}

	return <div className="postList">
		{
			allPosts.length === 0 ? <>No posts available...</> : null
		}
		{
			allPosts?.map((post) => {
				<Post
					title={post?.title}
					body={post?.body}
					author={post?.author}
					onDelete={onDeletePost}
				/>
			})}
		<CreatePost />
	</div>

};

export default Lister;