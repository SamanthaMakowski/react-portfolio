export default function Portfolio() {
  const projects = [
    {
      title: 'Employee Tracker',
      image: '/employee-trackerGH.png',
      github: 'https://github.com/SamanthaMakowski/employee-tracker',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    },
    {
      title: 'README Generator',
      image: '/professional-readme-generatorGH.png',
      github: 'https://github.com/SamanthaMakowski/professional-readme-generator',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    },
    {
      title: 'Vehicle Builder',
      image: '/vehicle-builderGH.png',
      github: 'https://github.com/SamanthaMakowski/vehicle-builder-ts',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    },
    {
      title: 'React Portfolio',
      image: '/react-portfolioSC.png',
      github: 'https://github.com/SamanthaMakowski/react-portfolio',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    },
    
    {
      title: 'Note Keeper',
      image: '/note-keeperGH.png',
      github: 'https://github.com/SamanthaMakowski/note-keeper',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    },
    {
      title: 'tech-quiz-cypress',
      image: '/tech-quiz-cypressSC.png',
      github: 'https://github.com/SamanthaMakowski/tech-quiz-cypress',
      deployed: 'https://6800c0e37a10c6d41050e057--iridescent-parfait-3644eb.netlify.app'
    }
    
  ]

  return (
    <section className="grid grid-cols-2 gap-8 px-6 py-10">
 
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-center mb-3 text-black dark:text-white">
            {project.title}
          </h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex justify-between w-full">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href={project.deployed}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Deployed App
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
