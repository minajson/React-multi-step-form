// Helpers (pure functions). State stays in useState in App.
function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isPhone(v) {
  // Simple: starts with + or digit, 8-15 digits overall
  return /^\+?\d{8,15}$/.test(v);
}
function isAdult(dateStr) {
  if (!dateStr) return false;
  const dob = new Date(dateStr);
  const today = new Date();
  const adult = new Date(dob.getFullYear() + 18, dob.getMonth(), dob.getDate());
  return adult <= today;
}
function hasAtLeastOneSkill(s) {
  return s.split(",").map(x => x.trim()).filter(Boolean).length >= 1;
}
function isNonEmpty(v) {
  return String(v || "").trim() !== "";
}
function isPositiveNumber(v) {
  if (v === "" || v === null || v === undefined) return false;
  return Number(v) >= 0;
}

export const stepFields = {
  1: ["fullName", "email", "phone", "dob"],
  2: ["address", "city", "state", "postalCode", "country"],
  3: ["jobTitle", "company", "experience", "skills"], // salary optional
  4: ["terms"],
};

export function emptyErrorsFor() {
  return {
    // per-field
    fullName: "", email: "", phone: "", dob: "",
    address: "", city: "", state: "", postalCode: "", country: "",
    jobTitle: "", company: "", experience: "", salary: "", skills: "",
    // form-level (terms)
    __form: "",
  };
}

export function validateAll(data) {
  const fieldErrors = emptyErrorsFor();

  // Step 1
  if (!isNonEmpty(data.fullName)) fieldErrors.fullName = "Full name is required.";
  if (!isEmail(data.email)) fieldErrors.email = "Enter a valid email.";
  if (!isPhone(data.phone)) fieldErrors.phone = "Enter a valid phone number.";
  if (!isAdult(data.dob)) fieldErrors.dob = "You must be at least 18.";

  // Step 2
  if (!isNonEmpty(data.address)) fieldErrors.address = "Address is required.";
  if (!isNonEmpty(data.city)) fieldErrors.city = "City is required.";
  if (!isNonEmpty(data.state)) fieldErrors.state = "State is required.";
  if (!isNonEmpty(data.postalCode)) fieldErrors.postalCode = "Postal code is required.";
  if (data.country !== "Nigeria") fieldErrors.country = "Country must be Nigeria.";

  // Step 3
  if (!isNonEmpty(data.jobTitle)) fieldErrors.jobTitle = "Job title is required.";
  if (!isNonEmpty(data.company)) fieldErrors.company = "Company is required.";
  if (!isPositiveNumber(data.experience)) fieldErrors.experience = "Experience must be a number ≥ 0.";
  if (!hasAtLeastOneSkill(data.skills)) fieldErrors.skills = "Add at least one skill.";

  // Step 4 (form-level)
  if (!data.terms) fieldErrors.__form = "Please accept the terms to continue.";

  return { fieldErrors };
}
