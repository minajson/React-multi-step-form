export default function StepAddress({ data, errors, touched, onChange, onBlur }) {
  return (
    <div className="grid">
      <Field
        label="Address"
        name="address"
        value={data.address}
        error={touched.address && errors.address}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="House/Street"
      />
      <Field
        label="City"
        name="city"
        value={data.city}
        error={touched.city && errors.city}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., Port Harcourt"
      />
      <Field
        label="State"
        name="state"
        value={data.state}
        error={touched.state && errors.state}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., Rivers"
      />
      <Field
        label="Postal Code"
        name="postalCode"
        value={data.postalCode}
        error={touched.postalCode && errors.postalCode}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g., 500272"
      />
      <div className="field">
        <label>Country</label>
        <input value={data.country} readOnly />
        <small className="hint">Fixed to Nigeria</small>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, onBlur, error, placeholder }) {
  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
}
