import { Link } from "wouter";
import { Zap } from "lucide-react";
import { CustomEmoji } from "./custom-emoji";

export default function Footer() {
  return (
    <footer className="bg-[var(--deep-blue)] border-t border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 mr-3 shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFFFFF" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Berlinnad Store</span>
            </div>
            <p className="text-gray-300">
              Solusi teknologi profesional untuk semua kebutuhan digital Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Layanan & Produk</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Layanan Teknologi
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Produk Digital
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Testimoni
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Informasi</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Tentang Kami
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Kontak
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="hover:text-[var(--electric-blue)] transition-colors cursor-pointer">
                    Syarat & Ketentuan
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Berlinnad Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
