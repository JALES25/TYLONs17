// import Rain from '@/components/theme/Rain'
// import RainEffect from '@/components/theme/RainEffect'
import ProjectsCard from '@/components/projectsCard/ProjectsCard';
import Resume from '@/components/resume/Resume'
import RainThunder from '@/components/theme/RainThunder'
import React from 'react'

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
  linkUrl: string
  liveDemo?: string
}

const Projects: ProjectCardProps[] = [

  {
    title: "Javascript Calculator",
    description: "A simple calculator made with pure html, css & Javascript",
    imageUrl: "/images/projects/javascript-calculator.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/Javascript-Calculator",
  },
  {
    title: "Tick Tack Toe",
    description: "A Tick Tack Toe game made with pure html, css & Javascript",
    imageUrl: "/images/projects/Tick-Tack-Toe.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-clock",
  },
  {
    title: "Rock Paper Scizzors",
    description: "A Rock Paper Sciccors made with pure html, css & Javascript",
    imageUrl: "/images/projects/Show me Rock.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/ROCK%20PAPER%20SCIZZORS",
  },
  {
    title: "Random Quote Generator",
    description: "A random quote generator made with pure html, css & Javascript",
    imageUrl: "/images/projects/Random-Quote-Gen.png",
    linkUrl: "",
  },
  {
    title: "Brick Break out",
    description: "A pure Javascript Brick break out game",
    imageUrl: "/images/projects/Brick-Break-Out.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/WGames/Brick%20Breakout/#1_-re",
  },
  {
    title: "17 + 5",
    description: "A Simple 17 + 5 stop watch made with pure html, css & Javascript",
    imageUrl: "/images/projects/17+5-clock.png", 
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-clock",
  },
  {
    title: "SSE UnitConverter",
    description: "A unit converter web app made with pure html, css & Javascript",
    imageUrl: "/images/projects/SSE-UnitConvertPro.png",
    linkUrl: "",
  },
  {
    title: "Card Flipper",
    description: "A pure Javascript Card Flipper Game",
    imageUrl: "/images/projects/CardFlipper.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/tree/main/WGames/CardFlipper",
  },
  {
    title: "Dice Roll",
    description: "A pure Javascript Dice Roll Simulator",
    imageUrl: "/images/projects/Dice_Roll.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/HTML+CSS_150_excs/Dice_Roll",
  },
  {
    title: "Weather App",
    description: "A pure Javascript Weather App",
    imageUrl: "/images/projects/Weather_App.png",
    linkUrl: "https://github.com/TYLONs17/WEB_LEARN/HTML+CSS_150_excs/Weather_App",
  },
  
]


export default function About() {


  return (
    <div>
      <div className="p-4 max-w-[100vw]">
        <h1 className="p-4 bg-gray-500 bg-opacity-70">Here&apos;s a Quick Overview About Me</h1>
        <RainThunder />
        <div className="text-2xl pt-2">Facing a challange not knowing what it is or how to even start solving it, that is true  Stoitism.</div>
        <p>That is the sort of light i want to see lit in my eyes too. Come.. <span className="p-4 font-bold ">Face Me.</span> <sub>I shall be your opponent.</sub></p>

        <hr className="border-blue-500" />
        <br />
        <Resume />
      </div>

      <div className="p-6 flex flex-col justify-center items-center bg-gray-500 bg-opacity-70">
        <p className="text-2xl">Browse My Recent</p>
        <h1 className="text-4xl font-bold" id="projects">Projects</h1>

        <div className="relative flex gap-4 flex-wrap justify-center items-center py-4">
          {Projects.map((project, index) => (
            <ProjectsCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} linkUrl={project.linkUrl} liveDemo={project.liveDemo || ''} />
          ))}
        </div>
      </div>
      
    </div>
  )
}
