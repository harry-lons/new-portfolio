import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="mx-auto w-full max-w-screen-xl px-4 flex flex-col items-center justify-center text-center">
        <div className="flex gap-6">
          <Link
            href="https://github.com/harry-lons"
            className="text-sm text-muted-foreground hover:text-[#00e0ff] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/harry-lonsdale"
            className="text-sm text-muted-foreground hover:text-[#ffb300] transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
