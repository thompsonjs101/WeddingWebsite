import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4">
          <Link href="/" className="font-serif text-xl">
            E & J
          </Link>
          <div className="flex gap-4 md:gap-6 lg:gap-10 items-center">
            <Link href="/" className="text-sm font-medium hover:text-rose-400">
              Home
            </Link>
            <Link href="/Info" className="text-sm font-medium hover:text-rose-400">
              Info
            </Link>
            <Link href="/travel" className="text-sm font-medium hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="text-sm font-medium hover:text-rose-400">
              Itinerary
            </Link>
            <Link href="/madrid" className="text-sm font-medium hover:text-rose-400">
              Madrid
            </Link>
            <Link href="/toledo" className="text-sm font-medium text-rose-400">
              Toledo
            </Link>
          </div>
        </div>
      </nav>

      {/* Join Our Celebration */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">
            Emma and Joel
          </h2>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>

          <div className="mx-auto mt-6 md:mt-8 max-w-2xl">
            <p className="text-muted-foreground text-sm md:text-base">
              Toledo, Spain
              <br />
              22nd June 2026
            </p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src="/couple-formal-event.png"
                  alt="Emma and Joel at a formal event"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src="/couple-train-tracks.png"
                  alt="Emma and Joel on train tracks"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-56 md:h-64 w-full">
                <Image
                  src="/couple-sunset.png"
                  alt="Emma and Joel at sunset"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">
            Wedding Details
          </h2>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* When */}
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-100">
                <Calendar className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
              </div>
              <h3 className="mt-3 md:mt-4 font-serif text-lg md:text-xl">When</h3>
              <div className="mt-2">
                <p className="text-muted-foreground text-sm md:text-base">
                  June 22, 2026
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Ceremony: 6:00 PM
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Reception: 8:00 PM
                </p>
              </div>
            </div>

            {/* Where */}
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-100">
                <MapPin className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
              </div>
              <h3 className="mt-3 md:mt-4 font-serif text-lg md:text-xl">Where</h3>
              <div className="mt-2">
                <p className="text-muted-foreground text-sm md:text-base">
                  Cigarral de las Mercedes
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Toledo, Spain
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  A beautiful historic venue with stunning views
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-100">
                <Heart className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
              </div>
              <h3 className="mt-3 md:mt-4 font-serif text-lg md:text-xl">
                Dress Code
              </h3>
              <div className="mt-2">
                <p className="text-muted-foreground text-sm md:text-base">
                  Whatever you feel the most handsome / beautiful in
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  (we want you to shine)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl">Emma & Joel</h2>
          <p className="mt-3 md:mt-4">June 22, 2026</p>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/Info" className="hover:text-rose-400">
              Info
            </Link>
            <Link href="/travel" className="hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="hover:text-rose-400">
              Itinerary
            </Link>
            <Link href="/madrid" className="hover:text-rose-400">
              Madrid
            </Link>
            <Link href="/toledo" className="hover:text-rose-400">
              Toledo
            </Link>
          </div>

          <p className="mt-6 md:mt-8 text-xs md:text-sm px-4">
            For questions, please contact us at{" "}
            <a
              href="mailto:weddingjoelandemma@gmail.com"
              className="underline hover:text-rose-400"
            >
              weddingjoelandemma@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}