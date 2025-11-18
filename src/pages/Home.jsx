import Hero from '../components/Hero'
import Countdown from '../components/Countdown'

export default function Home() {
  return (
    <main className="bg-emerald-950 text-emerald-50 min-h-screen">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 -mt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-emerald-900/60 border border-emerald-800/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold">The celebration begins soon</h2>
            <p className="text-emerald-100/80 mt-2">We’re counting down to a brand new chapter. Join us in sending love and blessings.</p>
            <div className="mt-6">
              <Countdown />
            </div>
          </div>
          <div className="bg-emerald-900/60 border border-emerald-800/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Add your golden wish</h3>
            <p className="text-emerald-100/80 mt-2">Leave a heartfelt note to make her day extra special.</p>
            <a href="/wishes" className="inline-block mt-6 px-6 py-3 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition">Write a wish</a>
          </div>
        </div>
      </section>
    </main>
  )
}
