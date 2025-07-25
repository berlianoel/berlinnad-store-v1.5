import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  const sections = [
    {
      title: "1. Informasi yang Kami Kumpulkan",
      content:
        "Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami ketika menggunakan layanan kami, termasuk nama, nomor WhatsApp, dan detail pesanan.",
    },
    {
      title: "2. Penggunaan Informasi",
      content:
        "Informasi yang kami kumpulkan digunakan untuk memberikan layanan terbaik, memproses pesanan, dan berkomunikasi dengan Anda terkait layanan yang diminta.",
    },
    {
      title: "3. Keamanan Data",
      content:
        "Kami berkomitmen untuk melindungi informasi pribadi Anda dan menerapkan langkah-langkah keamanan yang sesuai untuk mencegah akses tidak sah.",
    },
    {
      title: "4. Kontak",
      content:
        "Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui WhatsApp di +62 812-1575-6534.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Kebijakan Privasi</h1>
        <Card className="glass-effect border-white/20">
          <CardContent className="p-8 space-y-6">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-bold text-[var(--electric-blue)] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-300">{section.content}</p>
              </section>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
