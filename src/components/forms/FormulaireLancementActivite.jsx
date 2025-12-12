import React, { useState } from 'react';

export default function FormulaireLancementActivite() {
  const [form, setForm] = useState({
    projectName: '',
    projectType: '',
    projectStatus: '',
    targetOpeningDate: '',
    location: '',
    country: '',
    contactName: '',
    contactRole: '',
    contactEmail: '',
    contactPhone: '',
    feasibilityStudy: false,
    businessPlan: false,
    teamRecruitment: false,
    patientJourney: false,
    qualityProcedures: false,
    certification: false,
    staffTraining: false,
    monitoring: false,
    foreignDoctors: false,
    projectSize: '',
    investmentRange: '',
    specialties: '',
    equipments: '',
    projectDescription: '',
    specificNeeds: '',
    businessPlanUpload: null,
    architecturalPlans: null,
    consentCheck: false
  });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique d'envoi d'email ou d'appel API
    setSent(true);
  };

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
      {/* Informations sur le projet */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Informations sur le projet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Nom du projet/établissement</label>
          <input type="text" name="projectName" value={form.projectName} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Type d'établissement</label>
          <select name="projectType" value={form.projectType} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="clinique_privee">Clinique privée</option>
            <option value="centre_medical">Centre médical</option>
            <option value="cabinet_medical">Cabinet médical</option>
            <option value="centre_imagerie">Centre d'imagerie</option>
            <option value="laboratoire">Laboratoire d'analyses</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">État d'avancement du projet</label>
          <select name="projectStatus" value={form.projectStatus} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="idea">Idée/Concept</option>
            <option value="planning">Planification</option>
            <option value="financing">Recherche de financement</option>
            <option value="construction">En construction</option>
            <option value="equipment">En phase d'équipement</option>
            <option value="recruitment">En phase de recrutement</option>
            <option value="pre_opening">Pré-ouverture</option>
            <option value="expansion">Extension d'activité existante</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Date d'ouverture prévue</label>
          <input type="date" name="targetOpeningDate" value={form.targetOpeningDate} onChange={handleChange} className="input" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Ville</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Pays</label>
          <input type="text" name="country" value={form.country} onChange={handleChange} className="input" required />
        </div>
      </div>
      {/* Porteur du projet */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Porteur du projet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Nom complet</label>
          <input type="text" name="contactName" value={form.contactName} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Fonction/Rôle dans le projet</label>
          <input type="text" name="contactRole" value={form.contactRole} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Email</label>
          <input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Téléphone</label>
          <input type="tel" name="contactPhone" value={form.contactPhone} onChange={handleChange} className="input" required />
        </div>
      </div>
      {/* Besoins d'accompagnement */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Besoins d'accompagnement</h3>
      <div>
        <label className="font-semibold required-field">Services requis (plusieurs choix possibles)</label>
        <div className="flex flex-wrap gap-4 mt-2">
          <label className="flex items-center">
            <input type="checkbox" name="feasibilityStudy" checked={form.feasibilityStudy} onChange={handleChange} className="mr-2" />
            Étude de faisabilité
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="businessPlan" checked={form.businessPlan} onChange={handleChange} className="mr-2" />
            Business plan
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="teamRecruitment" checked={form.teamRecruitment} onChange={handleChange} className="mr-2" />
            Constitution d'équipe médicale
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="patientJourney" checked={form.patientJourney} onChange={handleChange} className="mr-2" />
            Élaboration du parcours patient
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="qualityProcedures" checked={form.qualityProcedures} onChange={handleChange} className="mr-2" />
            Procédures qualité
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="certification" checked={form.certification} onChange={handleChange} className="mr-2" />
            Assistance à la certification
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="staffTraining" checked={form.staffTraining} onChange={handleChange} className="mr-2" />
            Formation du personnel
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="monitoring" checked={form.monitoring} onChange={handleChange} className="mr-2" />
            Monitoring des activités
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="foreignDoctors" checked={form.foreignDoctors} onChange={handleChange} className="mr-2" />
            Accompagnement administratif pour médecins étrangers
          </label>
        </div>
      </div>
      {/* Détails du projet */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Détails du projet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Taille du projet</label>
          <select name="projectSize" value={form.projectSize} onChange={handleChange} className="input">
            <option value="">Sélectionner...</option>
            <option value="small">Petit (&lt; 10 employés)</option>
            <option value="medium">Moyen (10-50 employés)</option>
            <option value="large">Grand (&gt; 50 employés)</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Budget d'investissement estimé</label>
          <select name="investmentRange" value={form.investmentRange} onChange={handleChange} className="input">
            <option value="">Sélectionner...</option>
            <option value="range1">&lt; 500 000 €</option>
            <option value="range2">500 000 € - 1 million €</option>
            <option value="range3">1 - 5 millions €</option>
            <option value="range4">5 - 10 millions €</option>
            <option value="range5">&gt; 10 millions €</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Spécialités prévues</label>
          <textarea name="specialties" value={form.specialties} onChange={handleChange} className="input" rows={3} placeholder="Listez les spécialités médicales prévues dans votre établissement..." />
        </div>
        <div>
          <label className="font-semibold">Équipements majeurs prévus</label>
          <textarea name="equipments" value={form.equipments} onChange={handleChange} className="input" rows={3} placeholder="Listez les équipements médicaux majeurs prévus..." />
        </div>
      </div>
      <div>
        <label className="font-semibold required-field">Description du projet</label>
        <textarea name="projectDescription" value={form.projectDescription} onChange={handleChange} className="input" rows={5} required placeholder="Décrivez votre projet, ses objectifs, son positionnement et les défis anticipés..." />
      </div>
      <div>
        <label className="font-semibold">Besoins spécifiques</label>
        <textarea name="specificNeeds" value={form.specificNeeds} onChange={handleChange} className="input" rows={3} placeholder="Précisez vos attentes particulières concernant l'accompagnement..." />
      </div>
      {/* Documents */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Documents (optionnels)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Business plan existant (PDF)</label>
          <input type="file" name="businessPlanUpload" onChange={handleChange} className="input" accept=".pdf" />
        </div>
        <div>
          <label className="font-semibold">Plans architecturaux (PDF)</label>
          <input type="file" name="architecturalPlans" onChange={handleChange} className="input" accept=".pdf" />
        </div>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" name="consentCheck" checked={form.consentCheck} onChange={handleChange} required className="mr-2" />
          <span className="required-field">J'accepte que mes données personnelles soient traitées par MedLBH Solutions dans le cadre de ma demande d'accompagnement.</span>
        </label>
      </div>
      <div className="text-center mt-6">
        <button type="submit" className="btn-primary">Soumettre ma demande d'accompagnement</button>
      </div>
      {sent && (
        <div className="mt-4 text-green-600 font-semibold">Votre demande a été envoyée ! Un mail de confirmation vous a été adressé.</div>
      )}
    </form>
  );
}
// Styles Tailwind pour les inputs
// .input: w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50
// .btn-primary: bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition