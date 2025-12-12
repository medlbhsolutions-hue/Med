import React, { useState } from 'react';

export default function FormulaireRecrutementClinique() {
  const [form, setForm] = useState({
    clinicName: '',
    clinicType: '',
    city: '',
    country: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    speciality: '',
    otherSpeciality: '',
    positionsNumber: '',
    contractType: '',
    startDate: '',
    urgencyLevel: '',
    salaryRange: '',
    workingHours: '',
    housing: false,
    relocation: false,
    familySupport: false,
    training: false,
    otherBenefits: false,
    additionalInfo: '',
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
      {/* Informations sur l'établissement */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Informations sur l'établissement</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Nom de l'établissement</label>
          <input type="text" name="clinicName" value={form.clinicName} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Type d'établissement</label>
          <select name="clinicType" value={form.clinicType} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="clinique_privee">Clinique privée</option>
            <option value="hopital_prive">Hôpital privé</option>
            <option value="centre_medical">Centre médical</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Ville</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Pays</label>
          <input type="text" name="country" value={form.country} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Personne à contacter</label>
          <input type="text" name="contactPerson" value={form.contactPerson} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Fonction</label>
          <input type="text" name="position" value={form.position} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Téléphone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input" required />
        </div>
      </div>
      {/* Besoins en recrutement */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Besoins en recrutement</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Spécialité recherchée</label>
          <select name="speciality" value={form.speciality} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="cardiologie">Cardiologie</option>
            <option value="dermatologie">Dermatologie</option>
            <option value="gastroenterologie">Gastro-entérologie</option>
            <option value="gynecologie">Gynécologie</option>
            <option value="neurologie">Neurologie</option>
            <option value="ophtalmologie">Ophtalmologie</option>
            <option value="orthopedie">Orthopédie</option>
            <option value="pediatrie">Pédiatrie</option>
            <option value="psychiatrie">Psychiatrie</option>
            <option value="radiologie">Radiologie</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Si autre, précisez</label>
          <input type="text" name="otherSpeciality" value={form.otherSpeciality} onChange={handleChange} className="input" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Nombre de postes</label>
          <input type="number" name="positionsNumber" value={form.positionsNumber} onChange={handleChange} className="input" min="1" required />
        </div>
        <div>
          <label className="font-semibold required-field">Type de contrat</label>
          <select name="contractType" value={form.contractType} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="cdi">CDI</option>
            <option value="cdd">CDD</option>
            <option value="liberal">Libéral</option>
            <option value="mixte">Mixte</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Date de début souhaitée</label>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Niveau d'urgence</label>
          <select name="urgencyLevel" value={form.urgencyLevel} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="immediate">Immédiat</option>
            <option value="high">Urgent (1-3 mois)</option>
            <option value="medium">Moyen terme (3-6 mois)</option>
            <option value="low">Long terme (6+ mois)</option>
          </select>
        </div>
      </div>
      {/* Conditions offertes */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Conditions offertes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Fourchette de rémunération (annuelle)</label>
          <select name="salaryRange" value={form.salaryRange} onChange={handleChange} className="input">
            <option value="">Sélectionner...</option>
            <option value="range1">Moins de 50 000 €</option>
            <option value="range2">50 000 € - 80 000 €</option>
            <option value="range3">80 000 € - 120 000 €</option>
            <option value="range4">120 000 € - 150 000 €</option>
            <option value="range5">Plus de 150 000 €</option>
            <option value="negotiable">À négocier</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Horaires de travail</label>
          <input type="text" name="workingHours" value={form.workingHours} onChange={handleChange} className="input" placeholder="Ex: 40h/semaine, gardes..." />
        </div>
      </div>
      <div>
        <label className="font-semibold">Avantages proposés</label>
        <div className="flex flex-wrap gap-4 mt-2">
          <label className="flex items-center">
            <input type="checkbox" name="housing" checked={form.housing} onChange={handleChange} className="mr-2" />
            Logement
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="relocation" checked={form.relocation} onChange={handleChange} className="mr-2" />
            Aide à la relocalisation
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="familySupport" checked={form.familySupport} onChange={handleChange} className="mr-2" />
            Accompagnement familial
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="training" checked={form.training} onChange={handleChange} className="mr-2" />
            Formation continue
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="otherBenefits" checked={form.otherBenefits} onChange={handleChange} className="mr-2" />
            Autres
          </label>
        </div>
      </div>
      <div>
        <label className="font-semibold">Informations complémentaires</label>
        <textarea name="additionalInfo" value={form.additionalInfo} onChange={handleChange} className="input" rows={4} placeholder="Précisez toute information supplémentaire concernant le poste, l'établissement ou les conditions offertes..." />
      </div>
      <div className="text-center mt-6">
        <button type="submit" className="btn-primary">Soumettre la demande</button>
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