import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samantha R.",
      text: "Absolutely incredible! Every dish was bursting with flavor, and the atmosphere made our night unforgettable.",
    },
    {
      name: "David L.",
      text: "From the warm welcome to the last bite of dessert, everything was perfect. This is our new favorite spot!",
    },
    {
      name: "Priya M.",
      text: "The best Italian food in town! You can taste the love and care put into every dish.",
    }
  ];
  
  
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">What Our Guests Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
  
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="d-flex flex-column align-items-center">
                  <p className="text-center px-3">"{t.text}"</p>
                  <small className="text-muted">— {t.name}</small>
                </div>
              </div>
            ))}
  
          </div>
  
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    );
  };


export default Testimonials
