import React from 'react';
import { Button, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, ArrowForward, Terminal } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio() {
  const projectImages = [
    "/Снимок экрана 2026-10-02 091807.png",
    "/Снимок экрана 2026-10-02 092101.png",
    "/Снимок экрана 2026-10-02 091958.png",
    "/Снимок экрана 2026-10-02 092457.png",
    "/1.png",
  ];

  const techStack = ["React.js", "Tailwind CSS", "Material UI", "JavaScript (ES6+)", "Swiper.js", "Git & GitHub", "Bootstrap", "HTML", "CSS", "Sass"];

  return (
    <div className="min-h-screen bg-[#070a12] text-gray-100 font-sans w-full max-w-full overflow-x-hidden relative">

      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] z-0" />

      <header className="w-full border-b border-gray-800/60 bg-[#070a12]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-wider text-white">
            <Terminal className="text-cyan-400" />
            <span>DEV<span className="text-cyan-400">.</span>PORTFOLIO</span>
          </div>

          <div className="flex items-center gap-2">
            <IconButton 
              component="a" 
              href="https://github.com/madaminovdeveloper" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="!text-gray-400 hover:!text-cyan-400"
            >
              <GitHub />
            </IconButton>
            <IconButton 
              component="a" 
              href="https://t.me/uzmadaminov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="!text-gray-400 hover:!text-cyan-400"
            >
              <Email />
            </IconButton>
          </div>
        </div>
      </header>
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Madaminov Shukurullo
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Frontend va UI/UX <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
                Dasturchi
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Foydalanuvchilar uchun qulay va tezkor bo'lgan zamonaviy web-ilovalarni yarataman.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                href="#projects"
                className="!bg-gradient-to-r !from-cyan-500 !to-blue-600 hover:!opacity-90 !text-black !font-bold !px-6 !py-3 !rounded-xl !text-sm !normal-case shadow-lg shadow-cyan-500/20"
              >
                Loyihalarim
              </Button>
              <Button
                component="a"
                href="https://t.me/uzmadaminov"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Email />}
                className="!border-gray-800 !text-gray-300 hover:!border-cyan-500/50 hover:!bg-gray-900/50 !px-6 !py-3 !rounded-xl !text-sm !normal-case"
              >
                Bog'lanish
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative group max-w-[260px] sm:max-w-xs w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-80 transition duration-500" />
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-gray-700/80 bg-gray-950 shadow-2xl">
                <img
                  src="/face.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover filter contrast-105 brightness-95 saturate-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="w-full border-y border-gray-800/80 bg-gray-950/40 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
            // Texnologiyalar Steki
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 text-xs font-mono hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8 text-center sm:text-left">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Tanlangan Loyihalar</h2>
        </div>
        <div className="w-full relative px-2 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="!pb-12 w-full rounded-3xl [&_.swiper-button-next]:!text-cyan-400 [&_.swiper-button-prev]:!text-cyan-400 [&_.swiper-pagination-bullet-active]:!bg-cyan-400 [&_.swiper-pagination-bullet]:!bg-gray-600"
          >
            {projectImages.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[280px] sm:h-[420px] md:h-[500px] bg-gray-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-800/80 shadow-2xl relative group">
                  <img
                    src={imgUrl}
                    alt={`Loyiha ${index + 1}`}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>  
      <footer className="w-full border-t border-gray-800/80 py-8 text-center text-xs text-gray-500 font-mono">
        <p>© 2026 Madaminov Shukurullo. React, Tailwind CSS, MUI & Swiper.</p>
      </footer>

    </div>
  );
}