import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-950/60 to-emerald-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-cream drop-shadow-lg">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-50">
            Happy 20th Birthday, <span className="text-[gold]">Krishnali Zade</span>!
          </h1>
          <p className="mt-4 max-w-xl text-emerald-50/90">
            Wishing you joy, courage, and golden moments as your new decade begins.
          </p>
          <a
            href="#guestbook"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition"
          >
            Send your wish
          </a>
        </div>
      </div>
    </section>
  )
}
