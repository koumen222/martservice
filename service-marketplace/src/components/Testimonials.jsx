import { useState } from 'react';
import Icon from './Icon';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marie Nkoulou",
      role: "CEO, TechStart Cameroun",
      company: "Douala",
      avatar: "MN",
      content: "Mart Business a transformé notre façon de travailler. Nous avons trouvé un développeur exceptionnel en moins de 48h. Le projet a été livré en avance et dépassait nos attentes. Vraiment recommandé !",
      rating: 5,
      project: "Développement Application Mobile",
      date: "Il y a 2 semaines",
      verified: true
    },
    {
      id: 2,
      name: "Jean-Pierre Tchamba",
      role: "Directeur Marketing",
      company: "Yaoundé",
      avatar: "JT",
      content: "En tant que freelances, ma plateforme m'a permis de décupler mon chiffre d'affaires. Les clients sont qualifiés et le processus de paiement est sécurisé. Je ne peux plus m'en passer !",
      rating: 5,
      project: "Consulting Marketing Digital",
      date: "Il y a 1 mois",
      verified: true
    },
    {
      id: 3,
      name: "Sophie Mengue",
      role: "Entrepreneuse",
      company: "Bafoussam",
      avatar: "SM",
      content: "J'ai lancé mon e-commerce grâce aux experts de Mart Business. Du design au développement, tout était parfait. Le support client est également remarquable.",
      rating: 5,
      project: "Création Site E-commerce",
      date: "Il y a 3 semaines",
      verified: true
    },
    {
      id: 4,
      name: "Alain Fotsing",
      role: "Photographe Professionnel",
      company: "Douala",
      avatar: "AF",
      content: "Mart Business m'a donné accès à des clients que je n'aurais jamais pu atteindre seul. La plateforme est simple à utiliser et les paiements sont toujours à l'heure.",
      rating: 5,
      project: "Services Photographiques",
      date: "Il y a 2 mois",
      verified: true
    },
    {
      id: 5,
      name: "Patricia Essomba",
      role: "Responsable Communication",
      company: "Garoua",
      avatar: "PE",
      content: "Nous avons travaillé avec plusieurs prestataires sur Mart Business et tous étaient excellents. La qualité est constante et le suivi des projets est très professionnel.",
      rating: 5,
      project: "Stratégie de Contenu",
      date: "Il y a 1 semaine",
      verified: true
    },
    {
      id: 6,
      name: "Michel Biloa",
      role: "Consultant IT",
      company: "Yaoundé",
      avatar: "MB",
      content: "Excellente plateforme pour trouver des missions rapidement. J'ai pu collaborer sur des projets intéressants et développer mon portfolio. Merci Mart Business !",
      rating: 5,
      project: "Consulting Technique",
      date: "Il y a 3 semaines",
      verified: true
    }
  ];

  const stats = [
    { value: "2K+", label: "Témoignages vérifiés" },
    { value: "4.9/5", label: "Note moyenne" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "85%", label: "Récurrents" }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-80 h-80 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary-50 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-secondary-700 text-sm font-semibold">Ce que nos clients disent</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Des histoires de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-600">
              succès partagées
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les expériences de milliers de clients et prestataires 
            qui font confiance à Mart Business au quotidien.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {testimonials[activeTestimonial].verified && (
                    <div className="ml-3 flex items-center text-sm text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Témoignage vérifié</span>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Projet: {testimonials[activeTestimonial].project}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{testimonials[activeTestimonial].date}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Tous les témoignages</h4>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                        activeTestimonial === index
                          ? 'bg-white shadow-md border border-primary-200'
                          : 'hover:bg-white/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 text-sm truncate">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        {testimonial.date}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center bg-green-50 rounded-xl p-3">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-green-800">Témoignages 100% authentiques</span>
                </div>
                <div className="flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm font-medium text-blue-800">Vérifiés par notre équipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Prêt à partager votre expérience ?
          </h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de clients satisfaits et faites partie de notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg">
              Laisser un témoignage
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Voir plus d'avis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
