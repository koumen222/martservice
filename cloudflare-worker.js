// Cloudflare Worker pour proxy l'API Railway
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // URL de votre backend Railway (remplacez avec votre URL réelle)
    const BACKEND_URL = 'https://votre-app-railway.railway.app';
    
    // Si la route commence par /api, rediriger vers le backend
    if (url.pathname.startsWith('/api/')) {
      // Construire la nouvelle URL
      const newUrl = new URL(url.pathname + url.search, BACKEND_URL);
      
      // Copier les headers importants
      const headers = new Headers();
      for (const [key, value] of request.headers.entries()) {
        headers.set(key, value);
      }
      
      // Faire la requête au backend
      const response = await fetch(newUrl.toString(), {
        method: request.method,
        headers: headers,
        body: request.body,
        redirect: 'follow'
      });
      
      // Copier la réponse du backend
      const responseHeaders = new Headers(response.headers);
      
      // Ajouter CORS headers si nécessaire
      responseHeaders.set('Access-Control-Allow-Origin', '*');
      responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders
      });
    }
    
    // Pour les autres routes, retourner une erreur 404
    return new Response('Not Found', { status: 404 });
  }
};
