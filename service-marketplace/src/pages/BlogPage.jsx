import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Données simulées pour les articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les 10 tendances du digital au Cameroun en 2024",
      excerpt: "Découvrez les innovations technologiques qui transforment le paysage entrepreneurial camerounais cette année.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Jean Dupont",
      date: "15 Janvier 2024",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Comment choisir le bon prestataire pour vos projets",
      excerpt: "Nos conseils pour sélectionner le professionnel idéal qui répondra parfaitement à vos besoins.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Marie Nkoulou",
      date: "12 Janvier 2024",
      category: "Conseils",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      readTime: "3 min",
      featured: false
    },
    {
      id: 3,
      title: "L'importance de la digitalisation pour les PME",
      excerpt: "Pourquoi et comment les petites et moyennes entreprises devraient embrasser la transformation digitale.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Paul Tchinda",
      date: "8 Janvier 2024",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
      readTime: "7 min",
      featured: false
    },
    {
      id: 4,
      title: "Guide complet pour devenir prestataire indépendant",
      excerpt: "Étapes clés et meilleures pratiques pour lancer votre activité de freelance avec succès.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Jean Dupont",
      date: "5 Janvier 2024",
      category: "Prestataires",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
      readTime: "10 min",
      featured: false
    },
    {
      id: 5,
      title: "Les meilleurs outils pour travailler à distance",
      excerpt: "Découvrez les applications et plateformes qui facilitent le télétravail et la collaboration.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Marie Nkoulou",
      date: "2 Janvier 2024",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      readTime: "6 min",
      featured: false
    },
    {
      id: 6,
      title: "Comment fixer vos tarifs en tant que prestataire",
      excerpt: "Stratégies et méthodes pour déterminer le juste prix de vos services et compétences.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Paul Tchinda",
      date: "28 Décembre 2023",
      category: "Prestataires",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      readTime: "8 min",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les articles', count: blogPosts.length },
    { id: 'Digital', name: 'Digital', count: 2 },
    { id: 'Conseils', name: 'Conseils', count: 1 },
    { id: 'Business', name: 'Business', count: 1 },
    { id: 'Prestataires', name: 'Prestataires', count: 2 }
  ];

  const recentPosts = blogPosts.slice(0, 3);

  // Filtrer les articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon name="search" className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Catégories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                          selectedCategory === category.id
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Articles récents</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="group block"
                      >
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-serif font-bold mb-3">Newsletter</h3>
                <p className="text-sm text-primary-100 mb-4">
                  Recevez nos derniers articles directement dans votre boîte mail
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {['Digital', 'Business', 'Prestataires', 'Conseils', 'Tech', 'Startups'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-600 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Featured Post */}
            {featuredPost && selectedCategory === 'all' && (
              <div className="mb-12">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                        Article vedette
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{featuredPost.readTime} de lecture</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                      <Link 
                        to={`/blog/${featuredPost.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                          <p className="text-xs text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        Lire la suite
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime} de lecture</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        Lire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Charger plus d'articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
