import Link from "next/link"
import { MapPin, Utensils, Camera, Coffee, Church, Castle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ToledoPage() {
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

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">Discover Toledo</h2>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-sm md:text-base">
            A UNESCO World Heritage Site, Toledo is a medieval treasure where Christian, Jewish, and Muslim cultures have coexisted for centuries. Its winding streets and stunning monuments will transport you back in time.
          </p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-100">
                <Utensils className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
              </div>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl">Recommended Restaurants</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Adolfo */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Restaurante Adolfo</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Hombre de Palo, 7</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Upscale dining in a historic 14th-century building. Famous for their venison carpaccio and traditional Toledan cuisine with a modern twist.
              </p>
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Fine Dining</span>
              </div>
            </div>

            {/* La Orza */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">La Orza</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Descalzos, 5</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Contemporary Spanish cuisine in a beautifully restored historic building. Known for creative tapas and an excellent wine selection.
              </p>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Contemporary Spanish</span>
              </div>
            </div>

            {/* Alfileritos 24 */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Alfileritos 24</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Alfileritos, 24</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                A Michelin-recommended restaurant offering innovative Castilian cuisine with seasonal ingredients in an intimate setting.
              </p>
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Modern Castilian</span>
              </div>
            </div>

            {/* El Trébol */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">El Trébol</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Santa Fe, 1</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                A local favorite serving traditional Toledan dishes like carcamusa (meat stew) and perdiz estofada (braised partridge) at great prices.
              </p>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Traditional Tavern</span>
              </div>
            </div>

            {/* Ludeña */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Ludeña</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Plaza de la Magdalena, 13</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Historic bar since 1892, perfect for authentic tapas and cañas (small beers). Try their famous carcamusa and local cheeses.
              </p>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Historic Bar</span>
              </div>
            </div>

            {/* Santo Tomé */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Santo Tomé Obrador</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Plaza de Zocodover, 7</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Famous for their marzipan (mazapán), a Toledo specialty. The perfect place to buy sweet souvenirs and try traditional confections.
              </p>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-rose-400" />
                <span className="text-sm font-medium">Pastry Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-100">
                <Camera className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
              </div>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl">Things to Do</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Toledo Cathedral */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <div className="flex items-center gap-3 mb-3">
                <Church className="h-6 w-6 text-rose-400" />
                <h4 className="font-serif text-xl">Toledo Cathedral</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Cardenal Cisneros, 1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                One of the most impressive Gothic cathedrals in Spain. Marvel at its stunning stained glass windows and art collection featuring works by El Greco.
              </p>
            </div>

            {/* Alcázar */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <div className="flex items-center gap-3 mb-3">
                <Castle className="h-6 w-6 text-rose-400" />
                <h4 className="font-serif text-xl">Alcázar of Toledo</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle Unión</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A massive stone fortress dominating Toledo's skyline. Now houses the Army Museum with fascinating exhibits on Spanish military history.
              </p>
            </div>

            {/* Synagogue */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Santa María la Blanca</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle de los Reyes Católicos, 4</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A beautiful medieval synagogue showcasing the city's rich Jewish heritage. Its white columns and Mudéjar architecture are breathtaking.
              </p>
            </div>

            {/* El Greco Museum */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">El Greco Museum</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Paseo del Tránsito</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dedicated to Toledo's most famous artist. See El Greco's masterpieces and learn about his life in this beautifully curated museum.
              </p>
            </div>

            {/* Mirador del Valle */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Mirador del Valle</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>South of the city</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The best panoramic viewpoint of Toledo. Visit at sunset for unforgettable photos of the city silhouetted against the Tagus River.
              </p>
            </div>

            {/* Walking the Streets */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Old Town Wandering</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Historic Quarter</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Get lost in Toledo's maze of narrow medieval streets. Every corner reveals hidden plazas, artisan shops, and centuries of history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-amber-50/80 backdrop-blur-sm rounded-lg border p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl mb-4 text-center">Quick Tips</h3>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Toledo is very walkable - wear comfortable shoes for the cobblestones!</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>The historic center is car-free - park outside and walk in</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Buy the tourist wristband for access to multiple monuments at a discount</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Try traditional Toledan marzipan - it's been made here since medieval times</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Toledo is famous for damascene jewelry - beautiful and unique souvenirs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Visit early morning or late afternoon to avoid crowds and heat in summer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-6">Plan Your Visit</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-rose-400 hover:bg-rose-500">
              <Link href="/madrid">Explore Madrid</Link>
            </Button>
            <Button asChild variant="outline" className="border-rose-400 text-rose-400 hover:bg-rose-50">
              <Link href="/travel">Back to Travel Info</Link>
            </Button>
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
