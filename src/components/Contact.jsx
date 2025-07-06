export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="mb-4 text-lg">Fill out the form below and our team will get in touch with you shortly.</p>
      <div className="flex justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScStGqUXurN7gnYtZDLB6-2fDOw8_GLRQfMjtNBe6R7zn8UGQ/viewform?embedded=true"
          width="100%"
          height="600"
          title="Alpha Tutoring Form"
          className="max-w-2xl w-full rounded-xl shadow-md"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
