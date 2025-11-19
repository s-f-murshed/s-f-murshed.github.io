import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const PAGE_WIDTH = 794;   // base dimension (keeps aspect ratio)
const PAGE_HEIGHT = 1123; // base dimension

const Page = React.forwardRef(({ children }, ref) => {
  // Use CSS aspect-ratio so page scales proportionally
  return (
    <div
      ref={ref}
      // container scales to width of parent, max width enforced by parent
      style={{
        width: "100%",
        maxWidth: `${PAGE_WIDTH}px`,
        aspectRatio: `${PAGE_WIDTH} / ${PAGE_HEIGHT}`,
      }}
      className="bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 md:p-10 text-center overflow-hidden"
    >
      {/* Content should scale inside the box; use responsive text sizes */}
      {children}
    </div>
  );
});

export default function Flipbook({ onClose }) {
  const bookRef = useRef(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const goPrev = () => bookRef.current?.pageFlip().flipPrev();
  const goNext = () => bookRef.current?.pageFlip().flipNext();

  const onFlip = (e) => setPage(e.data + 1);

  // ✅ FIXED: safer onInit
  const onInit = () => {
    if (bookRef.current) {
      const count = bookRef.current.pageFlip().getPageCount();
      setTotal(count);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 p-4">
      <div className="w-full max-w-[1100px] flex items-center justify-center relative">
          <button
  onClick={onClose}
  className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white z-50"
>
  ✖ Close
</button>
        <div className="w-[90vw] md:w-[80vw] lg:w-[70vw]" style={{ maxWidth: "1100px" }}>
          <HTMLFlipBook
            ref={bookRef}
            width={794}
            height={1123}
            size="stretch"
            showCover={true}
            onFlip={onFlip}
            onInit={onInit}
          >
            <Page>
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Farhan</h1>
                <p className="text-sm md:text-lg text-slate-600 max-w-[40ch]">
                  Computer Science Student • Web Developer • AI enthusiast
                </p>
              </div>
            </Page>

            <Page>
              <div className="flex flex-col justify-center items-start h-full px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                  I build full-stack applications focused on performance and user experience. I enjoy learning
                  new frameworks and contributing to open-source projects.
                </p>
              </div>
            </Page>

            <Page>
              <div className="flex flex-col justify-center items-start h-full px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
                <ul className="text-sm md:text-base space-y-2 text-slate-700">
                  <li>⚡ React & Tailwind CSS</li>
                  <li>⚡ Node.js, Express</li>
                  <li>⚡ MongoDB & SQL</li>
                  <li>⚡ Python, Machine Learning</li>
                </ul>
              </div>
            </Page>

            <Page>
              <div className="flex flex-col justify-center items-start h-full px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
                <p className="text-sm md:text-base text-slate-700">
                  • Smart Invoice System — PDF generation & Razorpay integration<br />
                  • EduLearn Platform — Role-based dashboards<br />
                  • Chat App — WebSocket realtime messaging
                </p>
              </div>
            </Page>

            <Page>
              <div className="flex flex-col justify-center items-center h-full px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
                <p className="text-sm md:text-base text-slate-700 mb-4">farhan@example.com</p>

                <div className="flex items-center space-x-4 text-2xl text-slate-700">
                  <a href="mailto:farhan@example.com" aria-label="email"><FaEnvelope /></a>
                  <a href="https://github.com/s-f-murshed" target="_blank" rel="noreferrer" aria-label="github"><FaGithub /></a>
                  <a href="https://linkedin.com/in/farhan" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin /></a>
                </div>
              </div>
            </Page>
            <Page>
              <div className="flex flex-col justify-center items-center h-full px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
                <ul className="text-sm md:text-base space-y-2 text-slate-700">
                  <li>⚡ React & Tailwind CSS</li>
                  <li>⚡ Node.js, Express</li>
                  <li>⚡ MongoDB & SQL</li>
                  <li>⚡ Python, Machine Learning</li>
                </ul>
              </div>
            </Page>
            <Page></Page>
            <Page></Page>
            <Page></Page>
          </HTMLFlipBook>
        </div>
      </div>
      <div className="mt-4 text-slate-300 text-sm">
        Use ← → keys to flip pages • Page {page} / {total}
      </div>
    </div>
  );
}