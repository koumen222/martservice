require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('./models/Service');
const Provider = require('./models/Provider');

const seedServices = [
  { title: "Design Graphique", category: "Création", description: "Logo, identité visuelle et supports de communication professionnels.", price: "À partir de 30 000 XAF", priceValue: 30000, rating: 4.9, reviews: 127, icon: "design", featured: true },
  { title: "Développement Web", category: "Technologie", description: "Sites sur mesure, applications et solutions digitales personnalisées.", price: "À partir de 100 000 XAF", priceValue: 100000, rating: 4.8, reviews: 89, icon: "code", featured: true },
  { title: "Marketing Digital", category: "Communication", description: "Stratégie digitale, réseaux sociaux et campagnes publicitaires.", price: "À partir de 50 000 XAF/mois", priceValue: 50000, rating: 4.7, reviews: 203, icon: "mobile" },
  { title: "Consulting Business", category: "Conseil", description: "Stratégie d'entreprise, optimisation des processus et accompagnement.", price: "À partir de 120 000 XAF", priceValue: 120000, rating: 4.9, reviews: 156, icon: "chart" },
  { title: "Formation Professionnelle", category: "Éducation", description: "Programmes sur mesure pour le développement des compétences.", price: "À partir de 15 000 XAF", priceValue: 15000, rating: 4.8, reviews: 67, icon: "education" },
  { title: "Services Juridiques", category: "Droit", description: "Conseil juridique, rédaction de contrats et accompagnement légal.", price: "À partir de 60 000 XAF", priceValue: 60000, rating: 5.0, reviews: 94, icon: "legal" },
  { title: "Photographie Professionnelle", category: "Médias", description: "Shooting photo, retouche et création de contenu visuel de haute qualité.", price: "À partir de 40 000 XAF", priceValue: 40000, rating: 4.8, reviews: 145, icon: "camera" },
  { title: "Support Technique", category: "Informatique", description: "Maintenance informatique, dépannage et assistance technique rapide.", price: "À partir de 25 000 XAF", priceValue: 25000, rating: 4.6, reviews: 189, icon: "support" },
  { title: "Traduction Professionnelle", category: "Langues", description: "Traduction de documents, interprétation et services multilingues.", price: "À partir de 20 000 XAF", priceValue: 20000, rating: 4.7, reviews: 234, icon: "speech" },
  { title: "Architecture d'Intérieur", category: "Design", description: "Conception d'espaces, décoration et aménagement intérieur personnalisé.", price: "À partir de 80 000 XAF", priceValue: 80000, rating: 4.9, reviews: 167, icon: "home" },
];

