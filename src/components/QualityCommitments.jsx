import { ExcellenceIcon, EthicsIcon, ReactivityIcon, InnovationIcon } from '../assets/icons/Icons';

const QualityCommitments = () => {
  const commitments = [
    {
      icon: ExcellenceIcon,
      title: 'Excellence et transparence',
      description: 'Dans toutes nos relations avec nos clients et partenaires.',
    },
    {
      icon: EthicsIcon,
      title: 'Éthique et confidentialité',
      description: 'Protection rigoureuse des données médicales et personnelles.',
    },
    {
      icon: ReactivityIcon,
      title: 'Réactivité et proximité',
      description: 'Une équipe disponible et à l\'écoute de vos besoins spécifiques.',
    },
    {
      icon: InnovationIcon,
      title: 'Innovation et durabilité',
      description: 'Des solutions adaptées aux enjeux actuels et futurs du secteur médical.',
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Nos engagements qualité</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <div key={index} className="card">
                <Icon />
                <h3 className="text-lg font-bold text-primary mt-4 mb-2">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitments;
