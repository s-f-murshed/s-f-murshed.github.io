export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        👋 Hi, I'm <span className="text-blue-400">Sufi Farhan Murshed</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
        A Computer Science student passionate about building web apps and
        exploring AI innovations.
      </p>

      <div className="mt-8 flex gap-4">
        {/* Download CV */}
        <a
          href="https://drive.google.com/uc?export=download&id=1z7ruoP9sElxL1l771bi1nLsvYxIO2MQ5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-md text-white font-semibold transition-transform transform hover:scale-105"
        >
          Download CV
        </a>

        {/* Scroll to Contact Section */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contact = document.getElementById("contact");
            contact?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-5 py-3 rounded-md font-semibold transition-transform transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
