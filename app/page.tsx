import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/spanish-wedding-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide drop-shadow-lg md:text-5xl">Emma & Joel</h1>
          <div className="mt-4 h-0.5 w-12 bg-white drop-shadow-lg"></div>
          <p className="mt-4 font-serif text-lg tracking-widest drop-shadow-lg md:text-xl">ARE GETTING MARRIED</p>
          <p className="mt-2 font-serif text-lg drop-shadow-lg md:text-xl">JUNE 22, 2026</p>
          <Button
            asChild
            className="mt-6 border-white/70 bg-white/30 px-6 py-5 text-white shadow-md backdrop-blur-sm hover:bg-white/40"
            variant="outline"
          >
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-xl">
            E & J
          </Link>
          <div className="flex gap-6 md:gap-10 items-center">
            <Link href="/" className="text-sm font-medium hover:text-rose-400">
              Home
            </Link>
            <Link href="/rsvp" className="text-sm font-medium hover:text-rose-400">
              RSVP
            </Link>
            <Link href="/travel" className="text-sm font-medium hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="text-sm font-medium hover:text-rose-400">
              Itinerary
            </Link>
          </div>
        </div>
      </nav>

      {/* Join Our Celebration */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-with-bg mx-auto">Join Our Celebration</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-rose-300"></div>
          <div className="mx-auto mt-8 max-w-2xl bg-white/80 p-6 shadow-sm">
            <p className="text-muted-foreground">
              Dear family and friends, we are overjoyed to invite you to celebrate the most special day of our lives.
              Your presence would mean the world to us as we exchange vows and begin our journey as a married couple.
              We've planned a beautiful celebration in the historic city of Toledo, and we can't wait to share these
              magical moments with the people we cherish most. Let's create memories that will last a lifetime!
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="relative h-64 w-full overflow-hidden shadow-md">
                <Image
                  src="/couple-formal-event.png"
                  alt="Emma and Joel at a formal event"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-64 w-full overflow-hidden shadow-md">
                <Image
                  src="/couple-train-tracks.png"
                  alt="Emma and Joel on train tracks"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-64 w-full overflow-hidden shadow-md">
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-with-bg mx-auto">Wedding Details</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-rose-300"></div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 shadow-sm">
                <Calendar className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-with-bg">When</h3>
              <div className="mt-2 bg-white/90 p-4 shadow-sm">
                <p className="text-muted-foreground">June 22, 2026</p>
                <p className="text-muted-foreground">Ceremony: 6:00 PM</p>
                <p className="text-muted-foreground">Reception: 8:00 PM</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 shadow-sm">
                <MapPin className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-with-bg">Where</h3>
              <div className="mt-2 bg-white/90 p-4 shadow-sm">
                <p className="text-muted-foreground">Cigarral de las Mercedes</p>
                <p className="text-muted-foreground">Toledo, Spain</p>
                <p className="text-muted-foreground">A beautiful historic venue with stunning views</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 shadow-sm">
                <Heart className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-with-bg">Dress Code</h3>
              <div className="mt-2 bg-white/90 p-4 shadow-sm">
                <p className="text-muted-foreground">Whatever you feel the most handsome / beautiful in</p>
                <p className="text-muted-foreground">(we want you to shine)</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-4">
            <Button asChild className="bg-rose-400 hover:bg-rose-500 shadow-md">
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-rose-400 text-rose-400 hover:bg-rose-50 shadow-sm">
              <Link href="/itinerary">View Itinerary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-with-bg">Emma & Joel</h2>
          <p className="mt-4 text-with-bg">June 22, 2026</p>
          <div className="mt-8 flex justify-center gap-8">
            <Link href="/rsvp" className="text-with-bg hover:text-rose-400">
              RSVP
            </Link>
            <Link href="/travel" className="text-with-bg hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="text-with-bg hover:text-rose-400">
              Itinerary
            </Link>
          </div>
          <p className="mt-8 text-sm text-with-bg">
            For questions, please contact us at{" "}
            <a href="mailto:weddingjoelandemma@gmail.com" className="underline hover:text-rose-400">
              weddingjoelandemma@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
