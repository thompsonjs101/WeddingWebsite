import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Heart, Music } from "lucide-react"
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

      {/* Hero Section */}
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

          <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { src: "/couple-formal-event.png", alt: "Formal event" },
              { src: "/couple-train-tracks.png", alt: "Train tracks" },
              { src: "/couple-sunset.png", alt: "Sunset" },
            ].map((img, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
            Wedding Details
          </h2>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* When */}
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
                <Calendar className="h-7 w-7 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-lg">When</h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>June 22, 2026</p>
                <p>Ceremony: 6:00 PM</p>
                <p>Reception: 8:00 PM</p>
              </div>
            </div>

            {/* Where */}
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
                <MapPin className="h-7 w-7 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-lg">Where</h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Cigarral de las Mercedes</p>
                <p>Toledo, Spain</p>
                <p>Beautiful historic venue with stunning views</p>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
                <Heart className="h-7 w-7 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-lg">Dress Code</h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Wear what makes you feel amazing</p>
                <p>(we want you to shine)</p>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="mt-12 flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
              <Music className="h-7 w-7 text-rose-400" />
            </div>
            <h3 className="mt-4 font-serif text-lg">
              Help Us Build the Playlist
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Add your favorite songs to our wedding playlist and help us create
              the perfect soundtrack!
            </p>

            <Button
              asChild
              className="mt-4 bg-[#1DB954] hover:bg-[#1ed760] text-white"
            >
              <a
                href="https://open.spotify.com/playlist/7h5dw0uBYO21sBqJ7E9sCU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add Songs on Spotify
              </a>
            </Button>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
            <Button asChild className="bg-rose-400 hover:bg-rose-500">
              <Link href="/rsvp">RSVP Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-rose-400 text-rose-400 hover:bg-rose-50"
            >
              <Link href="/itinerary">View Itinerary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl">Emma & Joel</h2>
          <p className="mt-4">June 22, 2026</p>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Link href="/Info">Info</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/itinerary">Itinerary</Link>
            <Link href="/madrid">Madrid</Link>
            <Link href="/toledo">Toledo</Link>
          </div>

          <p className="mt-6 text-sm">
            For questions, contact{" "}
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