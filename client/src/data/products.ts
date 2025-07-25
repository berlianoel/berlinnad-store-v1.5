export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
}

const baseProducts: Omit<Product, 'id'>[] = [
  // Hardware (70 products)
  { name: "Flashdisk 64GB SanDisk", category: "hardware", price: "Rp 45.000", description: "Flashdisk original bergaransi" },
  { name: "Harddisk Eksternal 1TB", category: "hardware", price: "Rp 650.000", description: "HDD eksternal untuk backup data" },
  { name: "Mouse Gaming RGB", category: "hardware", price: "Rp 125.000", description: "Mouse gaming dengan LED RGB" },
  { name: "Keyboard Mechanical LED", category: "hardware", price: "Rp 300.000", description: "Keyboard mechanical dengan backlight" },
  { name: "Router WiFi AC1200", category: "hardware", price: "Rp 200.000", description: "Router WiFi dual band AC1200" },
  { name: "Kabel Data Fast Charging", category: "hardware", price: "Rp 25.000", description: "Kabel data fast charging 3A" },
  { name: "Powerbank 10000mAh", category: "hardware", price: "Rp 85.000", description: "Powerbank portable 10000mAh" },
  { name: "Webcam HD 1080p", category: "hardware", price: "Rp 150.000", description: "Webcam untuk streaming dan meeting" },
  { name: "Speaker Bluetooth Portable", category: "hardware", price: "Rp 120.000", description: "Speaker bluetooth berkualitas" },
  { name: "Headset Gaming", category: "hardware", price: "Rp 200.000", description: "Headset gaming dengan mic" },

  // Software & Accounts (70 products)
  { name: "Akun Canva Pro 1 Tahun", category: "software", price: "Rp 25.000", description: "Akun Canva Pro sharing 1 tahun" },
  { name: "Akun Adobe CC 2024", category: "software", price: "Rp 50.000", description: "Adobe Creative Cloud full version" },
  { name: "Netflix Premium Sharing", category: "software", price: "Rp 15.000", description: "Netflix sharing 1 bulan" },
  { name: "Disney+ Hotstar Premium", category: "software", price: "Rp 20.000", description: "Disney+ premium sharing" },
  { name: "ChatGPT Plus Sharing", category: "software", price: "Rp 30.000", description: "ChatGPT Plus sharing access" },
  { name: "Spotify Premium Family", category: "software", price: "Rp 20.000", description: "Spotify premium sharing" },
  { name: "YouTube Premium", category: "software", price: "Rp 15.000", description: "YouTube premium tanpa iklan" },
  { name: "Microsoft Office 365", category: "software", price: "Rp 35.000", description: "Office 365 original license" },
  { name: "Windows 11 Pro License", category: "software", price: "Rp 40.000", description: "Windows 11 Pro original" },
  { name: "Antivirus Premium", category: "software", price: "Rp 30.000", description: "Antivirus premium 1 tahun" },

  // Gaming (70 products)
  { name: "Skin Mobile Legends", category: "gaming", price: "Rp 25.000", description: "Skin ML hero pilihan" },
  { name: "Diamond Free Fire", category: "gaming", price: "Rp 15.000", description: "Top up diamond FF murah" },
  { name: "UC PUBG Mobile", category: "gaming", price: "Rp 20.000", description: "Top up UC PUBG Mobile" },
  { name: "Voucher Steam Wallet", category: "gaming", price: "Rp 50.000", description: "Steam wallet untuk beli game" },
  { name: "Robux Roblox", category: "gaming", price: "Rp 25.000", description: "Top up Robux Roblox" },
  { name: "Genshin Impact Primogems", category: "gaming", price: "Rp 30.000", description: "Top up primogems Genshin" },
  { name: "Valorant Points", category: "gaming", price: "Rp 35.000", description: "VP untuk skin Valorant" },
  { name: "COD Mobile CP", category: "gaming", price: "Rp 20.000", description: "Call of Duty Mobile CP" },
  { name: "Honkai Star Rail Oneiric", category: "gaming", price: "Rp 30.000", description: "Top up Honkai Star Rail" },
  { name: "League of Legends RP", category: "gaming", price: "Rp 40.000", description: "Riot Points untuk LoL" },

  // Design Assets (70 products)
  { name: "Stiker Custom Design", category: "design", price: "Rp 5.000", description: "Stiker desain sesuai request" },
  { name: "Template PSD Premium", category: "design", price: "Rp 35.000", description: "Template Photoshop siap pakai" },
  { name: "Wallpaper 4K Collection", category: "design", price: "Rp 15.000", description: "Koleksi wallpaper 4K HD" },
  { name: "Preset Lightroom Pro", category: "design", price: "Rp 25.000", description: "Preset Lightroom profesional" },
  { name: "Background Zoom Virtual", category: "design", price: "Rp 10.000", description: "Background virtual meeting" },
  { name: "Filter Instagram Pack", category: "design", price: "Rp 15.000", description: "Koleksi filter IG premium" },
  { name: "Icon Set Custom", category: "design", price: "Rp 30.000", description: "Set icon custom untuk app" },
  { name: "Mockup Kemasan", category: "design", price: "Rp 25.000", description: "Mockup kemasan produk" },
  { name: "Font Premium Collection", category: "design", price: "Rp 20.000", description: "Koleksi font premium" },
  { name: "Vector Graphics Pack", category: "design", price: "Rp 35.000", description: "Paket vector graphics" },

  // Templates (70 products)
  { name: "Template CV ATS", category: "templates", price: "Rp 20.000", description: "Template CV lolos ATS" },
  { name: "Template PowerPoint", category: "templates", price: "Rp 30.000", description: "Template PPT profesional" },
  { name: "Notion Template", category: "templates", price: "Rp 25.000", description: "Template Notion produktivitas" },
  { name: "Template Invoice", category: "templates", price: "Rp 15.000", description: "Template invoice bisnis" },
  { name: "Template Social Media", category: "templates", price: "Rp 20.000", description: "Template post social media" },
  { name: "Template Website", category: "templates", price: "Rp 50.000", description: "Template website responsive" },
  { name: "Template Email Marketing", category: "templates", price: "Rp 25.000", description: "Template email newsletter" },
  { name: "Template Proposal Bisnis", category: "templates", price: "Rp 35.000", description: "Template proposal profesional" },
  { name: "Template Katalog Produk", category: "templates", price: "Rp 40.000", description: "Template katalog editable" },
  { name: "Template Menu Restoran", category: "templates", price: "Rp 30.000", description: "Template menu makanan" },

  // Digital Content (70 products)
  { name: "Ebook Belajar Design", category: "digital", price: "Rp 40.000", description: "Ebook lengkap belajar desain" },
  { name: "Audio Pembelajaran", category: "digital", price: "Rp 30.000", description: "Audio course berkualitas" },
  { name: "Video Tutorial", category: "digital", price: "Rp 45.000", description: "Video tutorial step by step" },
  { name: "Foto Produk Stock", category: "digital", price: "Rp 20.000", description: "Foto produk siap pakai" },

  { name: "Musik Bebas Copyright", category: "digital", price: "Rp 30.000", description: "Musik background bebas copyright" },
  { name: "Preset CapCut", category: "digital", price: "Rp 15.000", description: "Preset editing CapCut" },
  { name: "Script Bot Telegram", category: "digital", price: "Rp 35.000", description: "Source code bot telegram" },

  { name: "Database Template", category: "digital", price: "Rp 25.000", description: "Template database siap pakai" },
  { name: "Plugin WordPress Pro", category: "digital", price: "Rp 100.000", description: "Plugin WordPress premium untuk SEO" },
  { name: "Theme Website Premium", category: "digital", price: "Rp 150.000", description: "Theme website responsive premium" },
  { name: "Action Photoshop Pack", category: "digital", price: "Rp 40.000", description: "Action Photoshop untuk editing cepat" },
  { name: "Brush Procreate Set", category: "digital", price: "Rp 35.000", description: "Set brush Procreate untuk digital art" },
  { name: "LUT Color Grading", category: "digital", price: "Rp 50.000", description: "LUT untuk color grading video" },
  { name: "Motion Graphics Template", category: "digital", price: "Rp 80.000", description: "Template motion graphics After Effects" },
  { name: "3D Model Collection", category: "digital", price: "Rp 120.000", description: "Koleksi 3D model untuk rendering" },
  { name: "Texture Pack HD", category: "digital", price: "Rp 45.000", description: "Pack texture HD untuk 3D modeling" },
  { name: "UI Kit Mobile App", category: "digital", price: "Rp 70.000", description: "UI kit lengkap untuk mobile app" },
  { name: "Dashboard Template", category: "digital", price: "Rp 90.000", description: "Template dashboard admin panel" },
  { name: "Cryptocurrency Script", category: "digital", price: "Rp 200.000", description: "Script trading cryptocurrency" },
  { name: "E-learning Platform", category: "digital", price: "Rp 300.000", description: "Source code platform e-learning" },
  { name: "Social Media Bot", category: "digital", price: "Rp 150.000", description: "Bot otomatis untuk social media" },
  { name: "WhatsApp Auto Reply", category: "digital", price: "Rp 100.000", description: "Script auto reply WhatsApp" },
  { name: "Instagram Growth Tool", category: "digital", price: "Rp 120.000", description: "Tool untuk growth Instagram" },
  { name: "YouTube SEO Tool", category: "digital", price: "Rp 80.000", description: "Tool optimasi SEO YouTube" },
  { name: "Email Scraper Tool", category: "digital", price: "Rp 60.000", description: "Tool untuk scraping email" },
  { name: "Price Monitor Bot", category: "digital", price: "Rp 90.000", description: "Bot monitor harga e-commerce" },
  { name: "Stock Trading Bot", category: "digital", price: "Rp 250.000", description: "Bot trading saham otomatis" },
  { name: "NFT Generator Tool", category: "digital", price: "Rp 180.000", description: "Tool generator NFT collection" },
  { name: "Crypto Mining Script", category: "digital", price: "Rp 300.000", description: "Script mining cryptocurrency" },
  { name: "Blockchain Wallet", category: "digital", price: "Rp 400.000", description: "Source code blockchain wallet" },
  { name: "DeFi Platform Code", category: "digital", price: "Rp 500.000", description: "Source code platform DeFi" },
  { name: "Smart Contract Template", category: "digital", price: "Rp 200.000", description: "Template smart contract Solidity" },
  { name: "Web3 dApp Template", category: "digital", price: "Rp 350.000", description: "Template decentralized app Web3" },
  { name: "Metaverse Platform", category: "digital", price: "Rp 600.000", description: "Source code platform metaverse" },
  { name: "AI Chatbot Code", category: "digital", price: "Rp 250.000", description: "Source code AI chatbot" },
  { name: "Machine Learning Model", category: "digital", price: "Rp 300.000", description: "Pre-trained ML model" },
  { name: "Computer Vision API", category: "digital", price: "Rp 400.000", description: "API computer vision custom" },
  { name: "Voice Recognition Tool", category: "digital", price: "Rp 350.000", description: "Tool voice recognition" },
  { name: "Text to Speech API", category: "digital", price: "Rp 200.000", description: "API text to speech" },
  { name: "Image Generator AI", category: "digital", price: "Rp 250.000", description: "AI image generator tool" },
  { name: "Video Enhancement AI", category: "digital", price: "Rp 300.000", description: "AI untuk enhance video" },
  { name: "Audio Noise Remover", category: "digital", price: "Rp 150.000", description: "Tool hapus noise audio" },
  { name: "Background Remover", category: "digital", price: "Rp 100.000", description: "Tool hapus background foto" },
  { name: "Watermark Remover", category: "digital", price: "Rp 80.000", description: "Tool hapus watermark" },
  { name: "Video Downloader", category: "digital", price: "Rp 60.000", description: "Tool download video YouTube" },
  { name: "Music Downloader", category: "digital", price: "Rp 50.000", description: "Tool download musik Spotify" },
  { name: "Instagram Downloader", category: "digital", price: "Rp 40.000", description: "Tool download konten Instagram" },
  { name: "TikTok Downloader", category: "digital", price: "Rp 35.000", description: "Tool download video TikTok" },
  { name: "Facebook Scraper", category: "digital", price: "Rp 70.000", description: "Tool scraping data Facebook" },
  { name: "LinkedIn Scraper", category: "digital", price: "Rp 90.000", description: "Tool scraping data LinkedIn" },
  { name: "Twitter Analytics", category: "digital", price: "Rp 80.000", description: "Tool analisis Twitter" },
  { name: "Reddit Monitor", category: "digital", price: "Rp 60.000", description: "Tool monitor Reddit posts" },
  { name: "Telegram Channel Bot", category: "digital", price: "Rp 100.000", description: "Bot untuk channel Telegram" },
  { name: "Discord Server Bot", category: "digital", price: "Rp 120.000", description: "Bot untuk server Discord" },
  { name: "WhatsApp Group Manager", category: "digital", price: "Rp 150.000", description: "Tool kelola grup WhatsApp" },
  { name: "Email Marketing Tool", category: "digital", price: "Rp 200.000", description: "Tool email marketing" },
  { name: "Lead Generation Tool", category: "digital", price: "Rp 180.000", description: "Tool generate leads" },
  { name: "CRM System Lite", category: "digital", price: "Rp 250.000", description: "Sistem CRM sederhana" },
  { name: "Inventory Management", category: "digital", price: "Rp 200.000", description: "Sistem kelola inventory" },
  { name: "POS System Code", category: "digital", price: "Rp 300.000", description: "Source code sistem POS" },
  { name: "Accounting Software", category: "digital", price: "Rp 350.000", description: "Software akuntansi lengkap" },
  { name: "Payroll System", category: "digital", price: "Rp 250.000", description: "Sistem payroll karyawan" },
  { name: "HR Management Tool", category: "digital", price: "Rp 300.000", description: "Tool manajemen SDM" },
  { name: "Project Management", category: "digital", price: "Rp 280.000", description: "Tool manajemen proyek" },
  { name: "Time Tracking Tool", category: "digital", price: "Rp 150.000", description: "Tool tracking waktu kerja" },
  { name: "Task Management App", category: "digital", price: "Rp 120.000", description: "Aplikasi manajemen task" },
  { name: "Calendar Scheduler", category: "digital", price: "Rp 100.000", description: "Tool penjadwalan kalendar" },
  { name: "Meeting Room Booking", category: "digital", price: "Rp 180.000", description: "Sistem booking ruang meeting" },
  { name: "Visitor Management", category: "digital", price: "Rp 200.000", description: "Sistem manajemen visitor" },
  { name: "Asset Management", category: "digital", price: "Rp 250.000", description: "Sistem manajemen aset" },
  { name: "Document Management", category: "digital", price: "Rp 220.000", description: "Sistem manajemen dokumen" },
  { name: "File Sharing System", category: "digital", price: "Rp 150.000", description: "Sistem sharing file" },
  { name: "Cloud Storage Script", category: "digital", price: "Rp 300.000", description: "Script cloud storage" },
  { name: "Backup Automation", category: "digital", price: "Rp 200.000", description: "Tool backup otomatis" },
  { name: "Server Monitor Tool", category: "digital", price: "Rp 180.000", description: "Tool monitoring server" },
  { name: "Website Uptime Monitor", category: "digital", price: "Rp 120.000", description: "Tool monitor uptime website" },
  { name: "SSL Certificate Checker", category: "digital", price: "Rp 80.000", description: "Tool cek SSL certificate" },
  { name: "Domain Expiry Checker", category: "digital", price: "Rp 60.000", description: "Tool cek expire domain" },
  { name: "DNS Lookup Tool", category: "digital", price: "Rp 50.000", description: "Tool DNS lookup" },
  { name: "IP Geolocation API", category: "digital", price: "Rp 100.000", description: "API geolocation IP" },
  { name: "QR Code Generator", category: "digital", price: "Rp 40.000", description: "Tool generator QR code" },
  { name: "Barcode Generator", category: "digital", price: "Rp 45.000", description: "Tool generator barcode" },
  { name: "Short URL Service", category: "digital", price: "Rp 80.000", description: "Service pemendek URL" },
  { name: "Link Analytics Tool", category: "digital", price: "Rp 100.000", description: "Tool analisis link" },
  { name: "Click Tracking System", category: "digital", price: "Rp 120.000", description: "Sistem tracking click" },
  { name: "Conversion Tracking", category: "digital", price: "Rp 150.000", description: "Tool tracking konversi" },
  { name: "Heatmap Analytics", category: "digital", price: "Rp 200.000", description: "Tool analisis heatmap" },
  { name: "A/B Testing Tool", category: "digital", price: "Rp 180.000", description: "Tool A/B testing" },
  { name: "User Behavior Analytics", category: "digital", price: "Rp 220.000", description: "Tool analisis user behavior" },
  { name: "Funnel Analytics", category: "digital", price: "Rp 250.000", description: "Tool analisis funnel" },
  { name: "Cohort Analysis Tool", category: "digital", price: "Rp 200.000", description: "Tool analisis cohort" },
  { name: "Customer Journey Map", category: "digital", price: "Rp 300.000", description: "Tool mapping customer journey" },
  { name: "Sentiment Analysis API", category: "digital", price: "Rp 250.000", description: "API analisis sentimen" },
  { name: "Text Classification", category: "digital", price: "Rp 200.000", description: "Tool klasifikasi teks" },
  { name: "Language Detection", category: "digital", price: "Rp 150.000", description: "Tool deteksi bahasa" },
  { name: "Translation API", category: "digital", price: "Rp 180.000", description: "API terjemahan" },
  { name: "OCR Text Extraction", category: "digital", price: "Rp 200.000", description: "Tool ekstraksi teks OCR" },
  { name: "PDF Text Extractor", category: "digital", price: "Rp 100.000", description: "Tool ekstrak teks PDF" },
  { name: "Document Converter", category: "digital", price: "Rp 120.000", description: "Tool konversi dokumen" },
  { name: "Image Format Converter", category: "digital", price: "Rp 80.000", description: "Tool konversi format gambar" },
  { name: "Video Format Converter", category: "digital", price: "Rp 150.000", description: "Tool konversi format video" },
  { name: "Audio Format Converter", category: "digital", price: "Rp 100.000", description: "Tool konversi format audio" },
  { name: "File Compression Tool", category: "digital", price: "Rp 80.000", description: "Tool kompresi file" },
  { name: "Batch File Renamer", category: "digital", price: "Rp 60.000", description: "Tool rename file batch" },
  { name: "Duplicate File Finder", category: "digital", price: "Rp 70.000", description: "Tool cari file duplikat" },
  { name: "File Organizer Tool", category: "digital", price: "Rp 90.000", description: "Tool organize file otomatis" },
  { name: "Disk Space Analyzer", category: "digital", price: "Rp 80.000", description: "Tool analisis disk space" },
  { name: "System Cleaner Tool", category: "digital", price: "Rp 100.000", description: "Tool pembersih sistem" },
  { name: "Registry Cleaner", category: "digital", price: "Rp 80.000", description: "Tool pembersih registry" },
  { name: "Startup Manager", category: "digital", price: "Rp 60.000", description: "Tool kelola program startup" },
  { name: "Process Monitor Tool", category: "digital", price: "Rp 100.000", description: "Tool monitor proses sistem" },
  { name: "Network Monitor", category: "digital", price: "Rp 120.000", description: "Tool monitor jaringan" },
  { name: "Bandwidth Monitor", category: "digital", price: "Rp 100.000", description: "Tool monitor bandwidth" },
  { name: "WiFi Analyzer Tool", category: "digital", price: "Rp 80.000", description: "Tool analisis sinyal WiFi" },
  { name: "Port Scanner Tool", category: "digital", price: "Rp 90.000", description: "Tool scan port jaringan" },
  { name: "Network Security Scanner", category: "digital", price: "Rp 150.000", description: "Tool scan keamanan jaringan" },
  { name: "Vulnerability Scanner", category: "digital", price: "Rp 200.000", description: "Tool scan vulnerability" },
  { name: "Malware Scanner", category: "digital", price: "Rp 120.000", description: "Tool scan malware" },
  { name: "Antivirus Engine", category: "digital", price: "Rp 300.000", description: "Engine antivirus custom" },
  { name: "Firewall Software", category: "digital", price: "Rp 250.000", description: "Software firewall" },
  { name: "VPN Client Tool", category: "digital", price: "Rp 200.000", description: "Tool VPN client" },
  { name: "Proxy Server Script", category: "digital", price: "Rp 180.000", description: "Script proxy server" },
  { name: "Load Balancer Tool", category: "digital", price: "Rp 300.000", description: "Tool load balancer" },
  { name: "CDN Management", category: "digital", price: "Rp 250.000", description: "Tool manajemen CDN" },
  { name: "DNS Server Script", category: "digital", price: "Rp 200.000", description: "Script DNS server" },
  { name: "Web Server Config", category: "digital", price: "Rp 150.000", description: "Konfigurasi web server" },
  { name: "Database Admin Tool", category: "digital", price: "Rp 200.000", description: "Tool admin database" },
  { name: "SQL Query Builder", category: "digital", price: "Rp 150.000", description: "Tool query builder SQL" },
  { name: "Database Migration", category: "digital", price: "Rp 180.000", description: "Tool migrasi database" },
  { name: "Data Import/Export", category: "digital", price: "Rp 120.000", description: "Tool import/export data" },
  { name: "CSV Processor", category: "digital", price: "Rp 80.000", description: "Tool processing file CSV" },
  { name: "JSON Formatter", category: "digital", price: "Rp 50.000", description: "Tool format JSON" },
  { name: "XML Parser Tool", category: "digital", price: "Rp 70.000", description: "Tool parser XML" },
  { name: "API Testing Tool", category: "digital", price: "Rp 150.000", description: "Tool testing API" },
  { name: "REST API Generator", category: "digital", price: "Rp 200.000", description: "Tool generator REST API" },
  { name: "GraphQL Schema", category: "digital", price: "Rp 180.000", description: "Schema GraphQL template" },
  { name: "Microservice Template", category: "digital", price: "Rp 250.000", description: "Template microservice" },
  { name: "Docker Container", category: "digital", price: "Rp 200.000", description: "Template Docker container" },
  { name: "Kubernetes Config", category: "digital", price: "Rp 300.000", description: "Konfigurasi Kubernetes" },
  { name: "CI/CD Pipeline", category: "digital", price: "Rp 250.000", description: "Pipeline CI/CD template" },
  { name: "DevOps Automation", category: "digital", price: "Rp 350.000", description: "Tool otomasi DevOps" },
  { name: "Infrastructure Code", category: "digital", price: "Rp 300.000", description: "Infrastructure as Code" },
  { name: "Monitoring Dashboard", category: "digital", price: "Rp 250.000", description: "Dashboard monitoring" },
  { name: "Log Aggregator", category: "digital", price: "Rp 200.000", description: "Tool agregasi log" },
  { name: "Error Tracking Tool", category: "digital", price: "Rp 180.000", description: "Tool tracking error" },
  { name: "Performance Monitor", category: "digital", price: "Rp 220.000", description: "Tool monitor performa" },
  { name: "APM Solution", category: "digital", price: "Rp 300.000", description: "Application Performance Monitoring" },

  // Physical Products (expanded to 200)
  { name: "HP Android Bekas", category: "physical", price: "Rp 800.000", description: "HP Android second berkualitas" },
  { name: "Kaos Custom Design", category: "physical", price: "Rp 75.000", description: "Kaos dengan desain custom" },
  { name: "Poster Anime Custom", category: "physical", price: "Rp 35.000", description: "Poster anime cetak custom" },
  { name: "Buku Catatan Aesthetic", category: "physical", price: "Rp 25.000", description: "Notebook dengan desain aesthetic" },
  { name: "Mug Custom Print", category: "physical", price: "Rp 40.000", description: "Mug dengan print custom" },
  { name: "Gantungan Kunci Custom", category: "physical", price: "Rp 15.000", description: "Gantungan kunci design sendiri" },
  { name: "Tote Bag Custom", category: "physical", price: "Rp 50.000", description: "Tote bag dengan print custom" },
  { name: "Pin Custom", category: "physical", price: "Rp 20.000", description: "Pin dengan design custom" },
  { name: "Stiker Laptop", category: "physical", price: "Rp 25.000", description: "Stiker dekorasi laptop" },
  { name: "Case HP Custom", category: "physical", price: "Rp 45.000", description: "Case HP dengan design sendiri" },
];

