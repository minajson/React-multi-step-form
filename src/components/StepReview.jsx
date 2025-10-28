export default function StepReview({ data, errors, onChange, submitting, result }) {
  const prettySkills = data.skills
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <div className="review">
      <section>
        <h3>Personal</h3>
        <KV label="Full Name" value={data.fullName} />
        <KV label="Email" value={data.email} />
        <KV label="Phone" value={data.phone} />
        <KV label="DOB" value={data.dob} />
      </section>

      <section>
        <h3>Address</h3>
        <KV label="Address" value={data.address} />
        <KV label="City" value={data.city} />
        <KV label="State" value={data.state} />
        <KV label="Postal Code" value={data.postalCode} />
        <KV label="Country" value={data.country} />
      </section>

      <section>
        <h3>Employment</h3>
        <KV label="Job Title" value={data.jobTitle} />
        <KV label="Company" value={data.company} />
        <KV label="Experience (years)" value={data.experience} />
        <KV label="Salary (₦/yr)" value={data.salary || "—"} />
        <div className="kv">
          <span>Skills</span>
          <div>
            {prettySkills.length ? (
              <ul className="tags">
                {prettySkills.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            ) : "—"}
          </div>
        </div>
      </section>

      <div className={`field ${errors.__form ? "field--error" : ""}`}>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={data.terms}
            onChange={(e) => onChange("terms", e.target.checked)}
          />
          <span>I confirm the information is correct and I accept the terms.</span>
        </label>
        {errors.__form && <small className="error">{errors.__form}</small>}
      </div>

      {submitting && <p className="hint">Submitting (simulated)… please wait ~3s</p>}
      {result === "success" && <p className="success">Success! 🎉</p>}
    </div>
  );
}

function KV({ label, value }) {
  return (
    <div className="kv">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
