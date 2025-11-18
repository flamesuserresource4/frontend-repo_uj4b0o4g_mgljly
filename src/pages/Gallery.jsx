export default function Gallery() {
  const sections = [
    {
      title: 'Childhood',
      images: [
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503455637927-730bce8583f2?q=80&w=1200&auto=format&fit=crop',
      ],
    },
    {
      title: 'Teen',
      images: [
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
      ],
    },
    {
      title: 'Recent',
      images: [
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop',
      ],
    },
  ]

  return (
    <main className="bg-emerald-950 text-emerald-50 min-h-screen pt-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Gallery</h1>
        <p className="text-emerald-100/80 mt-2">Moments that shimmer in gold—past to present.</p>

        <div className="mt-8 space-y-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="text-xl font-semibold mb-4 text-[gold]">{sec.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {sec.images.map((src, idx) => (
                  <img
                    alt={`${sec.title} ${idx + 1}`}
                    key={src}
                    src={src}
                    className="w-full h-40 md:h-56 object-cover rounded-xl border border-emerald-800/50 shadow"
                  />)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
