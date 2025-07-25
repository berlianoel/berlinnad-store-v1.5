export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Ahmad Rahman",
    rating: 5,
    text: "Pelayanan root HP sangat memuaskan. Cepat, aman, dan profesional. Highly recommended!",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Sari Dewi",
    rating: 5,
    text: "Desain logo untuk bisnis saya keren banget! Sesuai request dan dikerjakan dengan cepat.",
    date: "2024-01-14"
  },
  {
    id: 3,
    name: "Budi Santoso",
    rating: 5,
    text: "Website toko online buatan mereka keren dan responsive. Penjualan jadi meningkat!",
    date: "2024-01-13"
  },
  {
    id: 4,
    name: "Rina Putri",
    rating: 4,
    text: "Service install Windows dan software sangat bagus. PC jadi kencang lagi!",
    date: "2024-01-12"
  },
  {
    id: 5,
    name: "Deni Pratama",
    rating: 5,
    text: "Custom ROM installasinya perfect! HP jadi lebih smooth dan fitur lengkap.",
    date: "2024-01-11"
  },
  {
    id: 6,
    name: "Maya Sari",
    rating: 5,
    text: "Edit video TikTok hasilnya viral! Terima kasih sudah bantu konten saya.",
    date: "2024-01-10"
  },
  {
    id: 7,
    name: "Rendi Kurniawan",
    rating: 4,
    text: "Optimasi PC gaming sangat bagus. FPS game jadi naik drastis!",
    date: "2024-01-09"
  },
  {
    id: 8,
    name: "Fitri Handayani",
    rating: 5,
    text: "Template CV yang dibuat ATS-friendly dan berhasil lolos seleksi kerja. Makasih!",
    date: "2024-01-08"
  },
  {
    id: 9,
    name: "Agus Setiawan",
    rating: 5,
    text: "Install custom ROM Xiaomi lancar jaya. Fitur jadi lengkap dan performa mantap.",
    date: "2024-01-07"
  },
  {
    id: 10,
    name: "Novi Rahayu",
    rating: 4,
    text: "Banner social media yang dibuat engagement-nya naik. Design nya keren dan eye-catching!",
    date: "2024-01-06"
  }
];

export function getReviews(): Review[] {
  const stored = localStorage.getItem('techstore-reviews');
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with default reviews
  localStorage.setItem('techstore-reviews', JSON.stringify(defaultReviews));
  return defaultReviews;
}

export function addReview(review: Omit<Review, 'id' | 'date'>): Review {
  const reviews = getReviews();
  const newReview: Review = {
    ...review,
    id: Math.max(0, ...reviews.map(r => r.id)) + 1,
    date: new Date().toISOString().split('T')[0]
  };
  
  const updatedReviews = [newReview, ...reviews];
  localStorage.setItem('techstore-reviews', JSON.stringify(updatedReviews));
  return newReview;
}
