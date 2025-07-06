import student_image from "../assets/images/student_image.jpg"
export default function AboutUs() {
  return (
    <section id="about" className="px-6 py-16 bg-white text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-gray-700 text-lg">
          <p className="mb-4">Alpha Tutoring is a team of expert educators committed to guiding students through international curricula like IB, A Level, AP, and O Level. We specialize in core subjects: Maths, Physics, Chemistry, Biology, and Computer Science.</p>
          <p className="mb-4">We understand the unique challenges of international exams and provide personalized tutoring to help students excel. Whether you're aiming for a top university or trying to build strong academic foundations, we're here to help every step of the way.</p>
          <p>Our mission is to transform aspirations into achievements through strategic mentorship, high‑quality resources, and dedicated support.</p>
          <br></br>
          <p className="mb-4">Alpha Tutoring is a team of expert educators committed to guiding students through international curricula like IB, A Level, AP, and O Level. We specialize in core subjects: Maths, Physics, Chemistry, Biology, and Computer Science.</p>
          <p className="mb-4">We understand the unique challenges of international exams and provide personalized tutoring to help students excel. Whether you're aiming for a top university or trying to build strong academic foundations, we're here to help every step of the way.</p>
          <p>Our mission is to transform aspirations into achievements through strategic mentorship, high‑quality resources, and dedicated support.</p>
          <br></br>
          <p className="mb-4">Alpha Tutoring is a team of expert educators committed to guiding students through international curricula like IB, A Level, AP, and O Level. We specialize in core subjects: Maths, Physics, Chemistry, Biology, and Computer Science.</p>
          <p className="mb-4">We understand the unique challenges of international exams and provide personalized tutoring to help students excel. Whether you're aiming for a top university or trying to build strong academic foundations, we're here to help every step of the way.</p>
        </div>
        <div className="md:w-1/2">
          <img src= {student_image} alt="Education support" className="rounded-xl shadow-lg"/>
        </div>
      </div>
    </section>
  );
}
