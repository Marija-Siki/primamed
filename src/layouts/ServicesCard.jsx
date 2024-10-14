const ServicesCard = ({ icon, title, text, secondTitle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="no-highlight group flex flex-col mt-6 lg:mt-10 items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 lg:transition duration-300 lg:ease-in-out"
    >
      <div className="bg-[#d5f2ec] p-3 rounded-full lg:transition-colors lg:duration-300 ease-in-out lg:group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg md:text-2xl">{title}</h1>
      <h2 className="text-bold text-2xl">{secondTitle}</h2>
      <p className="md:text-xl">{text}</p>
    </div>
  );
};

export default ServicesCard;
