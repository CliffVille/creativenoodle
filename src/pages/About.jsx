

const About = () => {
    return (
      <div className="flex flex-col min-h-screen font-montserrat font-extrabold mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="head justify-start">
            <h1 className="text-4xl lg:text-6xl text-black uppercase w-1/2 md:w-2/4 lg:w-1/3 mb-4">Meet the team</h1>
            <p className="text-lg lg:text-xl flex flex-wrap gap-1 text-black ml-2">Learn about our 
              <span className="text-lg lg:text-xl text-yellow">team</span> and why we do this.
            </p>
          </div>
          <div className="flex flex-col min-h-[500px]">
              <div className="flex flex-row gap-10 mt-8">
                <div className="flex flex-col items-center">
                  <div className="w-[307px] h-[307px] rounded-full bg-yellow mb-4"></div>
                  <h1 className="text-xl lg:text-3xl text-black mb-4">Alex</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-full">Alexander is a creative individual passionate about design, which allows him to express himself and transform ideas into meaningful visuals. Beyond designing, he enjoys playing basketball and badminton, which enhances his teamwork and competitive spirit. He thrives on blending functionality with creativity and is always eager to explore new possibilities in his projects.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-[307px] h-[307px] rounded-full bg-yellow mb-4"></div>
                  <h1 className="text-xl lg:text-3xl text-black mb-4">Benny</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-full">Benny is a creative individual with a passion for design, developed through school as a way to express ideas and craft meaningful visuals. Outside of designing, Benny enjoys gaming and watching movies, which fuel creativity and inspire new perspectives. Combining functionality with creativity, Benny thrives on exploring innovative possibilities in every project.</p>
                </div>

                <div className="flex flex-col items-center mb-4">
                  <div className="w-[307px] h-[307px] rounded-full bg-yellow mb-4"></div>
                  <h1 className="text-xl lg:text-3xl text-black mb-4">Cliff</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-full">Cliff is a creative individual with a passion for coding, which he self-taught before honing his skills in school. Coding allows him to create dreams, transforming ideas into reality through  solutions. Outside of coding, Cliff enjoys exploring design, he loves to play with his roommate’s dog! He enjoys learning further about coding and always improving his skills.</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1">
                  <div className="text-black grid grid-cols-1 gap-4 my-12 uppercase">
                    <h1 className="text-xl lg:text-3xl text-black uppercase">our journey</h1>
                    <p className="text-[10px] text-black w-3/4 mb-3"><span className="text-yellow text-[12px]">Alexander&apos;s</span> passion for design came from the ability to express himself freely and connect with others. At BCIT, he honed his skills in user experience and inclusive design, collaborating with peers on creative projects. After graduating, he refined his craft during an internship at EvolveX, creating impactful solutions. Now he&apos;s looking for a foot in the design industry looking to further improve himself as a designer.</p>
                    <p className="text-[10px] text-black w-3/4 mb-3"><span className="text-yellow text-[12px]">Benny&apos;s</span> passion for design began with his love for games, inspiring him to explore immersive storytelling and creativity. At BCIT&apos;s New Media Design and Web Development program, he honed his skills in user experience and interactive design, collaborating with peers on innovative projects. After graduating, he combined his love for games and design to create impactful digital experiences.</p>
                    <p className="text-[10px] text-black w-3/4 mb-3"><span className="text-yellow text-[12px]">Cliff&apos;s</span> a self-taught coder, design became a natural extension of his love for coding discovered through online courses and challenges. At BCIT&apos;s New Media Design and Web Development program, he honed his skills alongside peers like Alexander and Benny, blending creativity with technical precision. Now, he uses his coding expertise to craft impactful, user-focused designs that bring ideas to life.</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-xl lg:text-3xl text-black my-12 uppercase">Our Skills</h1>
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">HTML</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe Photoshop</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">CSS</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe Illustrator</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">JavaScript</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe After Effects</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">ReactJS</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe Premiere Pro</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">Figma</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe InDesign</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">Canva</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe Dimension</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">WordPress</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">Adobe Aero</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-1/2 text-center">WebFlow</span>
                    <span className="text-[10px] lg:text-[14px] rounded-full border-2 border-black w-3/4 text-center">React Native</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="w-full h-[362px] bg-[#eeeeee] text-center">
          <h1 className="text-black text-4xl w-1/2 mx-auto mt-24 mb-8 uppercase">Let&apos;s build your dreams today!</h1>
          <p className="text-black text-xl w-1/2 mx-auto my-8">Send us a message now and we&apos;ll get back to you ASAP! Let&apos;s build your dream website today!</p>
          <button className="w-[200px] px-4 py-2 bg-yellow hover:bg-hover border-2 border-black rounded-full">Send a message</button>
        </div>
      </div>
    )
  }

export default About