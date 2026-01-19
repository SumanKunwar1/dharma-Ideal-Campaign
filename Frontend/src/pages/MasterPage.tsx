import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"

const MastersPage = () => {
  const masters = [
    { name: "Ven. Khen Rinpoche Sonam Gyurme", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919931/guru1_wja3ki.jpg" },
    { name: "H.E. Syalpa Tenzin Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919931/guru2_gpefgk.jpg" },
    { name: "H.E Chhyogyal Rinpohe", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919932/guru3_cocxkq.jpg" },
    { name: "H.E. Yongey Mingyur Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919932/guru4_g0vuqo.jpg" },
    { name: "Dr. Khen Rinpoche Lharkyal Lama", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919931/guru5_jtgle2.jpg" },
    { name: "H.E. Dolpo Tulku Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919932/guru6_mdrxvo.jpg" },
    { name: "H.E. Sangngak Tenzin Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919933/guru7_qxt1zw.jpg" },
    { name: "H.E. Palyul Lhatrul Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919933/guru8_lrtajl.jpg" },
    { name: "H.E. Shangpa Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919933/guru9_emgsi7.jpg" },
    { name: "H.E. Ringzin Dorje Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919934/guru10_pmr87r.jpg" },
    { name: "Ven. Nareshman Bajracharya", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919951/guru11_hupjw9.jpg" },
    { name: "H.E. Tsoknyi Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919950/guru12_o72stk.jpg" },
    { name: "Ven. Khen Rinpoche Ngawang Thegtsog", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919951/guru13_vhligd.jpg" },
    { name: "H.E. Khangser Ripoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919951/guru14_gmwg7t.jpg" },
    { name: "H.E. Azom Tulku Rinpoche", image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1764919951/guru15_cnv5ud.jpg" },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Meet Our <span className="gradient-gold-text">Masters</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Wisdom keepers and spiritual guides dedicated to enlightenment and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {masters.map((master, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden bg-[#F4C430]/10">
                  <img
                    src={master.image || "/placeholder.svg"}
                    alt={master.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-serif font-semibold text-center text-sm leading-tight">{master.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default MastersPage
