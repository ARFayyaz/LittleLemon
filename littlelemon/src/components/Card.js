const Card = ({ imageUrl, title, price, description }) => {
  return (
    <div className='card'>
      <img className='cardImage' src={imageUrl} alt={title} />

      <div className='cardBody'>
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='cardTitle'>{title}</div>
            <div className='highlightText' style={{ color: "#ee9972" }}>
              {price}
            </div>
          </div>

          <div className='paragraphText' style={{ marginTop: "20px" }}>
            {description}
          </div>
        </>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className='cardTitle' style={{ fontSize: "16px" }}>
            Order a Delivery
          </div>
          <img src='assets/cycle.svg' alt='delivery' className='deliveryIcon' />
        </div>
      </div>
    </div>
  );
};

export default Card;
