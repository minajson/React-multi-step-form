import { useState, useMemo } from "react";
import ProgressBar from "./components/ProgressBar.jsx";
import StepPersonal from "./components/StepPersonal.jsx";
import StepAddress from "./components/StepAddress.jsx";
import StepEmployment from "./components/StepEmployment.jsx";
import StepReview from "./components/StepReview.jsx";
import { validateAll, emptyErrorsFor, stepFields } from "./utils/validators.js";

const TOTAL_STEPS = 4;

export default function App() {
  // Central state (useState only)
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    // step 1
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    // step 2 (Nigeria)
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Nigeria",
    // step 3
    jobTitle: "",
    company: "",
    experience: "",
    salary: "",
    skills: "",
    // step 4
    terms: false,
  });

  // Real-time errors per field
  const [errors, setErrors] = useState(emptyErrorsFor());
  const [touched, setTouched] = useState({}); // { field: true }

  const isLast = step === TOTAL_STEPS;
  const isFirst = step === 1;

  // Step validity (re-compute when data/errors change)
  const stepValid = useMemo(() => {
    const fields = stepFields[step] || [];
    return fields.every((f) => !errors[f] && (data[f] !== "" || f === "terms"));
  }, [step, errors, data]);

  // Change handler with live validation
  function handleChange(field, value) {
    const next = { ...data, [field]: value };
    setData(next);

    // validate single field & possibly cross-field (DOB)
    const { fieldErrors } = validateAll(next);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    const { fieldErrors } = validateAll(data);
    setErrors(fieldErrors);
  }

  function nextStep() {
    const { fieldErrors } = validateAll(data);
    setErrors(fieldErrors);
    if (stepValid) setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1));
  }

  // Fake submit (3s)
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // "success" | "error" | null

  function submitForm() {
    const { fieldErrors } = validateAll(data);
    setErrors(fieldErrors);

    // Terms must be checked at step 4
    if (fieldErrors.__form) return;

    setSubmitting(true);
    setResult(null);
    setTimeout(() => {
      setSubmitting(false);
      setResult("success");
    }, 3000);
  }

  return (
    <div className="container">
      <h1>4-Step Registration</h1>
      <ProgressBar current={step} total={TOTAL_STEPS} />

      <div className="card">
        {step === 1 && (
          <StepPersonal
            data={data}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {step === 2 && (
          <StepAddress
            data={data}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {step === 3 && (
          <StepEmployment
            data={data}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {step === 4 && (
          <StepReview
            data={data}
            errors={errors}
            onChange={handleChange}
            submitting={submitting}
            result={result}
          />
        )}
      </div>

      <div className="nav">
        <button disabled={isFirst} onClick={prevStep} className="btn secondary">
          Back
        </button>
        {!isLast && (
          <button disabled={!stepValid} onClick={nextStep} className="btn">
            Next
          </button>
        )}
        {isLast && (
          <button
            disabled={submitting}
            onClick={submitForm}
            className="btn primary"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>

      {result === "success" && (
        <p className="success">Submitted! 🎉 We’ll be in touch via email.</p>
      )}
    </div>
  );
}
