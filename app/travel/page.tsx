import Link from "next/link"
import Image from "next/image"
import { Car, Plane, Train, Sun, Mail, Info, MapPin, Utensils, Camera, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TravelPage() {
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
            <Link href="/rsvp" className="text-sm font-medium hover:text-rose-400">
              RSVP
            </Link>
            <Link href="/travel" className="text-sm font-medium text-rose-400">
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
            <Link href="/Info" className="text-sm font-medium hover:text-rose-400">
              Info
            </Link>
          </div>
        </div>
      </nav>

      {/* Travel Info */}
      <section className="flex-1 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">Travel Information</h1>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-center text-muted-foreground text-sm md:text-base">
            We're excited to welcome you to our wedding celebration in beautiful Toledo, Spain. Here's everything you
            need to know about getting here and where to stay.
          </p>

          {/* How to Get to Toledo */}
          <div className="mt-10 md:mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl mx-auto">How to Get to Toledo</h2>
            <div className="mx-auto mt-6 md:mt-8 max-w-4xl">
              <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Plane className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Getting to Spain</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Flying to Madrid</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    The closest airport to Toledo is Madrid (MAD).
                  </p>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Train className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Public Transport</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Madrid to Toledo</p>
                    </div>
                  </div>
                  <ol className="space-y-2 text-muted-foreground text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Taxi to Atocha station</p>
                        <p className="text-xs md:text-sm">20 mins (around €30)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Train to Toledo</p>
                        <p className="text-xs md:text-sm">35 mins (around €15)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Taxi to hotel</p>
                        <p className="text-xs md:text-sm">10 mins (around €10)</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Car className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Private Transport</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Madrid to Toledo</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm md:text-base">Taxi / Bolt from Madrid</h4>
                    <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>Journey time: Approximately 1 hour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>Cost: Between 60 - 120€ - This depends on availability and time of day.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Where to Stay */}
          <div className="mt-10 md:mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl mx-auto">Where to Stay</h2>
            <div className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-sm md:text-base">
              <p>
                Toledo is a really beautiful city, and so we recommend that you stay in or nearby so that you can do a
                bit of sight seeing before or after the wedding.
              </p>
            </div>

            <div className="mt-6 md:mt-8 mx-auto max-w-4xl">
              <div className="p-4 md:p-6">
                <h3 className="text-center text-xl md:text-2xl font-serif mb-2">Cigarral de las Mercedes</h3>
                <p className="text-center text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                  Wedding Venue Accommodation
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-56 md:h-64 w-full">
                    <Image
                      src="/venue-dining.jpg"
                      alt="Cigarral de las Mercedes - Outdoor dining with view of Toledo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Stay at Our Wedding Venue</h3>
                      <p className="text-muted-foreground mb-4 text-sm md:text-base">
                        The venue has some rooms available, on a first come first served basis. If you want to stay
                        here, there is a discounted rate for wedding guests.
                      </p>
                      <div className="bg-rose-50 p-3 md:p-4 mb-4">
                        <div className="flex items-start gap-2">
                          <Mail className="h-4 w-4 text-rose-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-rose-700 text-sm md:text-base">Booking Instructions</p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              Email{" "}
                              <a
                                href="mailto:reservas@cigarraldelasmercedes.com"
                                className="text-rose-500 hover:underline"
                              >
                                reservas@cigarraldelasmercedes.com
                              </a>{" "}
                              and mention our names and the date of the wedding.
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">
                              Discount code: <span className="font-medium">EmmayJoel</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="mt-4 bg-rose-400 hover:bg-rose-500 w-full md:w-auto">
                      <a href="https://cigarraldelasmercedes.com/" target="_blank" rel="noopener noreferrer">
                        Visit Venue Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

      {/* Footer */}
      <footer className="py-10 md:py-12 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl">Emma & Joel</h2>
          <p className="mt-3 md:mt-4">June 22, 2026</p>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/rsvp" className="hover:text-rose-400">
              RSVP
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
            <a href="mailto:weddingjoelandemma@gmail.com" className="underline hover:text-rose-400">
              weddingjoelandemma@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
