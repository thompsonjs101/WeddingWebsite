import Link from "next/link"
import { Calendar, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ItineraryPage() {
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
            <Link href="/travel" className="text-sm font-medium hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="text-sm font-medium text-rose-400">
              Itinerary
            </Link>
          </div>
        </div>
      </nav>

      {/* Itinerary */}
      <section className="flex-1 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">Our Wedding Week</h1>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-center text-muted-foreground text-sm md:text-base">
            Here's what we'll be doing during our wedding week in Spain. We'd love for you to join us for the welcome
            dinner and wedding day!
          </p>

          {/* Personal Plans Note */}
          <Alert className="mx-auto mt-5 md:mt-6 max-w-3xl bg-rose-50 border-rose-200">
            <Info className="h-4 w-4 md:h-5 md:w-5 text-rose-400" />
            <AlertDescription className="text-muted-foreground text-xs md:text-sm">
              This is our personal itinerary for the week. These are still rough plans and will be updated as we go
              along. You're welcome to make your own plans for most of the week, but we'd love to see you at the welcome
              dinner on Sunday and of course at our wedding on Monday!
            </AlertDescription>
          </Alert>

          {/* Day-by-Day Itinerary */}
          <div className="mx-auto mt-8 md:mt-12 max-w-4xl space-y-5 md:space-y-6">
            {/* Wednesday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Wednesday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 17, 2026 • Our Arrival in Madrid</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  We'll be arriving in Madrid at 7pm and checking into our hotel. We will be staying at one of the following hotels:
                  <a href= "https://www.booking.com/hotel/es/crosstown-by-pillow.no.html?aid=898224&app_hotel_id=9662096&checkin=2026-06-17&checkout=2026-06-20&from_sn=ios&group_adults=2&group_children=0&label=hotel_details-5RQ1kwZ%401762875376&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA%2C&chal_t=1762971128862&force_referer="> BYPILLOW Crosstown </a>
                  <a href= "https://www.booking.com/hotel/es/b-amp-b-puerta-del-sol.no.html?aid=898224&label=hotel_details-G1uxJ9K%401762886716&sid=c23675ec250cebafd590b8c7f6fcf246&checkin=2026-06-17&checkout=2026-06-20&dist=0&from_sn=ios&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA%2C&sb_price_type=total&type=total&"> B&B HOTEL Madrid Centro Puerta del Sol </a>
                  <a href= "https://www.booking.com/hotel/es/villadelareina.no.html?fbclid=IwY2xjawOAcXhleHRuA2FlbQIxMABicmlkETFsSkt4VVFZV3pYb2tSVkVvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHn-5Liz50ONzUlHj04fafB8EjS1hG26x_x5_TySgWI_wx8CSupc_kNPGlUKl_aem_ybs3Tdo88BlGLnykdjDMhw&chal_t=1762890281841&force_referer=https%3A%2F%2Fl.facebook.com%2F"> Boutique Hotel H10 Villa de la Reina </a>
                  We will be checking out the first two hotels in March but all are in the Sivilla area.
                  After we have checked in we will be going out for a quick bite and some drinks.
                </p>
              </div>
            </div>

            {/* Thursday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Thursday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 18, 2026 • Bachelor/Bachelorette Day</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Joel will be having his bachelor party with his friends in Madrid. Emma will be hoping to hang out
                  with the partners during this time. 
                  Please contact Max for more information about the Bachelor party and Lina for information on what the girls will be doing.
                </p>
              </div>
            </div>

            {/* Friday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Friday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 19, 2026 • Madrid Exploration</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Day activity: unknown 
                  Dinner: Mercado de San Ildefonso. It is a food market, which will allow for everyone to eat what they want and there are no reservations needed. 
                  Drinks: somewhere! 
                </p>
              </div>
            </div>

            {/* Saturday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Saturday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 20, 2026 • Travel to Toledo</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  In the day we will be heading to <a href= "https://www.parquewarner.com/en"> Parque Warner </a> to spend a day enjoying rides and other such activities before the evening trip to Toledo.
                  Up to individuals if they would like to stay an extra night in Madrid and come into Toledo
                  the day of the welcome party, or the hotel will open up a chance for room extensions 3 months before the date on a first come basis.
                </p>
              </div>
            </div>

            {/* Sunday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Sunday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 21, 2026 • Welcome Dinner</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  During the day, we'll be relaxing and preparing for the wedding. In the evening, we're hosting a
                  welcome dinner for all our guests:
                </p>
                <div className="bg-rose-50 p-3 md:p-4 mb-4">
                  <h4 className="font-medium text-rose-700 text-sm md:text-base">Welcome Dinner Details</h4>
                  <ul className="mt-2 space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        <strong>Location:</strong> Cigarral de las Mercedes (same as the wedding venue)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        <strong>Time:</strong> 19:00 - 22:00
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        <strong>Dress Code:</strong> Just wear something nice.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">•</span>
                      <span>
                        This will be a relaxed evening with Spanish tapas, drinks, and a chance to meet everyone before
                        the wedding day
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  We hope you can join us for this pre-wedding celebration! It's a great opportunity to meet other
                  guests and enjoy some delicious Spanish cuisine in a beautiful setting.
                </p>
              </div>
            </div>

            {/* Monday - Wedding Day */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Monday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 22, 2026 • Wedding Day</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Our wedding day! Here's the schedule for our celebration at Cigarral de las Mercedes:
                </p>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-medium">18:00</span>
                    <div>
                      <span className="font-medium">Ceremony</span>
                      <p className="text-xs md:text-sm">Location: Mirador</p>
                      <p className="text-xs md:text-sm">Please arrive 15-30 minutes early to be seated</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-medium">19:00</span>
                    <div>
                      <span className="font-medium">Appetizers & Cocktail Hour</span>
                      <p className="text-xs md:text-sm">Location: Fuente</p>
                      <p className="text-xs md:text-sm">Enjoy drinks and appetizers while we take photos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-medium">20:00</span>
                    <div>
                      <span className="font-medium">Dinner Reception</span>
                      <p className="text-xs md:text-sm">Location: Mirador</p>
                      <p className="text-xs md:text-sm">Formal dinner, toasts, and celebrations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-medium">22:00</span>
                    <div>
                      <span className="font-medium">Dancing & Open Bar</span>
                      <p className="text-xs md:text-sm">Location: Casona</p>
                      <p className="text-xs md:text-sm">Party continues into the night</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tuesday */}
            <div className="border-b pb-5 md:pb-6">
              <div className="px-3 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 flex-shrink-0">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-xl md:text-2xl">Tuesday</h2>
                    <p className="text-rose-400 text-sm md:text-base">June 23, 2026 • Resting or Moving on</p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-6">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Unfortunately the venue doesnt open up for bookings outside of our wedding date until 3 months before the date, 
                  so hopefully we can grab an extension for one day to rest before moving on to a new city. 
                  Currently this is to be planned, however there has been words of Barcelona or somewhere with a beach.
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
            <Link href="/rsvp" className="hover:text-rose-400">
              RSVP
            </Link>
            <Link href="/travel" className="hover:text-rose-400">
              Travel
            </Link>
            <Link href="/itinerary" className="hover:text-rose-400">
              Itinerary
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
