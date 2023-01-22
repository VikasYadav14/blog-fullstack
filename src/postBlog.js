import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiHomeOutline, TiTickOutline } from 'react-icons/ti'
export default function PostBlog() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [blog, setBlog] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch("/post", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title: title,
                    blog: blog
                })
            }).then((response) => response.json())
                .then((data) => {
                    if (!data.title) {
                        alert(data.error)
                    }
                    else {
                        alert('Blog posted succesfully')
                        navigate(`/blog/${data._id}`)
                    }
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-gray-100 w-full h-full lg:p-4">
            <form onSubmit={handleSubmit}>
                <div className="fixed top-32 pl-12">
                    <a href='/'>
                        <div className="bg-yellow-300 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" title="Home">
                            <TiHomeOutline />
                        </div>
                    </a>
                    <button type='submit' className="mt-4 bg-yellow-300 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" title="Submit">
                        <TiTickOutline />
                    </button>
                </div>
                <div className="p-10 pl-40 bg-white rounded-2xl h-full text-center text-gray-500">
                    <h1 className="text-3xl font-bold uppercase">BLOG</h1>
                    <div className="flex flex-col py-2">
                        <input
                            className="border-2 rounded-lg p-3 border-gray-300 text-gray-500"
                            type="title"
                            name="title"
                            required
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col py-2">
                        <textarea
                            className="border-2 rounded-lg p-3 border-gray-300 text-gray-500"
                            rows="20"
                            name="blog"
                            required
                            placeholder="write your blog....."
                            value={blog}
                            onChange={(e) => setBlog(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}