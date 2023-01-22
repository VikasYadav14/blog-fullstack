import { useEffect, useState } from 'react';
import { TiDocumentAdd } from 'react-icons/ti';
import blogImg from './images/blogImg.jpeg'
function Home() {
  const [BlogsList, setBlogsList] = useState([]);

  useEffect(() => {
    fetch(`/blog`,)
      .then((response) => response.json())
      .then((output) => {
        setBlogsList(output);
      });
  }, []);

  return (
    <>
      <div className="text-center px-20 py-50 bg-gray-100 h-full">
        <div className="fixed bottom-20 ">
          <a href="/Post" rel="noreferrer">
            <div className="bg-yellow-300 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" title="Create Blog">
              <TiDocumentAdd />
            </div>
          </a>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 bg-white rounded-2xl">
          {BlogsList.length > 0 &&
            BlogsList.map((idx) => (
              <div
                className="overflow-hidden shadow-lg rounded-2xl border-2 border-yellow-400"
              >
                <a href={`/Blog/${idx._id}`}>
                  <div className="w-full bg-gray-100">
                    <img src={blogImg} alt='/' className='w-full h-40' />
                  </div>
                  <div className="bg-yellow-400 text-white ">
                    <div className="px-6 py-4 ">
                      <div className="font-bold text-xl m-2">{idx.title}</div>
                    </div>
                    <div className="px-6 pt-2 pb-4">
                      <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        Post Date = {idx.createdAt.split("T")[0]}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;

// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// import img from '../../public/Blog.png';

// import useSWR from 'swr';
// import { useEffect, useState } from 'react';

// export default function Blogs() {
//   const [BlogsList, setBlogsList] = useState([]);

//   useEffect(() => {
//     fetch(`/Blog`)
//       .then((response) => response.json())
//       .then((output) => {
//         setBlogsList(output.data);
//       });
//   }, []);

//   console.log(BlogsList);

//   return (
//     <section>
//       <div className="px-20 py-20 bg-gray-100">
//         <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 bg-white rounded-2xl">
//           {/* <!--Card 1--> */}
//           {BlogsList.length > 0 &&
//             BlogsList.map((idx) => (
//               <div
//                 key={idx._id}
//                 className="overflow-hidden shadow-lg rounded-2xl border-2 border-yellow-400"
//               >
//                 <Link href={`/Blogs/${idx._id}`}>
//                   <div className="w-full bg-gray-100">
//                     <Image className="w-full h-64" src={img} alt="/"></Image>
//                   </div>
//                   <div className="bg-yellow-400 text-white ">
//                     <div className="px-6 py-4 ">
//                       <div className="font-bold text-xl m-2">{idx.title}</div>
//                       <p className="m-2">{idx.excerpt}</p>
//                     </div>
//                     <div className="px-6 pt-4 pb-2">
//                       <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
//                         Category : {idx.category}
//                       </span>
//                       <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
//                         Release : {idx.releasedAt}
//                       </span>
//                       <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
//                         Review : {idx.reviews}
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }

