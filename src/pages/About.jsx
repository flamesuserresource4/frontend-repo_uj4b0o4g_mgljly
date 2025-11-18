export default function About() {
  return (
    <main className="bg-emerald-950 text-emerald-50 min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Krishnali</h1>
        <p className="text-emerald-100/80 mt-2">A tribute to her spirit, curiosity, and kindness.</p>

        <div className="mt-8 space-y-6">
          <div className="bg-emerald-900/60 border border-emerald-800/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[gold]">Interests</h2>
            <ul className="list-disc list-inside mt-3 text-emerald-100/90 leading-relaxed">
              <li>Creative storytelling and journaling</li>
              <li>Music that lifts the soul—playlists for every mood</li>
              <li>Photography and capturing candid moments</li>
              <li>Exploring new cafes and discovering cozy corners</li>
              <li>Giving back—volunteering and community initiatives</li>
            </ul>
          </div>

          <div className="bg-emerald-900/60 border border-emerald-800/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[gold]">Achievements</h2>
            <ul className="list-disc list-inside mt-3 text-emerald-100/90 leading-relaxed">
              <li>Academic excellence with top scores in her field</li>
              <li>Led college cultural committee, bringing people together</li>
              <li>Organized charity drives inspiring peers to participate</li>
              <li>Awarded for leadership and empathy in group projects</li>
            </ul>
          </div>

          <div className="bg-emerald-900/60 border border-emerald-800/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-[gold]">A Personal Tribute</h2>
            <p className="mt-3 text-emerald-100/90 leading-relaxed">
              As she steps into twenty, may her days be lined with courage and her nights with calm. May she always
              find reasons to celebrate the little things and continue to light up rooms with her warmth. Here's to
              new beginnings, golden milestones, and memories made with the people she loves most.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
