

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
              <div className="flex flex-row">
                <div className="flex-1">
                  <div className="text-black grid grid-cols-1 gap-4 my-12 uppercase">
                    <h1 className="text-xl lg:text-3xl text-black uppercase">our journey</h1>
                    <div class="relative flex items-center justify-between w-3/4 max-w-4xl my-40">
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
                <div className="flex-1">
                  <h1 className="text-xl lg:text-3xl text-black my-12 uppercase">Our Skills</h1>
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">HTML</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe Photoshop</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">CSS</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe Illustrator</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">JavaScript</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe After Effects</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">ReactJS</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe Premiere Pro</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Figma</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe InDesign</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Canva</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe Dimension</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">WordPress</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">Adobe Aero</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">WebFlow</span>
                    <span className="text-[10px] lg:text-[14px] rounded-md border-2 border-black w-3/4 h-[50px] text-center">React Native</span>
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