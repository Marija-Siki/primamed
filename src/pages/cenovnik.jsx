import React, { useEffect } from "react";

const services = [
  {
    name: "Elektro terapija",
    price: 800,
    subtitle: "1 procedura",
  },
  {
    name: "Sonoterapija",
    price: 800,
    subtitle: "1 procedura",
  },
  {
    name: "Laseroterapija",
    price: 900,
    subtitle: " 1 procedura",
  },
  {
    name: "Magnetoterapija",
    price: 900,
    subtitle: " 1 procedura",
  },
  {
    name: "Kombinovana terapija 1",
    price: 1500,
    subtitle: "(elektro th + laser/UZ)",
  },
  {
    name: "Kombinovana terapija 2",
    price: 2200,
    subtitle: "(elektro th + laser/UZ + magnet)",
  },
  { name: "Kineziterapija", price: 1500 },
  {
    name: "Korektivna gimnastika dece (individualan trening)",
    price: 1500,
  },
  {
    name: "Korektivna gimnastika dece (grupni trening)",
    price: 3500,
  },
  {
    name: "Korektivna gimnastika ODRASLI (grupno)",
    price: 3500,
  },
  { name: "Dry needling", price: 1500 },
  {
    name: "Dnevni terapijski paket",
    price: 3200,
    subtitle: "(elektro th + kinezi + dry needling/masaža)",
  },
  {
    name: "Neurološka rehabilitacija",
    price: 2000,
  },
  {
    name: "Terapeutska masaža (30 minuta)",
    price: 1500,
  },
  {
    name: "Relax masaža (30 minuta)",
    price: 1200,
  },
  {
    name: "Relax masaža (45 minuta)",
    price: 1800,
  },
];

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mt-32 pb-4 font-bold mb-4 lg:text-3xl">
        Cene usluga
      </h1>
      <div className="overflow-x-auto">
        <table className="mb-32 min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b text-left">Naziv usluge</th>
              <th className="py-2 px-4 border-b text-left">Cena (din)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="text-xl py-2 px-4 border-b">
                  {service.name} <br />
                  <span className="text-gray-500 text-lg">
                    {service.subtitle}
                  </span>
                </td>
                <td className="text-xl py-2 px-4 border-b">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Prices;
