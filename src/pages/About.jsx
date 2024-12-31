

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
            <div className="flex flex-row mt-8">
              <div className="flex flex-col items-center">
                <div className="w-[407px] h-[407px] rounded-full bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-3xl text-black mb-4">Alex</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Alexander is a creative individual passionate about design, which allows him to express himself and transform ideas into meaningful visuals. Beyond designing, he enjoys playing basketball and badminton, which enhances his teamwork and competitive spirit. He thrives on blending functionality with creativity and is always eager to explore new possibilities in his projects.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-[407px] h-[407px] rounded-full bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-3xl text-black mb-4">Benny</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Benny is a creative individual with a passion for design, developed through school as a way to express ideas and craft meaningful visuals. Outside of designing, Benny enjoys gaming and watching movies, which fuel creativity and inspire new perspectives. Combining functionality with creativity, Benny thrives on exploring innovative possibilities in every project.</p>
              </div>

              <div className="flex flex-col items-center mb-4">
                <div className="w-[407px] h-[407px] rounded-full bg-yellow mb-4"></div>
                <h1 className="text-xl lg:text-3xl text-black mb-4">Cliff</h1>
                <p className="text-[10px] lg:text-[12px] text-black w-full">Cliff is a creative individual with a passion for coding, which he self-taught before honing his skills in school. Coding allows him to create dreams, transforming ideas into reality through  solutions. Outside of coding, Cliff enjoys exploring design, he loves to play with his roommate’s dog! He enjoys learning further about coding and always improving his skills.</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-3xl text-black mb-4 mt-4 uppercase">our journey</h1>
                  <p className="text-[10px] text-black w-1/3 mb-4"><span className="text-yellow text-[12px] lg:text-[14px]">Alexander&apos;s</span> passion for design came from the ability to express himself freely and connect with others. At BCIT, he honed his skills in user experience and inclusive design, collaborating with peers on creative projects. After graduating, he refined his craft during an internship at EvolveX, creating impactful solutions. Now he’s looking for a foot in the design industry looking to further improve himself as a designer.</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col">
                  <p className="text-[10px] text-black w-1/3 mb-4"><span className="text-yellow text-[12px] lg:text-[14px]">Benny&apos;s</span> passion for design began with his love for games, inspiring him to explore immersive storytelling and creativity. At BCIT’s New Media Design and Web Development program, he honed his skills in user experience and interactive design, collaborating with peers on innovative projects. After graduating, he combined his love for games and design to create impactful digital experiences.</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col">
                  <p className="text-[10px] text-black w-1/3 mb-4"><span className="text-yellow text-[12px] lg:text-[14px]">Cliff&apos;s</span> a self-taught coder, design became a natural extension of his love for coding discovered through online courses and challenges. At BCIT’s New Media Design and Web Development program, he honed his skills alongside peers like Alexander and Benny, blending creativity with technical precision. Now, he uses his coding expertise to craft impactful, user-focused designs that bring ideas to life.</p>
                </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center">
              <h1 className="text-xl lg:text-3xl text-black mb-4 mt-4 uppercase">our skills</h1>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                  <div className="w-[150px] border-black border-2 rounded-full"></div>
                </div>
              </div>
          </div> */}
      </div>
    )
  }

export default About