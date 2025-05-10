import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RSVPPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-xl">
            E & J
          </Link>
          <div className="flex gap-6 md:gap-10 items-center">
            <Link href="/" className="text-sm font-medium hover:text-rose-400">
              Home
            </Link>
            <Link href="/rsvp" className="text-sm font-medium text-rose-400">
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

      {/* RSVP Google Form Redirect */}
      <section className="flex-1 py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-center font-serif text-3xl md:text-4xl mx-auto">RSVP</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-rose-300"></div>

          <div className="mt-12 text-center">
            <div className="relative mx-auto mb-8 h-80 w-80">
              <Image
                src="/couple-engagement-ring.png"
                alt="Emma and Joel engagement photo"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-serif text-2xl mb-4">Please RSVP by November 30, 2025</h2>

            <p className="text-muted-foreground mb-6">
              We're excited to celebrate our special day with you! Please click the button below to fill out our RSVP
              form.
            </p>

            <p className="text-muted-foreground mb-8">
              If you have any questions or need assistance, please contact us at{" "}
              <a href="mailto:weddingjoelandemma@gmail.com" className="text-rose-400 hover:underline">
                weddingjoelandemma@gmail.com
              </a>
            </p>

            <Button asChild className="bg-rose-400 hover:bg-rose-500 px-8 py-6 text-lg" size="lg">
              <a
                href="https://docs.google.com/forms/d/1Cure6rShnORLOClTK0qmzJZYa_NBTTJEYUHvRO_qWvI/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Complete RSVP Form <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">The form will open in a new tab</p>
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-xl mb-4">Important Details</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Please RSVP for each guest in your party</li>
              <li>• Let us know of any dietary restrictions</li>
              <li>• Indicate if you'll be attending the welcome dinner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl">Emma & Joel</h2>
          <p className="mt-4">June 22, 2026</p>
          <div className="mt-8 flex justify-center gap-8">
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
          <p className="mt-8 text-sm">
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
