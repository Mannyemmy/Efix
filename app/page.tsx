"use client";

import { useState } from "react";

/* ─── Logo ──────────────────────────────────────────── */
function WrkmanLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="44" height="36" viewBox="0 0 44 36" fill="none">
        <path
          d="M2 4 L9 32 L16 14 L22 24 L28 14 L35 32 L42 4"
          stroke="url(#wg)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="wg" x1="2" y1="18" x2="42" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00CFFF" />
            <stop offset="1" stopColor="#0060FF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-[#1A2B4B]">E-Fix</span>
    </div>
  );
}

/* ─── Search Bar ─────────────────────────────────────── */
function SearchBar() {
  const [service, setService] = useState("");
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm pl-4 pr-1.5 py-1.5 gap-2 flex-1 max-w-105">
      <svg className="shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="text-gray-500 text-sm whitespace-nowrap">I need a &ndash;</span>
      <input
        type="text"
        placeholder="Enter a service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0"
      />
      <button className="bg-[#1B6EF5] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition shrink-0">
        Search
      </button>
    </div>
  );
}

/* ─── Hero Chevron Watermark ─────────────────────────── */
function ChevronWatermark() {
  const layers = [0, 40, 80, 120, 160];
  return (
    <svg
      className="absolute left-0 top-0 h-full pointer-events-none select-none"
      style={{ width: 300, opacity: 0.08 }}
      viewBox="0 0 300 700"
      preserveAspectRatio="xMinYMid meet"
      fill="none"
    >
      {layers.map((o, i) => (
        <polyline
          key={i}
          points={`${o + 20},20 ${o + 90},350 ${o + 20},680`}
          stroke="#0D509F"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

/* ─── Google Play Button ─────────────────────────────── */
function GooglePlayBtn() {
  return (
    <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl min-w-42.5 hover:bg-gray-800 transition">
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.32 11.32L3.18 23.76z" fill="#EA4335" />
        <path d="M20.25 13.27l-2.85 1.64-3.13-3.13 3.13-3.13 2.88 1.66a2 2 0 0 1 0 2.96z" fill="#FBBC04" />
        <path d="M3.18 23.76l11.09-11.08 3.13 3.13-11.53 6.64a2 2 0 0 1-2.69-2.69z" fill="#34A853" />
        <path d="M3.18.24A2 2 0 0 1 5.87 2.55l11.53 6.64-3.13 3.13L3.18.24z" fill="#4285F4" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[9px] font-light tracking-wide">GET IT ON</div>
        <div className="text-[15px] font-semibold">Google Play</div>
      </div>
    </button>
  );
}

/* ─── App Store Button ───────────────────────────────── */
function AppStoreBtn() {
  return (
    <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl min-w-42.5 hover:bg-gray-800 transition">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[9px] font-light tracking-wide">Download on the</div>
        <div className="text-[15px] font-semibold">App Store</div>
      </div>
    </button>
  );
}

/* ─── Phone Mockup – Map View ────────────────────────── */
function PhoneMap({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="relative bg-white rounded-[36px] border-[7px] border-gray-800 shadow-2xl overflow-hidden"
      style={{ width: 200 * scale, height: 400 * scale }}
    >
      {/* notch */}
      <div className="mx-auto mt-2 w-16 h-3 bg-gray-800 rounded-full" style={{ width: 64 * scale, height: 12 * scale }} />
      {/* header bar */}
      <div className="flex items-center px-3 py-1 gap-1" style={{ fontSize: 8 * scale }}>
        <svg width={8 * scale} height={8 * scale} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        <span className="flex-1 text-[#1B6EF5] font-bold ml-1" style={{ fontSize: 8 * scale }}>w</span>
        <svg width={10 * scale} height={10 * scale} viewBox="0 0 24 24" fill="#1B6EF5"><circle cx="12" cy="8" r="4" /><path d="M12 12c-5 0-8 2.5-8 4v2h16v-2c0-1.5-3-4-8-4z" /></svg>
      </div>
      {/* location bar */}
      <div className="flex items-center bg-gray-50 mx-2 rounded-full px-2 py-0.5 gap-1" style={{ fontSize: 7 * scale }}>
        <svg width={8 * scale} height={8 * scale} viewBox="0 0 24 24" fill="#EF4444"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
        <span className="text-gray-500 truncate" style={{ fontSize: 6 * scale }}>Service Area: Ayobo, Lagos →</span>
      </div>
      {/* map grid */}
      <div className="relative bg-[#E8F2F8] mx-1 mt-1 rounded-lg overflow-hidden" style={{ height: 180 * scale }}>
        {[0.15, 0.35, 0.55, 0.75, 0.9].map((p, i) => (
          <div key={i} className="absolute w-full border-t border-blue-200/50" style={{ top: `${p * 100}%` }} />
        ))}
        {[0.1, 0.3, 0.5, 0.7, 0.9].map((p, i) => (
          <div key={i} className="absolute h-full border-l border-blue-200/50" style={{ left: `${p * 100}%` }} />
        ))}
        {/* roads */}
        <div className="absolute bg-white/70 rounded" style={{ top: "35%", left: "10%", width: "80%", height: 4 * scale }} />
        <div className="absolute bg-white/70 rounded" style={{ top: "60%", left: "10%", width: "80%", height: 3 * scale }} />
        <div className="absolute bg-white/70 rounded" style={{ top: "15%", left: "45%", height: "70%", width: 3 * scale }} />
        {/* pin */}
        <div
          className="absolute bg-amber-400 rounded-full border-2 border-white shadow"
          style={{ width: 12 * scale, height: 12 * scale, top: "32%", left: "46%" }}
        />
      </div>
      {/* request card */}
      <div className="mx-1 mt-1 bg-white rounded-xl shadow-md border border-gray-100 px-2 py-1.5 flex items-start gap-1.5">
        <div className="shrink-0 rounded-full bg-blue-400 border border-white" style={{ width: 24 * scale, height: 24 * scale }} />
        <div className="flex-1 min-w-0">
          <p className="text-gray-700 font-semibold leading-tight" style={{ fontSize: 7 * scale }}>Temitade Ori</p>
          <p className="text-gray-400 leading-tight" style={{ fontSize: 6 * scale }}>Electrician</p>
          <p className="text-gray-500 leading-tight" style={{ fontSize: 6 * scale }}>Request pending · Waiting for provider to respond</p>
          <div className="flex gap-1 mt-1">
            <span className="bg-blue-500 text-white rounded px-1" style={{ fontSize: 6 * scale }}>Contact</span>
            <span className="bg-red-400 text-white rounded px-1" style={{ fontSize: 6 * scale }}>Call</span>
          </div>
        </div>
      </div>
      <div className="mx-1 mt-1">
        <p className="text-center text-gray-400" style={{ fontSize: 6 * scale }}>❓ How to get started?</p>
        <div className="bg-[#1B6EF5] text-white text-center rounded-lg mt-0.5" style={{ fontSize: 7 * scale, padding: `${3 * scale}px` }}>
          Select Services
        </div>
      </div>
    </div>
  );
}

/* ─── Phone Mockup – Welcome View ───────────────────── */
function PhoneWelcome({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="relative bg-white rounded-4xl border-[7px] border-gray-800 shadow-2xl overflow-hidden"
      style={{ width: 185 * scale, height: 370 * scale }}
    >
      <div className="mx-auto mt-2 w-14 h-3 bg-gray-800 rounded-full" style={{ width: 56 * scale, height: 10 * scale }} />
      <div className="flex flex-col items-center px-4 pt-3">
        {/* mini W logo */}
        <svg width={28 * scale} height={22 * scale} viewBox="0 0 44 36" fill="none">
          <path d="M2 4 L9 32 L16 14 L22 24 L28 14 L35 32 L42 4" stroke="url(#wg3)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="wg3" x1="2" y1="18" x2="42" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00CFFF" /><stop offset="1" stopColor="#0060FF" />
            </linearGradient>
          </defs>
        </svg>
        {/* illustration placeholder */}
        <div
          className="rounded-2xl bg-blue-50 flex items-center justify-center mt-2"
          style={{ width: 100 * scale, height: 90 * scale }}
        >
          <svg width={70 * scale} height={70 * scale} viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="28" fill="#DBEAFE" />
            <rect x="20" y="22" width="30" height="26" rx="3" fill="#93C5FD" />
            <rect x="24" y="28" width="22" height="3" rx="1" fill="#1D4ED8" />
            <rect x="24" y="34" width="16" height="3" rx="1" fill="#1D4ED8" />
            <circle cx="50" cy="20" r="8" fill="#1B6EF5" />
            <path d="M46 20l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-bold text-[#1A2B4B] text-center mt-2" style={{ fontSize: 10 * scale }}>Welcome to wrkman!</p>
        <p className="text-gray-400 text-center mt-1 leading-snug" style={{ fontSize: 7.5 * scale }}>
          Get your essential needs provided instantly or on a scheduled time.
        </p>
        {/* dots */}
        <div className="flex items-center gap-1 mt-3">
          <div className="bg-[#1B6EF5] rounded-full" style={{ width: 16 * scale, height: 5 * scale }} />
          <div className="bg-gray-200 rounded-full" style={{ width: 8 * scale, height: 5 * scale }} />
          <div className="bg-gray-200 rounded-full" style={{ width: 8 * scale, height: 5 * scale }} />
        </div>
        <div
          className="w-full bg-[#1B6EF5] text-white text-center rounded-lg mt-4 font-medium"
          style={{ fontSize: 8 * scale, padding: `${5 * scale}px 0` }}
        >
          Get started now →
        </div>
      </div>
    </div>
  );
}

/* ─── Stars ──────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= count ? "#F5B82E" : "#D1D5DB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Testimonial Card ───────────────────────────────── */
function TestimonialCard({
  name, stars, quote, avatarBg, active,
}: { name: string; stars: number; quote: string; avatarBg: string; active?: boolean }) {
  return (
    <div className={`relative bg-white rounded-2xl flex flex-col items-center text-center px-8 py-8 transition-all ${active ? "shadow-xl z-10 scale-105" : "shadow-md scale-95 opacity-80"}`}>
      {/* avatar circle */}
      <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-md ${avatarBg}`}>
        {name.charAt(0)}
      </div>
      <p className="text-[#1B6EF5] font-bold text-base mb-3">{name}</p>
      <Stars count={stars} />
      <p className="text-gray-500 text-sm leading-relaxed mt-4">&ldquo;{quote}&rdquo;</p>
      {/* light-blue drop shadow card behind */}
      {active && (
        <div className="absolute -bottom-6 left-4 right-4 h-16 bg-cyan-200/60 rounded-2xl -z-10" />
      )}
    </div>
  );
}

/* ─── Contact Section ────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="bg-gray-50 py-6 px-6">
      <div className="max-w-5xl mx-auto bg-[#1B3FBF] rounded-2xl px-12 py-14 relative overflow-hidden">
        {/* decorative concentric arcs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 380" fill="none" preserveAspectRatio="xMidYMid slice">
          {[60,120,180,240,300,360].map((r) => (
            <circle key={r} cx="160" cy="380" r={r} stroke="white" strokeWidth="1" opacity="0.08" />
          ))}
          {[60,120,180,240,300,360].map((r) => (
            <circle key={r + 1000} cx="740" cy="0" r={r} stroke="white" strokeWidth="1" opacity="0.06" />
          ))}
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
          {/* left: contact info */}
          <div className="md:w-72 shrink-0">
            <h2 className="text-white text-2xl font-bold mb-8">Reach out to us</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-white/90 text-sm">+234 706 661 5534</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-white/90 text-sm">info@efix.ng</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00CFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/90 text-sm">Edo Innovation Hub, off I.C.E road,<br />Benin City, Edo State</span>
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text" placeholder="Name" value={form.name} onChange={set("name")}
                className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email" placeholder="E-mail" value={form.email} onChange={set("email")}
                className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <textarea
              placeholder="Type your message" value={form.message} onChange={set("message")} rows={5}
              className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="flex justify-end">
              <button className="bg-[#00BFFF] hover:bg-cyan-400 transition text-white text-sm font-semibold px-8 py-3 rounded-lg shadow">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer Section ─────────────────────────────────── */
function FooterSection() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Get Help */}
          <div className="min-w-32">
            <p className="text-[#1B6EF5] font-bold text-sm mb-4">Get Help</p>
            <ul className="space-y-3 text-[#1A2B4B] text-sm">
              {["See all services", "Contact support", "Log In/ Register"].map((l) => (
                <li key={l}><a href="#" className="hover:text-blue-600 transition">{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div className="min-w-40">
            <p className="text-[#1B6EF5] font-bold text-sm mb-4">Company</p>
            <ul className="space-y-3 text-[#1A2B4B] text-sm">
              {["About Us", "Privacy policy", "Terms & Conditions", "FAQs"].map((l) => (
                <li key={l}><a href="#" className="hover:text-blue-600 transition">{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Logo — pushed to the right */}
          <div className="md:ml-auto flex items-start">
            <div className="flex items-center gap-2">
              <svg width="44" height="36" viewBox="0 0 44 36" fill="none">
                <path d="M2 4 L9 32 L16 14 L22 24 L28 14 L35 32 L42 4" stroke="url(#wgf)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="wgf" x1="2" y1="18" x2="42" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00CFFF" /><stop offset="1" stopColor="#0060FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-[#1A2B4B]">E-Fix</span>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
          <p className="text-[#1B6EF5] text-sm">Copyright &copy; E-Fix 2026</p>
          {/* social icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1B3FBF] flex items-center justify-center hover:bg-blue-700 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1B3FBF] flex items-center justify-center hover:bg-blue-700 transition">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#1B3FBF] flex items-center justify-center hover:bg-blue-700 transition">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="white" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#1B3FBF] flex items-center justify-center hover:bg-blue-700 transition">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── FAQ Section ────────────────────────────────────── */
const FAQS = [
  ["How to request a provider?",              "Open the app, search for the service you need, and select a provider near you. Submit your request and wait for the provider to accept."],
  ["How to register as a provider?",          "Download the E-Fix app, sign up as a provider, fill in your profile details, upload required documents, and submit for verification."],
  ["How to manage jobs/projects (users)?",    "Go to the 'My Jobs' tab to track all your active and past requests, view provider details, and manage ongoing projects."],
  ["How to manage jobs/projects (providers)?","In your provider dashboard, navigate to 'My Projects' to see pending, active, and completed jobs, and update their status."],
  ["Is my location visible to providers on the app?", "Only your approximate area is shared with providers so they can determine if you are within their service range. Your exact address is only shared once a job is accepted."],
  ["Are the providers verified?",             "Yes. All providers go through an identity and document verification process before being listed on the platform."],
  ["Is it safe to use?",                      "Absolutely. We vet all providers and you can view ratings and reviews before making a request. Your payments are also secured."],
  ["Is it free?",                             "Downloading and searching on E-Fix is completely free. Service fees are agreed upon directly between you and the provider."],
  ["Are there any consultation fees?",        "There are no consultation fees charged by E-Fix. Any fees are strictly between the user and their chosen service provider."],
  ["What type of services are rendered",      "E-Fix covers a wide range of home and domestic services including plumbing, electrical work, cleaning, carpentry, makeup, and many more."],
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
      >
        <span className="text-[#0D1B3E] text-sm font-medium">{question}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="#1B6EF5"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="#1B6EF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}

function FaqSection() {
  const left  = FAQS.filter((_, i) => i % 2 === 0);
  const right = FAQS.filter((_, i) => i % 2 !== 0);
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0D1B3E] mb-10">
          We have answers to your{" "}
          <span className="text-[#F5B82E]">Questions!</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {left.map(([q, a]) => <FaqItem key={q} question={q} answer={a} />)}
          </div>
          <div className="flex flex-col gap-4">
            {right.map(([q, a]) => <FaqItem key={q} question={q} answer={a} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ───────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Temiloluwa",
    stars: 5,
    quote: "I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend",
    avatarBg: "bg-slate-400",
  },
  {
    name: "Tony",
    stars: 4,
    quote: "E-Fix has been a life saver. I was able to get a plumber when my house flooded. Thank God it we were able to stop the leak on time using the E-Fix platform to get a plumber.",
    avatarBg: "bg-stone-500",
  },
  {
    name: "Temilade",
    stars: 5,
    quote: "Found a great makeup artist for my owambe party. Great APP. No stress!",
    avatarBg: "bg-rose-400",
  },
  {
    name: "Chidi",
    stars: 5,
    quote: "Quick and reliable service. I found an electrician within minutes. Highly recommended!",
    avatarBg: "bg-emerald-500",
  },
  {
    name: "Aisha",
    stars: 4,
    quote: "The app is so easy to use. Booked a cleaner for my apartment and she was amazing!",
    avatarBg: "bg-purple-400",
  },
];

function TestimonialsSection() {
  const [current, setCurrent] = useState(1);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const getIndex = (offset: number) =>
    (current + offset + TESTIMONIALS.length) % TESTIMONIALS.length;

  return (
    <section className="bg-gray-50 py-20 px-6 overflow-hidden">
      {/* pill */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#D6D8F7] text-[#3B4CC0] text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full">
          Testimonials
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold text-[#0D1B3E] mb-14">
        What the people are saying about E-Fix
      </h2>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-6">
        {/* left arrow */}
        <button
          onClick={prev}
          className="shrink-0 w-11 h-11 rounded-full bg-[#1B6EF5] text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition z-20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* three cards */}
        <div className="flex items-center justify-center gap-5 flex-1">
          {[-1, 0, 1].map((offset) => (
            <div key={offset} className="flex-1 max-w-75">
              <TestimonialCard
                {...TESTIMONIALS[getIndex(offset)]}
                active={offset === 0}
              />
            </div>
          ))}
        </div>

        {/* right arrow */}
        <button
          onClick={next}
          className="shrink-0 w-11 h-11 rounded-full bg-[#1B6EF5] text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition z-20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ─── Main Page ──────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav className="flex items-center gap-6 px-10 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <WrkmanLogo />
        <SearchBar />
        <div className="flex items-center gap-8 ml-auto">
          {["About Us", "Blog", "FAQs", "Contact Us"].map((link) => (
            <a key={link} href="#" className="text-[#1A2B4B] text-sm font-medium hover:text-blue-600 transition whitespace-nowrap">
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        {/* left chevron watermark */}
        <ChevronWatermark />

        {/* top-right decoration circles */}
        <div className="absolute top-10 right-14 pointer-events-none">
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 opacity-60" />
          <div className="w-14 h-14 rounded-full bg-[#DDE3FF] opacity-60 mt-1 -ml-4" />
          <div className="w-9 h-9 rounded-full bg-[#C5CAFF] opacity-50 mt-2 ml-5" />
        </div>

        {/* hero text */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10">
          <h1 className="text-[52px] font-extrabold text-[#0D1B3E] leading-tight">
            Need Help? Get Help!
          </h1>
          <h2 className="text-[52px] font-extrabold leading-tight mt-1">
            <span className="text-[#0D1B3E]">Find Service </span>
            <span className="text-[#F5B82E]">Providers</span>
            <span className="text-[#0D1B3E]"> around you!</span>
          </h2>
          <p className="text-[#4E80B5] text-base leading-relaxed max-w-lg mx-auto mt-6">
            Find home service providers and/or become a provider to provide services to clients in need of your services. Download the wrkman app to get started!
          </p>
          <div className="flex justify-center gap-5 mt-8">
            <GooglePlayBtn />
            <AppStoreBtn />
          </div>
        </div>

        {/* phones – overflow into next section */}
        <div className="relative z-10 flex justify-center items-end gap-6 -mb-24 px-6">
          <PhoneMap />
          <div className="mb-12">
            <PhoneWelcome />
          </div>
        </div>
      </section>

      {/* ── APP SHOWCASE ───────────────────────────────── */}
      <section className="relative flex overflow-hidden min-h-155">

        {/* left: white, decorations + phones */}
        <div className="flex-1 bg-white relative flex items-end justify-center pt-28 pb-10 overflow-hidden">
          {/* small circles cluster */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
            <div className="w-6 h-6 rounded-full border-2 border-blue-200 opacity-50" />
            <div className="w-5 h-5 rounded-full border-2 border-blue-200 opacity-40 ml-3" />
            <div className="w-8 h-8 rounded-full border-2 border-blue-200 opacity-30 -ml-1" />
          </div>
          {/* outline rectangle frame */}
          <div className="absolute left-28 top-1/2 -translate-y-[45%] w-52 h-80 border border-blue-100/60 rounded pointer-events-none" />
          {/* large teal semi-circle behind phones */}
          <div
            className="absolute rounded-full bg-[#00B5C8] pointer-events-none"
            style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%, -30%)" }}
          />
          {/* phones */}
          <div className="relative z-10 flex items-end gap-4">
            <PhoneMap scale={0.92} />
            <div className="mb-10">
              <PhoneWelcome scale={0.88} />
            </div>
          </div>
        </div>

        {/* right: teal background with worker illustration */}
        <div className="flex-1 bg-[#00B5C8] relative overflow-hidden flex items-center justify-center">
          {/* large circle accent */}
          <div
            className="absolute rounded-full bg-[#009BB0]"
            style={{ width: 420, height: 420, top: "50%", left: "-20%", transform: "translateY(-50%)" }}
          />
          {/* worker silhouette */}
          <div className="relative z-10 flex flex-col items-center">
            <svg width="260" height="360" viewBox="0 0 260 420" fill="none" className="opacity-90">
              {/* hard hat */}
              <ellipse cx="130" cy="70" rx="60" ry="22" fill="white" opacity="0.9" />
              <rect x="70" y="70" width="120" height="14" rx="3" fill="white" opacity="0.9" />
              <rect x="55" y="80" width="150" height="10" rx="5" fill="white" opacity="0.7" />
              {/* head */}
              <circle cx="130" cy="118" r="34" fill="white" opacity="0.75" />
              {/* body / shirt */}
              <rect x="86" y="155" width="88" height="110" rx="10" fill="white" opacity="0.65" />
              {/* arms */}
              <rect x="50" y="158" width="36" height="80" rx="10" fill="white" opacity="0.55" />
              <rect x="174" y="158" width="36" height="80" rx="10" fill="white" opacity="0.55" />
              {/* legs */}
              <rect x="92" y="260" width="30" height="70" rx="8" fill="white" opacity="0.65" />
              <rect x="138" y="260" width="30" height="70" rx="8" fill="white" opacity="0.65" />
              {/* tool/wrench hint */}
              <circle cx="197" cy="200" r="10" fill="white" opacity="0.4" />
            </svg>
          </div>
          {/* decorative circles top-right */}
          <div className="absolute top-8 right-10 pointer-events-none">
            <div className="w-16 h-16 rounded-full border border-white/30" />
            <div className="w-10 h-10 rounded-full border border-white/20 mt-2 ml-6" />
          </div>
        </div>
      </section>

      {/* ── FEATURES CARDS ───────────────────────────── */}
      <section className="relative bg-white py-20 px-6 overflow-hidden">
        {/* watermark arcs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle cx="1200" cy="260" r="320" stroke="#E5E9F5" strokeWidth="1.5" fill="none" />
          <circle cx="1200" cy="260" r="240" stroke="#E5E9F5" strokeWidth="1.5" fill="none" />
          <circle cx="1200" cy="260" r="160" stroke="#E5E9F5" strokeWidth="1.5" fill="none" />
          <circle cx="260" cy="100" r="200" stroke="#E5E9F5" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 – Find help */}
          <div className="bg-white border border-cyan-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="relative w-44 h-36 mb-6 flex items-end justify-center">
              {/* teal circle */}
              <div className="absolute right-0 bottom-0 w-28 h-28 rounded-full bg-[#00C9D4] opacity-80" />
              {/* dark blue circle with ladder person */}
              <div className="absolute left-0 bottom-0 w-24 h-24 rounded-full bg-[#1B3FBF] flex items-center justify-center z-10">
                <svg width="52" height="62" viewBox="0 0 52 62" fill="none">
                  {/* ladder */}
                  <rect x="8" y="10" width="3" height="44" rx="1.5" fill="white" opacity="0.8" />
                  <rect x="22" y="10" width="3" height="44" rx="1.5" fill="white" opacity="0.8" />
                  <rect x="8" y="20" width="17" height="2.5" rx="1" fill="white" opacity="0.7" />
                  <rect x="8" y="30" width="17" height="2.5" rx="1" fill="white" opacity="0.7" />
                  <rect x="8" y="40" width="17" height="2.5" rx="1" fill="white" opacity="0.7" />
                  {/* person */}
                  <circle cx="36" cy="14" r="5" fill="white" />
                  <rect x="32" y="20" width="8" height="12" rx="3" fill="white" opacity="0.9" />
                  <path d="M30 32 L36 28 L42 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  {/* hard hat */}
                  <ellipse cx="36" cy="11" rx="6" ry="3" fill="#F5B82E" />
                </svg>
              </div>
              {/* small grey document cards */}
              <div className="absolute top-2 right-2 w-12 h-14 bg-gray-200 rounded-lg opacity-60" />
              <div className="absolute top-6 right-6 w-10 h-12 bg-gray-300 rounded-lg opacity-40" />
            </div>
            <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">Find help</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Find professionals for your domestic needs quickly, and without hassles
            </p>
          </div>

          {/* Card 2 – Find customers */}
          <div className="bg-white border border-cyan-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="relative w-44 h-36 mb-6 flex items-center justify-center">
              {/* small user cards top-right */}
              <div className="absolute top-0 right-2 flex flex-col gap-2">
                <div className="w-10 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9CA3AF"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
                <div className="w-10 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9CA3AF"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
              </div>
              {/* small user card bottom-left */}
              <div className="absolute bottom-2 left-2 w-10 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#9CA3AF"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              </div>
              {/* main worker icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#1B6EF5] flex items-center justify-center shadow-md z-10">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="14" r="8" fill="white" />
                  <ellipse cx="25" cy="14" rx="9" ry="4" fill="#F5B82E" transform="translate(0,-8)" />
                  {/* hard hat */}
                  <ellipse cx="25" cy="8" rx="10" ry="4" fill="#F5B82E" />
                  <rect x="15" y="8" width="20" height="3" rx="1.5" fill="#F5B82E" />
                  {/* body */}
                  <rect x="17" y="24" width="16" height="14" rx="4" fill="white" opacity="0.9" />
                  {/* wrench */}
                  <path d="M33 20 Q38 15 40 20 Q38 25 33 20z" fill="white" opacity="0.85" />
                  <rect x="31" y="19" width="10" height="3" rx="1.5" fill="white" opacity="0.85" transform="rotate(-35 31 19)" />
                </svg>
              </div>
              {/* dot */}
              <div className="absolute bottom-4 right-16 w-2.5 h-2.5 rounded-full bg-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">Find customers</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Have a skill? Provide services and expand customer base
            </p>
          </div>

          {/* Card 3 – Set your schedule */}
          <div className="bg-white border border-cyan-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="relative w-44 h-36 mb-6 flex items-center justify-center">
              {/* back document */}
              <div className="absolute top-0 left-6 w-24 h-28 bg-gray-100 rounded-xl border border-gray-200">
                <div className="mt-3 mx-3 space-y-1.5">
                  {["w-full","w-4/5","w-full","w-3/4","w-full","w-4/5"].map((w,i)=>(
                    <div key={i} className={`h-1.5 bg-gray-300 rounded ${w}`} />
                  ))}
                </div>
              </div>
              {/* front dark doc with avatar */}
              <div className="absolute top-2 right-4 w-20 h-24 bg-[#1B3FBF] rounded-xl flex flex-col items-center pt-3 shadow-md">
                <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center mb-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93A10 10 0 0 1 21 12M3 12a9 9 0 0 1 9-9" />
                </svg>
              </div>
              {/* clock badge */}
              <div className="absolute bottom-0 left-2 w-14 h-10 bg-gray-200 rounded-xl flex items-center justify-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-gray-400 rounded" />
                  <div className="w-6 h-1 bg-gray-300 rounded" />
                </div>
              </div>
              {/* small floating doc */}
              <div className="absolute bottom-2 right-2 w-14 h-10 bg-[#5B8AF5] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">Set your schedule</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get your essential needs provided immediately or on a scheduled date
            </p>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* full-bleed blue background with worker photo overlay */}
        <div className="absolute inset-0 bg-[#2B3FCC]" />
        {/* subtle worker silhouette overlay */}
        <div className="absolute inset-0 opacity-20 bg-linear-to-r from-transparent via-blue-900 to-transparent pointer-events-none" />

        {/* "How It Works" pill */}
        <div className="relative z-10 pt-6 pl-8">
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow">
            How It Works
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-10 space-y-16">

          {/* FOR USERS */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <h2 className="text-white text-3xl font-bold md:w-48 shrink-0 pt-6">For Users</h2>
            <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                {/* Step 1 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8a3 3 0 0 1 3 3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Search for any domestic service, and we&apos;ll find registered providers closest to you.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#00BFFF">
                      <circle cx="10" cy="7" r="4" />
                      <path d="M2 21c0-4 3.6-7 8-7" />
                      <circle cx="18" cy="14" r="3" fill="#00BFFF" />
                      <path d="M16 21h4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
                      <path d="M18 19v4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    You pick one of the listed providers, and after they accept your service request, you can contact them to discuss further.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 9h18" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Your assigned service provider arrives at your location, and gets your job done!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOR PROVIDERS */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <h2 className="text-white text-3xl font-bold md:w-48 shrink-0 pt-6">For Providers</h2>
            <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                {/* Step 1 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="16" strokeLinecap="round" />
                      <line x1="10" y1="14" x2="14" y2="14" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Register on E-Fix as a provider, and submit all required information and documents
                  </p>
                </div>
                {/* Step 2 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#00BFFF">
                      <circle cx="10" cy="7" r="4" />
                      <path d="M2 21c0-4 3.6-7 8-7" />
                      <circle cx="18" cy="14" r="3" fill="#00BFFF" />
                      <path d="M16 21h4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
                      <path d="M18 19v4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    E-Fix would list you as a provider for the service you offer and users around you can request your service
                  </p>
                </div>
                {/* Step 3 */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                      <path d="M9 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Accept users&apos; requests and proceed with completing their jobs and getting paid!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ ────────────────────────────────────────── */}
      <FaqSection />

      {/* ── CONTACT ────────────────────────────────────── */}
      <ContactSection />

      {/* ── FOOTER ─────────────────────────────────────── */}
      <FooterSection />

      {/* ── CHAT WIDGET ────────────────────────────────── */}
      <button
        aria-label="Open chat"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-500 shadow-xl flex items-center justify-center text-white hover:bg-blue-600 transition z-50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </button>

    </div>
  );
}
