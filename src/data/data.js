
export const products = [
    {
        id: "1",
        title: "Great Ball Mystery Bag",
        isFavorite: false,
        image: "/images/product (1).png",
        price: 40,
        oldPrice: 55,
        rating: 4.8,
        currency: "$",
        description: "A mysterious bag containing various great balls."
    },
    {
        id: "2",
        title: "Toronto Raptors Jersey",
        isFavorite: true,
        image: "/images/product (2).png",
        price: 40,
        oldPrice: 55,
        rating: 4.8,
        currency: "$",
        description: "Official Toronto Raptors team jersey."
    },
    {
        id: "3",
        title: "Pokémon TCG Set",
        isFavorite: true,
        image: "/images/product (3).png",
        price: 40,
        oldPrice: 55,
        rating: 4.8,
        currency: "$",
        description: "A complete set of Pokémon Trading Card Game."
    },
    {
        id: "4",
        title: "Lakers Basketball Jersey",
        isFavorite: false,
        image: "/images/product (4).png",
        price: 40,
        oldPrice: 55,
        rating: 4.8,
        currency: "$",
        description: "Official Lakers team basketball jersey."
    },
    {
        id: "5",
        title: "Vintage Sports Card",
        isFavorite: true,
        image: "/images/product (5).png",
        price: 65,
        oldPrice: 80,
        rating: 4.5,
        currency: "$",
        description: "A rare vintage sports trading card."
    },
    {
        id: "6",
        title: "Collectible Action Figure",
        isFavorite: true,
        image: "/images/product (6).png",
        price: 30,
        oldPrice: 45,
        rating: 4.9,
        currency: "$",
        description: "Highly detailed collectible action figure."
    },
    {
        id: "7",
        title: "Booster Box",
        isFavorite: false,
        image: "/images/product (7).png",
        price: 120,
        oldPrice: 150,
        rating: 4.9,
        currency: "$",
        description: "A booster box with 36 packs."
    },
    {
        id: "8",
        title: "Charizard UPC",
        isFavorite: false,
        image: "/images/product (8).png",
        price: 120,
        oldPrice: 140,
        rating: 5.0,
        currency: "$",
        description: "A sought-after Charizard Ultra-Premium Collection."
    },
    {
        id: "9",
        title: "Mystery Box",
        isFavorite: true,
        image: "/images/product (9).png",
        price: 100,
        oldPrice: null,
        rating: 4.7,
        currency: "$",
        description: "A mystery box with assorted items."
    },
    {
        id: "10",
        title: "Slabbed Card",
        isFavorite: false,
        image: "/images/product (10).png",
        price: 80,
        oldPrice: 100,
        rating: 4.8,
        currency: "$",
        description: "A professionally graded and slabbed trading card."
    },
    {
        id: "11",
        title: "Sports Jersey",
        isFavorite: true,
        image: "/images/product (11).png",
        price: 90,
        oldPrice: 110,
        rating: 4.6,
        currency: "$",
        description: "An authentic sports jersey."
    },
    {
        id: "12",
        title: "Trading Card Binder",
        isFavorite: false,
        image: "/images/product (12).png",
        price: 25,
        oldPrice: 30,
        rating: 4.9,
        currency: "$",
        description: "A binder to store and protect your trading cards."
    },
];


