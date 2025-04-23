export default function Project({ title, image, repoLink, deployedLink }) {
    return (
      <div className="border rounded-md shadow-md p-4 max-w-xs mx-auto">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <a href={deployedLink} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt={title}
            className="mb-2 w-full h-40 object-cover rounded"
          />
        </a>
        <div className="flex justify-between">
          <a href={repoLink} target="_blank" rel="noreferrer" className="text-blue-600">
            GitHub
          </a>
          <a href={deployedLink} target="_blank" rel="noreferrer" className="text-blue-600">
            Live Site
          </a>
        </div>
      </div>
    );
  }
  