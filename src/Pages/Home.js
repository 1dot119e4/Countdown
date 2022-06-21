import Card from "../components/Card";
import customData from "../data.json";

function Home() {
  const cards = customData.data;
  // data[0].title
  console.log(customData.data);
  const title = "TITLE";
  const myDate = "2022-07-01";

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
