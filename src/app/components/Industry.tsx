import Image from "next/image";

const IndustryPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 ">
              Industries We Serve
            </h1>
            <p className="text-xl">
              We envision a future where businesses seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-extrabold text-2xl">
            <div className="relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>Corporates</p>
                <p>&</p>
                <p>Enterprises</p>
              </div>
              <div className="px-8 py-6 border-l-2 border-opacity-60 h-auto max-w-lg transition-all duration-300 mx-auto md:mx-0 blur-none hover:blur-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src={"/software.png"} height={500} width={500} alt="" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>Education</p>
              </div>
              <div className="px-8 py-6 border-l-2 border-opacity-60 h-auto max-w-lg transition-all duration-300 mx-auto md:mx-0 blur-none hover:blur-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src={"/video.png"} height={500} width={500} alt="" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>Service</p>
                <p>Accommodation</p>
              </div>
              <div className="px-8 py-6 border-l-2 border-opacity-60 h-auto max-w-lg transition-all duration-300 mx-auto md:mx-0 blur-none hover:blur-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src={"/marketing.png"} height={500} width={500} alt="" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>HealthCare</p>
              </div>
              <div className="px-8 py-6 border-l-2 border-opacity-60 h-auto max-w-lg transition-all duration-300 mx-auto md:mx-0 blur-none hover:blur-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src={"/software.png"} height={500} width={500} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
