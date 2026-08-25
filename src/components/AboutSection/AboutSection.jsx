import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
          <img src='/Photo.jpeg' alt='Sukhiethaa.S ' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Sukhiethaa.S, a Computer Science Engineering student constantly learning and building my skills in the world of technology.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
