import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className='p-5 bg-gray-100'>
        <div className="text-3xl text-yellow-400 font-bold">
          <a href='/' className='p-10'>
            EQAIM<span className='text-gray-400'> BLOG</span>
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
