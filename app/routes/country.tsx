import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
  const data = await res.json();

  return data;
}

export default function CountryPage({ loaderData: countryData }: Route.ComponentProps) {
  const country = {
    name: countryData[0]?.name.common || "N/A",
    officialName: countryData[0]?.name.official || "N/A",
    subregion: countryData[0]?.subregion || "N/A",
    capital: countryData[0]?.capital || "N/A",
    population: countryData[0]?.population || "N/A",
    flagUrl: countryData[0]?.flags.png || "N/A",
    flagAlt: countryData[0]?.flags.alt || `${countryData[0]?.name.common}'s flag`,
  };

  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold '>{country.name}</h2>

        <div className='space-y-2'>
          <p>
            <span className='font-semibold'>Official Name: </span> {country.officialName}
          </p>
          <p>
            <span className='font-semibold'>Subregion: </span> {country.subregion}
          </p>
          <p>
            <span className='font-semibold'>Capital: </span> {country.capital}
          </p>
          <p>
            <span className='font-semibold'>Population: </span>
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>

      {country.flagUrl && (
        <div className='flex justify-center items-center'>
          <img
            src={country.flagUrl}
            alt={country.flagAlt}
            className='w-70 h-auto border rounded shadow-lg'
          />
        </div>
      )}
    </div>
  );
}
