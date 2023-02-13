import "./styles.css";

const Hero = ({ imageSrc, title }) => {
  return (
    <section className="hero">
      <img src={imageSrc} alt="Travel" className="hero_image" />
      <h1 className="hero_title">{title}</h1>
    </section>
  );
};

export default Hero;
