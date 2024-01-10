import Button from "./components/Button";

function Hero() {
  return (
    <section className='hero' aria-labelledby='main-title'>
      <div className='heroContentColumn'>
        <div id='main-title' className='displayTitle'>
          Little Lemon
        </div>
        <div className='subtitle'>Chicago</div>
        <div className='subtitle' style={{ marginTop: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button text='Reserve a Table' />
        </div>
      </div>

      <aside className='heroImageColumn'>
        <img
          src='assets/restauranfood.jpg'
          alt='Restaurant Food'
          style={{ height: "409px", borderRadius: "8px" }}
        />
      </aside>
    </section>
  );
}

export default Hero;
