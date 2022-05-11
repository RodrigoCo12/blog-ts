import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getRecentPosts, getSimilarPost } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPost, setRelatedPost] = useState([]);
    useEffect(() => {
        if (slug) {
            getSimilarPost(categories, slug).then((result) => setRelatedPost(result));
        } else {
            getRecentPosts().then((result) => setRelatedPost(result));
        }
    }, [slug]);

    console.log(relatedPost);
    return (
        <div className="mb-8 w-full rounded-lg bg-white p-8 text-gray-700 shadow-lg">
            <h3 className=" border-b pb-4 text-xl font-semibold ">{slug ? 'Releated Post' : 'Recent Post'}</h3>
            {relatedPost.map((post) => (
                <div key={post.title} className="mb-4 mt-5 flex w-full items-center">
                    <div className="w-16 flex-none">
                        <img
                            alt={post.title}
                            className="h-16 w-16 rounded-full object-cover align-middle"
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className="ml-4 flex-grow">
                        <p className="font-xs text-gray-500">{moment(post.createdAt).format('DD MMM, YYYY')}</p>
                        <Link href={`/post/${post.slug}`} className="text-md " key={post.title}>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostWidget;
