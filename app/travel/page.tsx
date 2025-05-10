import Link from "next/link"
import Image from "next/image"
import { Car, Plane, Train, Sun, Mail, Info, MapPin, Utensils, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TravelPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/travel" className="text-sm font-medium text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="text-sm font-medium hover:text-rose-400">
              Itinerary
            </Link>
          </div>
        </div>
      </nav>

      {/* Travel Info */}
      <section className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-serif text-3xl md:text-4xl text-with-bg mx-auto">Travel Information</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground bg-white/80 p-4 shadow-sm">
            We're excited to welcome you to our wedding celebration in beautiful Toledo, Spain. Here's everything you
            need to know about getting here and where to stay.
          </p>

          {/* How to Get to Toledo */}
          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl text-with-bg mx-auto">How to Get to Toledo</h2>
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Plane className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Getting to Spain</CardTitle>
                      <CardDescription>Flying to Madrid</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The closest airport to Toledo is Madrid. Most international guests will arrive at Madrid-Barajas
                      Adolfo Suárez International Airport (MAD).
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Train className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Public Transport</CardTitle>
                      <CardDescription>Madrid to Toledo</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Taxi to Atocha station</p>
                          <p className="text-sm">20 mins (around €30)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Train to Toledo</p>
                          <p className="text-sm">35 mins (around €15)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-xs font-bold">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Taxi to hotel</p>
                          <p className="text-sm">10 mins (around €10)</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Car className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Private Transport</CardTitle>
                      <CardDescription>Madrid to Toledo</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-2">Taxi from Madrid Airport</h4>
                      <ul className="space-y-2 text-muted-foreground">
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Where to Stay */}
          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl text-with-bg mx-auto">Where to Stay</h2>
            <div className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground bg-white/80 p-4 shadow-sm">
              <p>
                Toledo is a really beautiful city, and so we recommend that you stay in or nearby so that you can do a
                bit of sight seeing before or after the wedding.
              </p>
            </div>

            <div className="mt-8 mx-auto max-w-4xl">
              <Card className="card-with-bg shadow-md">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-serif">Cigarral de las Mercedes</CardTitle>
                  <CardDescription className="text-center">Wedding Venue Accommodation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src="/venue-dining.jpg"
                        alt="Cigarral de las Mercedes - Outdoor dining with view of Toledo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Stay at Our Wedding Venue</h3>
                        <p className="text-muted-foreground mb-4">
                          The venue has some rooms available, on a first come first served basis. If you want to stay
                          here, there is a discounted rate for wedding guests.
                        </p>
                        <div className="bg-rose-50 p-4 mb-4">
                          <div className="flex items-start gap-2">
                            <Mail className="h-4 w-4 text-rose-400 mt-0.5" />
                            <div>
                              <p className="font-medium text-rose-700">Booking Instructions</p>
                              <p className="text-sm text-muted-foreground">
                                Email{" "}
                                <a
                                  href="mailto:reservas@cigarraldelasmercedes.com"
                                  className="text-rose-500 hover:underline"
                                >
                                  reservas@cigarraldelasmercedes.com
                                </a>{" "}
                                and mention our names and the date of the wedding.
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                Discount code: <span className="font-medium">EmmayJoel</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="mt-4 bg-rose-400 hover:bg-rose-500 shadow-md">
                        <a href="https://cigarraldelasmercedes.com/" target="_blank" rel="noopener noreferrer">
                          Visit Venue Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl text-with-bg mx-auto">Additional Information</h2>
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Sun className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Weather</CardTitle>
                      <CardDescription>Toledo in June</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Toledo in June is very hot during the day (up to 90°F) but comfortable in the evening (around
                      70°F).
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
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
                  </CardContent>
                </Card>

                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Camera className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Photography</CardTitle>
                      <CardDescription>Photo Guidelines</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Our photographer has asked that no one else take photos during the day. Guests can take photos one
                      hour after dinner when the photographer leaves.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        <span>No photos during ceremony and formal portions</span>
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
                  </CardContent>
                </Card>

                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <Info className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Special Needs</CardTitle>
                      <CardDescription>Accommodations</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      If you have any dietary restrictions or special needs, please let us know when you RSVP.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Destination Information */}
          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl text-with-bg mx-auto">Destination Information</h2>
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <MapPin className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Madrid Recommendations</CardTitle>
                      <CardDescription>If you're spending time in the capital</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Madrid is a vibrant city with plenty to see and do. Here are some of our recommendations:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-rose-400" /> Must-See Attractions
                        </h4>
                        <ul className="space-y-1 text-muted-foreground ml-6">
                          <li>• Prado Museum - World-class art collection</li>
                          <li>• Retiro Park - Beautiful city park with a lake</li>
                          <li>• Royal Palace - Official residence of the Spanish Royal Family</li>
                          <li>• Plaza Mayor - Historic central square</li>
                          <li>• Mercado de San Miguel - Gourmet food market</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-rose-400" /> Food & Drink
                        </h4>
                        <ul className="space-y-1 text-muted-foreground ml-6">
                          <li>• La Latina area for tapas bar hopping</li>
                          <li>• Chocolatería San Ginés for churros con chocolate</li>
                          <li>• El Retiro area for outdoor dining</li>
                          <li>• Mercado de San Miguel for gourmet tapas</li>
                          <li>• Casa Botín - oldest continuously operating restaurant in the world</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-with-bg shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <MapPin className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <CardTitle>Toledo Recommendations</CardTitle>
                      <CardDescription>Exploring the historic city</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Toledo is a UNESCO World Heritage site with a rich history and stunning architecture. Here's what
                      we recommend:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-rose-400" /> Must-See Attractions
                        </h4>
                        <ul className="space-y-1 text-muted-foreground ml-6">
                          <li>• Toledo Cathedral - Magnificent Gothic architecture</li>
                          <li>• Alcázar of Toledo - Historic fortress with great views</li>
                          <li>• Monastery of San Juan de los Reyes - Beautiful cloisters</li>
                          <li>• El Greco Museum - Works by the famous painter</li>
                          <li>• Synagogue of Santa María la Blanca - Unique architecture</li>
                          <li>• Puente de San Martín - Medieval bridge with stunning views</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 flex items-center gap-2">
                          <Info className="h-4 w-4 text-rose-400" /> Tips for Toledo
                        </h4>
                        <ul className="space-y-1 text-muted-foreground ml-6">
                          <li>• Wear comfortable shoes - the city is hilly with cobblestone streets</li>
                          <li>• Visit the Mirador del Valle for the best panoramic views</li>
                          <li>• Try local specialties like marzipan and Manchego cheese</li>
                          <li>• The city is small enough to explore on foot</li>
                          <li>• Consider a guided tour to learn about the rich history</li>
                          <li>• Many shops close for siesta in the afternoon</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