// serviceIndex maps old numeric IDs to array index (0-based)
const seedProviders = [
  { name: "Kamga Jean-Pierre", serviceIndices: [0], city: "Douala", rating: 4.9, reviews: 87, phone: "+237 6 90 12 34 56", bio: "Designer graphique avec 8 ans d'expérience en identité visuelle.", available: true },
  { name: "Ngo Bassa Marie", serviceIndices: [0], city: "Yaoundé", rating: 4.7, reviews: 62, phone: "+237 6 77 88 99 00", bio: "Spécialiste en branding et communication visuelle.", available: true },
  { name: "Tchinda Paul", serviceIndices: [1], city: "Douala", rating: 4.8, reviews: 104, phone: "+237 6 55 44 33 22", bio: "Développeur full-stack spécialisé en React et Node.js.", available: true },
  { name: "Fotso Armelle", serviceIndices: [1], city: "Bafoussam", rating: 4.6, reviews: 53, phone: "+237 6 99 88 77 66", bio: "Développeuse web avec expertise en e-commerce.", available: true },
  { name: "Mbarga Samuel", serviceIndices: [2], city: "Yaoundé", rating: 4.7, reviews: 91, phone: "+237 6 70 60 50 40", bio: "Expert en marketing digital et stratégie réseaux sociaux.", available: true },
  { name: "Eyinga Claire", serviceIndices: [2], city: "Douala", rating: 4.5, reviews: 78, phone: "+237 6 80 70 60 50", bio: "Community manager et spécialiste publicité en ligne.", available: true },
  { name: "Tagne Michel", serviceIndices: [3], city: "Douala", rating: 4.9, reviews: 120, phone: "+237 6 91 82 73 64", bio: "Consultant business avec 15 ans d'expérience en stratégie.", available: true },
  { name: "Nana Brigitte", serviceIndices: [4], city: "Yaoundé", rating: 4.8, reviews: 45, phone: "+237 6 50 40 30 20", bio: "Formatrice certifiée en développement des compétences.", available: true },
  { name: "Atangana Pierre", serviceIndices: [5], city: "Yaoundé", rating: 5.0, reviews: 67, phone: "+237 6 22 33 44 55", bio: "Avocat au barreau du Cameroun, spécialiste droit des affaires.", available: true },
  { name: "Djomou Eric", serviceIndices: [5], city: "Douala", rating: 4.8, reviews: 89, phone: "+237 6 11 22 33 44", bio: "Juriste d'entreprise avec expertise en contrats commerciaux.", available: true },
  { name: "Kenfack Alain", serviceIndices: [6], city: "Douala", rating: 4.8, reviews: 112, phone: "+237 6 44 55 66 77", bio: "Photographe professionnel spécialisé en événementiel.", available: true },
  { name: "Mbouda Sylvie", serviceIndices: [6], city: "Yaoundé", rating: 4.6, reviews: 58, phone: "+237 6 33 22 11 00", bio: "Photographe portraitiste et retoucheuse photo.", available: true },
  { name: "Nguemo David", serviceIndices: [7], city: "Douala", rating: 4.6, reviews: 145, phone: "+237 6 88 77 66 55", bio: "Technicien informatique certifié, dépannage rapide.", available: true },
  { name: "Simo Fabrice", serviceIndices: [8], city: "Yaoundé", rating: 4.7, reviews: 76, phone: "+237 6 66 55 44 33", bio: "Traducteur assermenté français-anglais-allemand.", available: true },
  { name: "Wamba Christine", serviceIndices: [9], city: "Douala", rating: 4.9, reviews: 93, phone: "+237 6 77 66 55 44", bio: "Architecte d'intérieur avec un style moderne et africain.", available: true },
  { name: "Essomba Rodrigue", serviceIndices: [3, 4], city: "Douala", rating: 4.7, reviews: 68, phone: "+237 6 12 34 56 78", bio: "Coach business et formateur en leadership.", available: true },
  { name: "Biya Rose", serviceIndices: [7, 1], city: "Yaoundé", rating: 4.5, reviews: 34, phone: "+237 6 98 76 54 32", bio: "Technicienne réseau et développeuse junior.", available: true },
  { name: "Nkoulou Gaston", serviceIndices: [9, 0], city: "Yaoundé", rating: 4.8, reviews: 51, phone: "+237 6 45 67 89 01", bio: "Designer d'espace et graphiste polyvalent.", available: true },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connecté');

    // Clear existing data
    await Service.deleteMany({});
    await Provider.deleteMany({});
    console.log('Données existantes supprimées');

    // Insert services
    const createdServices = await Service.insertMany(seedServices);
    console.log(`${createdServices.length} services créés`);

    // Map service indices to MongoDB ObjectIds and insert providers
    const providersToInsert = seedProviders.map(p => ({
      name: p.name,
      serviceIds: p.serviceIndices.map(i => createdServices[i]._id),
      city: p.city,
      rating: p.rating,
      reviews: p.reviews,
      phone: p.phone,
      bio: p.bio,
      available: p.available,
    }));

    const createdProviders = await Provider.insertMany(providersToInsert);
    console.log(`${createdProviders.length} prestataires créés`);

    console.log('\nSeed terminé avec succès !');
    console.log('\nServices:');
    createdServices.forEach(s => console.log(`  - ${s.title} (${s._id})`));
    console.log('\nPrestataires:');
    createdProviders.forEach(p => console.log(`  - ${p.name} (${p._id})`));

    process.exit(0);
  } catch (err) {
    console.error('Erreur seed:', err.message);
    process.exit(1);
  }
}

seed();
