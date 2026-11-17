export const site = {
  name: 'MotorGarage',
  suffix: 'JCP',
  location: 'José C. Paz, Buenos Aires',
  // Número con código de país, sin +, espacios ni guiones. Ej.: 54911XXXXXXXX
  whatsapp: '5491173566558',
  // URL completa de la página pública de Facebook, por ejemplo: https://www.facebook.com/tu-pagina
  facebook: '',
};

export function whatsappUrl(message = 'Hola, MotorGarage JCP. Quisiera consultar por un servicio para mi vehículo.') {
  const phone = site.whatsapp.replace(/\D/g, '');
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}
