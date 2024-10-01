import Profile from  "../images/IMG_5917.jpg"
const Header = () => {
  return (
    <>
    <header className="header">
      <img className="profile" src={Profile} alt="Profile"/>

      <div>
        <h1 className="name">Prasad Paradkar</h1>
        <h2 className="design">Software Developer</h2>
      </div>
    </header>

    <section className="intro">
      <p>I'm a passionate Full-Stack Developer with expertise in building dynamic, responsive web applications from the ground up.  My goal is to craft efficient, scalable, and robust solutions that solve real-world problems while maintaining clean, maintainable code. Always eager to learn and embrace new challenges, I strive to stay ahead in the ever-evolving world of technology.</p>
    </section>
    <div className="borderline"></div>
    </>
  )
}

export default Header