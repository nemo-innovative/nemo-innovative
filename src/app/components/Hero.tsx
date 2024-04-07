const Hero = () => {
  return (
    <section
      className="w-full h-screen max-h-[32rem] p-24 relative overflow-hidden block z-10 bg-cover bg-no-repeat bg-center
    bg-[url('https://media.discordapp.net/attachments/1222590290024730695/1226558174824239225/istockphoto-513247652-612x612_upscayl_4x_realesrgan-x4plus.png?ex=66253451&is=6612bf51&hm=1a2876cf56d02a49c034de9c9207396f4c6f7324916e07de0599fb377676bddf&=&format=webp&quality=lossless&width=1146&height=662')]
"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#63A8D6] to-[#6FE388] opacity-80 mix-blend-multiply"></div>
      <div className="absolute container px-5  mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl title-font font-medium text-white mt-24 mb-7">
              INNOVATE. CREATE. DOMINATE.
            </h2>
            <div className="mt-14 mb-14 text-base  text-white max-w-xl">
              We envision a future where businesses seamlessly harness the power
              of evolving technologies to not only adapt to change but to thrive
              in it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
