import { FaWhatsapp, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Me</h2>
      <p className="text-slate-400 mb-6 text-center max-w-md">
        Want to collaborate or just say hi? Drop me a message 👇
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-3xl">
        {/* Mail */}
        <a
          href="mailto:example@mail.com"
          className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          title="Send an Email"
        >
          <FaEnvelope />
        </a>

        {/* Phone */}
        <a
          href="tel:+919339067440"
          className="text-teal-400 hover:text-teal-500 transition-transform transform hover:scale-110"
          title="Call Me"
        >
          <FaPhone />
        </a>
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/919339067440?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 transition-transform transform hover:scale-110"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/s-f-murshed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sufi-farhan-murshed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>
    </div>
  );
}
