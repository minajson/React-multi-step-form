export default function StepEmployment({ data, errors, touched, onChange, onBlur }) {
  return (
    <div className="grid">
      <Field
        label="Job Title"
        name="jobTitle"
        value={data.jobTitle}
        error={touched.jobTitle && errors.jobTitle}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., Environmental Health Lead"
      />
      <Field
        label="Company"
        name="company"
        value={data.company}
        error={touched.company && errors.company}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Company name"
      />
      <Field
        label="Experience (years)"
        name="experience"
        type="number"
        value={data.experience}
        error={touched.experience && errors.experience}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., 5"
      />
      <Field
        label="Salary (₦/year)"
        name="salary"
        type="number"
        value={data.salary}
        error={touched.salary && errors.salary}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Optional"
      />
      <Field
        label="Skills (comma-separated)"
        name="skills"
        value={data.skills}
        error={touched.skills && errors.skills}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., HACCP, ISO 22000"
      />
    </div>
  );
}

function Field({ label, name, value, onChange, onBlur, error, placeholder, type="text" }) {
  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
}
export default function StepEmployment({ data, errors, touched, onChange, onBlur }) {
  return (
    <div className="grid">
      <Field
        label="Job Title"
        name="jobTitle"
        value={data.jobTitle}
        error={touched.jobTitle && errors.jobTitle}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., Environmental Health Lead"
      />
      <Field
        label="Company"
        name="company"
        value={data.company}
        error={touched.company && errors.company}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Company name"
      />
      <Field
        label="Experience (years)"
        name="experience"
        type="number"
        value={data.experience}
        error={touched.experience && errors.experience}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., 5"
      />
      <Field
        label="Salary (₦/year)"
        name="salary"
        type="number"
        value={data.salary}
        error={touched.salary && errors.salary}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Optional"
      />
      <Field
        label="Skills (comma-separated)"
        name="skills"
        value={data.skills}
        error={touched.skills && errors.skills}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., HACCP, ISO 22000"
      />
    </div>
  );
}

function Field({ label, name, value, onChange, onBlur, error, placeholder, type="text" }) {
  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
}
