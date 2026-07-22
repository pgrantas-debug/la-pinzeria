// ============================================================
// KONFIGŪRACIJA — čia keičiami VISI kliento duomenys naujam projektui
// ============================================================
export const siteConfig = {
  business: {
    name: "La Pinzeria",
    logo: "/images/logo.png",
    phone: "+34951157975",
    whatsapp: "34951157975",
  },
  address: {
    street: "Edif. Coronado, C. Cta. Correa, s/n",
    city: "Marbella",
    region: "Málaga",
    postalCode: "29604",
    country: "ES",
    mapsQuery: "La+Pinzeria+Pinza+romana+%26+Vinos+Elviria+Marbella",
    mapsEmbedUrl: "https://www.google.com/maps?q=La+Pinzeria+Pinza+romana+%26+Vinos,+Edif.+Coronado,+C.+Cta.+Correa,+s%2Fn,+29604+Marbella,+Malaga&output=embed",
  },
  hours: {
    schedule: {
      0: null,
      1: { openHour: 18, closeHour: 23 },
      2: { openHour: 18, closeHour: 22 },
      3: { openHour: 17, closeHour: 23 },
      4: { openHour: 18, closeHour: 23 },
      5: { openHour: 18, closeHour: 23 },
      6: { openHour: 18, closeHour: 23 },
    },
    display: {
      es: "Lun 18:00-23:00 · Mar 18:00-22:00 · Mié 17:00-23:00 · Jue-Sáb 18:00-23:00 · Dom cerrado",
      en: "Mon 6:00pm-11:00pm · Tue 6:00pm-10:00pm · Wed 5:00pm-11:00pm · Thu-Sat 6:00pm-11:00pm · Sun closed",
    },
    closedDayLabel: {
      es: "Domingo",
      en: "Sunday",
    },
  },
  rating: {
    value: "4.6",
    count: "47",
  },
  hero: {
    image: "/images/hero-pizza.jpg",
    imageAlt: {
      es: "Pinza romana recién horneada",
      en: "Freshly baked Roman pinza",
    },
  },
  seo: {
    titleSuffix: "Elviria, Marbella - Pinza Romana, Pasta y Ensaladas",
  },
  reviews: [
    {
      stars: 5,
      text: {
        es: "Soy turista en Marbella y pedimos varias pizzas al hotel. Estaban espectaculares y el servicio de entrega fue excelente.",
        en: "I was visiting Marbella and ordered several pizzas to our hotel. They were stunning and the delivery service was excellent.",
      },
      author: "TheMothergoose3459",
    },
    {
      stars: 5,
      text: {
        es: "Pedimos por Just Eat y llegó rapidísimo. De las mejores pizzas que hemos probado, se nota que son caseras.",
        en: "Ordered on Just Eat and it came very fast. One of the nicest pizzas I've had, definitely homemade.",
      },
      author: "Ashleigh Overton",
    },
    {
      stars: 5,
      text: {
        es: "Perfecto para picar algo por la tarde con una copa de vino. La pizza estaba increíble.",
        en: "Perfect for an evening bite and a glass of wine. The pizza was amazing.",
      },
      author: "Chad Thomason",
    },
    {
      stars: 5,
      text: {
        es: "Pizzas fantásticas, ligeras y crujientes, con mucha variedad. El equipo fue súper amable y atento.",
        en: "Fantastic pizzas, really light and crispy, with a large variety. The staff were incredibly friendly and attentive.",
      },
      author: "Chris Winks",
    },
    {
      stars: 5,
      text: {
        es: "Gran pizza y personal increíble. Te hacen sentir como en casa, muy recomendable para pasar un buen rato.",
        en: "Great pizza and amazing staff. They are super welcoming and make you feel at home.",
      },
      author: "Jane Jean Miranda",
    },
    {
      stars: 5,
      text: {
        es: "Una propuesta simple y muy bien ejecutada: mejor hacer una cosa excelente que muchas mediocres.",
        en: "It's a simple setup done very well. Better to do one thing great than a hundred things mediocre.",
      },
      author: "Dr. Kenneth Berry",
    },
  ],
} as const;