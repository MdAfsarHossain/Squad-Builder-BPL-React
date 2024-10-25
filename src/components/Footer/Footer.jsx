const Footer = () => {
  return (
    <footer className="bg-[#06091A]  flex flex-col  gap-5 pt-56 lg:pt-64 pb-10 w-full">
      {/* Logo */}
      <div className=" flex flex-col justify-center items-center mb-2 lg:mb-5">
        <img src="/logo-footer.png" alt="" />
      </div>

      {/* Links */}
      <div className="flex flex-col justify-center items-center text-center  lg:items-start lg:text-start gap-8 lg:flex-row lg:justify-between text-white p-10">
        <nav>
          <h6 className="text-white font-bold text-4xl md:text-4xl lg:text-2xl">
            About
          </h6>
          <p className="md:w-96 lg:w-60 text-gray-400 mt-5">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="text-white font-bold text-4xl md:text-4xl lg:text-2xl">
            Quick Links
          </h6>
          <div className="flex flex-col gap-2 text-gray-400 mt-5">
            <li className="link link-hover">Home</li>
            <li className="link link-hover">Services</li>
            <li className="link link-hover">About</li>
            <li className="link link-hover">Contact</li>
          </div>
        </nav>
        <form>
          <h6 className="text-white font-bold text-4xl md:text-4xl lg:text-2xl">
            Subscribe
          </h6>
          <fieldset className="form-control w-80 mt-5">
            <label className="label">
              <span className="label-text text-gray-400 lg:w-56">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="join mt-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-black"
              />
              <button className="btn bg-[#E7FE29] join-item border-2 border-[#E7FE29] hover:bg-transparent hover:border-[#E7FE29] hover:text-[#E7FE29]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Copyrights */}
      <div className="flex flex-col justify-center items-center border-t-[1px] border-gray-800 border-[] py-5 mt-5">
        <p className="text-gray-400">@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
