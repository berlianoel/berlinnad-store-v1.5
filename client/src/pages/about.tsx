import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "500+ Layanan Teknologi Profesional",
    "500+ Produk Digital & Fisik Berkualitas",
    "Support 24/7 via WhatsApp",
    "Garansi & After-Sales Service",
  ];

  const values = [
    {
      icon: <Award className="text-4xl text-[var(--electric-blue)]" />,
      title: "Profesional",
      description: "Layanan berkualitas tinggi dengan standar profesional",
    },
    {
      icon: <Shield className="text-4xl text-[var(--electric-blue)]" />,
      title: "Terpercaya",
      description: "Keamanan dan kepercayaan adalah prioritas utama kami",
    },
    {
      icon: <Clock className="text-4xl text-[var(--electric-blue)]" />,
      title: "Cepat",
      description: "Penyelesaian tepat waktu dengan hasil memuaskan",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tentang Berlinnad Store
          </h1>
          <p className="text-xl text-gray-300">
            Solusi teknologi terpercaya untuk kebutuhan digital Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Pengalaman & Keahlian</h2>
            <p className="text-gray-300 text-lg mb-6">
              Berlinnad Store hadir sebagai solusi lengkap untuk semua kebutuhan teknologi Anda.
              Dengan pengalaman bertahun-tahun di bidang teknologi, kami menyediakan layanan
              profesional yang terpercaya dan berkualitas tinggi.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-[var(--electric-blue)] rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="text-white text-sm" size={16} />
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