export const productDetailsDataMap = {
  "1": { 
    id: "1",
    name: "Men's Retro-Style Basketball Jersey",
    brand: "AC Milan",
    price: 89.00,
    oldPrice: 105.00,
    discount: "Save 15%",
    rating: 4.8,
    numberOfReviews: 48,
    inStock: true,
    shortDescription: "Show your team pride in style with this premium basketball T-shirt jersey — perfect for game day, casual wear, or repping your favorite player off the court. Made with a moisture-wicking, quality fabric, this jersey combines classic design with everyday comfort.",
    images: [
      "/images/image (1).png",
      "/images/image (2).png",
      "/images/image (3).png",
      "/images/image (4).png",
      "/images/image (5).png",
    ],
    colors: [
      {
        name: "Red",
        hex: "#FF5000",
        image: "/images/image (1).png",
      },
      {
        name: "Green",
        hex: "#00FF00",
        image: "/images/image (2).png",
      },
      {
        name: "Pink",
        hex: "#FFC0CB",
        image: "/images/image (3).png",
      },
      {
        name: "White",
        hex: "#FFFFFF",
        image: "/images/image (1).png",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    quantityAvailable: 100,
    descriptionTabs: [
      {
        title: "Description",
        content:
          "Improve your game and elevate your style with this premium basketball jersey crafted from a lightweight, breathable mesh fabric. This jersey delivers comfort, durability, and a street-ready look that makes it perfect both on and off the court. This is not just a piece of fanwear — it's a tribute to the game you love. Designed to make pro jersey details while maintaining a cool T-shirt fit, it's a must-have for collectors, sports fans, and style-conscious hoopers alike.",
      },
      {
        title: "Reviews",
        reviews: 6,
        content: [
          {
            id: "review_DR_001",
            author: "Dianne Russell",
            date: "05 January, 2025",
            location: "New York, USA",
            rating: 5,
            comment:
              "I bought the Messi Argentina home jersey and was blown away by the fabric quality. The fit is true to size and super comfortable - feels just like the official kit. Definitely worth the price!",
            authorImage: "/images/avatar (1).png",
          },
          {
            id: "review_DR_002",
            author: "Darlene Robertson",
            date: "03 January, 2025",
            location: "California, USA",
            rating: 4,
            comment:
              "The material is excellent and the print looks sharp. Only reason I'm giving 4 stars is because the medium was a bit looser than expected — the fit is true to size and super comfortable and good. I might size down next time.",
            authorImage: "/images/avatar (2).png",
          },
          {
            id: "review_FM_003",
            author: "Floyd Miles",
            date: "02 January, 2025",
            location: "Texas, USA",
            rating: 5,
            comment:
              "Ordered the Ronaldo Man Utd jersey for my son's birthday — he hasn't taken it off since! Great quality, vibrant color.",
            authorImage: "/images/avatar (2).png",
          },
          {
            id: "review_DS_004",
            author: "Darrell Steward",
            date: "01 January, 2025",
            location: "Florida, USA",
            rating: 5,
            comment:
              "I bought the Messi Argentina home jersey and was blown away by the fabric quality. The fit is true to size and super comfortable.",
            authorImage: "/images/avatar (3).png",
          },
          {
            id: "review_DM_005",
            author: "Daniel Martin",
            location: "New York, USA",
            rating: 4,
            comment:
              "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn't be happier with my purchase!",
            authorImage: "/images/avatar (4).png",
          },
          {
            id: "review_EP_006",
            author: "Eleanor Pena",
            location: "California, USA",
            rating: 4.5,
            comment:
              "I bought a bracelet for my mom's birthday, and she was beyond thrilled! The attention to detail, the shine, and the fit were all perfect. I am very much like it, I highly recommend this store for anyone looking for meaningful, high-quality jewelry.",
            authorImage: "/images/avatar (1).png",
          },
        ],
      },
    ],
    productHighlights: [
      "Team & Player Design: Features authentic team colors, name, and player number screen-printed front and back with precision detail.",
      "Material Quality: Made from 100% breathable polyester mesh for all-day comfort. Keeps you cool during summer games or street play.",
      "Fit & Feel: Classic regular fit — roomy through the chest and waist without being baggy. Soft on skin with a moisture-wicking feel.",
      "Durability: Reinforced stitching on the hem and sleeves to handle wear and movement. Color won’t fade after washing.",
      "Lifestyle Ready: Easy to pair with jeans, joggers, shorts, or layered under a hoodie or jacket. Wear it to games, hangouts, or just everyday street style.",
    ],
    sizingAndFit: [
      "Available Sizes: S, M, L, XL, XXL",
      "Model is wearing: Size L - Height: 6'1\"",
      "Fit Type: Standard fit — true to size. Size up for a looser.",
    ],
  },
};

export const initialCartItems = [
  {
    id: "1",
    image: "/images/product (1).png",
    name: "Great Ball Mystery Bag",
    price: 40.00,
    quantity: 2,
    selected: false,
  },
  {
    id: "2",
    image: "/images/product (2).png",
    name: "Pokemon Assorted Booster Packs",
    price: 35.00,
    quantity: 1,
    selected: false,
  },
  {
    id: "3",
    image: "/images/product (3).png",
    name: "Ultimate Player T-Shirt",
    price: 55.00,
    quantity: 4,
    selected: false,
  },
  {
    id: "4",
    image: "/images/product (4).png",
    name: "Pokemon TCG Collectors",
    price: 30.00,
    quantity: 2,
    selected: false,
  },
  {
    id: "5",
    image: "/images/product (5).png",
    name: "Victory Training Tee",
    price: 65.00,
    quantity: 3,
    selected: false,
  },
  {
    id: "6",
    image: "/images/product (6).png",
    name: "Champion's Workout Tee",
    price: 50.00,
    quantity: 2,
    selected: false,
  },
];

export const orders = [
  {
    id: "1",
    orderNumber: "#123456",
    date: "12/03/25",
    product: {
      name: "Ultimate Player T-Shirt",
      qty: 2,
      image: "/images/product (1).png",
    },
    total: 48.00,
    status: "In-progress",
  },
  {
    id: "2",
    orderNumber: "#123457",
    date: "10/03/25",
    product: {
      name: "Pokemon TCG Collectors",
      qty: 2,
      image: "/images/product (2).png",
    },
    total: 55.00,
    status: "Shipped",
  },
  {
    id: "3",
    orderNumber: "#123458",
    date: "09/03/25",
    product: {
      name: "Champion's Workout Tee",
      qty: 2,
      image: "/images/product (3).png",
    },
    total: 96.00,
    status: "In-progress",
  },
  {
    id: "4",
    orderNumber: "#123459",
    date: "07/03/25",
    product: {
      name: "Great Ball Mystery Bag",
      qty: 2,
      image: "/images/product (4).png",
    },
    total: 24.00,
    status: "Delivered",
  },
  {
    id: "5",
    orderNumber: "#123460",
    date: "06/03/25",
    product: {
      name: "Pokemon TCG Collectors",
      qty: 2,
      image: "/images/product (5).png",
    },
    total: 56.00,
    status: "Delivered",
  },
  {
    id: "6",
    orderNumber: "#123461",
    date: "05/03/25",
    product: {
      name: "Victory Training Tee",
      qty: 2,
      image: "/images/product (6).png",
    },
    total: 92.00,
    status: "Delivered",
  },
  {
    id: "7",
    orderNumber: "#123462",
    date: "01/03/25",
    product: {
      name: "Pokemon TCG Collectors",
      qty: 2,
      image: "/images/product (7).png",
    },
    total: 78.00,
    status: "Delivered",
  },
];

export const faqItems = [
    {
        id: "faq-1",
        question: "How do I place an order?",
        answer: "Placing an order is easy! Browse our collections, select your favorite piece, customize it, and proceed to checkout. Follow the steps to enter your details and complete the payment. We accept major credit and debit cards, PayPal, Apple, Google Pay, and other secure payment options." // স্ক্রিনশট থেকে সম্পূর্ণ উত্তর
    },
    {
        id: "faq-2",
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, Amex), PayPal, and other secure payment gateways. You can see the full list during checkout."
    },
    {
        id: "faq-3",
        question: "Can I customize my jewelry?",
        answer: "Yes, many of our jewelry pieces can be customized. Look for the 'Customize' option on the product page or contact us for bespoke designs."
    },
    {
        id: "faq-4",
        question: "Can I submit my own design for a custom order?",
        answer: "Absolutely! We welcome custom design requests. Please contact our design team with your ideas and we'll guide you through the process."
    },
    {
        id: "faq-5",
        question: "Can I exchange my item for a different size or style?",
        answer: "Exchanges are possible within our return period, subject to availability and condition of the item. Please review our Exchange Policy for more details."
    },
    {
        id: "faq-6",
        question: "Are there any items that cannot be returned?",
        answer: "Certain personalized or custom-made items may not be eligible for return unless there is a defect or error on our part. Please check the product description or our Return Policy for specifics."
    },
];

export const faqItems2 = [
    {
        id: "faq-1",
        question: "Are all your products authentic?",
        answer: "Yes — we guarantee that every product we sell is 100% authentic. All sealed Pokémon items come directly from trusted distributors, and our sports singles and jerseys are carefully sourced and inspected before shipping."
    },
    {
        id: "faq-2",
        question: "How do I know what condition my card or product is in?",
        answer: "We accept major credit cards (Visa, MasterCard, Amex), PayPal, and other secure payment gateways. You can see the full list during checkout."
    },
    {
        id: "faq-3",
        question: "How long does shipping take?",
        answer: "Yes, many of our jewelry pieces can be customized. Look for the 'Customize' option on the product page or contact us for bespoke designs."
    },
    {
        id: "faq-4",
        question: "What payment methods do you accept?",
        answer: "Absolutely! We welcome custom design requests. Please contact our design team with your ideas and we'll guide you through the process."
    },
    {
        id: "faq-5",
        question: "Do you accept exchanges for clothing sizes?",
        answer: "Exchanges are possible within our return period, subject to availability and condition of the item. Please review our Exchange Policy for more details."
    },
    {
        id: "faq-6",
        question: "Is my personal information safe?",
        answer: "Certain personalized or custom-made items may not be eligible for return unless there is a defect or error on our part. Please check the product description or our Return Policy for specifics."
    },
];