import { useState } from 'react';
import solarSystem from '../../assets/sola system.mp4';
import './SolarSystem.css';

const SolarSystemExplorer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Planet data
  const planets = [
    { id: 'mercury', name: 'Mercury', type: 'Terrestrial', diameter: '4,879 km', distance: '57.9 million km' },
    { id: 'venus', name: 'Venus', type: 'Terrestrial', diameter: '12,104 km', distance: '108.2 million km' },
    { id: 'earth', name: 'Earth', type: 'Terrestrial', diameter: '12,756 km', distance: '149.6 million km' },
    { id: 'mars', name: 'Mars', type: 'Terrestrial', diameter: '6,792 km', distance: '227.9 million km' },
    { id: 'jupiter', name: 'Jupiter', type: 'Gas Giant', diameter: '142,984 km', distance: '778.6 million km' },
    { id: 'saturn', name: 'Saturn', type: 'Gas Giant', diameter: '120,536 km', distance: '1.4 billion km' },
    { id: 'uranus', name: 'Uranus', type: 'Ice Giant', diameter: '51,118 km', distance: '2.9 billion km' },
    { id: 'neptune', name: 'Neptune', type: 'Ice Giant', diameter: '49,528 km', distance: '4.5 billion km' }
  ];
  
  // Facts about the solar system
  const facts = [
    { id: 1, title: 'Many Worlds', content: 'Our solar system has eight planets, and five officially recognized dwarf planets.' },
    { id: 2, title: 'Small Worlds, Too', content: 'About 1.4 million asteroids, and about 4,000 comets are in our solar system.' },
    { id: 3, title: 'Lots of Moons', content: 'Our solar system has more than 300 planetary moons.' },
    { id: 4, title: 'Meet Me in the Milky Way', content: 'Our solar system is in one of the Milky Way galaxy\'s spiral arms called the Orion Spur.' },
    { id: 5, title: 'A Long Way Around', content: 'Our solar system takes about 230 million years to orbit the galactic center.' },
    { id: 6, title: 'Spiraling Through Space', content: 'The Milky Way is a barred spiral galaxy.' },
    { id: 7, title: 'Diverse Atmospheres', content: 'Our solar system has many worlds with many types of atmospheres.' },
    { id: 8, title: 'Ring Worlds', content: 'The four giant planets – and at least one asteroid – have rings.' },
    { id: 9, title: 'Getting Out There', content: 'More than 300 robotic spacecraft have left Earth\'s orbit, and 24 U.S. astronauts have traveled to the Moon.' },
    { id: 10, title: 'Life as We Know It', content: 'So far, Earth is the only place we\'ve found life in our solar system.' }
  ];

  // Solar system statistics
  const statistics = [
    { label: 'Age', value: '4.6 billion years' },
    { label: 'Diameter', value: '~9.5 billion km (to Neptune)' },
    { label: 'Planets', value: '8' },
    { label: 'Dwarf Planets', value: '5 officially named' },
    { label: 'Known Moons', value: '300+' },
    { label: 'Known Asteroids', value: '1,400,000+' },
    { label: 'Known Comets', value: '4,000+' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
              <div className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src={solarSystem} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1 className="hero-title">Solar System Explorer</h1>
          <p className="hero-description">
            Our solar system includes the Sun, eight planets, five officially named dwarf planets, 
            hundreds of moons, and thousands of asteroids and comets.
          </p>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">08</div>
              <div className="stat-label">Planets</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">05</div>
              <div className="stat-label">Dwarf Planets</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">300+</div>
              <div className="stat-label">Moons</div>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Navigation */}
      <div className="nav">
        <div className="nav-container">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
          >
            OVERVIEW
          </button>
          <button 
            onClick={() => setActiveTab('planets')}
            className={`nav-button ${activeTab === 'planets' ? 'active' : ''}`}
          >
            PLANETS
          </button>
          <button 
            onClick={() => setActiveTab('facts')}
            className={`nav-button ${activeTab === 'facts' ? 'active' : ''}`}
          >
            10 THINGS TO KNOW
          </button>
          <button 
            onClick={() => setActiveTab('structure')}
            className={`nav-button ${activeTab === 'structure' ? 'active' : ''}`}
          >
            STRUCTURE
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <section className="section">
              <h2 className="section-title">Introduction</h2>
              <p className="section-text">
                Our solar system is located in the Milky Way, a barred spiral galaxy with two major arms, and two minor arms. 
                Our Sun is in a small, partial arm of the Milky Way called the Orion Arm, or Orion Spur, between the Sagittarius 
                and Perseus arms. Our solar system orbits the center of the galaxy at about 515,000 mph (828,000 kph). It takes 
                about 230 million years to complete one orbit around the galactic center.
              </p>
              <p className="section-text">
                The solar system formed about 4.6 billion years ago from the gravitational collapse of a 
                giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with most of the 
                remaining mass contained in Jupiter.
              </p>
            </section>

            <section className="section">
              <h2 className="section-title">Namesake</h2>
              <p className="section-text">
                Our planetary system is called "the solar system" because we use the word "solar" to describe things related 
                to our star, after the Latin word for Sun, "solis."
              </p>
            </section>

            <section className="section">
              <h2 className="section-title">Size and Distance</h2>
              <p className="section-text">
                Our solar system extends much farther than the planets that orbit the Sun. The solar system also includes 
                the Kuiper Belt that lies past Neptune's orbit. This is a ring of icy bodies, almost all smaller than the 
                most popular Kuiper Belt Object – dwarf planet Pluto.
              </p>
              <p className="section-text">
                Beyond the fringes of the Kuiper Belt is the Oort Cloud. This giant spherical shell surrounds our solar system. 
                It has never been directly observed, but its existence is predicted based on mathematical models and observations 
                of comets that likely originate there.
              </p>
              <p className="section-text">
                The Oort Cloud is made of icy pieces of space debris - some bigger than mountains – orbiting our Sun as far as 
                1.6 light-years away. This shell of material is thick, extending from 5,000 astronomical units to 100,000 
                astronomical units. One astronomical unit (or AU) is the distance from the Sun to Earth, or about 93 million 
                miles (150 million kilometers).
              </p>
            </section>

            <section className="section">
              <h2 className="section-title">Solar System Statistics</h2>
              <div className="stats-grid">
                {statistics.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Planets Tab */}
        {activeTab === 'planets' && (
          <div>
            <h2 className="section-title">The Planets</h2>
            <div className="grid grid-cols-4">
              {planets.map(planet => (
                <div key={planet.id} className="card planet-card">
                  <h3 className="planet-name">{planet.name}</h3>
                  <div className="planet-details">
                    <div><span className="label">Type:</span> {planet.type}</div>
                    <div><span className="label">Diameter:</span> {planet.diameter}</div>
                    <div><span className="label">Distance from Sun:</span> {planet.distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facts Tab */}
        {activeTab === 'facts' && (
          <div>
            <h2 className="section-title">10 Things to Know About the Solar System</h2>
            <div className="grid grid-cols-4">
              {facts.map(fact => (
                <div key={fact.id} className="card">
                  <h3 className="card-title">
                    <span className="fact-number">{fact.id}.</span> {fact.title}
                  </h3>
                  <p className="card-content">{fact.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structure Tab */}
        {activeTab === 'structure' && (
          <div>
            <h2 className="section-title">Structure of the Solar System</h2>
            
            <div className="grid grid-cols-2">
              <section className="card">
                <h3 className="card-title">The Sun</h3>
                <p className="card-content">
                  The Sun is a G-type main-sequence star that contains 99.86% of the system's known mass and dominates it gravitationally.
                  It's composed of roughly 98% hydrogen and helium. The Sun's main-sequence phase will last about 10 billion years.
                </p>
              </section>
              
              <section className="card">
                <h3 className="card-title">Inner Solar System</h3>
                <p className="card-content">
                  The inner Solar System includes Mercury, Venus, Earth, Mars, and the bodies in the asteroid belt.
                  These terrestrial planets are made mostly of rock and metal. They have solid surfaces, few or no moons, 
                  and no ring systems.
                </p>
              </section>
              
              <section className="card">
                <h3 className="card-title">Outer Solar System</h3>
                <p className="card-content">
                  The outer Solar System includes Jupiter, Saturn, Uranus, Neptune, and the bodies in the Kuiper belt.
                  The giant planets (Jupiter, Saturn, Uranus, and Neptune) are massive compared to the terrestrials.
                  They're composed largely of hydrogen and helium and are therefore known as gas giants, though the ice giants
                  Uranus and Neptune have less hydrogen and helium.
                </p>
              </section>
              
              <section className="card">
                <h3 className="card-title">Beyond Neptune</h3>
                <p className="card-content">
                  Beyond Neptune lies the Kuiper Belt, a disk-shaped region of icy bodies including dwarf planets like Pluto,
                  Haumea, and Makemake. Even further out is the hypothesized Oort Cloud, believed to be the source of long-period comets.
                  The Oort Cloud may extend from 2,000 to 100,000 AU from the Sun.
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystemExplorer;