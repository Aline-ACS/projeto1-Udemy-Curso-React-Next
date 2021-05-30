import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {
                posts.map(post => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        cover={post.cover}
                        body={post.body}
                    />
                ))
            }
        </div>
    )
};

Posts.defaultProps = {
    posts: [],
};

Posts.propTypes = {
    posts: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            cover: P.string.isRequired,
            body: P.string.isRequired,
        })
    )
};