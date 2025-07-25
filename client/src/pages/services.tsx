import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { openWhatsApp } from "@/lib/whatsapp";
import { CustomEmoji } from "@/components/ui/custom-emoji";

// Service category icons mapping
const getServiceIcon = (category: string) => {
  const icons: Record<string, string> = {
    android: "⚡",
    pc: "💻", 
    design: "🎨",
    video: "🎬",
    web: "🌐",
    ai: "🤖",
    writing: "✍️",
    social: "📱",
    education: "🎓",
    others: "⭐"
  };
  return icons[category] || "⚙️";
};

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "android", label: "Android & Mobile" },
    { value: "pc", label: "PC & Software" },
    { value: "design", label: "Desain & Visual" },
    { value: "video", label: "Video & Audio" },
    { value: "web", label: "Web & Coding" },
    { value: "ai", label: "AI & Tools" },
    { value: "writing", label: "Penulisan" },
    { value: "social", label: "Social Media" },
    { value: "education", label: "Edukasi" },
    { value: "others", label: "Lainnya" },
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Layanan Profesional
          </h1>
          <p className="text-xl text-gray-300">
            500+ layanan teknologi untuk semua kebutuhan Anda
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <Card className="glass-effect border-white/20">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Cari layanan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[var(--dark-blue)] text-white border-gray-600 focus:border-[var(--electric-blue)]"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-[var(--dark-blue)] text-white border-gray-600 focus:border-[var(--electric-blue)] w-full md:w-64">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--dark-blue)] text-white border-gray-600">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid - Corporate Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="corporate-card card-hover group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <CustomEmoji emoji={getServiceIcon(service.category)} size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[var(--electric-blue)] transition-colors leading-tight">
                        {service.name}
                      </h3>
                    </div>
                    <span className="text-[var(--electric-blue)] font-bold text-xl ml-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>
                  <span className="category-badge">
                    {service.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{service.description}</p>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      "Saya ingin menggunakan layanan ini. Mohon info lebih lanjut.",
                      service.name
                    )
                  }
                  className="w-full green-gradient text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    💬 Pesan Sekarang
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Tidak ada layanan yang ditemukan untuk pencarian "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