// Additional unique products to reach 500
const additionalProducts: Omit<Product, "id">[] = [
  // Hardware Products
  { name: "🎧 Wireless Gaming Headset Pro", category: "hardware", price: "Rp 850.000", description: "Headset gaming wireless dengan surround sound 7.1 dan mic noise cancelling" },
  { name: "⌨️ Mechanical RGB Keyboard", category: "hardware", price: "Rp 1.200.000", description: "Keyboard mechanical dengan RGB lighting dan blue switches" },
  { name: "🖱️ Gaming Mouse Precision", category: "hardware", price: "Rp 600.000", description: "Mouse gaming dengan sensor optik 16.000 DPI dan 8 tombol programmable" },
  { name: "📺 4K Webcam Ultra HD", category: "hardware", price: "Rp 1.500.000", description: "Webcam 4K dengan autofocus dan background blur otomatis" },
  { name: "🔌 USB-C Hub Multiport", category: "hardware", price: "Rp 300.000", description: "Hub USB-C 7-in-1 dengan HDMI, USB 3.0, dan card reader" },
  { name: "💾 SSD External 1TB", category: "hardware", price: "Rp 2.000.000", description: "SSD eksternal 1TB dengan kecepatan transfer hingga 1000 MB/s" },
  { name: "🔋 Power Bank 30000mAh", category: "hardware", price: "Rp 400.000", description: "Power bank fast charging dengan kapasitas 30000mAh dan wireless charging" },
  { name: "📱 Phone Stand Adjustable", category: "hardware", price: "Rp 150.000", description: "Stand smartphone adjustable dengan charging dock terintegrasi" },
  
  // Software & Accounts Products
  { name: "🎮 Steam Gift Card $50", category: "software", price: "Rp 750.000", description: "Gift card Steam senilai $50 untuk pembelian game di platform Steam" },
  { name: "🎵 Spotify Premium 1 Year", category: "software", price: "Rp 200.000", description: "Akun Spotify Premium untuk 1 tahun dengan musik unlimited" },
  { name: "📺 Netflix Premium 6 Months", category: "software", price: "Rp 300.000", description: "Akun Netflix Premium untuk 6 bulan dengan 4K streaming" },
  { name: "☁️ Google Drive 2TB", category: "software", price: "Rp 150.000", description: "Upgrade Google Drive ke 2TB storage untuk backup data" },
  { name: "🎬 Adobe Creative Suite", category: "software", price: "Rp 500.000", description: "Lisensi Adobe Creative Cloud dengan semua aplikasi design" },
  { name: "🛡️ Norton Antivirus Premium", category: "software", price: "Rp 200.000", description: "Antivirus Norton 360 Premium dengan VPN dan password manager" },
  { name: "💼 Microsoft Office 365", category: "software", price: "Rp 300.000", description: "Microsoft Office 365 dengan Word, Excel, PowerPoint, dan OneDrive" },
  { name: "🎯 Canva Pro Annual", category: "software", price: "Rp 180.000", description: "Canva Pro untuk 1 tahun dengan template premium dan background remover" },
  
  // Gaming Products
  { name: "💎 Mobile Legends 5000 Diamonds", category: "gaming", price: "Rp 1.500.000", description: "Top up 5000 diamonds Mobile Legends untuk skin dan hero baru" },
  { name: "🔥 Free Fire 10000 Diamonds", category: "gaming", price: "Rp 1.800.000", description: "Top up 10000 diamonds Free Fire untuk weapon skin dan outfit" },
  { name: "⚔️ PUBG Mobile 8100 UC", category: "gaming", price: "Rp 2.000.000", description: "Top up 8100 UC PUBG Mobile untuk battle pass dan crate premium" },
  { name: "🎮 Steam Wallet $100", category: "gaming", price: "Rp 1.500.000", description: "Steam Wallet senilai $100 untuk pembelian game dan item in-game" },
  { name: "🏆 Call of Duty CP 9600", category: "gaming", price: "Rp 1.200.000", description: "COD Points 9600 untuk Call of Duty Mobile battle pass dan lucky draw" },
  { name: "⭐ Genshin Impact 6480 Genesis", category: "gaming", price: "Rp 1.600.000", description: "Genesis Crystals 6480 untuk gacha character dan weapon Genshin Impact" },
  { name: "🎯 Valorant 10000 VP", category: "gaming", price: "Rp 1.800.000", description: "Valorant Points 10000 untuk skin weapon dan battle pass Valorant" },
  { name: "🐉 Honor of Kings Voucher", category: "gaming", price: "Rp 500.000", description: "Voucher Honor of Kings untuk skin hero dan item premium" },
  
  // Design Assets Products
  { name: "🎨 Premium Font Collection", category: "design", price: "Rp 300.000", description: "Koleksi 500+ font premium untuk design grafis dan branding" },
  { name: "📸 Stock Photo Bundle 10K", category: "design", price: "Rp 800.000", description: "Bundle 10.000 stock photo HD untuk design dan marketing" },
  { name: "🎬 Video Template Pack", category: "design", price: "Rp 400.000", description: "Template video untuk Instagram, TikTok, dan YouTube siap edit" },
  { name: "🖼️ UI Kit Mobile App", category: "design", price: "Rp 500.000", description: "UI Kit lengkap untuk design aplikasi mobile modern" },
  { name: "🎭 Logo Template Bundle", category: "design", price: "Rp 250.000", description: "1000+ template logo vector dalam format AI dan EPS" },
  { name: "🌈 Color Palette Collection", category: "design", price: "Rp 100.000", description: "Koleksi color palette profesional untuk branding dan design" },
  { name: "📱 Social Media Templates", category: "design", price: "Rp 200.000", description: "Template design untuk semua platform social media" },
  { name: "🎪 Event Poster Templates", category: "design", price: "Rp 150.000", description: "Template poster event, flyer, dan banner promosi" },
  
  // Templates Products
  { name: "💼 Business Website Template", category: "templates", price: "Rp 400.000", description: "Template website bisnis responsive dengan admin panel" },
  { name: "🛒 E-commerce Template Pro", category: "templates", price: "Rp 600.000", description: "Template toko online lengkap dengan cart dan payment system" },
  { name: "📱 Landing Page Templates", category: "templates", price: "Rp 200.000", description: "Koleksi template landing page high-converting untuk marketing" },
  { name: "📊 Dashboard Admin Template", category: "templates", price: "Rp 500.000", description: "Template dashboard admin modern dengan charts dan analytics" },
  { name: "🎓 Education Platform Template", category: "templates", price: "Rp 700.000", description: "Template platform e-learning dengan LMS terintegrasi" },
  { name: "💻 Portfolio Website Template", category: "templates", price: "Rp 250.000", description: "Template portfolio kreatif untuk designer dan developer" },
  { name: "📝 Blog Template Modern", category: "templates", price: "Rp 300.000", description: "Template blog modern dengan SEO optimization dan dark mode" },
  { name: "🏥 Medical Website Template", category: "templates", price: "Rp 450.000", description: "Template website rumah sakit atau klinik dengan booking system" },
  
  // Digital Content Products
  { name: "📚 E-book Programming Guide", category: "digital", price: "Rp 150.000", description: "E-book panduan lengkap belajar programming dari dasar hingga mahir" },
  { name: "🎵 Royalty Free Music Pack", category: "digital", price: "Rp 200.000", description: "Koleksi musik bebas royalti untuk video dan podcast" },
  { name: "🎬 Video Editing Course", category: "digital", price: "Rp 300.000", description: "Kursus video editing lengkap dari basic hingga professional" },
  { name: "📊 Digital Marketing Guide", category: "digital", price: "Rp 250.000", description: "Panduan digital marketing dengan strategi terbaru dan case study" },
  { name: "🎨 Design Masterclass", category: "digital", price: "Rp 400.000", description: "Masterclass design grafis dengan project portfolio" },
  { name: "💻 Web Development Bootcamp", category: "digital", price: "Rp 500.000", description: "Bootcamp web development full-stack dengan sertifikat" },
  { name: "📱 Mobile App Development", category: "digital", price: "Rp 450.000", description: "Kursus membuat aplikasi mobile Android dan iOS" },
  { name: "🤖 AI & Machine Learning", category: "digital", price: "Rp 600.000", description: "Panduan belajar AI dan machine learning dengan Python" },
  
  // Physical Products
  { name: "👕 Tech Branded T-Shirt", category: "physical", price: "Rp 150.000", description: "Kaos branded tech company dengan bahan cotton combed premium" },
  { name: "🎒 Laptop Backpack Anti-Theft", category: "physical", price: "Rp 400.000", description: "Tas laptop dengan fitur anti-theft dan USB charging port" },
  { name: "☕ Smart Mug Temperature", category: "physical", price: "Rp 300.000", description: "Mug pintar yang menjaga suhu minuman dengan app control" },
  { name: "💡 RGB Smart Bulb", category: "physical", price: "Rp 200.000", description: "Lampu pintar RGB dengan kontrol suara dan app smartphone" },
  { name: "📱 Wireless Charging Pad", category: "physical", price: "Rp 250.000", description: "Charging pad wireless fast charging untuk smartphone dan earbuds" },
  { name: "🔊 Bluetooth Speaker Portable", category: "physical", price: "Rp 350.000", description: "Speaker bluetooth portable dengan bass boost dan waterproof" },
  { name: "⌚ Smartwatch Fitness", category: "physical", price: "Rp 800.000", description: "Smartwatch dengan fitness tracking dan heart rate monitor" },
  { name: "🎧 Noise Cancelling Earbuds", category: "physical", price: "Rp 600.000", description: "Earbuds dengan active noise cancelling dan wireless charging case" }
];

// Generate 1000 products using base products and additional unique products
export const productsData: Product[] = [];

// Add base products
baseProducts.forEach((product, index) => {
  productsData.push({
    id: index + 1,
    ...product
  });
});

// Add additional unique products
additionalProducts.forEach((product, index) => {
  productsData.push({
    id: baseProducts.length + index + 1,
    ...product
  });
});

// Fill remaining slots with variations of additional products
const remainingSlots = 1000 - productsData.length;
for (let i = 0; i < remainingSlots; i++) {
  const baseProduct = additionalProducts[i % additionalProducts.length];
  const variant = Math.floor(i / additionalProducts.length) + 1;
  const colors = ["Black", "White", "Blue", "Red", "Silver"];
  const color = colors[Math.min(variant - 1, colors.length - 1)];
  
  productsData.push({
    id: productsData.length + 1,
    name: `${baseProduct.name} - ${color}`,
    category: baseProduct.category,
    price: baseProduct.price,
    description: `${baseProduct.description} - Warna ${color.toLowerCase()}`
  });
}
