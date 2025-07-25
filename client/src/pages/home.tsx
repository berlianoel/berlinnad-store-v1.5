import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Laptop, Palette, Star, User } from "lucide-react";
import { CustomEmoji } from "@/components/ui/custom-emoji";

export default function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Teknologi Android",
      description: "Root, unlock, custom ROM, dan semua kebutuhan modifikasi Android Anda",
    },
    {
      icon: "💻",
      title: "Software & PC", 
      description: "Install OS, optimasi, troubleshoot, dan maintenance komputer profesional",
    },
    {
      icon: "🎨",
      title: "Desain & Visual",
      description: "Logo, banner, edit foto, video editing, dan semua kebutuhan kreatif",
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Rahman",
      role: "Mahasiswa IT",
      text: "Pelayanan root HP sangat memuaskan. Cepat, aman, dan profesional. Highly recommended!",
    },
    {
      name: "Sari Dewi",
      role: "Graphic Designer",
      text: "Desain logo untuk bisnis saya keren banget! Sesuai request dan dikerjakan dengan cepat.",
    },
    {
      name: "Budi Santoso",
      role: "Entrepreneur",
      text: "Website toko online buatan mereka keren dan responsive. Penjualan jadi meningkat!",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              <CustomEmoji emoji="🚀" size={48} className="mr-3" /> Solusi Teknologi{" "}
              <span className="text-[var(--electric-blue)]">Profesional</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Layanan teknologi terdepan untuk semua kebutuhan digital Anda. Dari Android
              hingga Web Development, kami siap membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="modern-gradient text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <CustomEmoji emoji="🎯" size={20} className="mr-2" /> Jelajahi Layanan
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect hover:bg-white hover:bg-opacity-20 text-white border-white/20 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
                >
                  <CustomEmoji emoji="📱" size={20} className="mr-2" /> Lihat Produk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-[var(--dark-blue)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-gray-300 text-lg">Pengalaman dan keahlian yang terpercaya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-white/20 card-hover">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <CustomEmoji emoji={feature.icon} size={64} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--electric-blue)] flex items-center justify-center gap-2">
                <CustomEmoji emoji="⚡" size={32} /> 500+
              </div>
              <div className="text-gray-300 mt-2">Layanan Tersedia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--electric-blue)] flex items-center justify-center gap-2">
                <CustomEmoji emoji="📦" size={32} /> 500+
              </div>
              <div className="text-gray-300 mt-2">Produk Digital</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--electric-blue)] flex items-center justify-center gap-2">
                <CustomEmoji emoji="⭐" size={32} /> 1000+
              </div>
              <div className="text-gray-300 mt-2">Client Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--electric-blue)] flex items-center justify-center gap-2">
                <CustomEmoji emoji="🕐" size={32} /> 24/7
              </div>
              <div className="text-gray-300 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-[var(--dark-blue)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-300 text-lg">Testimoni dari client yang puas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[var(--electric-blue)] rounded-full flex items-center justify-center mr-4">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews">
              <Button className="bg-[var(--electric-blue)] hover:bg-[var(--bright-blue)] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                Lihat Semua Review
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
