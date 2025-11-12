export default function Projects() {
  const projects = [
    {
      title: "Invoice App",
      desc: "Full-stack invoice management with Razorpay integration.",
    },
    {
      title: "EduLearn",
      desc: "Role-based dashboard web app for students and teachers.",
    },
    {
      title: "Chat App",
      desc: "Real-time chat using WebSocket and Node.js.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-500 text-white px-6">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
            <p className="text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
