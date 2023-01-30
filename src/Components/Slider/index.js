import "./styles.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ inverted, imageSrc, title, subtitle }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const renderSlider = () => {
    if (!inverted) {
      return (
        <>
          <div className="slider_container">
            <h1>{title}</h1>
            <p>{subtitle}/</p>
          </div>
          <img className="slider_image" src={imageSrc} alt="/" />
        </>
      );
    } else {
      return (
        <>
          <img className="slider_image" src={imageSrc} alt="/" />
          <div className="slider_container">
            <h1>{title}</h1>
            <p>{subtitle}/</p>
          </div>
        </>
      );
    }
  };

  return (
    <section className={inView ? "slider slider_zoom" : "slider"} ref={ref}>
      {renderSlider()}
    </section>
  );
};

export default Slider;
