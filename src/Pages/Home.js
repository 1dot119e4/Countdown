import Card from "../components/Card";
import customData from "../data.json";

function Home() {
  const currentTimestamp = Date.now();
  const cards = customData.data;

  return (
    <div className="container flex-column">
      <div className="row">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            doDateTimestamp={Date.parse(card.doDate)}
            currentTimestapm={currentTimestamp}
            message={card.message}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
