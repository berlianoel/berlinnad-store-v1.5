import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  const sections = [
    {
      title: "1. Penerimaan Syarat",
      content:
        "Dengan menggunakan layanan Berlinnad Store, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.",
    },
    {
      title: "2. Layanan",
      content:
        "Kami menyediakan layanan teknologi profesional termasuk namun tidak terbatas pada modifikasi Android, service PC, desain, dan pengembangan web.",
    },
    {
      title: "3. Pembayaran",
      content:
        "Pembayaran dilakukan sesuai dengan yang disepakati. Kami berhak menolak memberikan layanan jika pembayaran tidak sesuai.",
    },
    {
      title: "4. Tanggung Jawab",
      content:
        "Kami tidak bertanggung jawab atas kerusakan yang terjadi akibat kelalaian pengguna dalam mengikuti instruksi yang diberikan.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Syarat & Ketentuan</h1>
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
