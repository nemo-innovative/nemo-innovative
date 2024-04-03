import Image from "next/image";

const Customer = () => {
  return (
    <>
      <div className="my-16 flex justify-center mx-auto w-full max-w-screen-xl">
        <h1 className="title-font text-3xl mb-4 font-bold text-black">
          Our Valued Clients
        </h1>
      </div>
      <div className="w-full flex justify-center mb-24 overflow-x-auto">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-8 my-4">
            <Image src="/python.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/phone.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/navigation.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/linkedin.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/java-script.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/html-5.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/gitnub.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/envelope.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/engineering.png" alt="" width={85} height={85} />
          </li>
          <li className="mx-8 my-4">
            <Image src="/css.png" alt="" width={85} height={85} />
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
