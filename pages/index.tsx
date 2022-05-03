import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components/index';
const post = [
    {
        title: 'React testing',
        excerpt: 'Learn React testing'
    },
    {
        title: 'React with taildwind',
        excerpt: 'Learn React with tailwind'
    }
];

const Home: NextPage = () => {
    return (
        <div className="conteiner mx-auto mb-8 px-10 text-white">
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-8">
                    {post.map((post) => (
                        <PostCard post={post} key={post.title} />
                    ))}
                </div>
                <div className="lg-col-span-4 col-span-1">
                    <div className="relative top-8 lg:sticky">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
