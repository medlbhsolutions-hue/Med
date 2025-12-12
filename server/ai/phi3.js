import axios from 'axios';

// Configuration for Phi 3 AI model
const PHI3_API_URL = process.env.PHI3_API_URL || 'http://localhost:11434/api/generate';
const PHI3_MODEL = process.env.PHI3_MODEL || 'phi';

// System prompt for medical context
const SYSTEM_PROMPT = `Tu es un assistant IA pour MedLBH Solutions, une plateforme spécialisée dans les solutions de santé et la gestion des cliniques privées.

Ton rôle:
- Fournir des informations sur les services de MedLBH (recrutement médical, structuration, conseil stratégique, gestion)
- Aider les utilisateurs avec des questions sur la santé, les cliniques et les services médicaux
- Être professionnel, courtois et en français
- Diriger les utilisateurs vers les ressources appropriées si nécessaire

Contexte MedLBH:
- Services: Recrutement de médecins, accompagnement de cliniques, conseil stratégique, gestion financière
- Fondatrice: Nadia Labhilil
- Localisation: Casablanca - Grenoble
- Contact: llabhilil@yahoo.fr, +212 6 90 40 52 69
- Valeurs: Excellence, Éthique, Réactivité, Innovation`;

export async function generatePhi3Response(userMessage, context = '') {
  try {
    // Build the prompt
    const fullPrompt = `${SYSTEM_PROMPT}

Contexte: ${context || 'Nouvelle conversation'}

Question: ${userMessage}

Réponse:`;

    // Try to call local Phi 3 via Ollama
    try {
      const response = await axios.post(PHI3_API_URL, {
        model: PHI3_MODEL,
        prompt: fullPrompt,
        stream: false,
        temperature: 0.7,
      }, {
        timeout: 30000
      });

      return response.data.response.trim();
    } catch (ollama_error) {
      console.warn('Phi 3 local server not available, using fallback');
      return generateFallbackResponse(userMessage);
    }
  } catch (error) {
    console.error('Error generating response:', error);
    return generateFallbackResponse(userMessage);
  }
}

// Fallback response generator
function generateFallbackResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Keyword-based responses
  const responses = {
    recrutement: "MedLBH Solutions offre des services complets de recrutement de médecins spécialistes et cadres de santé. Nous nous occupons de la sélection, de l'accompagnement administratif (CNOM, visa, équivalence) et de l'intégration professionnelle. Souhaitez-vous plus d'informations?",
    
    structuration: "Notre service de structuration accompagne le lancement de votre clinique avec des études de faisabilité, constitution d'équipe médicale, élaboration du parcours patient et assistance à la certification.",
    
    conseil: "Notre équipe de conseil stratégique négocie les conventions de prestations, développe les partenariats et aide au positionnement stratégique de votre clinique.",
    
    contact: "Vous pouvez nous contacter via: Email: llabhilil@yahoo.fr | Téléphone: +212 6 90 40 52 69 | Localisation: Casablanca - Grenoble",
    
    nadia: "Nadia Labhilil est la fondatrice de MedLBH Solutions. Elle apporte son expertise dans la mise en relation des talents médicaux avec les établissements et institutions.",
    
    clinique: "MedLBH Solutions aide les cliniques privées à optimiser leurs performances à travers nos 4 pôles de services: Recrutement, Structuration, Conseil Stratégique et Gestion.",
  };

  for (const [key, response] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }

  // Default response
  return "Merci pour votre question! Je suis l'assistant MedLBH. Puis-je vous aider avec des informations sur nos services de recrutement, structuration, conseil stratégique ou gestion pour les établissements de santé privés? Ou souhaitez-vous nous contacter directement?";
}

export async function analyzeWithDatabase(message, dbContext) {
  // This function can be extended to query database for more intelligent responses
  const response = await generatePhi3Response(message, dbContext);
  return response;
}
