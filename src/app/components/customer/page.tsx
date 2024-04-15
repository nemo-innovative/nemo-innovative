import Image from "next/image";

const Customer = () => {
  return (
    <>
      <div className="my-16 flex justify-center mx-auto w-full max-w-screen-xl">
        <h1 className="title-font text-3xl mb-3 font-bold text-black">
          Our Valued Clients
        </h1>
      </div>
      <div className="w-full flex justify-center mb-20 overflow-x-auto">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-8 my-4">
            <Image
              src="/clients/Artboard 1@2x.png"
              alt=""
              width={150}
              height={150}
            />
          </li>
          <li className="mx-8 my-4">
            <Image
              src="/clients/kalinchowk.png"
              alt=""
              width={150}
              height={150}
            />
          </li>
          <li className="mx-8 my-4">
            <Image src="/clients/luxe.png" alt="" width={150} height={150} />
          </li>
          <li className="mx-8 my-4">
            <Image
              src="/clients/mavefund.png"
              alt=""
              width={150}
              height={150}
            />
          </li>
          <li className="mx-8 my-4">
            <Image
              src="/clients/manjushree.png"
              alt=""
              width={150}
              height={150}
            />
          </li>
          <li className="mx-8 my-4">
            <Image src="/clients/uandme.png" alt="" width={150} height={150} />
          </li>
        </ul>
      </div>

      <div>
        <h1 className="flex justify-center title-font text-3xl mb-4 font-bold text-black">
          Ready to dive into projects?
        </h1>
        <div className="flex justify-center text-xl">
          <p>Get in touch with our team</p>
        </div>
        <div className="flex justify-center my-8">
          <button className="text-white bg-[#0D7ABF] border-0 py-2 px-6 focus:outline-none hover:bg-[#0a5483] rounded-[26px] text-lg">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
};

export default Customer;
