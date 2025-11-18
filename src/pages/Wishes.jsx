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
    if (e) e.preventDefault()
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

  const prefillWish = () => {
    const preset = `Happy 20th birthday, Krishnali!\n\nMay this new decade be filled with courage, laughter, travel, learning, and all the little golden moments that make your heart glow. I’m so proud of the person you are and excited for everything ahead. Wishing you endless joy, good health, and opportunities that shine as bright as you do.\n\nWith love,\n— your well‑wisher`
    setForm((f) => ({ ...f, relation: f.relation || 'Friend', message: preset }))
  }

  const prefillAndSend = async () => {
    prefillWish()
    // wait a tick so state applies before submit
    setTimeout(() => submit(), 0)
  }

  return (
    <main className="bg-emerald-950 text-emerald-50 min-h-screen pt-20">
      <section id="guestbook" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Digital Guestbook</h1>
            <p className="text-emerald-100/80 mt-2">Leave your heartfelt message for Krishnali. Your words mean the world.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={prefillWish}
                className="px-5 py-2.5 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition"
              >
                Prefill a heartfelt wish for me
              </button>
              <button
                onClick={prefillAndSend}
                disabled={loading}
                className="px-5 py-2.5 rounded-full border border-[gold]/70 text-[gold] hover:bg-[gold]/10 transition disabled:opacity-60"
              >
                One-click send
              </button>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4 bg-emerald-900/60 border border-emerald-800/50 p-6 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Your name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name (optional)"
                    className="w-full rounded-lg bg-emerald-950 border border-emerald-800/60 px-3 py-2 text-emerald-50 placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[gold]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Relation</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {['Friend','Family','Classmate','Colleague'].map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setForm({ ...form, relation: r })}
                        className={`px-3 py-1.5 rounded-full text-sm border transition ${form.relation===r ? 'bg-[gold] text-emerald-900 border-[gold]' : 'border-emerald-800/60 text-emerald-200/80 hover:bg-emerald-900/60'}`}
                      >{r}</button>
                    ))}
                  </div>
                  <input
                    value={form.relation}
                    onChange={(e) => setForm({ ...form, relation: e.target.value })}
                    placeholder="Friend, cousin, classmate..."
                    className="w-full rounded-lg bg-emerald-950 border border-emerald-800/60 px-3 py-2 text-emerald-50 placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[gold]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Your message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  placeholder="Write something lovely... or click Prefill above to auto-write a beautiful wish."
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
                  <p className="mt-2 text-emerald-100/90 leading-relaxed whitespace-pre-line">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
