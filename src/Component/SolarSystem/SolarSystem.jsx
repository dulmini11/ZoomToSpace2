import { useState } from 'react';
import solarSystem from '../../assets/sola system.mp4';
import './SolarSystem.css';
import { useNavigate } from 'react-router-dom';



const SolarSystemExplorer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

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

  // Black holes data
  const blackHoleTypes = [
    {
      type: 'Stellar Black Holes',
      mass: '3-20 solar masses',
      formation: 'Collapse of massive stars',
      description: 'Formed when massive stars exhaust their nuclear fuel and collapse under their own gravity.'
    },
    {
      type: 'Intermediate Black Holes',
      mass: '100-100,000 solar masses',
      formation: 'Unknown mechanism',
      description: 'Rare and mysterious, possibly formed from stellar black hole mergers or primordial collapse.'
    },
    {
      type: 'Supermassive Black Holes',
      mass: 'Millions to billions of solar masses',
      formation: 'Early universe processes',
      description: 'Found at the centers of galaxies, including Sagittarius A* at the center of the Milky Way.'
    }
  ];

  // Stars and nebulae data
  const stellarObjects = [
    {
      name: 'Main Sequence Stars',
      description: 'Stars like our Sun that fuse hydrogen into helium in their cores. They represent about 90% of a star\'s lifetime.',
      examples: 'Sun (G-type), Sirius (A-type), Proxima Centauri (M-type)'
    },
    {
      name: 'Red Giants',
      description: 'Evolved stars that have exhausted hydrogen in their cores and expanded dramatically in size.',
      examples: 'Arcturus, Aldebaran, Betelgeuse'
    },
    {
      name: 'White Dwarfs',
      description: 'Dense remnants of low to medium mass stars after they shed their outer layers.',
      examples: 'Sirius B, Procyon B, Van Maanen\'s Star'
    },
    {
      name: 'Neutron Stars',
      description: 'Extremely dense remnants of massive stars, containing more mass than the Sun in a city-sized sphere.',
      examples: 'Pulsar PSR B1919+21, Magnetar SGR 1806-20'
    },
    {
      name: 'Emission Nebulae',
      description: 'Glowing clouds of gas ionized by nearby hot stars, often star-forming regions.',
      examples: 'Orion Nebula, Eagle Nebula, Rosette Nebula'
    },
    {
      name: 'Planetary Nebulae',
      description: 'Shells of gas ejected by dying stars, illuminated by the remaining white dwarf core.',
      examples: 'Ring Nebula, Cat\'s Eye Nebula, Helix Nebula'
    }
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
          <button 
            onClick={() => setActiveTab('blackholes')}
            className={`nav-button ${activeTab === 'blackholes' ? 'active' : ''}`}
          >
            BLACK HOLES & WORMHOLES
          </button>
          <button 
            onClick={() => setActiveTab('stars')}
            className={`nav-button ${activeTab === 'stars' ? 'active' : ''}`}
          >
            STARS & NEBULAE
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

      {activeTab === 'planets' && (
              <div >
                <h1 className="section-title">The Planets</h1>
                <p>
                  Planets, both within and beyond our solar system, are central to understanding the universe and our place within it. Their formation begins in swirling disks of gas and dust around young stars, where particles collide and stick together, gradually building up into planetesimals and eventually full-fledged planets through a process called accretion. Over billions of years, these bodies evolve, shaped by geological activity, climate, magnetic fields, and interactions with moons, asteroids, and comets. Some planets, like Earth, have plate tectonics, weather systems, and magnetic fields that protect the surface from solar radiation, creating conditions suitable for life. Others, like Venus, experience runaway greenhouse effects, resulting in surface temperatures hot enough to melt lead. Gas giants like Jupiter not only have immense mass and swirling storms like the Great Red Spot, but also act as cosmic shields, deflecting comets and asteroids from the inner solar system. Uranus and Neptune, the ice giants, are known for their unique axial tilts and dynamic weather patterns despite being so far from the Sun. The study of planets also extends to exoplanets—planets orbiting stars beyond our Sun—which come in a wide range of types, including super-Earths, mini-Neptunes, and Earth-like worlds. With missions like Kepler, TESS, and the James Webb Space Telescope, astronomers are uncovering thousands of these distant worlds, examining their atmospheres, and searching for bio-signatures. As our tools and technology improve, the exploration of planets continues to inspire questions about habitability, the origin of life, and the possibility of other civilizations in the universe.
                </p>

                <button
                  className="planet-button"
                  onClick={() => navigate('/Planet')}
                >
                  Explore Individual Planet
                </button>
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

        {/* Black Holes & Wormholes Tab */}
        {activeTab === 'blackholes' && (
          <div>
            <h2 className="section-title">Black Holes & Wormholes</h2>
            
            <section className="section">
              <h3 className="section-title">Understanding Black Holes</h3>
              <p className="section-text">
                Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape once it crosses the event horizon. 
                They form when massive stars collapse at the end of their lives, creating a singularity—a point of infinite density where the laws of physics break down.
              </p>
              
              <div className="grid grid-cols-1">
                {blackHoleTypes.map((bh, index) => (
                  <div key={index} className="card">
                    <h4 className="card-title">{bh.type}</h4>
                    <div className="card-content">
                      <p><strong>Mass:</strong> {bh.mass}</p>
                      <p><strong>Formation:</strong> {bh.formation}</p>
                      <p>{bh.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section">
              <h3 className="section-title">Sagittarius A* - Our Galactic Center</h3>
              <p className="section-text">
                At the center of our Milky Way galaxy lies Sagittarius A* (Sgr A*), a supermassive black hole with a mass 
                approximately 4 million times that of our Sun. Located about 26,000 light-years from Earth, it was the first 
                black hole to be directly imaged by the Event Horizon Telescope in 2022.
              </p>
            </section>

            <section className="section">
              <h3 className="section-title">Theoretical Wormholes</h3>
              <div className="grid grid-cols-2">
                <div className="card">
                  <h4 className="card-title">Einstein-Rosen Bridges</h4>
                  <p className="card-content">
                    Wormholes are theoretical passages through spacetime that could create shortcuts between distant regions of the universe. 
                    First described by Einstein and Rosen in 1935, they emerge from solutions to Einstein's field equations.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="card-title">Traversable Wormholes</h4>
                  <p className="card-content">
                    For a wormhole to be traversable, it would require exotic matter with negative energy density to keep it stable. 
                    While mathematically possible, no such matter has been discovered, making traversable wormholes purely speculative.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <h3 className="section-title">Hawking Radiation & Black Hole Evaporation</h3>
              <p className="section-text">
                Stephen Hawking theorized that black holes emit radiation due to quantum effects near the event horizon. 
                This Hawking radiation causes black holes to slowly evaporate over time. Smaller black holes evaporate faster, 
                while supermassive black holes would take longer than the current age of the universe to completely evaporate.
              </p>
            </section>
          </div>
        )}

        {/* Stars & Nebulae Tab */}
        {activeTab === 'stars' && (
          <div>
            <h2 className="section-title">Stars & Nebulae</h2>
            
            <section className="section">
              <h3 className="section-title">Stellar Evolution</h3>
              <p className="section-text">
                Stars are born in nebulae, live their lives fusing elements in their cores, and die in spectacular ways that 
                enrich the universe with heavy elements. The lifecycle of a star depends primarily on its initial mass, 
                determining whether it will end as a white dwarf, neutron star, or black hole.
              </p>
            </section>

            <div className="grid grid-cols-2">
              {stellarObjects.map((obj, index) => (
                <div key={index} className="card">
                  <h4 className="card-title">{obj.name}</h4>
                  <div className="card-content">
                    <p>{obj.description}</p>
                    <p><strong>Examples:</strong> {obj.examples}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="section">
              <h3 className="section-title">Star Formation Regions</h3>
              <div className="grid grid-cols-2">
                <div className="card">
                  <h4 className="card-title">Orion Nebula (M42)</h4>
                  <p className="card-content">
                    Located about 1,344 light-years from Earth, the Orion Nebula is one of the brightest nebulae visible to the naked eye. 
                    It's an active stellar nursery where new stars are being born from collapsing clouds of gas and dust.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="card-title">Eagle Nebula (M16)</h4>
                  <p className="card-content">
                    Famous for the "Pillars of Creation" image captured by the Hubble Space Telescope, the Eagle Nebula showcases 
                    towering columns of gas and dust where new stars are forming through gravitational collapse.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <h3 className="section-title">Stellar Remnants and Death</h3>
              <p className="section-text">
                When stars exhaust their nuclear fuel, they undergo dramatic transformations. Low-mass stars like our Sun will 
                expand into red giants before shedding their outer layers to form planetary nebulae, leaving behind white dwarf cores. 
                Massive stars end their lives in supernova explosions, either forming neutron stars or collapsing into black holes, 
                while dispersing heavy elements throughout the galaxy that enable the formation of planets and life.
              </p>
            </section>

            <section className="section">
              <h3 className="section-title">Notable Nebulae Types</h3>
              <div className="grid grid-cols-3">
                <div className="card">
                  <h4 className="card-title">Dark Nebulae</h4>
                  <p className="card-content">
                    Dense clouds of dust that block light from stars behind them, appearing as dark patches against the starry background. 
                    The Horsehead Nebula is a famous example.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="card-title">Reflection Nebulae</h4>
                  <p className="card-content">
                    Clouds of dust that reflect light from nearby stars, often appearing blue due to the scattering of shorter wavelengths. 
                    The Pleiades cluster is surrounded by reflection nebulae.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="card-title">Supernova Remnants</h4>
                  <p className="card-content">
                    Expanding shells of gas and debris from stellar explosions, often containing neutron stars or pulsars at their centers. 
                    The Crab Nebula is a well-studied supernova remnant.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystemExplorer;