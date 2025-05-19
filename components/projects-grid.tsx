import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
          <div className="overflow-hidden rounded-lg border card-hover">
            <div className={getAccentColor(index)}></div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function getAccentColor(index: number) {
  const colors = [
    "h-1 w-full bg-[#00e0ff]",
    "h-1 w-full bg-[#ffb300]",
    "h-1 w-full bg-[#d580ff]",
    "h-1 w-full bg-gradient-to-r from-[#00e0ff] to-[#8a7cfb]",
    "h-1 w-full bg-gradient-to-r from-[#ffb300] to-[#ff6a00]",
    "h-1 w-full bg-gradient-to-r from-[#d580ff] to-[#8a7cfb]",
  ]
  return colors[index % colors.length]
}
