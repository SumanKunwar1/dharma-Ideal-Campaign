import { Heart, Target, Eye, Users, Globe, Award, BookOpen, Star, ArrowRight, CheckCircle2 } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

// ─── SVG Decorations ──────────────────────────────────────────────────────────
const Wheel = ({ size = 120, opacity = 0.07 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ opacity }}>
    <circle cx="60" cy="60" r="56" stroke="#F4C430" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="10" stroke="#F4C430" strokeWidth="2.5" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * 45 * Math.PI) / 180
      return (
        <line
          key={i}
          x1={60 + 10 * Math.cos(a)} y1={60 + 10 * Math.sin(a)}
          x2={60 + 54 * Math.cos(a)} y2={60 + 54 * Math.sin(a)}
          stroke="#F4C430" strokeWidth="1.2"
        />
      )
    })}
    <circle cx="60" cy="60" r="33" stroke="#F4C430" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
)

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#F4C430]/12 text-[#9A6700] border border-[#F4C430]/30">
    {children}
  </span>
)

const SectionTitle = ({ pre, main, gold, sub }: { pre?: string; main: string; gold?: string; sub?: string }) => (
  <div className="text-center mb-14">
    {pre && <Tag>{pre}</Tag>}
    <h2 className="font-serif mt-4 text-4xl md:text-5xl font-bold text-[#2B1A00] leading-tight">
      {main}{" "}
      {gold && (
        <span className="bg-gradient-to-r from-[#C8860A] via-[#F4C430] to-[#C8860A] bg-clip-text text-transparent">
          {gold}
        </span>
      )}
    </h2>
    {sub && <p className="mt-4 text-[#7A5200]/80 text-lg max-w-2xl mx-auto leading-relaxed">{sub}</p>}
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#FFFBF0] text-[#2B1A00] overflow-x-hidden">
      <PremiumHeader />

      {/* ══════════════════════════════════════════════════════════
          HERO — cinematic full-bleed with layered depth
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776521016/Dharma_Ideal_about_US_gipcmz.jpg"
            alt="Golden Buddha statue at sunrise"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A00]/92 via-[#1A0A00]/70 to-[#F4C430]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF0] via-transparent to-[#1A0A00]/20" />
        </div>
        <div className="absolute top-16 right-12 hidden lg:block">
          <Wheel size={280} opacity={0.12} />
        </div>
        <div className="absolute bottom-24 right-56 hidden xl:block">
          <Wheel size={100} opacity={0.08} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/18 border border-[#F4C430]/35 text-[#F4C430] text-sm font-semibold tracking-wider uppercase mb-8">
              <span>☸</span> Dharma Ideal Campaign
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-bold leading-[1.05] mb-8 text-white">
              Walking the{" "}
              <span className="block bg-gradient-to-r from-[#F4C430] via-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                Path of Buddha
              </span>
              <span className="block text-white/85 text-4xl md:text-5xl mt-2 font-light italic">
                — for all beings
              </span>
            </h1>
            <p className="text-white/72 text-xl leading-relaxed mb-10 max-w-xl">
              A global movement uniting peace lovers, Dharma followers, and ideal personalities to foster
              happiness, enlightenment, and enduring world peace through authentic Buddhist teachings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] text-[#1A0A00] font-bold hover:shadow-[0_0_30px_rgba(244,196,48,0.5)] border-0 px-8 py-6 text-base rounded-xl">
                <Heart className="w-5 h-5 mr-2" /> Support the Campaign
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-xl backdrop-blur-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="mt-14 grid grid-cols-4 gap-6 border-t border-white/10 pt-10">
              {[
                { n: "20+", l: "Countries" },
                { n: "15+", l: "Years" },
                { n: "400+", l: "Members" },
                { n: "721K+", l: "Lives" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="font-serif text-3xl font-bold text-[#F4C430]">{n}</div>
                  <div className="text-white/50 text-xs font-medium uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-end pb-8">
            <div className="max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              <div className="text-5xl text-[#F4C430] font-serif mb-4 leading-none">"</div>
              <p className="font-serif text-white text-xl italic leading-relaxed mb-6">
                Compassion is the essence of all teachings. When wisdom meets kindness, the world transforms.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F4C430] to-[#FF8C00] flex items-center justify-center text-lg">☸</div>
                <div>
                  <div className="text-white font-semibold text-sm">Dharma Ideal</div>
                  <div className="text-white/50 text-xs">Campaign Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          WHAT IS DHARMA IDEAL
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FFFBF0] relative overflow-hidden">
        <div className="absolute right-0 top-0 pointer-events-none">
          <Wheel size={500} opacity={0.04} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <Tag>Our Identity</Tag>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-5 mb-10 text-[#2B1A00] leading-tight">
                What is <br />
                <span className="bg-gradient-to-r from-[#C8860A] via-[#F4C430] to-[#C8860A] bg-clip-text text-transparent">
                  Dharma Ideal Campaign?
                </span>
              </h2>

              {/* DHARMA block */}
              <div className="mb-7">
                <div className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-[#F4C430]/20 shadow-sm hover:shadow-[0_8px_40px_rgba(244,196,48,0.12)] hover:border-[#F4C430]/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F4C430] to-[#FF8C00] flex items-center justify-center shadow-md">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2B1A00] mb-2">
                      ☸ <span className="text-[#C8860A]">Dharma</span> — The Virtue Path
                    </h3>
                    <p className="text-[#7A5200]/85 leading-relaxed">
                      Refers to those on the way of Buddha's virtue — through transcendental meditation and wisdom — seeking Buddhahood, or distinct people of{" "}
                      <strong>Bodhisattva or Arya Bodhisattva</strong> fully committed to follow the Buddha Path. It is the living embodiment of ancient spiritual wisdom across generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* IDEAL block */}
              <div className="mb-7">
                <div className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-[#FF8C00]/20 shadow-sm hover:shadow-[0_8px_40px_rgba(255,140,0,0.10)] hover:border-[#FF8C00]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8C00] to-[#DAA520] flex items-center justify-center shadow-md">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2B1A00] mb-2">
                      ✦ <span className="text-[#C8860A]">Ideal</span> — The Five Precepts
                    </h3>
                    <p className="text-[#7A5200]/85 leading-relaxed mb-4">
                      Refers to those who walk the path of the Five Precepts of Buddha — principles of moral conduct that cultivate{" "}
                      <strong>patience, tolerance, and noble character</strong> in every sphere of life.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Refrain from taking life — fostering peace for all living beings",
                        "Refrain from taking what is not given — cultivating honesty",
                        "Refrain from sexual misconduct — promoting respect in relationships",
                        "Refrain from wrong speech & slander — building healthy communication",
                        "Refrain from intoxicants — encouraging clear thinking & responsibility",
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#7A5200]">
                          <CheckCircle2 className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CAMPAIGN summary */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#2B1A00] to-[#4a2c00] text-white border border-[#F4C430]/20 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#F4C430] mb-3">☸ The Campaign</h3>
                <p className="text-white/85 leading-relaxed">
                  Dharma Ideal Campaign is all about giving birth to and developing{" "}
                  <strong className="text-[#F4C430]">peace lovers, Dharma followers, and ideal personalities</strong>{" "}
                  — conducting regular classes and well-managed camps for world peace, meditation, spiritual practices,
                  and reformation for the happiness, peace, prosperity, freedom, welfare, and enlightenment of{" "}
                  <strong className="text-[#F4C430]">all beings around the world</strong>.
                </p>
              </div>
            </div>

            {/* Right: Photo + floating cards */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.15)]" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776522637/a-spiritual-illustration-blending-tradit_JDMPiHu4RS2KxySyt-V2bQ_FZL9tQjKRX2Y1Cx8LEwGsQ_sd_ao9rxh.jpg"
                  alt="Buddhist monk in peaceful meditation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-6 -left-8 bg-white rounded-2xl p-5 shadow-xl border border-[#F4C430]/20 max-w-[200px]">
                <div className="font-serif text-3xl font-bold text-[#F4C430]">15+</div>
                <div className="text-[#7A5200] text-sm font-medium">Years of Service</div>
                <div className="mt-1 text-xs text-[#7A5200]/60">Across 20+ nations</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#F4C430] to-[#FF8C00] rounded-2xl p-5 shadow-xl max-w-[200px]">
                <div className="font-serif text-3xl font-bold text-white">721K+</div>
                <div className="text-white/80 text-sm font-medium">Lives Touched</div>
                <div className="mt-1 text-xs text-white/60">And growing daily</div>
              </div>
              <div className="absolute bottom-28 -left-8 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-[#F4C430]/20 max-w-[180px]">
                <div className="text-2xl mb-1">🕊️</div>
                <p className="text-[#7A5200] text-xs italic leading-snug">
                  "Wisdom guided by compassion transforms the world"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          PRESERVING HUMANITY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#FFF3D0] to-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden relative bg-[#2B1A00] text-white shadow-2xl">
              <div className="absolute inset-0 opacity-8">
                <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776521360/a-cinematic-movie-poster-featuring-a-vas_znr3TNRPSUW0epMOHZCFlQ_D_ZjdZ-fQ5q-STZz44FQyA_sd_o1ookp.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 right-0">
                <Wheel size={320} opacity={0.08} />
              </div>
              <div className="relative p-10 md:p-14">
                <Tag>Why This Matters</Tag>
                <h3 className="font-serif text-4xl font-bold mt-5 mb-6 text-white leading-tight">
                  Preserving Human <span className="text-[#F4C430]">Civilization</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-lg mb-5">
                  Human civilization has endured immense hardships and achieved remarkable milestones over millions of years —
                  a testament to the resilience, wisdom, and creativity inherent in humanity. However, the very fabric of our
                  civilization is now at risk due to destructive tendencies:{" "}
                  <strong className="text-[#F4C430]">arrogance, egoism, and pride</strong> — driving dangerous arms races
                  and conflicts that threaten to undo the progress made over millennia.
                </p>
                <p className="text-white/75 leading-relaxed">
                  The Dharma Ideal Campaign is dedicated to safeguarding these achievements by promoting values that
                  counteract these negative tendencies, ensuring the preservation and flourishing of ancient civilizations
                  and their rich cultural heritage for all future generations.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: "🌍",
                  title: "Ensuring Humanity's Welfare",
                  desc: "By advocating for love, compassion, harmony, and brotherhood, the campaign creates a society where every individual can thrive through moral integrity and mindfulness.",
                },
                {
                  icon: "🐾",
                  title: "Benefiting All Living Beings",
                  desc: "Dharma Ideal extends compassion beyond humanity to all living beings — fostering a healthier, more balanced ecosystem through the interconnectedness taught in Buddhism.",
                },
                {
                  icon: "☮️",
                  title: "Achieving Enduring Global Peace",
                  desc: "By promoting dialogue, understanding, and cooperation, the campaign counters modern destructive tendencies and builds bridges across diverse cultures and nations.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-2xl border border-[#F4C430]/15 hover:border-[#F4C430]/45 hover:shadow-[0_8px_30px_rgba(244,196,48,0.1)] transition-all">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h4 className="font-serif font-bold text-[#2B1A00] text-lg mb-2">{title}</h4>
                  <p className="text-[#7A5200]/80 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          MISSION + VISION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FFFBF0] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Wheel size={600} opacity={0.04} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle
            pre="Direction"
            main="Mission &"
            gold="Vision"
            sub="The guiding principles that unite our global community of peace-seekers and Dharma followers."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776521643/a-cinematic-poster-featuring-the-majesti_LVF_PTdLQ5iITH8LBkjdHQ_tm9aAAfaQUGaZtAgI_vggA_cover_sd_hz709u.jpg" alt="Monks walking in golden light" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/95 via-[#1A0A00]/60 to-[#1A0A00]/15" />
              </div>
              <div className="relative p-10 min-h-[420px] flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F4C430] to-[#FF8C00] flex items-center justify-center mb-5 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  The Dharma Ideal Campaign is dedicated to{" "}
                  <strong className="text-[#F4C430]">fostering global peace, prosperity, freedom, and enlightenment</strong>.
                  By uniting diverse communities through spiritual and cultural events, the campaign seeks to address and
                  resolve conflicts, promote understanding, and elevate human consciousness on an international scale.
                </p>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776521643/a-cinematic-poster-featuring-the-majesti_LVF_PTdLQ5iITH8LBkjdHQ_tm9aAAfaQUGaZtAgI_vggA_cover_sd_hz709u.jpg" alt="Himalayan sunrise representing vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/95 via-[#1A0A00]/60 to-[#1A0A00]/15" />
              </div>
              <div className="relative p-10 min-h-[420px] flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E90FF] to-[#4169E1] flex items-center justify-center mb-5 shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  A world where <strong className="text-[#F4C430]">harmony prevails</strong>, conflicts are resolved through dialogue
                  and mutual respect, and every individual has the opportunity to contribute to and benefit from global peace —
                  thriving in an environment of spiritual and intellectual enlightenment.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: "Compassion", desc: "Heartfelt care extending to all beings, near and far, without exception or condition.", color: "from-[#F4C430] to-[#FF8C00]" },
              { icon: Target, title: "Purpose", desc: "Unwavering mission to serve humanity through authentic spiritual wisdom and purposeful action.", color: "from-[#FF8C00] to-[#DAA520]" },
              { icon: Users, title: "Community", desc: "Brotherhood across all borders — united in service to create lasting global change.", color: "from-[#DAA520] to-[#F4C430]" },
              { icon: Award, title: "Excellence", desc: "Highest standards of integrity and dedication in every program and interaction.", color: "from-[#F4C430] to-[#C8860A]" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="group p-7 bg-white rounded-2xl border border-[#F4C430]/15 hover:border-[#F4C430]/45 hover:shadow-[0_8px_40px_rgba(244,196,48,0.12)] transition-all text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} mx-auto mb-4 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(244,196,48,0.35)] transition-shadow`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-serif font-bold text-[#2B1A00] text-lg mb-2">{title}</h4>
                <p className="text-[#7A5200]/75 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SEVEN OBJECTIVES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FFF3D0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle
            pre="Programs & Objectives"
            main="Seven Pillars of"
            gold="Transformation"
            sub="Structured initiatives that create real-world impact — from weekly retreats to global peace campaigns."
          />

          {/* Feature card */}
          <div className="mb-8 rounded-3xl overflow-hidden grid lg:grid-cols-2 shadow-xl">
            <div className="relative min-h-[320px]">
              <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776522430/a-serene-and-inviting-poster-background-_wvLx-Y3YTvGjbV5XBm_6uA_v2jKHJdDQt6K-eKN1Nlc-g_sd_vcmqzs.jpg" alt="Meditation retreat at dawn" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A0A00]/20" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-[#F4C430] text-[#1A0A00] text-xs font-bold uppercase tracking-wide">🏅 Flagship Program</span>
              </div>
            </div>
            <div className="bg-[#2B1A00] p-10 flex flex-col justify-center">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                Weekly 2-Day Free Retreat Program
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Conducted every <strong className="text-[#F4C430]">Saturday and Sunday</strong> at BTMC, Jorpati, Kathmandu —
                throughout the entire year. The program serves students, professionals, and business individuals globally,
                offering <strong className="text-[#F4C430]">six customized courses</strong> in meditation, healing,
                practices, and spiritual teachings tailored to individual needs and evolving demands.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Meditation", "Healing", "Spiritual Teachings", "Free Entry", "All Levels"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[#F4C430]/15 text-[#F4C430] text-xs font-semibold border border-[#F4C430]/25">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌏",
                title: "Annual 17-Day International Ngyungne Retreat",
                sub: "Annual Sacred Practice — Kathmandu",
                desc: "Held annually in Kathmandu, these events bring together global participants for intensive practice of compassion and wisdom. Focuses on peace dialogues, spiritual and community engagement to promote global peace and shared spiritual growth and enlightenment.",
                tags: ["Annual", "International", "17 Days"],
              },
              {
                emoji: "🕊️",
                title: "Ngyungne Campaign & World Peace Prayers",
                sub: "Healing Conflict Zones",
                desc: "These initiatives address and heal conflict zones including Gaza, Israel, Ukraine, and Russia. By focusing on peace prayers and reconciliation efforts, the campaign seeks to bring relief and foster understanding in areas of intense conflict and war.",
                tags: ["World Peace", "Prayers", "Reconciliation"],
              },
              {
                emoji: "🏅",
                title: "International Dharma Awards",
                sub: "Every Three Years",
                desc: "Every three years, these prestigious awards recognize individuals and organizations that have made significant contributions to promoting peace, spirituality, and humanitarian efforts globally.",
                tags: ["Recognition", "Triennial", "Global"],
              },
              {
                emoji: "👑",
                title: "Miss Vrikuti Tara",
                sub: "Women Empowerment",
                desc: "A women-empowering beauty contest that celebrates and promotes the role of women in societal and spiritual leadership — emphasizing qualities of wisdom, compassion, and strength in every participant.",
                tags: ["Women", "Empowerment", "Leadership"],
              },
              {
                emoji: "📺",
                title: "Question of Wisdom — TV Reality Show",
                sub: "Broadcast Program",
                desc: "A TV reality show centered around themes of wisdom, peace, and freedom — encouraging participants to explore profound questions and inspiring audiences worldwide to engage in thoughtful dialogue and personal growth.",
                tags: ["Television", "Wisdom", "Freedom"],
              },
              {
                emoji: "🎙️",
                title: "Daily Talk Show",
                sub: "Ongoing Daily Broadcast",
                desc: "A profound daily platform dedicated to fostering global peace through expert insights, interactive discussions, guided meditation practices, and real-life success stories — empowering individuals and communities to embrace peace and wisdom every day.",
                tags: ["Daily", "Expert Insights", "Meditation"],
              },
            ].map(({ emoji, title, sub, desc, tags }) => (
              <div key={title} className="group p-7 bg-white rounded-2xl border border-[#F4C430]/15 hover:border-[#F4C430]/45 hover:shadow-[0_12px_40px_rgba(244,196,48,0.14)] transition-all duration-300 flex flex-col">
                <div className="text-4xl mb-4">{emoji}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-1">{sub}</div>
                <h4 className="font-serif font-bold text-[#2B1A00] text-xl mb-3 leading-tight group-hover:text-[#9A6700] transition-colors">{title}</h4>
                <p className="text-[#7A5200]/80 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-[#F4C430]/10 text-[#9A6700] text-xs font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          CAMPAIGN STRUCTURE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FFFBF0] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 pointer-events-none">
          <Wheel size={480} opacity={0.04} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle
            pre="Organization"
            main="Campaign"
            gold="Structure"
            sub="Five key roles create a cohesive force driving Dharma Ideal forward — from visionary masters to grassroots volunteers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "✨",
                title: "Prominent Masters",
                role: "Spiritual Advisory",
                desc: "Highly respected spiritual leaders who provide philosophical direction for the campaign. They inspire and shape its vision, ensuring alignment with core Dharma principles — delivering keynotes and guidance that reinforce the campaign's messages at every level.",
              },
              {
                icon: "🕊️",
                title: "Peace Ambassadors",
                role: "Outreach & Representation",
                desc: "Appointed individuals embodying the campaign's commitment to peace and Dharma values. They act as the face of the campaign in communities and forums — promoting peace, building bridges between groups, and advocating in public and diplomatic settings.",
              },
              {
                icon: "⚙️",
                title: "Coordinators",
                role: "Operations & Logistics",
                desc: "Manage specific aspects of the campaign's operations — handling event planning, communications, and daily activities. They ensure everything runs smoothly and that various teams and volunteers are effectively integrated into the overall campaign strategy.",
              },
              {
                icon: "💎",
                title: "Dharma Ideal Sponsor Members",
                role: "Financial & Strategic Support",
                desc: "Supporters and patrons providing financial backing and strategic support for specific projects. Their role involves funding, strategic input, and direct involvement in project development — bringing innovative ideas to fruition and ensuring resources are allocated effectively.",
              },
              {
                icon: "🤝",
                title: "Volunteers",
                role: "Grassroots Engagement",
                desc: "Individuals who offer their time and skills voluntarily — assisting with event organization, administrative support, outreach efforts, and grassroots activities. Their contributions are vital for the day-to-day functioning of the campaign and extending local impact.",
              },
              {
                icon: "🌐",
                title: "Global Community",
                role: "Worldwide Movement",
                desc: "Together, these roles create a cohesive structure that drives the Dharma Ideal Campaign forward — leveraging expertise, resources, and grassroots engagement to achieve the mission of promoting Dharma values and fostering enduring global peace.",
              },
            ].map(({ icon, title, role, desc }) => (
              <div key={title} className="p-8 bg-white rounded-2xl border border-[#F4C430]/15 hover:border-[#F4C430]/40 hover:shadow-[0_8px_40px_rgba(244,196,48,0.12)] transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-1">{role}</div>
                <h4 className="font-serif text-2xl font-bold text-[#2B1A00] mb-3">{title}</h4>
                <p className="text-[#7A5200]/80 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          IMPACT NUMBERS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#2B1A00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=40" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <Wheel size={700} opacity={0.06} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Tag>Impact</Tag>
            <h2 className="font-serif text-5xl font-bold text-white mt-5">
              Our{" "}
              <span className="bg-gradient-to-r from-[#F4C430] via-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                Impact by Numbers
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { n: "20+", l: "Countries Served", emoji: "🌏", sub: "Global reach" },
              { n: "15+", l: "Years of Service", emoji: "⏳", sub: "Since founding" },
              { n: "400+", l: "Active Members", emoji: "🤝", sub: "Team worldwide" },
              { n: "721K+", l: "Lives Touched", emoji: "✨", sub: "And counting" },
            ].map(({ n, l, emoji, sub }) => (
              <div key={l} className="text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <div className="font-serif text-6xl font-bold bg-gradient-to-r from-[#F4C430] via-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent mb-2">{n}</div>
                <div className="text-white font-semibold text-lg">{l}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          WHY JOIN
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitle
            pre="Take the First Step"
            main="Why Join Dharma"
            gold="Ideal Campaign?"
            sub="Human civilization is at a crossroads. Join a global movement that safeguards peace, welfare, and enlightenment for all beings."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776521910/a-cinematic-photograph-of-a-serene-buddh_lu9nCDJDQ4Oue26GpHRgig_XiHcq4FpQRa7v85o-unGEQ_sd_w4rpxc.jpg" alt="Monks at a Buddhist ceremony" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/65 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-white text-xl italic">"Join a life-changing journey of peace, wisdom, and compassion."</p>
              </div>
            </div>

            <div>
              <div className="space-y-4 mb-10">
                {[
                  { icon: "☸️", title: "Authentic Buddhist Teachings", desc: "Access genuine, lineage-based teachings from respected masters across the Buddhist tradition, available to all levels of practice." },
                  { icon: "🌱", title: "Holistic Life Transformation", desc: "Transform every dimension of life — mind, body, relationships, and spiritual practice — through integrated programs designed for the modern world." },
                  { icon: "🌏", title: "Global Spiritual Network", desc: "Connect with a worldwide community of peace lovers, Dharma followers, and ideal personalities across more than 20 countries." },
                  { icon: "🎁", title: "Free & Accessible Programs", desc: "Our weekly retreats and core programs are offered free to all — ensuring that spiritual growth is accessible regardless of background or resources." },
                  { icon: "🕊️", title: "Contribute to World Peace", desc: "Your participation directly supports peace campaigns, prayers, and reconciliation initiatives that address real conflict zones globally." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-[#F4C430]/15 hover:border-[#F4C430]/40 hover:shadow-md transition-all">
                    <div className="text-3xl flex-shrink-0">{icon}</div>
                    <div>
                      <h5 className="font-serif font-bold text-[#2B1A00] text-lg mb-1">{title}</h5>
                      <p className="text-[#7A5200]/75 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] text-[#1A0A00] font-bold hover:shadow-[0_0_30px_rgba(244,196,48,0.5)] border-0 px-8 py-5 rounded-xl">
                  <Heart className="w-5 h-5 mr-2" /> Become a Member
                </Button>
                <Button variant="outline" className="border-[#F4C430] text-[#9A6700] hover:bg-[#F4C430]/10 px-8 py-5 rounded-xl">
                  Explore Programs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776522188/a-cinematic-poster-featuring-a-wide-low-_WEnM9o9LTzmu49N1An-enA_gW94LU4_Re2bPNHX_YDjFQ_sd_n9wtow.jpg" alt="Prayer flags in Himalayan wind" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A00]/93 to-[#1A0A00]/70" />
            </div>
            <div className="absolute top-0 right-0">
              <Wheel size={350} opacity={0.08} />
            </div>
            <div className="relative p-14 md:p-20 max-w-3xl">
              <div className="text-5xl mb-6">🙏</div>
              <h2 className="font-serif text-5xl font-bold text-white mb-6 leading-tight">
                Take the First Step{" "}
                <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">
                  Today
                </span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-10">
                Become a Dharma Ideal Sponsor Member and join a life-changing journey of{" "}
                <strong className="text-[#F4C430]">peace, wisdom, and compassion</strong>.
                Together, we can create a more harmonious and enlightened world for all beings around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] text-[#1A0A00] font-bold hover:shadow-[0_0_30px_rgba(244,196,48,0.55)] border-0 px-8 py-6 text-base rounded-xl">
                  <Heart className="w-5 h-5 mr-2" /> Join Now
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-xl backdrop-blur-sm">
                  Become a Sponsor <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <a href="https://wa.me/9779766883351" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#F4C430]/40 text-[#F4C430] hover:bg-[#F4C430]/10 px-8 py-6 text-base rounded-xl">
                    💬 WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-[#FFFBF0]" />
      <Footer />
    </main>
  )
}

export default AboutPage