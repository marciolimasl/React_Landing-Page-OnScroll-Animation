import "./styles.css";

const Hero = ({ imageSrc }) => {
  return (
    <section className="hero">
      <img src={imageSrc} alt="Travel" className="hero_image" />
      <h1 className="hero_title">Travel made simple.</h1>
    </section>
  );
};

export default Hero;
