import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">

      <Button
        variant="ghost"
        asChild
        className="mb-8 gap-2 text-[#00e0ff] hover:text-[#00e0ff]/80 hover:bg-[#00e0ff]/10"
      >
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text">{project.title}</h1>
          <p className="mt-2 text-muted-foreground">{project.category}</p>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="h-1 w-full"
            style={{ backgroundImage: "linear-gradient(to right, #00e0ff, #8a7cfb, #ffb300)" }}
          ></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-2xl font-bold">Overview</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>

          <div className="space-y-4 p-4 rounded-lg bg-secondary/50 border border-[#00e0ff]/20">
            <div>
              <h3 className="font-medium text-[#00e0ff]">Technologies</h3>
              <ul className="mt-2 space-y-1">
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-sm text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-[#ffb300]">Year</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.year}</p>
            </div>

            {project.liveUrl && (
              <div>
                <h3 className="font-medium text-[#d580ff]">Live Demo</h3>
                <Button asChild size="sm" className="mt-2 bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </Button>
              </div>
            )}

            {project.githubUrl && (
              <div>
                <h3 className="font-medium text-[#ffb300]">Source Code</h3>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-2 border-[#ffb300] hover:border-[#ffb300]/80 hover:bg-[#ffb300]/10"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
