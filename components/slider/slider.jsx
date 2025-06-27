import './slider.css';


const slides = [
  {
    id: 1,
    img: 'https://imgs.search.brave.com/qICjQ42PjQrIsElDRqiC6UnaSuS4g_gV2PFKqv-eZ4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/NTQ0NTE2L3Bob3Rv/L2dyb3VwLW9mLXdv/cmtlcnMtc29ydGlu/Zy1wYXBlcnMtYXQt/cmVjeWNsaW5nLXBs/YW50LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1VSnJZX1Ro/U0RnR1hZWWlYcnNV/c0VSZW04VmV3eGFt/SFVnOGVMaEZDSElJ/PQ',
    title: 'Smart Waste Segregation',
    desc: 'Automated sorting systems for better recycling and efficiency.',
  },
  {
    id: 2,
    img: 'https://imgs.search.brave.com/iwhgybrMyfZEYgFIqp1IA0bmHwSJnEBZdNG6VgDiFIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/OTUwNjI3OS9waG90/by9zbWlsaW5nLXdv/cmttYW4tb3V0ZG9v/cnMtYXQtd2FzdGUt/bWFuYWdlbWVudC1m/YWNpbGl0eS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WDY4/bVdzdDE5dFBvVjhl/Z19jUExmR2JWZXFY/NUVibXR0ZFM2c29V/dDFmQT0',
    title: 'Eco-Friendly Collection',
    desc: 'Green vehicles reducing carbon emissions during waste collection.',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1635371739374-bc95d26b329e?auto=format&fit=crop&w=1200&q=80',
    title: 'Waste to Energy',
    desc: 'Transforming trash into usable energy through clean technology.',
  },
];

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.img} className="d-block w-100 slider-img" alt={slide.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.title}</h5>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
