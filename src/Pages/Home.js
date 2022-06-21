import Card from "../components/Card";
import customData from "../data.json";

function Home() {
  const cards = customData.data;

  return (
    <div className="container flex-column">
      <div className="row">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            timestamp={+new Date(card.doDate)}
            message={card.message}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
