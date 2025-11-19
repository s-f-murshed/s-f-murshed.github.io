export default function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "AI / ML",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-700 text-slate-200 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
