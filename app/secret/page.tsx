import Link from "next/link"
import { Camera, Users, PartyPopper, Globe, Cake, Building, Sparkles, Music, Wine, Check } from "lucide-react"

const scavengerItems = [
  {
    id: 1,
    title: "The Best Dressed",
    description: "Find the most stylish guest and snap a photo together",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "A Group of People",
    description: "Gather a group and capture the moment",
    icon: Users,
  },
  {
    id: 3,
    title: "Someone in the Bridal Party",
    description: "Get a selfie with one of Emma's crew",
    icon: PartyPopper,
  },
  {
    id: 4,
    title: "Someone in the Groom's Party",
    description: "Track down one of Joel's people for a photo",
    icon: PartyPopper,
  },
  {
    id: 5,
    title: "Someone from the Opposite Hemisphere",
    description: "Find a guest from the other side of the world",
    icon: Globe,
  },
  {
    id: 6,
    title: "Same Birth Month Buddy",
    description: "Discover someone who shares your birth month",
    icon: Cake,
  },
  {
    id: 7,
    title: "Favorite Part of the Venue",
    description: "Capture your favorite spot at the Cigarral",
    icon: Building,
  },
  {
    id: 8,
    title: "Something or Someone Fun",
    description: "Get creative - find something that makes you smile",
    icon: PartyPopper,
  },
  {
    id: 9,
    title: "The Best Dancer",
    description: "Spot the guest with the best moves on the dance floor",
    icon: Music,
  },
  {
    id: 10,
    title: "Table Friends",
    description: "Snap a photo with your tablemates",
    icon: Users,
  },
  {
    id: 11,
    title: "Someone Taking a Shot",
    description: "Catch someone in the act of celebrating",
    icon: Wine,
  },
]

export default function SecretPage() {
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
            <Link href="/info" className="text-sm font-medium hover:text-rose-400">
              Info
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-rose-100">
              <Camera className="h-8 w-8 md:h-10 md:w-10 text-rose-400" />
            </div>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mx-auto">Scavenger Hunt</h1>
          <div className="mx-auto mt-3 md:mt-4 h-0.5 w-16 bg-rose-300"></div>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-muted-foreground text-sm md:text-base">
            Ready to make this celebration even more memorable? Grab your phone and complete as many of these photo challenges as you can throughout the evening.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-sm md:text-base italic">
            Share your photos with #EmmaAndJoel2026
          </p>
        </div>
      </section>

      {/* Scavenger Hunt Items */}
      <section className="flex-1 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-xl md:text-2xl mb-8 md:mb-10">Take a Picture With...</h2>
          
          <div className="mx-auto max-w-4xl grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scavengerItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative rounded-xl border border-rose-100 bg-white/80 p-5 md:p-6 transition-all hover:border-rose-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                      <Icon className="h-5 w-5 text-rose-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-base md:text-lg">{item.title}</h3>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-rose-200 group-hover:border-rose-400 transition-colors">
                          <Check className="h-3 w-3 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bonus Section */}
          <div className="mx-auto mt-10 md:mt-12 max-w-2xl text-center">
            <div className="rounded-xl border-2 border-dashed border-rose-200 bg-rose-50/50 p-6 md:p-8">
              <h3 className="font-serif text-lg md:text-xl">Bonus Challenge</h3>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Complete all 11 challenges and show Emma & Joel for a special surprise!
              </p>
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
            <Link href="/info" className="hover:text-rose-400">
              Info
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
