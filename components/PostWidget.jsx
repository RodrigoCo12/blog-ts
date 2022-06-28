import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPost, setRelatedPosts] = useState([]);

    useEffect(
        (categories = categories) => {
            if (slug) {
                getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
            } else {
                getRecentPosts().then((result) => setRelatedPosts(result));
            }
        },
        [slug]
    );

    // console.log(relatedPost);
    return (
        <div className="mb-8 w-full rounded-lg bg-white p-8 text-gray-700 shadow-lg">
            <h3 className=" border-b pb-4 text-xl font-semibold ">{slug ? 'Releated Post' : 'Recent Post'}</h3>
            {relatedPost.map((post) => (
                <div key={post.title} className="mb-4 mt-5 flex w-full items-center">
                    <div className="w-16 flex-none">
                        <Image
                            alt={post.title}
                            height="64px"
                            width="64px"
                            className="rounded-full object-cover align-middle"
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
