import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaPhp  } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiFigma, SiCanva, SiWebflow,  SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import cribCleaner from "../assets/cribcleaners.png";
import rebel from "../assets/rebel.png";
import nsc from "../assets/nsc.png";
import duckHunt from "../assets/duckhunt.png";

const About = () => {

  const projects = [
    {
      img: cribCleaner,
      title: "Crib Cleaners",
      desc: " The Crib Cleaners website, built for a power washing company, uses React and Tailwind CSS. It offers a clean navigation and dynamic visuals. ",
      live: "https://cribcleaners.cliffordvilleneuve.ca/",
      code: "https://github.com/CliffVille/TheCribCleaners",
    },
    {
      img: rebel,
      title: "Rebel Clothing store",
      desc: "Rebel's clothing store website was built using JavaScript and jQuery and CSS, featuring a seamless shopping experience with user-friendly cart functionality.",
      live: "https://rebel.cliffordvilleneuve.ca/",
      code: "https://github.com/CliffVille/rebelclothing",
    },
    {
      img: nsc,
      title: "NSC Gallery",
      desc: "NSC's Art Gallery portfolio website was crafted using Masonry.js, HTML, and CSS, offering a visually dynamic layout with smooth, responsive design.",
      live: "https://nsc.cliffordvilleneuve.ca/",
      code: "https://github.com/CliffVille/nsc",
    },
    {
      img: duckHunt,
      title: "Duck Hunt - an interactive JavaScript game",
      desc: "The Duck Hunt game is animated with CSS keyframes and JavaScript, react to mouse movements and fly away from the cursor, with shooting simulated through sound effects and disappearing animations.",
      live: "https://duckhunt.cliffordvilleneuve.ca/",
      code: "https://github.com/CliffVille/duckhunt",
    },
  ]; 

  return (
    <div className="flex flex-col min-h-screen font-montserrat font-extrabold mt-12">

      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="head justify-start">
            <h1 className="text-4xl lg:text-6xl text-black uppercase w-1/2 md:w-2/4 lg:w-1/3 mb-4">Meet the team</h1>
            <p className="text-lg lg:text-xl flex flex-wrap gap-1 text-black ml-2">Learn about our 
              <span className="text-lg lg:text-xl text-yellow">team</span> and why we do this.
            </p>
          </div>
        </div>
        <div className="flex flex-col min-h-[500px]">
            <div className="flex flex-row gap-10 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-full h-[307px] rounded-[40px] bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-4xl text-black mb-4">Alex</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Alexander is a creative individual passionate about design, which allows him to express himself and transform ideas into meaningful visuals. Beyond designing, he enjoys playing basketball and badminton, which enhances his teamwork and competitive spirit. He thrives on blending functionality with creativity and is always eager to explore new possibilities in his projects.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-full h-[307px] rounded-[40px] bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-4xl text-black mb-4">Benny</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Benny is a creative individual with a passion for design, developed through school as a way to express ideas and craft meaningful visuals. Outside of designing, Benny enjoys gaming and watching movies, which fuel creativity and inspire new perspectives. Combining functionality with creativity, Benny thrives on exploring innovative possibilities in every project.</p>
              </div>

              <div className="flex flex-col items-center mb-4">
                <div className="w-full h-[307px] rounded-[40px] bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-4xl text-black mb-4">Cliff</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Cliff is a creative individual with a passion for coding, which he self-taught before honing his skills in school. Coding allows him to create dreams, transforming ideas into reality through  solutions. Outside of coding, Cliff enjoys exploring design, he loves to play with his roommate’s dog! He enjoys learning further about coding and always improving his skills.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex-1">
                <div className="text-black grid grid-cols-1 gap-4 my-8 uppercase">
                  <h1 className="text-xl lg:text-3xl text-black uppercase text-left">our journey</h1>
                  <div class="relative flex items-center justify-between w-full max-w-7xl mx-auto my-10">
                    <div class="absolute top-2/5 left-0 w-full h-2 bg-gray-300 -translate-y-1/2"></div>
                    <div class="flex flex-col items-center z-10">
                      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <p class="mt-2 text-sm text-center text-black"></p>
                    </div>
                    <div class="flex flex-col items-center z-10">
                      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <p class="mt-2 text-sm text-center text-black"></p>
                    </div>
                    <div class="flex flex-col items-center z-10">
                      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <p class="mt-2 text-sm text-center text-black"></p>
                    </div>
                    <div class="flex flex-col items-center z-10">
                      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <p class="mt-2 text-sm text-center text-black"></p>
                    </div>
                    <div class="flex flex-col items-center z-10">
                      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <p class="mt-2 text-sm text-center text-black"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex-1">
                  <h1 className="text-xl text-left lg:text-3xl text-black uppercase">Our Skills</h1>
                  <div className="grid grid-cols-6 gap-4 justify-center items-center mb-8">
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">HTML<FaHtml5 className="text-orange-500 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">CSS<FaCss3Alt className="text-blue-600 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">JavaScript<SiJavascript className="text-yellow-400 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">React<FaReact className="text-blue-400 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">Next.JS<SiNextdotjs className="text-black text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">PHP<FaPhp className="text-indigo-500 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">Photoshop<SiAdobephotoshop className="text-blue-500 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">Premiere Pro<SiAdobepremierepro className="text-indigo-500 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">Canva<SiCanva className="text-blue-300 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">Figma<SiFigma className="text-black text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">WordPress<FaWordpress className="text-blue-800 text-5xl" /></span>
                    <span className="text-xl flex flex-col justify-center items-center rounded-2xl border-2 border-black bg-gray-400 w-full h-[100px]">WebFlow<SiWebflow className="text-blue-500 text-5xl" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <section className="text-white px-5 py-16 max-w-7xl mx-auto" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] mx-auto md:mx-0 border-accent pb-6 text-black">Projects</h2>
            <p className="mb-8 text-black">
              These are some of my projects. I have built these with React, Masonry.js, vanilla JavaScript, 
              Tailwind CSS, and vanilla CSS. Check them out.
            </p>
          </div>
        </div>


        <div className="projects container mx-auto grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => {
            return (
              <div 
                key={i} 
                className="group relative border-[6px] border-accent overflow-hidden"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />

                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="py-3 text-center font-bold px-2 text-white text-[10px] md:text-xl">
                    {project.desc}
                  </p>

                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold uppercase"
                      >
                        Live
                      </a>
                      <a
                        href={project.code}
                        className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold uppercase"
                      >
                        Code
                      </a>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      <div className="w-full h-[362px] bg-[#eeeeee] text-center">
        <h1 className="text-black text-4xl w-1/2 mx-auto mt-24 mb-8 uppercase">Let&apos;s build your dreams today!</h1>
        <p className="text-black text-xl w-1/2 mx-auto my-8">Send us a message now and we&apos;ll get back to you ASAP! Let&apos;s build your dream website today!</p>
        <button className="w-[200px] px-4 py-2 bg-yellow hover:bg-hover border-2 border-black rounded-full">Send a message</button>
      </div>
    </div>
  )
}

export default About