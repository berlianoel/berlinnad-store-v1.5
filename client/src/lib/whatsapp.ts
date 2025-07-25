export function openWhatsApp(message: string, serviceTitle?: string): void {
  const phoneNumber = '6281215756534';
  let finalMessage = message;
  
  if (serviceTitle) {
    finalMessage = `Halo, saya tertarik dengan "${serviceTitle}". ${message}`;
  }
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(whatsappUrl, '_blank');
}
