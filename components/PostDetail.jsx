import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>;
            }

            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>;
            }

            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>;
            }
        }

        switch (type) {
            case 'heading-three':
                return (
                    <h3 key={index} className="mb-4 text-xl font-semibold">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p key={index} className="mb-8">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                );
            case 'heading-four':
                return (
                    <h4 key={index} className="text-md mb-4 font-semibold">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h4>
                );
            case 'image':
                return <Image key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
                <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
                    <Image
                        src={post.featuredImage.url}
                        alt={post.title}
                        layout="fill"
                        className="absoluterounded-t-lg h-80 w-full object-cover object-top shadow-lg lg:rounded-lg"
                    />
                </div>

                <div className="px-4 lg:px-0">
                    <div className="mb-8 flex w-full items-center">
                        <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
                            <Image
                                width="30px"
                                height="30px"
                                alt={post.author.name}
                                className=" rounded-full align-middle"
                                src={post.author.photo.url}
                            />
                            <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
                                {post.author.name}
                            </p>
                        </div>
                        <div className="font-medium text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 inline h-7 w-7 text-pink-500"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z"
                                />
                            </svg>
                            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                    </div>
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) =>
                            getContentFragment(itemindex, item.text, item)
                        );

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </>
    );
};

export default PostDetail;
