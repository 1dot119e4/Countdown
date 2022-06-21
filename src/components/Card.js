import CountdownTimer from "./CountdownTimer/CountdownTimer";

function Card({ title, timestamp, message }) {
  return (
    <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
      <p className="mb-4 font-weight-bold text-uppercase">{title}</p>
      <div
        id="clock-b"
        className="countdown-circles d-flex flex-wrap justify-content-center pt-4"
      >
        <CountdownTimer countdownTimestampMs={timestamp} />
      </div>
    </div>
  );
}

export default Card;
