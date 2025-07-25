import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package } from "lucide-react";
import { productsData } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";
import { CustomEmoji } from "@/components/ui/custom-emoji";

// Product category icons mapping
const getProductIcon = (category: string) => {
  const icons: Record<string, string> = {
    hardware: "🖥️",
    software: "💿", 
    gaming: "🎮",
    design: "🎨",
    templates: "📄",
    digital: "📚",
    physical: "📦"
  };
  return icons[category] || "📦";
};

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "hardware", label: "Hardware" },
    { value: "software", label: "Software & Akun" },
    { value: "gaming", label: "Gaming" },
    { value: "design", label: "Design Assets" },
    { value: "templates", label: "Templates" },
    { value: "digital", label: "Digital Content" },
    { value: "physical", label: "Produk Fisik" },
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Produk Digital & Fisik
          </h1>
          <p className="text-xl text-gray-300">
            500+ produk berkualitas dengan harga terjangkau
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
                    placeholder="Cari produk..."
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

        {/* Products Grid - Corporate Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="corporate-card card-hover group">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl mb-4 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300 border border-white/10">
                  <CustomEmoji emoji={getProductIcon(product.category)} size={48} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--electric-blue)] transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[var(--electric-blue)] font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <span className="category-badge">
                    {product.category}
                  </span>
                </div>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      "Saya ingin membeli produk ini. Mohon info ketersediaan dan cara pembayaran.",
                      product.name
                    )
                  }
                  className="w-full modern-gradient text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <CustomEmoji emoji="🛒" size={16} className="mr-2" /> Beli Sekarang
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Tidak ada produk yang ditemukan untuk pencarian "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
