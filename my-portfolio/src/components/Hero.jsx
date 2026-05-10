import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profile}
        alt="profile"
        className="profile-image"
      />

      <h1>Hi, I'm Aadarsh Singh</h1>

      <p>
        Full Stack Developer | React Enthusiast | AWS Learner
      </p>

      <button>Download Resume</button>

    </section>
  );
}

export default Hero;