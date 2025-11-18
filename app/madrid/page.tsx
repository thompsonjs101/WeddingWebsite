import Link from "next/link"
import { MapPin, Utensils, Camera, Coffee, Wine, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function MadridPage() {
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
            <Link href="/madrid" className="text-sm font-medium text-rose-400">
              Madrid
            </Link>
            <Link href="/toledo" className="text-sm font-medium hover:text-rose-400">
              Toledo
            </Link>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">Explore Madrid</h2>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-sm md:text-base">
            Madrid is a city that never sleeps, offering world-class museums, stunning architecture, and some of the best food in Spain. Here are highly recommended spots to help you make the most of your visit.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"></div>
            {/* Caluana */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Caluana</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>C. de la Bolsa 12</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                CALUANA is more than just a restaurant; it's the story of a journey between two countries passionate about gastronomy: Italy and Spain . This journey celebrates not only flavors but also the products, culture, and magic that each country brings.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
                <a href= "https://caluana.com/" className="text-rose-500 hover:underline"> Caluana </a>
              </div>
            </div>

            {/* Rosi La Loca */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Rosi La Loca</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span> C. de Cádiz 4 </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Enjoy the craziest and funniest tavern in Madrid where you will discover the fantastic and colorful world of Rosi la Loca.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
               <a href= "https://rosilaloca.com/rosi-la-loca-eng/" className="text-rose-500 hover:underline"> Rosi La Loca </a>
              </div>
            </div>

            {/* HER */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">HER</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>C. de Hermosilla 4 </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                A modern eatery in the heart of barrio Salamanca, Madrid. The food is Mediterranean-inspired with a focus on local artisan produce and a small wine list featuring low intervention producers.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://hermosillamadrid.es/en/" className="text-rose-500 hover:underline"> HER </a>
              </div>
            </div>

            {/* Mandarosso */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Mandarosso</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>C. Santa Ana 21</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Mandarosso is a warm and inviting Italian restaurant in Madrid (Calle de Santa Ana 21), blending family-rooted cuisine from Southern Italy with elegant simplicity — think fresh pasta, rich lasagna, and indulgent homemade desserts.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://mandarosso.com/mandarosso/" className="text-rose-500 hover:underline"> Mandarosso </a>
              </div>
            </div>

            {/* Chocolatería San Ginés */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Chocolatería San Ginés</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Pasadizo de San Ginés 5</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Open since 1894, this iconic spot serves the best churros con chocolate in Madrid. A must-visit at any time of day or night!
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://chocolateriasangines.com/" className="text-rose-500 hover:underline"> Chocolatería San Ginés </a>
              </div>
            </div>

            {/* Llama Inn Madrid */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Llama Inn Madrid</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Conde de Xiquena 2</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                The aim of the cuisine here is to bring Peruvian flavours to the Spanish capital in dishes that are mainly designed for sharing (scallop ceviche, grouper tiradito, yakimeshi of king prawns etc), alongside others they describe as the “fiesta final” (sautéed beef and duck jerky with rice).
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://llamainnmadrid.com/" className="text-rose-500 hover:underline"> Llama Inn Madrid </a>
              </div>
            </div>

            {/* Yatai Market */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Yatai Market</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>C. Doctor Cortezo 10</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Spain's first Asian market where you'll experience the best of Asian street food in a frenetic atmosphere that will thrill all your senses.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://yataimarkets.com/" className="text-rose-500 hover:underline"> Yatai Market </a>
              </div>
            </div>

            {/* Nunuka */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Nunuka</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>C. de la Libertad 13</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Nunuka is a little Georgian girl. Raised with her grandmother's love, she grew up enjoying the food and culture of her country. Now she's opening her own place in Madrid, a bistro where she shares three generations' passion for Georgian cuisine.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://nunukamadrid.com/" className="text-rose-500 hover:underline"> Nunuka </a>
              </div>
            </div>

            {/* Ten Con Ten */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Ten Con Ten</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Ayala Street 6</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                We enter an urban, international universe full of contrasts, quickly enveloped by the balance between music and hushed confidences. A unique setting where we receive a warm welcome from its friendly and sophisticated staff, who attend to every detail.
              </p>
              <div className="flex items-center gap-2 items-center justify-center">
              <a href= "https://restaurantetenconten.com/" className="text-rose-500 hover:underline"> Ten Con Ten </a>
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
            {/* Prado Museum */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Museo del Prado</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Paseo del Prado</span>
              </div>
              <p className="text-sm text-muted-foreground">
                One of the world's finest art museums, home to masterpieces by Velázquez, Goya, and El Greco. Plan to spend at least 2-3 hours here.
              </p>
            </div>

            {/* Royal Palace */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Royal Palace of Madrid</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle de Bailén</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The official residence of the Spanish Royal Family. Explore the opulent rooms and stunning gardens surrounding this baroque palace.
              </p>
            </div>

            {/* Retiro Park */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Retiro Park</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Plaza de la Independencia</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Madrid's green lung - perfect for a leisurely stroll, rowing on the lake, or visiting the stunning Crystal Palace. Great for relaxing!
              </p>
            </div>

            {/* Gran Vía */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Gran Vía Shopping</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <ShoppingBag className="h-4 w-4" />
                <span>Gran Vía Avenue</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Madrid's main shopping street with theaters, cinemas, and impressive early 20th-century architecture. Perfect for shopping and people-watching.
              </p>
            </div>

            {/* Plaza Mayor */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Plaza Mayor</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Plaza Mayor</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The heart of old Madrid. This historic square is surrounded by beautiful architecture and bustling cafés. Ideal for morning coffee or evening drinks.
              </p>
            </div>

            {/* Reina Sofía Museum */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border">
              <h4 className="font-serif text-xl mb-2">Reina Sofía Museum</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>Calle de Santa Isabel, 52</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Spain's national museum of 20th-century art, home to Picasso's Guernica and works by Dalí and Miró. A must for modern art lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-rose-50/80 backdrop-blur-sm rounded-lg border p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl mb-4 text-center">Quick Tips</h3>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Madrid's metro is efficient and affordable - get a travel card if staying several days</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Dinner starts late (9-10 PM) - embrace the Spanish schedule!</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Most museums offer free entry during certain hours - check their websites</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Try to learn a few Spanish phrases - locals appreciate the effort</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">•</span>
                <span>Book restaurants in advance, especially for dinner on weekends</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-6">Ready to Explore?</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-rose-400 hover:bg-rose-500">
              <Link href="/toledo">Discover Toledo</Link>
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
