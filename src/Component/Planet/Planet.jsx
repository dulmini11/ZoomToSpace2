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
    description: 'The star at the center of our Solar System.',
  },
  {
    name: 'Mercury',
    image: Mercury,
    description: 'The smallest and closest planet to the Sun.',
  },
  {
    name: 'Venus',
    image: Venus,
    description: 'The hottest planet with a toxic atmosphere.',
  },
  {
    name: 'Earth',
    image: Earth,
    description: 'The only known planet to harbor life.',
  },
  {
    name: 'Moon',
    image: Moon,
    description: "Earth's only natural satellite.",
  },
  {
    name: 'Mars',
    image: Mars,
    description: 'The Red Planet with the largest volcano.',

  },
  {
    name: 'Jupiter',
    image: Jupiter,
    description: 'The largest planet in our solar system.',
  },
  {
    name: 'Saturn',
    image: Saturn,
    description: 'Famous for its prominent ring system.',
  },
  {
    name: 'Uranus',
    image: Uranus,
    description: 'An ice giant that rotates on its side.',
  },
  {
    name: 'Neptune',
    image: Neptune,
    description: 'The outermost planet with strongest winds.',
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
            {planets[selectedPlanet].name}
          </h3>
          <p className="description-text">
            {planets[selectedPlanet].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
