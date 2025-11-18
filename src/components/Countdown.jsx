import { useEffect, useMemo, useState } from 'react'

function getTimeRemaining(target) {
  const total = new Date(target).getTime() - new Date().getTime()
  const clamp = (n) => Math.max(0, n)
  return {
    total,
    days: clamp(Math.floor(total / (1000 * 60 * 60 * 24))),
    hours: clamp(Math.floor((total / (1000 * 60 * 60)) % 24)),
    minutes: clamp(Math.floor((total / 1000 / 60) % 60)),
    seconds: clamp(Math.floor((total / 1000) % 60)),
  }
}

export default function Countdown({ target = '2025-11-19T00:00:00' }) {
  const [time, setTime] = useState(getTimeRemaining(target))

  useEffect(() => {
    const i = setInterval(() => setTime(getTimeRemaining(target)), 1000)
    return () => clearInterval(i)
  }, [target])

  const items = useMemo(
    () => [
      { label: 'Days', value: time.days },
      { label: 'Hours', value: time.hours },
      { label: 'Minutes', value: time.minutes },
      { label: 'Seconds', value: time.seconds },
    ],
    [time]
  )

  return (
    <div className="w-full">
      <p className="text-emerald-50/80 mb-3">Countdown to midnight • November 19, 2025</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {items.map((it) => (
          <div key={it.label} className="rounded-xl bg-emerald-900/60 border border-emerald-700/40 p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-4xl font-extrabold text-[gold] tabular-nums">{it.value}</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wide text-emerald-50/80">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
