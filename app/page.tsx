import ProjectsGrid from "@/components/projects-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  const user = "harrylonsdale25"
  const domain = "gmail.com"
  const mailto = `mailto:${user}@${domain}`

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">Harry Lonsdale</h1>
        <p className="mt-4 text-xl text-muted-foreground">Software Engineer</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            variant="outline"
            className="border-[#00e0ff] hover:border-[#00e0ff]/80 hover:bg-[#00e0ff]/10"
          >
            <Link href="/#projects">View Projects</Link>
          </Button>
          <Button asChild className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black">
            <a href="https://drive.google.com/file/d/1TNocyf-MipzvTnQke-w1UUqLZv2bKo4x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          About me
        </h2>
        <div className="space-y-4 accent-border">
          <p>
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on
            building accessible, human-centered products.
          </p>
          <p>
            With over 5 years of experience in web development, I've worked with a variety of technologies including
            React, Next.js, Node.js, and TypeScript. I'm passionate about creating clean, efficient, and user-friendly
            applications.
          </p>
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
          Feel free to reach out if curious about my work, or if you have any questions. I'm always open to discussing new projects, ideas, or opportunities!
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
