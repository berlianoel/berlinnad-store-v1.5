import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, MapPin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle className="text-white text-xl" />,
      title: "WhatsApp",
      detail: "+62 812-1575-6534",
    },
    {
      icon: <Clock className="text-white text-xl" />,
      title: "Jam Operasional",
      detail: "24/7 Online Support",
    },
    {
      icon: <MapPin className="text-white text-xl" />,
      title: "Lokasi",
      detail: "Indonesia (Remote Service)",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-300">
            Siap membantu kebutuhan teknologi Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Informasi Kontak</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-[var(--electric-blue)] rounded-lg flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{info.title}</div>
                        <div className="text-gray-300">{info.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Button
                onClick={() =>
                  openWhatsApp("Halo, saya tertarik dengan layanan Berlinnad Store")
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                <MessageCircle className="text-2xl mr-3" />
                Chat WhatsApp Sekarang
              </Button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional office workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
