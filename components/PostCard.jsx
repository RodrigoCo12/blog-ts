import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
    // console.log(post);
    return (
        <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
            <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
                <Image
                    priority="false"
                    src={post.featuredImage.url}
                    alt={post.title}
                    layout="fill"
                    className="absoluterounded-t-lg h-80 w-full object-cover object-top shadow-lg lg:rounded-lg"
                />
            </div>
            <h2 className="text-3x1 transaition mb-8 cursor-pointer text-center text-xl font-semibold text-black duration-700 hover:text-pink-600">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className=" block w-full items-center justify-center text-center lg:flex ">
                <div className=" mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
                    <Image
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="h-8 w-8 rounded-full align-middle"
                    />
                    <p className="ml-2 inline align-middle text-lg text-gray-700">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 inline h-7 w-7 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z"
                        />
                    </svg>
                    <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
                </div>
            </div>
            <p className=" my-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">{post.excerpt}</p>
            <div className=" text-center">
                <Link href={`/post/${post.slug}`}>
                    <span className=" inline-block transform cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
