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

	const onDeletePost = (id) =>
		setPosts(allPosts.filter((post) => post?.id !== id))


	const onCreatePost = post => {
		const id = allPosts.length > 0 ? allPosts[allPosts.length - 1]?.id + 1 : 1;
		setPosts([...allPosts, { id, ...post }])
	}

	if (loading) {
		return <>Loading...</>
	}

	return <div className="postList">
		{
			allPosts.length === 0 ? <>No posts available...</> : null
		}
		{
			allPosts?.map((post, index) =>
				<Post
					key={`post${index}`}
					id={post?.id}
					title={post?.title}
					body={post?.body}
					author={post?.author}
					onDelete={onDeletePost}
				/>
			)}
		<CreatePost onCreate={onCreatePost} />
	</div>

};

export default Lister;