import NotFoundImg from './images/404.png';

export default function Notfound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-20 bg-gray-100 ">
      <div className="flex justify-center w-full flex-1">
        <div className="bg-white rounded-2xl shadow-2xl p-10 flex w-2/3 max-w-4xl">
          <img src={NotFoundImg} alt="/" />
        </div>
      </div>
    </section>
  );
}
