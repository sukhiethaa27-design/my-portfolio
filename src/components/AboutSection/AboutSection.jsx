import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper'>
        <div className='about-image'>
          <img src='/profile.png.jpeg' alt='Sukhiethaa S' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Sukhiethaa.S, a Computer Science Engineering student constantly learning and building fast, accessible web experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;