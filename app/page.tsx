import ProjectsGrid from "@/components/projects-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  const user = "harrylonsdale25"
  const domain = "gmail.com"
  const mailto = `mailto:${user}@${domain}`

  return (
    <div className="flex flex-col min-h-screen">

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8 sm:text-5xl md:text-6xl text-center">Harry Lonsdale</h1>
      <div className="section-divider" />
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          About me
        </h2>
        <div className="space-y-4 accent-border">
          <p>
          I'm Harry Lonsdale, a third-year undergraduate student in Mathematics - Computer Science at UC San Diego.
          This is my portfolio documenting my work. Check out some of my projects, or scroll to the bottom for contact info.
          </p>
          <p>
          I'm a software engineer with experience across a wide range of fields, including full-stack web development, robotics,  data visualization, and more. I've built responsive React frontends that interface with microcontrollers for real-time control, developed computer vision algorithms using ROS2/C++ for competitive robotics, and created DevOps dashboards and E-commerce features.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            asChild
            variant="outline"
            className="border-[#00e0ff] hover:border-[#00e0ff]/80 hover:bg-[#00e0ff]/10"
          >
            <Link href="/#projects">View Projects</Link>
          </Button>
          <Button asChild className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black">
            <a href="https://drive.google.com/file/d/11DFZeLhyl4B_pc4L4wEA6ju1qkMfVBPV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>
      </section>

      <div className="section-divider" />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
          Latest work
        </h2>
        <ProjectsGrid />
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Get in touch
        </h2>
        <p className="mb-8 text-muted-foreground accent-border-gold mx-auto max-w-2xl text-left">
          Feel free to reach out if curious about my work, or if you have any questions. Though I'm not currently seeking work, I'm always open to discussing new projects and ideas!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black">
            <a href={mailto}>{user}@{domain}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ffb300] hover:border-[#ffb300]/80 hover:bg-[#ffb300]/10"
          >
            <a href="https://github.com/harry-lons" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#d580ff] hover:border-[#d580ff]/80 hover:bg-[#d580ff]/10"
          >
            <a href="https://linkedin.com/in/harry-lonsdale" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
