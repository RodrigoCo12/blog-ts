import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
    // console.log(post);
    return (
        <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
            <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
                />
            </div>
            <h2 className="text-3x1 transaition mb-8 cursor-pointer text-center text-xl font-semibold text-black duration-700 hover:text-pink-600">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className=" block w-full items-center justify-center text-center lg:flex ">
                <div className=" mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full align-middle"
                    />
                    <p className="ml-2 inline align-middle text-lg text-gray-700">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg viewBox="0 0 56 56" className=" relative m-0 inline h-7 w-7">
                        <path
                            d="M38.5,6.5 C39.2796961,6.5 39.9204487,7.09488808 39.9931334,7.85553999 L40,8 L40.001392,9.06699994 C41.9486773,9.20284952 42.9250326,9.54316416 43.9073828,10.0685308 C45.2110865,10.7657592 46.2342408,11.7889135 46.9314692,13.0926172 C47.6286976,14.3963209 48,15.6894658 48,19.2555408 L48,38.7444592 C48,42.3105342 47.6286976,43.6036791 46.9314692,44.9073828 C46.2342408,46.2110865 45.2110865,47.2342408 43.9073828,47.9314692 C42.6036791,48.6286976 41.3105342,49 37.7444592,49 L18.2555408,49 C14.6894658,49 13.3963209,48.6286976 12.0926172,47.9314692 C10.7889135,47.2342408 9.76575919,46.2110865 9.06853082,44.9073828 C8.37130244,43.6036791 8,42.3105342 8,38.7444592 L8,19.2555408 C8,15.6894658 8.37130244,14.3963209 9.06853082,13.0926172 C9.76575919,11.7889135 10.7889135,10.7657592 12.0926172,10.0685308 C13.0751383,9.54307275 14.0516624,9.2027311 15.9996245,9.06692904 L16,8 C16,7.17157288 16.6715729,6.5 17.5,6.5 C18.2796961,6.5 18.9204487,7.09488808 18.9931334,7.85553999 L19,8 L19,9 L37,9 L37,8 C37,7.17157288 37.6715729,6.5 38.5,6.5 Z M45,22 L11,22 L11.0008335,39.0593054 C11.014799,41.6168821 11.2061173,42.5429835 11.7139704,43.4925862 C12.1315994,44.2734845 12.7265155,44.8684006 13.5074138,45.2860296 C14.4950006,45.8141968 15.4571684,46 18.2555408,46 L37.7444592,46 C40.5428316,46 41.5049994,45.8141968 42.4925862,45.2860296 C43.2734845,44.8684006 43.8684006,44.2734845 44.2860296,43.4925862 C44.8141968,42.5049994 45,41.5428316 45,38.7444592 L45,22 Z M18.7180574,37 C19.1638168,37 19.3254599,37.0464128 19.4884229,37.1335664 C19.6513858,37.2207199 19.7792801,37.3486142 19.86643"
                            className=" w-7  fill-pink-600"
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
