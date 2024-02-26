// // import React from "react";
// import Button from "../layouts/Button";

// const Home = () => {
//   return (
//     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
//       <div className=" w-full lg:w-4/5 space-y-5 mt-10">
//         <h1 className="text-5xl font-bold leading-tight">
//           Unapredite vase zdravlje u nasoj klinici
//         </h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
//           omnis natus accusantium quos. Reprehenderit incidunt expedita
//           molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
//           fugiat vero consequatur?
//         </p>

//         <Button title="Sve Usluge" />
//       </div>
//     </div>
//   );
// };

// export default Home;
import Button from "../layouts/Button";

const Home = () => {
  const backgroundImageUrl =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.vogue.in%2Fwp-content%2Fuploads%2F2017%2F08%2FIMG_2649.jpg&f=1&nofb=1&ipt=83ef35899ad7a3a0db514d95bf4fc8e94d66978c89408d2fbef8589c40a4e803&ipo=images";
  // "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fjinmak.com%2Ftheme%2Fs007%2Fimg%2Fclinic_thum1.jpg&f=1&nofb=1&ipt=a54b31c58ca034761904d099d1abac7db1cb6ef4c6ad9b3091757f528dd44e98&ipo=images";

  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Unapredite vaše zdravlje u našoj klinici
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>
        <Button title="Sve Usluge" />
      </div>
    </div>
  );
};

export default Home;
