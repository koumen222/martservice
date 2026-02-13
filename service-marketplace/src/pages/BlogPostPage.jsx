import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Données simulées pour les articles
  const blogPosts = [
    {
      id: 1,
      title: "Les 10 tendances du digital au Cameroun en 2024",
      excerpt: "Découvrez les innovations technologiques qui transforment le paysage entrepreneurial camerounais cette année.",
      content: `
        <p class="mb-4">Le paysage digital camerounais connaît une transformation sans précédent en 2024. Les entreprises locales adoptent de plus en plus les technologies numériques pour rester compétitives sur un marché en pleine évolution.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">1. L'intelligence artificielle au service des PME</h2>
        <p class="mb-4">L'IA n'est plus réservée aux grandes entreprises. Les PME camerounaises intègrent désormais des solutions d'intelligence artificielle pour optimiser leurs opérations, personnaliser l'expérience client et automatiser les tâches répétitives.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">2. Le paiement mobile s'impose</h2>
        <p class="mb-4">Avec une pénétration du mobile qui dépasse 80%, les solutions de paiement mobile comme Orange Money et MTN Mobile Money deviennent le standard pour les transactions commerciales au Cameroun.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">3. L'e-commerce local prend son essor</h2>
        <p class="mb-4">Les plateformes e-commerce camerounaises gagnent en maturité, offrant des expériences d'achat adaptées aux réalités locales avec des options de livraison et de paiement pertinentes.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">4. Le télétravail devient la norme</h2>
        <p class="mb-4">La pandémie a accéléré l'adoption du télétravail. Aujourd'hui, de nombreuses entreprises camerounaises maintiennent des modèles hybrides, combinant travail au bureau et à distance.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">5. La cybersécurité devient une priorité</h2>
        <p class="mb-4">Avec la digitalisation croissante, la protection des données et des systèmes informatiques devient cruciale pour les entreprises de toutes tailles.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">Conclusion</h2>
        <p class="mb-4">Ces tendances montrent que le Cameroun est bien positionné pour tirer parti de la révolution digitale. Les entreprises qui embrassent ces changements auront un avantage concurrentiel significatif dans les années à venir.</p>
      `,
      author: "Jean Dupont",
      authorBio: "Expert en transformation digitale et consultant pour les PME au Cameroun",
      date: "15 Janvier 2024",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      readTime: "5 min",
      tags: ["Digital", "Tech", "Business", "Innovation"]
    },
    {
      id: 2,
      title: "Comment choisir le bon prestataire pour vos projets",
      excerpt: "Nos conseils pour sélectionner le professionnel idéal qui répondra parfaitement à vos besoins.",
      content: `
        <p class="mb-4">Choisir le bon prestataire est crucial pour le succès de vos projets. Voici notre guide complet pour vous aider à faire le bon choix.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">1. Définissez clairement vos besoins</h2>
        <p class="mb-4">Avant de chercher un prestataire, prenez le temps de définir précisément ce que vous attendez. Quels sont les objectifs ? Quel est le budget ? Quel est le délai ?</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">2. Vérifiez les compétences et l'expérience</h2>
        <p class="mb-4">Regardez le portfolio du prestataire, demandez des références et vérifiez ses réalisations passées dans des domaines similaires au vôtre.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">3. Évaluez la communication</h2>
        <p class="mb-4">Une bonne communication est essentielle. Le prestataire doit être capable de comprendre vos besoins et de vous tenir informé régulièrement de l'avancement du projet.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">Conclusion</h2>
        <p class="mb-4">Prenez le temps de bien choisir votre prestataire. Un bon choix vous fera gagner du temps et de l'argent, tandis qu'un mauvais choix peut coûter cher.</p>
      `,
      author: "Marie Nkoulou",
      authorBio: "Spécialiste en gestion de projet et consultante en stratégie d'affaires",
      date: "12 Janvier 2024",
      category: "Conseils",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      readTime: "3 min",
      tags: ["Conseils", "Prestataires", "Management"]
    },
    {
      id: 3,
      title: "L'importance de la digitalisation pour les PME",
      excerpt: "Pourquoi et comment les petites et moyennes entreprises devraient embrasser la transformation digitale.",
      content: `
        <p class="mb-4">La digitalisation n'est plus une option pour les PME, c'est une nécessité pour survivre et prospérer dans l'économie moderne.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">Pourquoi digitaliser votre PME ?</h2>
        <p class="mb-4">La digitalisation offre de nombreux avantages : meilleure productivité, accès à de nouveaux marchés, meilleure expérience client, et réduction des coûts opérationnels.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">Par où commencer ?</h2>
        <p class="mb-4">Commencez par les processus qui peuvent avoir le plus grand impact : la gestion de la relation client, la facturation, et la présence en ligne.</p>
        
        <h2 class="text-2xl font-bold mb-3 mt-6">Conclusion</h2>
        <p class="mb-4">La digitalisation est un voyage, pas une destination. Commencez petit, mesurez les résultats, et ajustez votre stratégie au fur et à mesure.</p>
      `,
      author: "Paul Tchinda",
      authorBio: "Consultant en transformation digitale et expert en systèmes d'information",
      date: "8 Janvier 2024",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
      readTime: "7 min",
      tags: ["Business", "Digital", "PME", "Stratégie"]
    }
  ];

  useEffect(() => {
    // Simuler le chargement de l'article
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id === parseInt(postId));
      if (foundPost) {
        setPost(foundPost);
        // Articles similaires (même catégorie)
        const similar = blogPosts.filter(p => p.id !== parseInt(postId) && p.category === foundPost.category);
        setRelatedPosts(similar);
      }
      setLoading(false);
    }, 500);
  }, [postId]);

  if (loading) {
    return (
      <PageLayout title="Chargement..." description="">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-200 border-t-primary-900 rounded-full mx-auto"></div>
          <p className="text-gray-500 mt-4">Chargement de l'article...</p>
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout title="Article non trouvé" description="">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas.</p>
          <Link 
            to="/blog" 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Retour au blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">Accueil</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/blog" className="hover:text-gray-700">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Hero Image */}
          <div className="h-64 md:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Icon name="clock" className="w-4 h-4" />
                {post.readTime} de lecture
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Icon name="calendar" className="w-4 h-4" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-200 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorBio}</p>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-600 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Partager cet article</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <span className="text-sm font-bold">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-sm font-bold">W</span>
                </button>
              </div>
            </div>

            {/* Author Bio Extended */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.author}</h3>
                  <p className="text-gray-600 mb-3">{post.authorBio}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                    Voir tous les articles →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-32">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mt-2 mb-2">
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Restez informé</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostPage;
