import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Zakaži pregled
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="Ime"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Prezime"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Vaš Email"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Broj telefona"
            />
          </div>
          <div className=" flex gap-5">
            <Button title="Pošalji" />
            <button
              className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Zatvori
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
