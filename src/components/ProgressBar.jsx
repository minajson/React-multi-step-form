export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="progress">
      <div className="progress__track">
        <div className="progress__bar" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress__labels">
        <span>Step {current} of {total}</span>
        <span>{pct}%</span>
      </div>
    </div>
  );
}
