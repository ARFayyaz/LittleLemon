function About() {
  return (
    <section className='about' id='about-section'>
      <div style={{ padding: "30px 0px" }} className='quarterColumn'>
        <div className='displayTitle'>Little Lemon</div>
        <div className='subtitle'>Chicago</div>
        <div className='leadText' style={{ marginTop: "20px" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </div>
      </div>

      <figure
        style={{
          marginTop: "40px",
          zIndex: 1,
          position: "relative",
        }}
        className='overlapPhotosContainer'
      >
        <img
          src='assets/Mario and Adrian A.jpg'
          alt='Restaurant Food'
          style={{
            height: "338px",
            width: "275px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src='assets/Mario and Adrian b.jpg'
          alt='Restaurant Food'
          className='overlapPhoto'
          style={{
            height: "338px",
            width: "275px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </figure>
    </section>
  );
}

export default About;
