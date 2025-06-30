import { useMemo, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/countries";

import CountriesList from "~/components/countriesList";

// Client loader helps us load data and pass the data to the component as prop before the page renders
export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/subregion/asia");
  const data = await res.json();

  return data;
}

export default function CountriesPage({ loaderData: countriesData }: Route.ComponentProps) {
  const [userInput, setUserInput] = useState<string>("");

  const filteredCountries = useMemo(
    () =>
      countriesData.filter((country: any) => {
        const matches = !userInput || country.name.common.toLowerCase().includes(userInput);
        return matches;
      }),
    [userInput]
  );

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'>Countries</h2>

      <form className='flex flex-col sm:flex-row gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search by name...'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className='border border-gray-400 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500'
        />
      </form>

      <CountriesList countriesData={filteredCountries} />
    </div>
  );
}
