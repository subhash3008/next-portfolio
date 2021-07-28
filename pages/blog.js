import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
  <li>
    <Link as={title.toLowerCase().split(' ').join('-')} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="React Post"/>
      <PostLink title="Angular Post"/>
      <PostLink title="Vue Post"/>
    </ul>
  </Layout>
);

export default Blog;