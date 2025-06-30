import { memo } from "react";
import { Link } from "react-router";

const CountriesList = ({ countriesData }: { countriesData: any[] }) => {
  return (
    <>
      {countriesData.length === 0 ? (
        <h3>No countries found.</h3>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {countriesData.map((country: any, index: number) => (
            <li key={index} className='bg-slate-900 border border-gray-400 rounded-xl p-4'>
              <Link
                to={`/countries/${country.name.common}`}
                className=' text-indigo-400 hover:underline text-lg font-semibold'
              >
                {country.name.common}
              </Link>

              <div className='text-gray-400 text-sm mt-1'>
                Capital: {country.capital} <br /> Population: {country.population.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

CountriesList.displayName = "CountriesList";

export default memo(CountriesList);
