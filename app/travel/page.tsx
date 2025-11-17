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
                    The closest airport to Toledo is Madrid. Most international guests will arrive at Madrid-Barajas
                    Adolfo Suárez International Airport (MAD).
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
                    <h4 className="font-medium mb-2 text-sm md:text-base">Taxi from Madrid Airport</h4>
                    <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>Journey time: Approximately 1 hour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>Cost: Approximately €100</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>Best for groups or families</span>
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

          {/* Additional Information */}
          <div className="mt-10 md:mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl mx-auto">Additional Information</h2>
            <div className="mx-auto mt-6 md:mt-8 max-w-4xl">
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
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

                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Camera className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Photography</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Photo Guidelines</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base">
                    We kindly ask that you respect our photography guidelines to ensure everyone can enjoy the day.
                  </p>
                  <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>No photos during the ceremony</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        Please ensure your own photos don't interrupt the chance of having the professional take the
                        shot
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Photos welcome after dinner (around 11:00 PM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Share with #EmmaAndJoel2026</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Info className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Special Needs</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Accommodations</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base">
                    If you have any dietary restrictions or special needs, please let us know when you RSVP.
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
                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Babysitting Services</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Available through the hotel</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base">
                    The hotel offers babysitting services for families attending the wedding. Please contact them
                    directly to arrange.
                  </p>
                  <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Professional childcare services available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>Advance booking recommended</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        Contact:{" "}
                        <a href="mailto:hotel@cigarraldelasmercedes.com" className="text-rose-500 hover:underline">
                          hotel@cigarraldelasmercedes.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Information */}
          <div className="mt-10 md:mt-16">
            <h2 className="text-center font-serif text-xl md:text-2xl mx-auto">Destination Information</h2>
            <div className="mx-auto mt-6 md:mt-8 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Madrid Recommendations</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">If you're spending time in the capital</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    Madrid is a vibrant city with plenty to see and do. Here are some of our recommendations:
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                        <MapPin className="h-3 w-3 md:h-4 md:w-4 text-rose-400" /> Must-See Attractions
                      </h4>
                      <ul className="space-y-1 text-muted-foreground ml-5 md:ml-6 text-xs md:text-sm">
                        <li>• Prado Museum - World-class art collection</li>
                        <li>• Retiro Park - Beautiful city park with a lake</li>
                        <li>• Royal Palace - Official residence of the Spanish Royal Family</li>
                        <li>• Plaza Mayor - Historic central square</li>
                        <li>• Mercado de San Miguel - Gourmet food market</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                        <Utensils className="h-3 w-3 md:h-4 md:w-4 text-rose-400" /> Food & Drink
                      </h4>
                      <ul className="space-y-1 text-muted-foreground ml-5 md:ml-6 text-xs md:text-sm">
                        <li>• La Latina area for tapas bar hopping</li>
                        <li>• Chocolatería San Ginés for churros con chocolate</li>
                        <li>• El Retiro area for outdoor dining</li>
                        <li>• Mercado de San Miguel for gourmet tapas</li>
                        <li>• Casa Botín - oldest continuously operating restaurant in the world</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">Toledo Recommendations</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Exploring the historic city</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    Toledo is a UNESCO World Heritage site with a rich history and stunning architecture. Here's what we
                    recommend:
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                        <MapPin className="h-3 w-3 md:h-4 md:w-4 text-rose-400" /> Must-See Attractions
                      </h4>
                      <ul className="space-y-1 text-muted-foreground ml-5 md:ml-6 text-xs md:text-sm">
                        <li>• Toledo Cathedral - Magnificent Gothic architecture</li>
                        <li>• Alcázar of Toledo - Historic fortress with great views</li>
                        <li>• Monastery of San Juan de los Reyes - Beautiful cloisters</li>
                        <li>• El Greco Museum - Works by the famous painter</li>
                        <li>• Synagogue of Santa María la Blanca - Unique architecture</li>
                        <li>• Puente de San Martín - Medieval bridge with stunning views</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                        <Info className="h-3 w-3 md:h-4 md:w-4 text-rose-400" /> Tips for Toledo
                      </h4>
                      <ul className="space-y-1 text-muted-foreground ml-5 md:ml-6 text-xs md:text-sm">
                        <li>• Wear comfortable shoes - the city is hilly with cobblestone streets</li>
                        <li>• Visit the Mirador del Valle for the best panoramic views</li>
                        <li>• Try local specialties like marzipan and Manchego cheese</li>
                        <li>• The city is small enough to explore on foot</li>
                        <li>• Consider a guided tour to learn about the rich history</li>
                        <li>• Many shops close for siesta in the afternoon</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
