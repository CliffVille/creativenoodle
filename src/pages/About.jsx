

const About = () => {
  return (
    <div className="flex flex-col font-montserrat font-extrabold mt-12">

        <div className="head justify-start mx-auto w-[85%] md:w-[65%]">
          <h1 className="text-4xl lg:text-6xl text-black uppercase w-1/2 md:w-2/4 lg:w-1/3 mb-4">Meet the team</h1>
          <p className="text-lg lg:text-xl flex flex-wrap gap-1 text-black ml-2">Learn about our 
            <span className="text-lg lg:text-xl text-yellow">team</span> and why we do this.
          </p>
        </div>

        <div className="flex flex-col w-3/4 mx-auto h-[500px]">
          <div className="flex flex-row mx-auto mt-8">
            <div className="flex flex-col items-center">
              <div className="w-[207px] h-[207px] rounded-full bg-yellow mb-4"></div>
              <h1 className="text-xl lg:text-3xl text-black mb-4">Alex</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-full">Alexander is a creative individual passionate about design, which allows him to express himself and transform ideas into meaningful visuals. Beyond designing, he enjoys playing basketball and badminton, which enhances his teamwork and competitive spirit. He thrives on blending functionality with creativity and is always eager to explore new possibilities in his projects.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[207px] h-[207px] rounded-full bg-yellow mb-4"></div>
              <h1 className="text-xl lg:text-3xl text-black mb-4">Benny</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-full">Benny is a creative individual with a passion for design, developed through school as a way to express ideas and craft meaningful visuals. Outside of designing, Benny enjoys gaming and watching movies, which fuel creativity and inspire new perspectives. Combining functionality with creativity, Benny thrives on exploring innovative possibilities in every project.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[207px] h-[207px] rounded-full bg-yellow mb-4"></div>
              <h1 className="text-xl lg:text-3xl text-black mb-4">Cliff</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-full">Cliff is a creative individual with a passion for coding, which he self-taught before honing his skills in school. Coding allows him to create dreams, transforming ideas into reality through  solutions. Outside of coding, Cliff enjoys exploring design, he loves to play with his roommate’s dog! He enjoys learning further about coding and always improving his skills.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About