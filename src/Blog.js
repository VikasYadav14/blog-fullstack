import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogImg from './images/blogImg.jpeg'
import { TiHomeOutline } from "react-icons/ti";

export default function Blog() {
    const { blogId } = useParams()
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`/blog/${blogId}`)
            .then((response) => response.json())
            .then((output) => {
                setBlog(output);
            });
    }, [])

    return (
        <div className="px-20 py-5 bg-gray-100">
            <div className="fixed top-20">
                <a href="/" rel="noreferrer">
                    <div className="bg-yellow-300 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" title="Home">
                        <TiHomeOutline />
                    </div>
                </a>
            </div>
            <div className="p-10 bg-white rounded-2xl h-full shadow-lg">
                <div className="overflow-hidden rounded-2xl h-full">
                    <div className="w-full bg-gray-100">
                        <img src={blogImg} alt='/' className='w-full h-80' />
                    </div>
                    <div className="bg-white text-white h-full">
                        <div className="px-6 py-4 ">
                            <div className="font-bold text-6xl m-2 text-yellow-400 text-center">{blog.title}</div>
                        </div>
                        <div className="px-6 pt-4 pb-4 text-xl text-gray-400">{blog.blog}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}