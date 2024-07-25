// src/Content.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Content = () => {
  const [countries, setCountries] = useState([]);
  const selectedContinent = useSelector((state) => state.continent);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,flag')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = selectedContinent === 'All'
    ? countries
    : countries.filter((country) => country.region === selectedContinent);

  return (
    <div className="container mx-auto  p-4 mt-10">
      <div className="grid grid-cols-1  md:grid-cols-2  gap-4">
        {filteredCountries.map((country) => (
          <div key={country.name} className="border p-1 flex w-full items-center hover:border-stone-800 rounded-lg">
            <div className="w-[40%]">
              <img src={country.flag} alt={`${country.name} flag`} className="w-[127] h-[96px] m-2" />
            </div>
            <div className="w-[60%] pl-5">
              <h2 className="text-lg font-semibold">{country.name}</h2>
              <p className="text-gray-500">{country.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
