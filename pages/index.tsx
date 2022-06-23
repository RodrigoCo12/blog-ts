import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components/index';
import { getPosts } from '../services';

const Home: NextPage = ({ posts }: any) => {
    return (
        <div className="conteiner mx-auto mb-8  px-10 text-white">
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post: any) => (
                        <PostCard post={post.node} key={post.node.title} />
                    ))}
                </div>
                <div className="lg-col-span-4 col-span-4">
                    <div className="relative top-8 lg:sticky">
                        {/* in the future, I will change for typescript */}
                        <PostWidget categories={undefined} slug={undefined} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    };
}
