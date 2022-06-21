import CountdownTimer from "./CountdownTimer/CountdownTimer";

function Card({ title, doDateTimestamp, currentTimestapm, message }) {
  const isTimeOut = doDateTimestamp - currentTimestapm <= 0 ? true : false;

  return (
    <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
      <p className="mb-4 font-weight-bold text-uppercase">{title}</p>
      <div
        id="clock-b"
        className="countdown-circles d-flex flex-wrap justify-content-center pt-4"
      >
        <ConditionalTimeRender
          isTimeOut={isTimeOut}
          doDateTimestamp={doDateTimestamp}
          message={message}
        />
      </div>
    </div>
  );
}
function ConditionalTimeRender({ isTimeOut, doDateTimestamp, message }) {
  if (!isTimeOut)
    return <CountdownTimer countdownTimestampMs={doDateTimestamp} />;
  return <div>{message}</div>;
}

// function TimeRender(isTimeOut, message, doDateTimestamp) {
//   if (isTimeOut) return <div className="countdown-timer">{message}</div>;
//   return <CountdownTimer countdownTimestampMs={doDateTimestamp} />;
// }

export default Card;
