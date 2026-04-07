import Link from "next/link"
import { Sun, Camera, Info, Heart, Mic } from "lucide-react"

export default function InfoPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/info" className="text-sm font-medium text-rose-400">
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
            <Link href="/toledo" className="text-sm font-medium hover:text-rose-400">
              Toledo
            </Link>
          </div>
        </div>
      </nav>

      {/* Additional Information */}
      <section className="flex-1 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">
            Additional Information
          </h1>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-center text-muted-foreground text-sm md:text-base">
            Everything else you need to know for our wedding celebration.
          </p>

          <div className="mx-auto mt-10 md:mt-16 max-w-4xl">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">

              {/* Weather */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                    <Sun className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Weather</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Toledo in June</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  Toledo in June is very hot during the day (up to 32°C) but comfortable in the evening (around 21°C).
                </p>
                <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Bring sun protection for daytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Light evening wear recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Stay hydrated during sightseeing</span>
                  </li>
                </ul>
              </div>

              {/* Photography */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                    <Camera className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Photography</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Photo Guidelines</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  We kindly ask that you respect our photography guidelines.
                </p>
                <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>No photos during the ceremony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Please ensure your photos don’t interfere with the professional photographer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Shared POV will be available from June 18–23</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>More surprises to come 👀</span>
                  </li>
                </ul>
              </div>

              {/* Special Needs */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                    <Info className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Special Needs</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Accommodations</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  Please let us know about any dietary restrictions or special needs when you RSVP.
                </p>
                <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Dietary requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Accessibility needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Contact us with any concerns</span>
                  </li>
                </ul>
              </div>

              {/* Babysitting */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                    <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Babysitting Services</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Available through the hotel</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  Babysitting services are available—please contact the hotel directly.
                </p>
                <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Professional childcare available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Advance booking recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>
                      <a href="mailto:hotel@cigarraldelasmercedes.com" className="text-rose-500 hover:underline">
                        hotel@cigarraldelasmercedes.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Speeches */}
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                    <Mic className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">Speeches</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Toastmaster: Emma</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  If you’d like to give a speech, please contact{" "}
                  <a
                    href="https://www.facebook.com/emma.bussell.37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 hover:underline"
                  >
                    Emma
                  </a>.
                </p>
                <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span><strong>2 minutes max</strong> per speech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Extra time costs <strong>€100 per minute</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">•</span>
                    <span>Emma will collect any overdue fees 😄</span>
                  </li>
                </ul>
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
            <Link href="/info" className="hover:text-rose-400">Info</Link>
            <Link href="/travel" className="hover:text-rose-400">Travel</Link>
            <Link href="/itinerary" className="hover:text-rose-400">Itinerary</Link>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-sm px-4">
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