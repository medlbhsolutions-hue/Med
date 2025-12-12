import React, { useState } from 'react';
// Ce composant reprend la structure du formulaire HTML fourni, adapté en JSX et Tailwind
export default function FormulaireMedecinInternational() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    birthDate: '',
    nationality: '',
    currentCountry: '',
    email: '',
    phone: '',
    medicalDegree: '',
    graduationYear: '',
    university: '',
    universityCountry: '',
    speciality: '',
    otherSpeciality: '',
    yearsExperience: '',
    licenseCountry: '',
    frenchLevel: '',
    englishLevel: '',
    otherLanguage: '',
    targetCountry: '',
    availabilityDate: '',
    familyStatus: '',
    children: '',
    motivationLetter: '',
    cvUpload: null,
    diplomaUpload: null,
    specialityUpload: null,
    licenseUpload: null,
    consentCheck: false
  });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique d'envoi d'email ou d'appel API
    setSent(true);
  };

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
      {/* Informations personnelles */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Informations personnelles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="font-semibold required-field">Nom</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Prénom</label>
          <input type="text" name="prenom" value={form.prenom} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Date de naissance</label>
          <input type="date" name="dateNaissance" value={form.dateNaissance} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Nationalité</label>
          <input type="text" name="nationalite" value={form.nationalite} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Pays de résidence actuel</label>
          <input type="text" name="paysResidence" value={form.paysResidence} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Téléphone (avec indicatif)</label>
          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} className="input" required />
        </div>
      </div>
      {/* Formation et qualifications */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Formation et qualifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Diplôme de médecine</label>
          <input type="text" name="diplomeMedecine" value={form.diplomeMedecine} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Année d'obtention</label>
          <input type="number" name="anneeObtention" value={form.anneeObtention} onChange={handleChange} className="input" min="1950" max="2025" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Université/École de médecine</label>
          <input type="text" name="universiteMedecine" value={form.universiteMedecine} onChange={handleChange} className="input" required />
        </div>
        <div>
          <label className="font-semibold required-field">Pays</label>
          <input type="text" name="paysDiplome" value={form.paysDiplome} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Spécialité</label>
          <select name="specialite" value={form.specialite} onChange={handleChange} className="input" required>
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
          <input type="text" name="autreSpecialite" value={form.autreSpecialite} onChange={handleChange} className="input" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Années d'expérience</label>
          <input type="number" name="anneesExperience" value={form.anneesExperience} onChange={handleChange} className="input" min="0" required />
        </div>
        <div>
          <label className="font-semibold required-field">Pays d'obtention de la licence médicale</label>
          <input type="text" name="paysLicence" value={form.paysLicence} onChange={handleChange} className="input" required />
        </div>
      </div>
      {/* Compétences linguistiques */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Compétences linguistiques</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="font-semibold required-field">Niveau de français</label>
          <select name="niveauFrancais" value={form.niveauFrancais} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="none">Aucune connaissance</option>
            <option value="basic">Notions de base</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
            <option value="fluent">Courant</option>
            <option value="native">Langue maternelle</option>
          </select>
        </div>
        <div>
          <label className="font-semibold required-field">Niveau d'anglais</label>
          <select name="niveauAnglais" value={form.niveauAnglais} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="none">Aucune connaissance</option>
            <option value="basic">Notions de base</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
            <option value="fluent">Courant</option>
            <option value="native">Langue maternelle</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Autre langue</label>
          <input type="text" name="autreLangue" value={form.autreLangue} onChange={handleChange} className="input" />
        </div>
      </div>
      {/* Projet professionnel */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Projet professionnel</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">Pays souhaité</label>
          <select name="paysSouhaite" value={form.paysSouhaite} onChange={handleChange} className="input" required>
            <option value="">Sélectionner...</option>
            <option value="france">France</option>
            <option value="morocco">Maroc</option>
            <option value="belgium">Belgique</option>
            <option value="switzerland">Suisse</option>
            <option value="canada">Canada</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div>
          <label className="font-semibold required-field">Disponibilité</label>
          <input type="date" name="disponibilite" value={form.disponibilite} onChange={handleChange} className="input" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Situation familiale</label>
          <select name="situationFamiliale" value={form.situationFamiliale} onChange={handleChange} className="input">
            <option value="">Sélectionner...</option>
            <option value="single">Célibataire</option>
            <option value="married">Marié(e)</option>
            <option value="divorced">Divorcé(e)</option>
            <option value="widowed">Veuf/Veuve</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Nombre d'enfants</label>
          <input type="number" name="nombreEnfants" value={form.nombreEnfants} onChange={handleChange} className="input" min="0" defaultValue={0} />
        </div>
      </div>
      <div>
        <label className="font-semibold required-field">Lettre de motivation</label>
        <textarea name="lettreMotivation" value={form.lettreMotivation} onChange={handleChange} className="input" rows={5} required placeholder="Décrivez votre projet professionnel, vos motivations et vos attentes..." />
      </div>
      {/* Documents */}
      <h3 className="text-xl font-bold text-blue-700 border-b-2 border-orange-500 pb-2 mb-4">Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold required-field">CV (format PDF)</label>
          <input type="file" name="cv" className="input" accept=".pdf" required />
        </div>
        <div>
          <label className="font-semibold required-field">Diplôme de médecine (format PDF)</label>
          <input type="file" name="diplomeMedecineFile" className="input" accept=".pdf" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Diplôme de spécialité (format PDF)</label>
          <input type="file" name="diplomeSpecialite" className="input" accept=".pdf" />
        </div>
        <div>
          <label className="font-semibold">Licence d'exercice (format PDF)</label>
          <input type="file" name="licenceExercice" className="input" accept=".pdf" />
        </div>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" required className="mr-2" />
          <span className="required-field">J'accepte que mes données personnelles soient traitées par MedLBH Solutions dans le cadre de ma demande d'accompagnement professionnel.</span>
        </label>
      </div>
      <div className="text-center mt-6">
        <button type="submit" className="btn-primary">Soumettre ma candidature</button>
      </div>
      {sent && (
        <div className="mt-4 text-green-600 font-semibold">Votre inscription a été envoyée ! Un mail de confirmation vous a été adressé.</div>
      )}
    </form>
  );
}

// Styles Tailwind pour les inputs
// .input: w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50
// .btn-primary: bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition