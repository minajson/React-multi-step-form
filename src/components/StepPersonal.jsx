export default function StepPersonal({ data, errors, touched, onChange, onBlur }) {
  return (
    <div className="grid">
      <Field
        label="Full Name"
        name="fullName"
        value={data.fullName}
        error={touched.fullName && errors.fullName}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., Mina Allison"
      />
      <Field
        label="Email"
        name="email"
        value={data.email}
        error={touched.email && errors.email}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="you@example.com"
      />
      <Field
        label="Phone"
        name="phone"
        value={data.phone}
        error={touched.phone && errors.phone}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="+2348012345678"
      />
      <Field
        type="date"
        label="Date of Birth (18+)"
        name="dob"
        value={data.dob}
        error={touched.dob && errors.dob}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

function Field({
  label, name, value, onChange, onBlur, error, type = "text", placeholder
}) {
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
