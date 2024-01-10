import Button from "./components/Button";
import Card from "./components/Card";

function Highlights() {
  return (
    <section className='highlights' id='highlights-section'>
      <div className='highlightsHeading'>
        <div style={{ color: "#000000" }} className='subtitle quarterColumn'>
          This Week's Specials
        </div>
        <div
          style={{ display: "flex", justifyContent: "right" }}
          className='quarterColumn'
        >
          <Button text='Online Menu' />
        </div>
      </div>
      <div className='cardsContainer'>
        <Card
          title={"Greek Salad"}
          price={"$12.99"}
          description={
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          }
          imageUrl={"assets/greek salad.jpg"}
        />
        <Card
          title={"Bruchetta"}
          price={"$5.99"}
          description={
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }
          imageUrl={"assets/bruchetta.svg"}
        />
        <Card
          title={"Lemon Dessert"}
          price={"$5.00"}
          description={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
          imageUrl={"assets/lemon dessert.jpg"}
        />
      </div>
    </section>
  );
}

export default Highlights;
