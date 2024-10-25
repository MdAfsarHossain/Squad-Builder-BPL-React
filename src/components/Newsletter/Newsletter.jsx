const Newsletter = () => {
  return (
    <div className="border-2 p-5 rounded-xl  border-white backdrop-blur-lg">
      <div
        className="flex flex-col justify-center items-center gap-3 border-2 rounded-xl py-12 lg:py-24  bg-gray-50"
        style={{
          backgroundImage: "url(/bg-shadow.png)",
        }}
      >
        <h1 className="font-bold text-2xl lg:text-4xl">Subscribe to our Newsletter</h1>
        <p className="text-xs lg:text-lg font-semibold">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <input
            className="border-2 px-5 py-2 rounded-lg"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#E7FE29] border-2  border-[#E7FE29] rounded-lg px-3 py-2 font-bold hover:bg-transparent transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
