function Resume() {
    return (
      <section className="resume p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <p className="mb-4">Download my resume:</p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Proficiencies</h3>
          <ul className="list-disc list-inside max-w-md mx-auto text-left">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, JSX, Vite</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Responsive Design, Flexbox, Grid</li>
            <li>Git, GitHub, REST APIs</li>
          </ul>
        </div>
      </section>
    )
  }
  
  export default Resume
  