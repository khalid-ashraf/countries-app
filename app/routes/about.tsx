export default function AboutPage() {
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-4xl font-extrabold mb-6 text-center'>About This Website</h1>

        <p className='text-lg'>
          <strong>AISA Explorer</strong> is a sleek and interactive web application that helps users
          explore essential information about Asian countries. It provides quick and accessible
          details such as:
        </p>

        <ul className='list-disc pl-6 space-y-2 mb-2'>
          <li className='m-2'>
            🏳️ <strong>Country Name</strong>
          </li>
          <li className='m-2'>
            👥 <strong>Population statistics</strong>
          </li>
          <li className='m-2'>
            🚩 <strong>National Flag display</strong>
          </li>
        </ul>

        <p className='text-lg mb-4'>
          Built with modern frontend tools, <strong>AISA Explorer</strong> delivers a fast and
          responsive user experience.
        </p>

        <h2 className='text-2xl font-semibold'>🔧 Tech Stack</h2>

        <ul className='list-disc pl-6 space-y-2'>
          <li className='m-2'>
            ⚛️ <strong>React</strong> with <strong>React Router v7 Framework</strong> – for smooth
            navigation and dynamic routing
          </li>
          <li className='m-2'>
            💨 <strong>Tailwind CSS</strong> – for a clean, responsive, and mobile-friendly UI
          </li>
        </ul>

        <p className='text-lg mb-4'>
          Whether you're a student, traveler, or geography enthusiast,{" "}
          <strong>AISA Explorer</strong> makes discovering Asia simple and fun.
        </p>

        <p className='text-xl leading-relaxed mb-4'>
          This website uses the{" "}
          <span className='font-semibold text-indigo-600'>REST Countries API</span> to display
          comprehensive information about countries from around the world.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          Explore our data to learn about country names, capitals, regions, populations, flags, and
          much more. Whether you’re curious about a particular country or looking for insights about
          global regions, our interactive explorer makes it easy.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          Our goal is to build a fully responsive and modern web application using the latest
          technologies, including React Router v7 for seamless routing and Tailwind CSS for a
          beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
}
