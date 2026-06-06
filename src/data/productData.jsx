import { button, image } from "framer-motion/client";

const productData = [


  {
  id: 1,
  slug: "corrugated-boxes",
  title: "Corrugated Boxes",
  image: "https://i.ibb.co/ds5vnrjr/premium-photo-1765592886838-40e716f69502.avif",
  description: "High-quality corrugated boxes for safe packaging and transportation.",
  fullDescription:
    "Our Corrugated Boxes are manufactured using premium-quality kraft paper and advanced corrugation technology. These boxes provide excellent strength, durability, and protection during transportation and storage. Suitable for e-commerce, retail, logistics, food packaging, and industrial applications.",
  features: [
    "High strength corrugated board",
    "Excellent product protection",
    "Lightweight construction",
    "Custom sizes available",
    "Eco-friendly material"
  ],
  applications: [
    "E-commerce packaging",
    "Retail packaging",
    "Industrial goods",
    "Food packaging",
    "Logistics and shipping"
  ],

},
  {
    id: 2,
    slug: "Printed Packaging Boxes",
    title: 'Printed Packaging Boxes',
    image:'https://i.ibb.co/d4hNQv5n/photo-1612188852636-8f59921b41a6.avif',
    description:'Custom printed boxes with premium finishing and branding.',
    fullDescription: "Printed Packaging Boxes are designed to enhance brand visibility while providing secure product protection. These boxes can be customized with company logos, product information, and attractive graphics, making them ideal for retail and promotional packaging.",
    features: [
     "Premium Printing Quality",
     "Custom Branding",
     "Gloss & Matte Finish",
     "Strong Construction",
     "Attractive Appearance"
    ],
   applications: [
    "Retail Stores",
    "Food Packaging",
    "Cosmetics",
    "Gift Packaging"
    ]
    
  },
{
    id: 3,
    slug: "Retail Packaging Boxes",
    title: 'Retail Packaging Boxes',
    image:'https://i.ibb.co/pjPDdjmc/corrugated-boxes.jpg',
    description:'Premium retail packaging solutions for modern businesses.',
    fullDescription:
     "Our Retail Packaging Boxes are crafted to create a premium unboxing experience while ensuring product safety. These boxes combine visual appeal with structural integrity, making them ideal for retail displays and customer deliveries.",
    features: [
     "Elegant Design",
     "Custom Printing",
     "Durable Material",
     "Eco-Friendly Packaging",
     "Premium Finish"
    ],
    applications: [
    "Retail Shops",
    "Fashion Products",
    "Electronics",
    "Consumer Goods"
    ]
  },
  {
  id: 4,
  slug:"Multicolor Die Cut Box",
  title: 'Multicolor Die Cut Box',
  // image:'https://i.ibb.co/gKH9ccM/43516bfd-991e-4f4d-9ef6-5bd882bc745a.png',
  image:'https://i.ibb.co/bRmcWm96/43516bfd-991e-4f4d-9ef6-5bd882bc745a.webp',
  description:'Stylish die-cut packaging box available in multiple colors for branding and retail use.',
     fullDescription:
"Multicolor Die Cut Boxes are uniquely designed packaging solutions manufactured with precision cutting technology. Their attractive appearance and customizable shapes help brands stand out while offering reliable product protection.",

features: [
"Custom Shapes",
"Multicolor Printing",
"Premium Finishing",
"Strong Structure",
"Brand Enhancement"
],

applications: [
"Retail Packaging",
"Gift Packaging",
"Electronics",
"Promotional Products"
]
},
  {
    id: 5,
    slug:'Custom Carton Boxes',
    title: 'Custom Carton Boxes',
    image: 'https://i.ibb.co/V0n6zsVd/premium-photo-1765816720952-d558d7dcb18b.avif',
    description:'Customized carton packaging solutions for all industries.',
    fullDescription:
"Our Custom Carton Boxes are tailored according to specific product dimensions and packaging requirements. They provide excellent protection and branding opportunities for businesses across multiple industries.",

features: [
"Custom Dimensions",
"Strong Material",
"Brand Printing",
"Cost Effective",
"Versatile Design"
],

applications: [
"E-Commerce",
"Retail Industry",
"Food Packaging",
"Manufacturing"
]
  },
{
  id: 6,
  slug:'Oil Boxes',
  title: 'Oil Boxes',
  image:'https://i.ibb.co/xS6cXsDC/Chat-GPT-Image-May-29-2026-06-39-21-PM.png',
  description:'Heavy-duty oil box designed to prevent leakage and ensure safe delivery.',
  fullDescription:
"Oil Boxes are specially designed to safely store and transport edible oils, lubricants, and liquid products. Their durable construction helps prevent leakage and ensures safe handling during transportation.",

features: [
"Leak Resistant Design",
"Heavy-Duty Structure",
"Moisture Protection",
"Safe Transportation",
"Custom Sizes"
],

applications: [
"Cooking Oil Industry",
"Lubricant Packaging",
"Chemical Industry",
"Wholesale Distribution"
]
},
{
  id: 7,
  slug:'Food Product Export Box',
  title: "Food Product Export Box",
  image: "https://i.ibb.co/DP46NSnt/printed-interlock-corrugated-carton-322.jpg",
  description: "Export-grade packaging box for safe international shipping of food products.",
 fullDescription:
"Our Food Product Export Boxes are manufactured to meet international shipping standards. These boxes provide superior protection against moisture, impact, and handling damage during long-distance transportation.",

features: [
"Export Grade Quality",
"Moisture Resistant",
"Strong Construction",
"Food Safe Packaging",
"Reliable Protection"
],

applications: [
"Food Exporters",
"Agriculture Industry",
"Frozen Foods",
"International Shipping"
]
},
  {
    id: 8,
    slug:'Heavy Duty Boxes',
    title: 'Heavy Duty Boxes',
    image: 'https://i.ibb.co/mVJWh2P0/ou-Ki-Nn-P4-Xs-Erkt1-Vx-FAu-Od-Gf-MRrj-QMItp-NUPxpano-Ip-Lk-PHt05qb42-Fv3-Ar-XMkf-R-c-S58u-EGz-Wn-Pf-St.jpg',
    description:'Strong heavy-duty corrugated boxes for industrial packaging.',
    fullDescription:
"Heavy Duty Boxes are engineered for transporting large and heavy products safely. These boxes feature reinforced corrugated layers that provide exceptional strength and durability.",

features: [
"Extra Load Capacity",
"Industrial Strength",
"Reinforced Structure",
"Long Lasting",
"Superior Protection"
],

applications: [
"Industrial Equipment",
"Machinery Parts",
"Automotive Components",
"Heavy Goods Shipping"
]
  },

  {
    id: 9,
    slug:'Export Packaging',
    title: 'Export Packaging',
    // image:'https://i.ibb.co/kpJh079/0f-R3-ENti0-NYBe-Oyx-UPYV2uuv-Akmz-STu-X1tjtsx-6-ENd-MXYi9we-f-RJpv-Co-As-LS5-C8-PUOk-Dh-Mz-O155b-QUq-Ro.jpg',
    image:'https://i.ibb.co/Tx90q9PZ/box1.webp',
    description:'Secure export packaging boxes for logistics and shipping.',
   fullDescription:
"Our Export Packaging solutions ensure that products reach international destinations safely. Manufactured with premium-grade materials, these boxes are designed to withstand harsh shipping environments.",

features: [
"International Standards",
"Durable Material",
"Impact Resistance",
"Moisture Protection",
"Custom Design"
],

applications: [
"Export Businesses",
"International Logistics",
"Manufacturing Industry",
"Global Distribution"
]
  },

   {
  id: 10,
  slug:'Corrugated Rolls',
  title: 'Corrugated Rolls',
  image:'https://i.ibb.co/fzZ7sJvh/FNpjt-LAmyx-Z6wn-Ujt-A5-L2v-ZPw-CKb8a17-P6fxlni6al54q6x-Oq-Hy-J5l-Baf-Dk-YFu-DG48rugc-Kv8-E-NZg-X3vzhbg.jpg',
  description:'Premium quality corrugated rolls used for protective packaging and wrapping.',
 fullDescription:
"Corrugated Rolls provide flexible cushioning and protective wrapping for delicate products during storage and transportation. They are lightweight, economical, and environmentally friendly.",

features: [
"Flexible Packaging",
"Shock Absorption",
"Lightweight Material",
"Eco-Friendly",
"Cost Effective"
],

applications: [
"Furniture Packaging",
"Glass Protection",
"Industrial Wrapping",
"Shipping Protection"
]
},

{
  id: 11,
  slug:'Corrugated Sheets',
  title: 'Corrugated Sheets',
  image:'https://i.ibb.co/xtjyBkXB/POMswy-F7yi-Ewe-Ggx4-IR3-NXQXz-Xpq90-z-E1-Fm-1w-OJHNm-RKsca-M2-ZH0-GHi-Nf-LM92-V7-MG-Ca-JHEj1u-EECDK-XE5f3.jpg',
  description:'Durable corrugated sheets suitable for industrial packaging.',
 fullDescription:
"Corrugated Sheets are versatile packaging materials used for cushioning, partitions, and custom packaging solutions. They offer excellent durability and protection for a wide range of products.",

features: [
"High Strength",
"Lightweight Design",
"Custom Sizes",
"Reusable Material",
"Excellent Protection"
],

applications: [
"Industrial Packaging",
"Furniture Industry",
"Automotive Parts",
"Custom Packaging"
]
},

{
  id: 12,
  slug:'Inner Partition Divider',
  title: "Inner Partition Divider",
  image: "https://i.ibb.co/MkR5xkfG/71kn-LYQTwe-L.jpg",
  description: "Protective inner divider for safe product separation inside boxes.",
fullDescription:
"Inner Partition Dividers are designed to separate and protect multiple products within a single box. They prevent collision and damage during transportation, ensuring safe product delivery.",

features: [
"Product Separation",
"Damage Prevention",
"Custom Compartments",
"Easy Installation",
"Strong Material"
],

applications: [
"Glass Bottles",
"Electronics",
"Cosmetics",
"Food Products"
]
},

]

export default productData;