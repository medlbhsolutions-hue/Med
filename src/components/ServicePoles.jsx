import { ChartIcon, SecurityIcon } from '../assets/icons/Icons';

const ServicePoles = () => {
  const poles = [
    {
      title: 'Pôle 1 - Recrutement & Mobilité Médicale',
      icon: SecurityIcon,
      items: [
        'Sélection et recrutement de médecins spécialistes et cadres de santé',
        'Accompagnement administratif complet (CNOM, visa, équivalence, installation)',
        'Intégration professionnelle et sociale (famille, logement, scolarité)',
        'Conventions exclusives d\'installation sur 3 à 5 ans',
      ]
    },
    {
      title: 'Pôle 2 - Accompagnement Structuration',
      icon: ChartIcon,
      items: [
        'Études de faisabilité et business plan',
        'Constitution d\'équipe médicale qualifiée',
        'Élaboration du parcours patient',
        'Assistance à la certification',
        'Accompagnement administratif et fiscal',
        'Monitoring dès le lancement contre les mauvaises pratiques',
      ]
    },
    {
      title: 'Pôle 3 - Conseil Stratégique',
      icon: ChartIcon,
      items: [
        'Négociation de conventions de prestations médicales',
        'Développement de partenariats entre cliniques et investisseurs',
        'Communication médico-institutionnelle',
        'Production de rapports et études sectorielles',
        'Positionnement stratégique et développement',
      ]
    },
    {
      title: 'Pôle 4 - Recouvrement & Gestion',
      icon: SecurityIcon,
      items: [
        'Expertise sectorielle approfondie',
        'Approche intégrée sur 4 pôles',
        'Accompagnement personnalisé',
        'Résultats mesurables et suivi',
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Nos pôles de services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poles.map((pole, index) => {
            const Icon = pole.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <Icon />
                  <h3 className="text-xl font-bold text-primary">{pole.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {pole.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePoles;
