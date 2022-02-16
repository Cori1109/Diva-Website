import { useRouter } from 'next/router'
import { Post } from '..';
import { getAllPosts, getPostBySlug } from '../api/getPosts';

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((v) => ({
      params: { slug: v.slug },
    })),
    fallback: false,
  };
}

export const getStaticProps = async (context: any) => {
  const post = getPostBySlug(context.params.slug)

  return {
    props: {
      post,
    },
  };
};


const PostPage = ({ post }: { post: Post }) => {
  return <p>{post.content}</p>;
};

export default PostPage