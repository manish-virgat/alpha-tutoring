import Slider from 'react-slick';

const testimonials = [
  { name: "Ayaan M.", text: "Alpha Tutoring helped me score a 7 in IB Math. The concepts were explained so clearly!" },
  { name: "Sara K.", text: "I was struggling with A Level Chemistry until I found Alpha Tutoring. Highly recommended!" },
  { name: "James L.", text: "Scored a 5 in AP Physics thanks to their weekly problem-solving sessions!" },
  { name: "Noura H.", text: "Their personalized feedback on my IA made all the difference. Thank you!" },
  { name: "Arjun D.", text: "Super professional and responsive team. Helped me with both IB CS and Extended Essay." },
  { name: "Layla T.", text: "From 68% to 92% in O Level Biology in 3 months. Nothing short of magic!" }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="testimonials" className="bg-purple-50 py-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">What Our Students Say</h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-white shadow-lg rounded-xl p-6 h-full flex flex-col justify-between text-center">
                <p className="text-lg italic mb-4">“{t.text}”</p>
                <p className="font-semibold text-purple-700">– {t.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
