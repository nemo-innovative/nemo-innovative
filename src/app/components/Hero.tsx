const Hero = () => {
  return (
    <section
      className="body-font bg-cover bg-no-repeat bg-center flex justify-between"
      style={{
        backgroundImage:
          "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf3c8e3b-3d47-474b-8d26-fbddddf63586/dg6n309-6133d487-9aca-40f1-9a66-e7c2efe47ccc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmM2M4ZTNiLTNkNDctNDc0Yi04ZDI2LWZiZGRkZGY2MzU4NlwvZGc2bjMwOS02MTMzZDQ4Ny05YWNhLTQwZjEtOWE2Ni1lN2MyZWZlNDdjY2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h_JTc7m0-fxoIY5hkORs2K7EQFSLLzyTNSYQdwDKlqU)",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="container px-5 py-40 mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl title-font font-medium text-white mt-24 mb-7 hover:text-[#0d7abf]">
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
