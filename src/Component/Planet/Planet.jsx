import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Planet.css';

import Sun from '../../assets/planet/Sun.png';
import Mercury from '../../assets/planet/Mercury.png';
import Venus from '../../assets/planet/Venus.png';
import Earth from '../../assets/planet/Earth.png';
import Moon from '../../assets/planet/Moon.png';
import Mars from '../../assets/planet/Mars.png';
import Jupiter from '../../assets/planet/Jupiter.png';
import Saturn from '../../assets/planet/Saturn.png';
import Uranus from '../../assets/planet/Uranus.png';
import Neptune from '../../assets/planet/Neptune.png';

const Planet = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(4); // Moon is selected by default

const planets = [
  {
    name: 'Sun',
    image: Sun,
    header: 'The Sun',
    sections: [
      {
        title: 'General Overview',
        content: "The Sun is a G-type main-sequence star (G2V) located at the heart of our solar system. It is a nearly perfect sphere of hot plasma, primarily composed of hydrogen (about 74%) and helium (about 24%). Through nuclear fusion at its core, the Sun converts hydrogen into helium, releasing an immense amount of energy in the form of light and heat. This energy drives weather systems, powers photosynthesis, and makes life possible on Earth. The Sun's immense gravitational pull keeps all planets, asteroids, and comets in orbit around it. With a diameter of about 1.39 million kilometers, it accounts for about 99.86% of the total mass of the solar system. The Sun has an 11-year solar cycle that affects sunspots, solar flares, and space weather, including geomagnetic storms that impact satellites and power grids on Earth."
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~1.39 million km (109× Earth) • Mass: ~1.988 × 10³⁰ kg (332,950× Earth) • Surface temperature: ~5,772 K • Core temperature: ~15 million K • Composition: ~73% hydrogen, ~25% helium, trace heavier elements like oxygen, carbon, and iron • Rotation: ~25 days at equator, ~34 days at poles'
      },
      {
        title: 'Energy & Fusion',
        content: 'Every second, ~600 billion kg of hydrogen are converted to helium. This releases about 3.8 × 10²⁶ watts of energy as light and heat.'
      },
      {
        title: 'Orbital and Galactic Movement',
        content: 'Distance from Earth: ~149.6 million km (1 AU), ~8 minutes at light speed • Orbits the Milky Way: every ~225–250 million years • Moves at ~251 km/s around the galactic center'
      },
      {
        title: 'Life Cycle',
        content: 'Age: ~4.6 billion years • Will evolve into a red giant in ~5 billion years, then collapse into a white dwarf and eventually a black dwarf.'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Names: Sol (Latin), Helios (Greek) • Symbol: ☉ (a circle with a central dot) • Inspires art, myth, religion, and pop culture: Songs like "Here Comes the Sun" and "Walking on Sunshine" • Vital to stories like Superman and various sci-fi movies'
      },
      {
        title: 'Scientific Exploration',
        content: 'NASA\'s Parker Solar Probe is the closest mission to the Sun. The study of the Sun is called heliology. Educators can access solar science through NASA HEAT resources.'
      }
    ]
  },
  {
    name: 'Mercury',
    image: Mercury,
    header: 'Mercury',
    sections: [
      {
        title: 'General Overview',
        content: 'Mercury is the closest planet to the Sun and the smallest in the Solar System. Despite being near the Sun, it is not the hottest planet—this title goes to Venus—because Mercury lacks an atmosphere thick enough to retain heat. Its surface resembles Earth’s Moon, covered in impact craters, cliffs, and ancient lava plains. The planet experiences extreme temperature changes, from searing heat during the day to freezing cold at night. Mercury has no moons and rotates very slowly, with one Mercury day lasting about 59 Earth days. Its orbit is highly elliptical and fastest among the planets, taking only 88 Earth days to complete a revolution around the Sun. Its large iron core contributes to a magnetic field, though weaker than Earth’s.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~4,880 km • Mass: ~3.30 × 10²³ kg • Surface temperature: -173°C to 427°C • Atmosphere: Very thin (exosphere) – oxygen, sodium, hydrogen • Surface: Rocky, cratered • Gravity: 3.7 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Extremely high temperature variation • No atmosphere to regulate heat • No weather or climate'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~57.9 million km (0.39 AU) • Orbital period: ~88 Earth days • Rotation: ~59 Earth days • Tilt: 0.03° — no significant seasons'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • Lost much of its original crust • Possesses a large metallic core relative to its size'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Symbol: ☿ • Named after the Roman messenger god • Has no moons or rings • Visible shortly after sunset or before sunrise'
      },
      {
        title: 'Scientific Exploration',
        content: 'Explored by Mariner 10 and MESSENGER • BepiColombo mission (ESA + JAXA) en route for further study'
      }
    ]

  },
  {
    name: 'Venus',
    image: Venus,
    header: 'Venus ',
    sections: [
      {
        title: 'General Overview',
        content: 'Venus, the second planet from the Sun, is often referred to as Earth’s twin due to its similar size and composition. However, the resemblance ends there. Venus is the hottest planet in the Solar System, with surface temperatures around 465°C (869°F), caused by a runaway greenhouse effect. Its thick atmosphere, composed mainly of carbon dioxide and clouds of sulfuric acid, traps heat efficiently and creates crushing surface pressure over 90 times that of Earth. The planet rotates very slowly and in the opposite direction to most planets, including Earth. Venus has vast volcanic plains, highlands, and few impact craters, indicating a relatively young surface. It has no moons or rings. Despite harsh conditions, Venus continues to intrigue scientists, especially regarding past water and its extreme climate.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~12,104 km • Mass: ~4.87 × 10²⁴ kg • Surface temperature: ~465°C • Atmosphere: CO₂ with clouds of sulfuric acid • Surface: Volcanic plains and highlands • Gravity: 8.87 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Extreme greenhouse effect traps heat • Thick atmosphere causes intense pressure and heat • No seasons due to minimal axial tilt'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~108.2 million km (0.72 AU) • Orbital period: ~225 Earth days • Rotation: ~243 Earth days (retrograde) • Tilt: 2.6°'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • Once may have had oceans • Underwent catastrophic greenhouse warming'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Nickname: Earth’s Twin • Symbol: ♀ • Named after the Roman goddess of love • Brightest object in the night sky after the Moon'
      },
      {
        title: 'Scientific Exploration',
        content: 'Explored by Venera, Magellan, Akatsuki • Future missions include NASA’s VERITAS and ESA’s EnVision'
      }
    ]

  },
  {
    name: 'Earth',
    image: Earth,
    header: 'Earth',
    sections: [
      {
        title: 'General Overview',
        content: "Earth is the third planet from the Sun and the only known world to support life. With a diameter of approximately 12,742 kilometers, Earth has a complex structure comprising a solid inner core, a molten outer core, a viscous mantle, and a rocky crust. About 71% of its surface is covered by water, including oceans, lakes, and rivers, while the remaining landmasses are divided into continents and islands. Earth’s atmosphere consists mostly of nitrogen and oxygen and provides essential protection against harmful solar radiation and space debris. The planet supports a vast diversity of ecosystems and life forms, driven by the water cycle, tectonic activity, and energy from the Sun. Earth's magnetic field shields it from solar wind, while its axial tilt of 23.5° leads to seasonal variations. With a biosphere teeming with millions of species, Earth remains the focal point of all known biological activity in the universe. Its natural beauty, resources, and habitability make it unique among the celestial bodies explored so far."
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~12,742 km • Mass: ~5.97 × 10²⁴ kg • Surface temperature: -88°C to 58°C • Atmosphere: 78% nitrogen, 21% oxygen, trace gases • Surface: Continents, oceans, ice caps, and deserts • Gravity: 9.81 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Powered by solar energy • Drives climate, ocean currents, and weather • Greenhouse gases regulate temperature • Earth’s tilt causes seasonal changes'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~149.6 million km (1 AU) • Orbital period: ~365.25 days • Rotation: ~24 hours • Tilt: 23.5° — causes seasons'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.54 billion years ago • Evolved from molten rock into a habitable world • Plate tectonics and magnetic field protect and shape the planet'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Nickname: The Blue Planet • Symbol: ⊕ or ♁ • Featured in every culture’s mythology • Center of countless works of literature, film, and science fiction'
      },
      {
        title: 'Scientific Exploration',
        content: 'Explored via satellites, space telescopes, and international space stations • Earth sciences include geology, meteorology, and oceanography'
      }
    ]

  },
  {
    name: 'Moon',
    image: Moon,
    header: 'The Moon ',
    sections: [
      {
        title: 'General Overview',
        content: "The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system. It has a diameter of about 3,474 kilometers, making it roughly one-quarter the size of Earth. The Moon orbits Earth at an average distance of 384,400 kilometers and takes approximately 27.3 days to complete one orbit. It plays a critical role in stabilizing Earth’s axial tilt, which helps moderate the climate and seasons. Its gravitational pull generates ocean tides, influencing marine life and ecosystems. The Moon has a surface covered in craters, maria (dark volcanic plains), and highlands, and lacks a significant atmosphere. It has inspired myths, calendars, and human curiosity for millennia. In 1969, it became the first extraterrestrial body to be visited by humans during NASA’s Apollo 11 mission. Recent exploration continues to investigate its geology and potential as a future base for deep space missions."
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~3,474 km (about 27% of Earth’s) • Mass: ~7.35 × 10²² kg (1.2% of Earth) • Surface gravity: ~1.62 m/s² • Surface temperature: −173°C (night) to 127°C (day) • Composition: Mostly silicate rock • No atmosphere or liquid water, but water ice exists in shadowed craters'
      },
      {
        title: 'Phases & Tidal Influence',
        content: 'The Moon goes through 8 major phases in a ~29.5-day lunar cycle. Its gravitational pull causes ocean tides on Earth. The difference in gravitational forces between the near and far sides of Earth leads to high and low tides.'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Average distance from Earth: ~384,400 km • Orbital period: ~27.3 days (sidereal month) • Synchronous rotation: the same side always faces Earth • Orbits Earth in an elliptical path, with an apogee of ~405,500 km and perigee of ~363,300 km'
      },
      {
        title: 'Origin and Evolution',
        content: 'Formed ~4.5 billion years ago, likely due to a giant impact between Earth and a Mars-sized body (Theia). Initially much closer to Earth, the Moon is slowly moving away at ~3.8 cm per year.'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Names: Luna (Latin), Selene (Greek) • Symbol: ☾ (crescent moon) • Rich in mythology, festivals, and literature: Moon gods/goddesses in many cultures • Featured in songs like "Fly Me to the Moon" and "Moon River" • Inspiration for works like "Sailor Moon" and "Moonlight Sonata"'
      },
      {
        title: 'Scientific Exploration',
        content: 'First human landing: Apollo 11 (1969) • Total Apollo missions: 6 crewed landings • Robotic missions continue from NASA, CNSA, and others • Future missions: NASA’s Artemis program aims to return humans and establish a lunar base • Lunar science is called selenology'
      }
    ]

  },
  {
    name: 'Mars',
    image: Mars,
    header: 'Mars',
    sections: [
      {
        title: 'General Overview',
        content: 'Mars, the fourth planet from the Sun, is often called the "Red Planet" due to its reddish appearance caused by iron oxide on its surface. Slightly more than half the size of Earth, Mars has a thin atmosphere composed mostly of carbon dioxide, with traces of nitrogen and argon. It has seasons, polar ice caps, extinct volcanoes, and evidence of ancient river valleys and lake beds, suggesting that water once flowed on its surface. Mars is home to Olympus Mons, the tallest volcano in the Solar System, and Valles Marineris, a vast canyon system. Its two small moons, Phobos and Deimos, are likely captured asteroids. Mars is a key target for robotic exploration and future human missions, as scientists search for signs of past life and evaluate its potential for colonization.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~6,779 km • Mass: ~6.42 × 10²³ kg • Surface temperature: -125°C to 20°C • Atmosphere: Thin, mostly CO₂ • Surface: Rocky, dusty, with valleys, volcanoes, and polar ice caps • Gravity: 3.71 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Receives less solar energy than Earth • Thin atmosphere leads to wide temperature swings • Dust storms can envelop the entire planet'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~227.9 million km (1.52 AU) • Orbital period: ~687 Earth days • Rotation: ~24.6 hours • Tilt: 25.2° — causes seasons'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • Possibly had liquid water and thicker atmosphere in the past • Geologically inactive today with many preserved surface features'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Nickname: The Red Planet • Symbol: ♂ • Often a focus of science fiction and speculation about alien life • Two small moons: Phobos and Deimos'
      },
      {
        title: 'Scientific Exploration',
        content: 'Extensively explored by orbiters, landers, and rovers like Curiosity and Perseverance • Major target for potential human colonization and search for past life'
      }
    ]

  },
  {
    name: 'Jupiter',
    image: Jupiter,
    header: 'Jupiter',
    sections: [
      {
        title: 'General Overview',
        content: 'Jupiter is the fifth planet from the Sun and the largest planet in our Solar System. It is a gas giant composed primarily of hydrogen and helium, with no solid surface. Known for its iconic Great Red Spot and powerful magnetic field, Jupiter plays a vital role in shaping the dynamics of the Solar System.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~139,820 km • Mass: ~1.90 × 10²⁷ kg • Surface temperature: -145°C (upper atmosphere) • Atmosphere: Hydrogen, helium, trace methane and ammonia • Surface: No solid surface, deep clouds and storms • Gravity: 24.79 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Emits more energy than it receives from the Sun • Powerful internal heat source drives intense storms and jet streams • Home to the Great Red Spot, a centuries-old storm larger than Earth'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~778.5 million km (5.2 AU) • Orbital period: ~11.86 Earth years • Rotation: ~9.9 hours (fastest of all planets) • Tilt: 3.1° — minimal seasonal changes'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • One of the first planets to form • Accreted gas rapidly to become a massive planet • May have influenced the formation and position of other planets'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Nickname: The Gas Giant • Symbol: ♃ • Named after the Roman king of the gods • Has 95 known moons, including the four largest: Io, Europa, Ganymede, and Callisto (the Galilean moons)'
      },
      {
        title: 'Scientific Exploration',
        content: 'Explored by Pioneer, Voyager, Galileo, Juno, and others • Ongoing Juno mission is studying its atmosphere, magnetic field, and internal structure • Future missions aim to explore its moons, especially Europa, for signs of life'
      }
    ]

  },
  {
    name: 'Saturn',
    image: Saturn,
    header: 'Saturn',
    sections: [
      {
        title: 'General Overview',
        content: "Saturn, the sixth planet from the Sun, is best known for its stunning and complex ring system, which is made of ice particles, rock, and dust. It is the second-largest planet in the Solar System and is classified as a gas giant composed mostly of hydrogen and helium. Saturn has a low average density—so low it would float in water. The planet's atmosphere features powerful storms, including a persistent hexagonal storm at its north pole. With over 140 moons, Saturn's largest moon, Titan, has a thick atmosphere and lakes of liquid methane and ethane, making it a point of interest for astrobiology. The planet generates more heat than it receives from the Sun due to gravitational compression. Saturn was explored extensively by the Cassini-Huygens mission, which provided detailed data about the planet, its rings, and moons.Saturn is the sixth planet from the Sun and the second-largest. Famous for its extensive and bright ring system, it is a gas giant primarily made of hydrogen and helium."
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~116,460 km • Mass: ~5.68 × 10²⁶ kg • Surface temperature: ~-178°C • Atmosphere: Hydrogen, helium, methane, ammonia • Surface: No solid surface • Gravity: 10.44 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Radiates more energy than it receives • Known for strong storms, including the hexagon-shaped storm at the north pole • Rings reflect a lot of sunlight'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~1.43 billion km (9.58 AU) • Orbital period: ~29.5 Earth years • Rotation: ~10.7 hours • Tilt: 26.7° — has seasons'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • May have a rocky core surrounded by metallic hydrogen • Rings possibly formed from broken-up moons or comets'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Symbol: ♄ • Named after the Roman god of agriculture • Has 146 known moons, including Titan, which has lakes and a thick atmosphere'
      },
      {
        title: 'Scientific Exploration',
        content: 'Explored by Pioneer 11, Voyager, Cassini-Huygens • Cassini mission revealed extensive detail about rings and moons'
      }
    ]

  },
  {
    name: 'Uranus',
    image: Uranus,
    header: 'Uranus',
    sections: [
      {
        title: 'General Overview',
        content: 'Uranus is the seventh planet from the Sun and is known for its unique tilt—it rotates on its side, with an axial tilt of 98 degrees, making its seasons extremely unusual. Classified as an ice giant, Uranus is composed mostly of water, ammonia, and methane ices, along with hydrogen and helium. Its pale blue-green color is due to methane in the upper atmosphere, which absorbs red light and reflects blue. Uranus has faint rings, over two dozen moons, and a very cold atmosphere, with temperatures dropping to -224°C (-371°F). Its rotation is retrograde, like Venus, and it takes about 84 Earth years to complete an orbit around the Sun. It was visited only once by Voyager 2 in 1986. Scientists believe a massive collision early in its history may have caused its extreme axial tilt.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~50,724 km • Mass: ~8.68 × 10²⁵ kg • Surface temperature: ~-224°C • Atmosphere: Hydrogen, helium, methane • Surface: No solid surface, icy clouds and fluids • Gravity: 8.69 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Very little internal heat • Methane clouds scatter blue light • Coldest atmosphere in the Solar System'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~2.87 billion km (19.2 AU) • Orbital period: ~84 Earth years • Rotation: ~17.2 hours (retrograde) • Tilt: ~98° — rotates on its side'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.6 billion years ago • Likely underwent a massive collision that knocked it onto its side • Ice giant with more ices than gas giants'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Symbol: ♅ • Named after the Greek god of the sky • Has 27 known moons • Faint rings and unique axial tilt'
      },
      {
        title: 'Scientific Exploration',
        content: 'Only visited by Voyager 2 in 1986 • Future missions proposed to study Uranus system in detail'
      }
    ]

  },
  {
    name: 'Neptune',
    image: Neptune,
    header: 'Neptune',
    sections: [
      {
        title: 'General Overview',
        content: 'Neptune, the eighth and most distant planet from the Sun, is a cold and dynamic world known for its intense blue color and extreme weather. Like Uranus, Neptune is an ice giant, composed mainly of hydrogen, helium, and methane. Its atmosphere features some of the fastest winds in the Solar System, reaching speeds of over 2,000 km/h (1,200 mph), and it has massive storms, such as the Great Dark Spot observed by Voyager 2 in 1989. Neptune has 14 known moons, including Triton, which has a retrograde orbit and is believed to be a captured dwarf planet. Despite its distance, Neptune emits more internal heat than it receives from the Sun. It also has a faint, dark ring system. Though only visited once by a spacecraft, Neptune remains a focus for future exploration due to its mysteries and extreme climate.'
      },
      {
        title: 'Physical Characteristics',
        content: 'Diameter: ~49,244 km • Mass: ~1.02 × 10²⁶ kg • Surface temperature: ~-214°C • Atmosphere: Hydrogen, helium, methane • Surface: No solid surface • Gravity: 11.15 m/s²'
      },
      {
        title: 'Energy & Climate',
        content: 'Strong internal heat source • Intense storms like the Great Dark Spot • Fastest winds in the Solar System (~2,100 km/h)'
      },
      {
        title: 'Orbit and Rotation',
        content: 'Distance from Sun: ~4.5 billion km (30.1 AU) • Orbital period: ~164.8 Earth years • Rotation: ~16.1 hours • Tilt: 28.3° — has seasons'
      },
      {
        title: 'Formation and Evolution',
        content: 'Formed ~4.5 billion years ago • Ice giant with more ices (water, ammonia, methane) than hydrogen and helium • Migrated outward after forming'
      },
      {
        title: 'Fun & Cultural Facts',
        content: 'Symbol: ♆ • Named after the Roman god of the sea • Has 14 known moons, including Triton, which orbits backward and may be a captured dwarf planet'
      },
      {
        title: 'Scientific Exploration',
        content: 'Visited only once by Voyager 2 in 1989 • Future missions planned to explore Neptune and its moons'
      }
    ]

  },
];

  const handlePrevious = () => {
    setSelectedPlanet((prev) => (prev > 0 ? prev - 1 : planets.length - 1));
  };

  const handleNext = () => {
    setSelectedPlanet((prev) => (prev < planets.length - 1 ? prev + 1 : 0));
  };
  // Calculates circular distance between two indexes
  const isPlanetVisible = (index) => {
    const total = planets.length;
    const diff = Math.abs(index - selectedPlanet);
    const circularDiff = Math.min(diff, total - diff); // wrap-around logic
    return circularDiff <= 3;
  };

  const getTransform = (index) => {
    const total = planets.length;
    const offset = index - selectedPlanet;
    const circularOffset =
      Math.abs(offset) > total / 2
        ? offset > 0
          ? offset - total
          : offset + total
        : offset;

    const translateX = circularOffset * 120;
    return `translateX(${translateX}px)`;
  };

  const getPlanetClass = (index) => {
    const total = planets.length;
    const distance = Math.min(
      Math.abs(index - selectedPlanet),
      total - Math.abs(index - selectedPlanet)
    );

    if (distance === 0) return 'planet-item selected';
    if (distance === 1) return 'planet-item adjacent';
    return 'planet-item distant';
  };

  const getOpacity = (index) => {
    const total = planets.length;
    const distance = Math.min(
      Math.abs(index - selectedPlanet),
      total - Math.abs(index - selectedPlanet)
    );

    if (distance === 0) return 1;
    if (distance <= 2) return 0.8;
    return 0.4;
  };

  return (
    <div className="planet-container">
      {/* Animated Stars */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay" />

      {/* Header */}
      <div className="header">
        <h1 className="title">To Space and Back</h1>
        <p className="subtitle">Safely in one day, just select destination</p>
      </div>

      {/* Planet Navigation */}
      <div className="planet-navigation">
        <button className="nav-buttonp" onClick={handlePrevious}>
          <ChevronLeft size={20} />
        </button>

        <div className="planets-row">
          {planets.map((planet, index) => {
            if (!isPlanetVisible(index)) return null;

            return (
              <div
                key={planet.name}
                className={getPlanetClass(index)}
                style={{
                  transform: getTransform(index),
                  opacity: getOpacity(index),
                  zIndex: index === selectedPlanet ? 10 : 1
                }}
                onClick={() => setSelectedPlanet(index)}
              >
                <div
                className="planet-circle"
                style={{
                  backgroundColor: planet.color,
                  boxShadow:
                    index === selectedPlanet
                      ? `0 0 30px ${planet.color}50`
                      : `0 0 15px ${planet.color}30`
                }}
              >
                <img src={planet.image} alt={planet.name} className="planet-img" />
              </div>

                <div className="planet-name">{planet.name}</div>
              </div>
            );
          })}
        </div>

        <button className="nav-buttonp" onClick={handleNext}>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Selected Planet Description */}
      <div className="selected-planet-description">
        <div className="description-card">
          <h3
            className="description-title"
            style={{ color: planets[selectedPlanet].color }}
          >
            {planets[selectedPlanet].header || planets[selectedPlanet].name}
          </h3>
          
          {/* Handle Sun's detailed sections */}
          {planets[selectedPlanet].sections ? (
            <div className="planet-sections">
              {planets[selectedPlanet].sections.map((section, index) => (
                <div key={index} className="section">
                  <h3 className="section-title">{section.title}</h3>
                  <p className="section-content">{section.content}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Handle other planets with simple description */
            <p className="description-text">
              {planets[selectedPlanet].description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planet;