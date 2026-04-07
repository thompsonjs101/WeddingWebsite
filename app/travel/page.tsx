import Link from "next/link"
import Image from "next/image"
import { Car, Plane, Train, Mail } from "lucide-react"
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
            <Link href="/" className="text-sm font-medium hover:text-rose-400">Home</Link>
            <Link href="/Info" className="text-sm font-medium hover:text-rose-400">Info</Link>
            <Link href="/travel" className="text-sm font-medium text-rose-400">Travel</Link>
            <Link href="/itinerary" className="text-sm font-medium hover:text-rose-400">Itinerary</Link>
            <Link href="/madrid" className="text-sm font-medium hover:text-rose-400">Madrid</Link>
            <Link href="/toledo" className="text-sm font-medium hover:text-rose-400">Toledo</Link>
          </div>
        </div>
      </nav>

      {/* Travel Info */}
      <section className="flex-1 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-serif text-2xl md:text-3xl lg:text-4xl">
            Travel Information
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-rose-300"></div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground text-sm md:text-base">
            We're excited to welcome you to our wedding celebration in beautiful Toledo, Spain.
            Here's everything you need to know about getting here and where to stay.
          </p>

          {/* How to Get to Toledo */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl">
              How to Get to Toledo
            </h2>

            <div className="mx-auto mt-8 max-w-4xl grid gap-6 md:grid-cols-3">
              {/* Plane */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Plane className="h-6 w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Getting to Spain</h3>
                    <p className="text-sm text-muted-foreground">Fly to Madrid (MAD)</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  The closest airport to Toledo is Madrid (MAD).
                </p>
              </div>

              {/* Train */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Train className="h-6 w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Public Transport</h3>
                    <p className="text-sm text-muted-foreground">Madrid → Toledo</p>
                  </div>
                </div>

                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <strong>1.</strong> Taxi to Atocha station (~20 mins, €30)
                  </li>
                  <li>
                    <strong>2.</strong> Train to Toledo (~35 mins, €15)
                  </li>
                  <li>
                    <strong>3.</strong> Taxi to hotel (~10 mins, €10)
                  </li>
                </ol>
              </div>

              {/* Car */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Car className="h-6 w-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Private Transport</h3>
                    <p className="text-sm text-muted-foreground">Taxi / Bolt</p>
                  </div>
                </div>

                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Journey: ~1 hour</li>
                  <li>• Cost: €60–€120 depending on time / availability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Where to Stay */}
          <div className="mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl">
              Where to Stay
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-sm">
              Toledo is a beautiful city, so we recommend staying nearby to enjoy some sightseeing.
            </p>

            <div className="mt-8 max-w-4xl mx-auto">
              <div className="p-6">
                <h3 className="text-center font-serif text-2xl mb-2">
                  Cigarral de las Mercedes
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Wedding Venue Accommodation
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/venue-dining.jpg"
                      alt="Wedding venue"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-lg mb-2">
                        Stay at Our Wedding Venue
                      </h4>

                      <p className="text-muted-foreground mb-4 text-sm">
                        Rooms are currently fully booked outside of one Villa, however if you have missed out on a room and have decided you want one then please reach out to Emma or Joel and we may be able to accommodate you.
                      </p>

                      <div className="bg-rose-50 p-4 rounded-md">
                        <div className="flex gap-2">
                          <Mail className="h-4 w-4 text-rose-400 mt-1" />
                          <div>
                            <p className="font-medium text-rose-700">Booking</p>
                            <p className="text-sm text-muted-foreground">
                              Email{" "}
                              <a
                                href="mailto:reservas@cigarraldelasmercedes.com"
                                className="text-rose-500 underline"
                              >
                                reservas@cigarraldelasmercedes.com
                              </a>
                            </p>
                            <p className="text-sm mt-1">
                              Code: <strong>EmmayJoel</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="mt-4 bg-rose-400 hover:bg-rose-500">
                      <a
                        href="https://cigarraldelasmercedes.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Venue Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl">Emma & Joel</h2>
          <p className="mt-4">June 22, 2026</p>

          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <Link href="/Info">Info</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/itinerary">Itinerary</Link>
            <Link href="/madrid">Madrid</Link>
            <Link href="/toledo">Toledo</Link>
          </div>

          <p className="mt-6 text-sm">
            Contact:{" "}
            <a
              href="mailto:weddingjoelandemma@gmail.com"
              className="underline"
            >
              weddingjoelandemma@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}