import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  console.log(router);
  return (
    <Layout title={router.query.title}>
      <p style={{width: '80vw'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
    </Layout>
  );
}

export default withRouter(Post);