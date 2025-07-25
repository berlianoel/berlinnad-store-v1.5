import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, User, Send } from "lucide-react";
import { Review, getReviews, addReview } from "@/data/reviews";
import { useToast } from "@/hooks/use-toast";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    text: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.rating || !formData.text) {
      toast({
        title: "Error",
        description: "Semua field harus diisi",
        variant: "destructive",
      });
      return;
    }

    const newReview = addReview({
      name: formData.name,
      rating: parseInt(formData.rating),
      text: formData.text,
    });

    setReviews(getReviews());
    setFormData({ name: "", rating: "", text: "" });
    
    toast({
      title: "Sukses",
      description: "Terima kasih atas review Anda!",
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-current" : ""}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Review & Testimoni
          </h1>
          <p className="text-xl text-gray-300">
            Apa kata client kami tentang layanan dan produk
          </p>
        </div>

        {/* Add Review Form */}
        <Card className="glass-effect border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Tulis Review Anda</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  type="text"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[var(--dark-blue)] text-white border-gray-600 focus:border-[var(--electric-blue)]"
                  required
                />
                <Select
                  value={formData.rating}
                  onValueChange={(value) => setFormData({ ...formData, rating: value })}
                >
                  <SelectTrigger className="bg-[var(--dark-blue)] text-white border-gray-600 focus:border-[var(--electric-blue)]">
                    <SelectValue placeholder="Pilih Rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--dark-blue)] text-white border-gray-600">
                    <SelectItem value="5">5 Bintang</SelectItem>
                    <SelectItem value="4">4 Bintang</SelectItem>
                    <SelectItem value="3">3 Bintang</SelectItem>
                    <SelectItem value="2">2 Bintang</SelectItem>
                    <SelectItem value="1">1 Bintang</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                placeholder="Tulis review Anda..."
                rows={4}
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="w-full bg-[var(--dark-blue)] text-white border-gray-600 focus:border-[var(--electric-blue)] mb-4"
                required
              />
              <Button
                type="submit"
                className="bg-[var(--electric-blue)] hover:bg-[var(--bright-blue)] text-white font-semibold transition-all"
              >
                <Send className="mr-2 h-4 w-4" />
                Kirim Review
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id} className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--electric-blue)] rounded-full flex items-center justify-center mr-4">
                    <User className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{review.name}</div>
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-sm text-gray-400">{review.date}</div>
                </div>
                <p className="text-gray-300">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Belum ada review. Jadilah yang pertama memberikan review!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
