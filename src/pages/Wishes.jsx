import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Wishes() {
  const [form, setForm] = useState({ name: '', relation: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [wishes, setWishes] = useState([])

  const fetchWishes = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/wishes`)
      const data = await res.json()
      setWishes(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchWishes()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.message.trim()) {
      setError('Please write a message.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/wishes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setForm({ name: '', relation: '', message: '' })
      await fetchWishes()
    } catch (e) {
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-emerald-950 text-emerald-50 min-h-screen pt-20">
      <section id="guestbook" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Digital Guestbook</h1>
            <p className="text-emerald-100/80 mt-2">Leave your heartfelt message for Krishnali. Your words mean the world.</p>

            <form onSubmit={submit} className="mt-6 space-y-4 bg-emerald-900/60 border border-emerald-800/50 p-6 rounded-2xl">
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Your name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Anonymous"
                  className="w-full rounded-lg bg-emerald-950 border border-emerald-800/60 px-3 py-2 text-emerald-50 placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[gold]"
                />
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Relation</label>
                <input
                  value={form.relation}
                  onChange={(e) => setForm({ ...form, relation: e.target.value })}
                  placeholder="Friend, cousin, classmate..."
                  className="w-full rounded-lg bg-emerald-950 border border-emerald-800/60 px-3 py-2 text-emerald-50 placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[gold]"
                />
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Your message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Write something lovely..."
                  className="w-full rounded-lg bg-emerald-950 border border-emerald-800/60 px-3 py-2 text-emerald-50 placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[gold]"
                />
              </div>
              {error && <p className="text-rose-300 text-sm">{error}</p>}
              <button
                disabled={loading}
                className="px-6 py-3 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send your wish'}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[gold] mb-3">Recent wishes</h2>
            <div className="space-y-3">
              {wishes.length === 0 && (
                <div className="text-emerald-100/60">No wishes yet—be the first to write one!</div>
              )}
              {wishes.map((w) => (
                <div key={w.id} className="bg-emerald-900/60 border border-emerald-800/50 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <strong className="text-emerald-50">{w.name || 'Anonymous'}</strong>
                    <span className="text-xs text-emerald-200/60">{new Date(w.created_at).toLocaleString()}</span>
                  </div>
                  {w.relation && <div className="text-xs text-emerald-200/70">{w.relation}</div>}
                  <p className="mt-2 text-emerald-100/90 leading-relaxed">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
