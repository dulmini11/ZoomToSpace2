import React from 'react';
import './Astronauts.css';
import astronautGif from '../../assets/astronauts.gif';
{/* FamousAstronauts */}

{/* AT THE SPACE STATION */}
import anneImage from '../../assets/anne_m.jpg';
import alexyImage from '../../assets/alexy_z.webp';
import jonnyImage from '../../assets/jonny_k.jpg';
import kirillImage from '../../assets/kirill_p.jpg';
import nicholeImage from '../../assets/nichole_a.jpg';
import sergeyImage from '../../assets/sergey_r.jpg';
import takuyaImage from '../../assets/takuya_o.jpg';
{/* ACTIVE ASTRONAUTS */}
import NicholeAImage from '../../assets/Nicole_A.jpg';
import MichaelImage from '../../assets/Michael_r.jpg';
import KaylaImage from '../../assets/Kayla_B.webp';
import Marcos from '../../assets/Marcos_b.webp';
import Chris from '../../assets/Chris_b.webp';
import Eric from '../../assets/Eric_a.jpg';
import Stephen from '../../assets/Stephen_G.jpg';
import Randolph from '../../assets/Randolph_b.jpg';
import Deniz from '../../assets/Deniz_B.webp';
import Zena from '../../assets/Zena_c.webp';
import Raja from '../../assets/Raja_C.webp';
import Luke from '../../assets/Luke_D.webp';
import Matthew from '../../assets/Matthew_D.webp';
import Andre from '../../assets/Andre_d.webp';
import Tracy from '../../assets/Tracy_c.webp';
import Jeanette from '../../assets/Jeanette_J.webp';
import Edward from '../../assets/Edward_m.webp';
import Victor from '../../assets/Victor_J.webp';
import Nick from '../../assets/Nick_h.webp';
import Jack from '../../assets/Jack_h.webp';
import Bob from '../../assets/Bob_H.webp';
import Warren from '../../assets/Warren_h.webp';
import Jonny from '../../assets/jonny_k.jpg';
import Christina from '../../assets/Christina_h.webp';
import Kjell from '../../assets/Kjell_N.webp';
import Nicole from '../../assets/Nichole_A.webp';
import Megan from '../../assets/Megan_M.jpg';
import Anne from '../../assets/Anne_c.webp';
import Jessica from '../../assets/Jessica_u.webp';
import Anil from '../../assets/Anil_m.webp';
import Jasmin from '../../assets/Jasmin_m.webp';
import Andrew from '../../assets/Andrew_r.webp';
import Loral from '../../assets/Loral_o.webp';
import Donald from '../../assets/Donald+r.webp';
import Kate from '../../assets/Kate_r.webp';
import Frank from '../../assets/Frank_r.webp';
import Jonnyk from '../../assets/Jonny_ki.jpg';
import Scott from '../../assets/Scott_d.webp';
import Mark from '../../assets/Mark_t.webp';
import Shannon from '../../assets/Shannon_w.webp';
import Jessicaw from '../../assets/Jessica_w.webp';
import Douglas  from '../../assets/Douglas_h.webp';
import Christopher from '../../assets/Christopher_l.jpg';
import Sunita from '../../assets/Sunita_l.webp';
import Barry from '../../assets/Barry_e.webp';
import Stephanie from '../../assets/stephanie_d.webp';
import Reid from '../../assets/Reid_w.webp';
import Jessicawi from '../../assets/Jessica_wi.webp';
{/* FamousAstronauts */}

{/* AT THE SPACE STATION */}
import aneilImage from '../../assets/anilA.jpg';
import ajohnImage from '../../assets/ajohn.jpg';
import asallyImage from '../../assets/asally.jpg';
import amaeImage from '../../assets/amae.jpg';
import apeggyImage from '../../assets/apeggy.jpg';
import achrisImage from '../../assets/achirs.jpg';
import achristinaImage from '../../assets/achristina.jpg';

const Astronauts = () => {

const FamousAstronauts = [
  {
    name: "Neil Armstrong",
    image: aneilImage,
    alt: "Neil Armstrong",
    agency: "First person to walk on the Moon (Apollo 11, 1969)"
  },
  {
    name: "John Glenn",
    image: ajohnImage,
    alt: "John Glenn",
    agency: "First American to orbit Earth and oldest person in space at age 77"
  },
  {
    name: "Sally Ride",
    image: asallyImage,
    alt: "Sally Ride",
    agency: "First American woman in space (1983)"
  },
  {
    name: "Mae Jemison",
    image: amaeImage,
    alt: "Mae Jemison",
    agency: "First African American woman in space (1992)"
  },
  {
    name: "Peggy Whitson",
    image: apeggyImage,
    alt: "Peggy Whitson",
    agency: "Record holder for most spacewalks by a woman and most time in space by an American (665 days)"
  },
  {
    name: "Chris Hadfield",
    image: achrisImage,
    alt: "Chris Hadfield",
    agency: "Canadian astronaut known for social media presence and videos from space"
  },
  {
    name: "Christina Koch",
    image: achristinaImage,
    alt: "Christina Koch",
    agency: "Longest single spaceflight by a woman (328 days)"
  }
];

const crewMembers = [
  {
    name: "Anne McClain",
    image: anneImage,
    alt: "Anne McClain",
    agency: "NASA astronaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Nichole Ayers",
    image: nicholeImage,
    alt: "Nichole A",
    agency: "NASA astronaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Takuya Onishi",
    image: takuyaImage,
    alt: "Takuya O",
    agency: "JAXA astronaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Kirill Peskov",
    image: kirillImage,
    alt: "Kirill",
    agency: "Roscosmos cosmonaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Jonny Kim",
    image: jonnyImage,
    alt: "Jonny",
    agency: "NASA astronaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Alexy Zubritsky",
    image: alexyImage,
    alt: "Alexy",
    agency: "Roscosmos cosmonaut and Expedition 72/73 Flight Engineer"
  },
  {
    name: "Sergey Ryzhikov",
    image: sergeyImage,
    alt: "Sergey",
    agency: "Roscosmos cosmonaut and Expedition 72/73 Flight Engineer"
  }
];
/*activeMembers */
const activeMembers = [
  {
    name: "Nichole Ayers",
    image: NicholeAImage,
    alt: "Nichole Ayers",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Michael R. Barratt",
    image: MichaelImage,
    alt: "Michael R. Barratt",
    agency: "Selected by NASA in 2000"
  },
  {
    name: "Kayla Barron",
    image: KaylaImage,
    alt: "Kayla Barron",
    agency: "Selected by NASA in 2017"
  },
  {
    name: "Marcos Berríos",
    image: Marcos,
    alt: "Marcos Berríos",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Chris Birch",
    image: Chris,
    alt: "Chris Birch",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Eric A. Boe",
    image: Eric,
    alt: "Eric A. Boe",
    agency: "Selected by NASA in 2000"
  },
  {
    name: "Stephen G. Bowen",
    image: Stephen,
    alt: "Stephen G. Bowen",
    agency: "First Submarine Officer selected by NASA in 2000"
  },
  {
    name: "Randolph Bresnik",
    image: Randolph,
    alt: "Randolph Bresnik",
    agency: "Selected by NASA in 2004"
  },
  {
    name: "Deniz Burnham",
    image: Deniz,
    alt: "Deniz Burnham",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Zena Cardman",
    image: Zena,
    alt: "Zena Cardman",
    agency: "Selected by NASA in 2017 “Turtles” class"
  },
  {
    name: "Raja Chari",
    image: Raja,
    alt: "Raja Chari",
    agency: "Selected by NASA in 2017"
  },
  {
    name: "Luke Delaney",
    image: Luke,
    alt: "Luke Delaney",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Matthew Dominick",
    image: Matthew,
    alt: "Matthew Dominick",
    agency: "Selected by NASA in 2017"
  },
  {
    name: "Andre Douglas",
    image: Andre,
    alt: "Andre Douglas",
    agency: "Selected by NASA in 2021, reported January 2022"
  },
  {
    name: "Tracy Caldwell Dyson",
    image: Tracy,
    alt: "Tracy Caldwell Dyson",
    agency: "Selected by NASA in 1998"
  },
  {
    name: "Jeanette J. Epps",
    image: Jeanette,
    alt: "Jeanette J. Epps",
    agency: "Selected by NASA in 2009."
  },
  {
    name: "Edward Michael Fincke",
    image: Edward,
    alt: "Edward Michael Fincke",
    agency: "Selected by NASA in 1996"
  },
  {
  name: "Victor J. Glover, Jr.",
  image: Victor,
  alt: "Victor J. Glover, Jr.",
  agency: "Selected by NASA in 2013"
},
{
  name: "Nick Hague",
  image: Nick,
  alt: "Nick Hague",
  agency: "Selected by NASA in 2013"
},
{
  name: "Jack Hathaway",
  image: Jack,
  alt: "Jack Hathaway",
  agency: "Selected by NASA in 2021, reported January 2022"
},
{
  name: "Bob Hines",
  image: Bob,
  alt: "Bob Hines",
  agency: "Selected by NASA in 2017"
},
{
  name: "Warren Hoburg",
  image: Warren,
  alt: "Warren Hoburg",
  agency: "Selected by NASA in 2017"
},
{
  name: "Jonny Kim",
  image: Jonny,
  alt: "Jonny Kim",
  agency: "Selected by NASA in 2017"
},
{
  name: "Christina H. Koch",
  image: Christina,
  alt: "Christina H. Koch",
  agency: "Selected by NASA in 2013"
},
{
  name: "Kjell N. Lindgren",
  image: Kjell,
  alt: "Kjell N. Lindgren",
  agency: "Selected by NASA in 2009"
},
{
  name: "Nicole A. Mann",
  image: Nicole,
  alt: "Nicole A. Mann",
  agency: "Selected by NASA in 2013"
},
{
  name: "Megan McArthur",
  image: Megan,
  alt: "Megan McArthur",
  agency: "Selected by NASA in 2000"
},
{
  name: "Anne C. McClain",
  image: Anne,
  alt: "Anne C. McClain",
  agency: "Selected by NASA in 2013"
},
{
  name: "Jessica U. Meir",
  image: Jessica,
  alt: "Jessica U. Meir",
  agency: "Selected by NASA in 2013"
},
{
  name: "Anil Menon",
  image: Anil,
  alt: "Anil Menon",
  agency: "Selected by NASA in 2021, reported January 2022"
},
{
  name: "Jasmin Moghbeli",
  image: Jasmin,
  alt: "Jasmin Moghbeli",
  agency: "Selected by NASA in 2017"
},
{
  name: "Andrew R. Morgan",
  image: Andrew,
  alt: "Andrew R. Morgan",
  agency: "Selected by NASA in 2013"
},
{
  name: "Loral O’Hara",
  image: Loral,
  alt: "Loral O’Hara",
  agency: "Selected by NASA in 2017"
},
{
  name: "Donald R. Pettit",
  image: Donald,
  alt: "Donald R. Pettit",
  agency: "Selected by NASA in 1996"
},
{
  name: "Kate Rubins",
  image: Kate,
  alt: "Kate Rubins",
  agency: "Selected by NASA in 2009"
},
{
  name: "Frank Rubio",
  image: Frank,
  alt: "Frank Rubio",
  agency: "Selected by NASA in 2017"
},
{
  name: "Jonny Kim",
  image: Jonnyk,
  alt: "Jonny Kim",
  agency: "Selected by NASA in 2017"
},
{
  name: "Scott D. Tingle",
  image: Scott,
  alt: "Scott D. Tingle",
  agency: "Selected by NASA in 2009"
},
{
  name: "Mark T. Vande Hei",
  image: Mark,
  alt: "Mark T. Vande Hei",
  agency: "Selected by NASA in 2009"
},
{
  name: "Shannon Walker",
  image: Shannon,
  alt: "Shannon Walker",
  agency: "Selected by NASA in 2004"
},
{
  name: "Jessica Watkins",
  image: Jessicaw,
  alt: "Jessica Watkins",
  agency: "Selected by NASA in 2017"
},
{
  name: "Douglas H. Wheelock",
  image: Douglas,
  alt: "Douglas H. Wheelock",
  agency: "Selected by NASA in 1998"
},
{
  name: "Christopher L. Williams",
  image: Christopher,
  alt: "Christopher L. Williams",
  agency: "Selected by NASA in 2021,reported January 2022"
},
{
  name: "Sunita L. Williams",
  image: Sunita,
  alt: "Sunita L. Williams",
  agency: "Selected by NASA in 1998"
},
{
  name: "Barry E. Wilmore",
  image: Barry,
  alt: "Barry E. Wilmore",
  agency: "Selected by NASA in 2000"
},
{
  name: "Stephanie D. Wilson",
  image: Stephanie,
  alt: "Stephanie D. Wilson",
  agency: "Selected by NASA in 1996"
},
{
  name: "Reid Wiseman",
  image: Reid,
  alt: "Reid Wiseman",
  agency: "Selected by NASA in 2009"
},
{
  name: "Jessica Wittner",
  image: Jessicawi,
  alt: "Jessica Wittner",
  agency: "Selected by NASA in 2021,reported January 2022"
}

];

  return (
    <div className="astronaut-container">
      <div className='avideo'>
  <h1 className="video-heading">Astronauts</h1>
  <img 
    className="astronaut-video" 
    src={astronautGif} 
    alt="Astronauts animation" 
  />
</div>

      <section>
      <h2>What is an Astronaut?</h2>
      <p>
        The term "astronaut" derives from the Greek words "astron" (star) and "nautes" (sailor), 
        referring to those who journey through the cosmos. In the United States, professionals 
        who travel to space are referred to as astronauts, while in Russia they are known as 
        cosmonauts, and in China as taikonauts.
      </p>
      <p>
        While the term was once reserved for military-trained professionals, it now includes 
        civilians, scientists, engineers, and even private citizens. Since inception, NASA has 
        selected 360 astronaut candidates: 299 men, 61 women; 212 military, 138 civilians, creating
        a diverse corps of space explorers.
      </p>
      <p>
        Astronauts are not just pilots but scientists, engineers, doctors, and researchers who conduct
        crucial experiments in the unique microgravity environment of space. Their work contributes to
        advances in medicine, technology, environmental science, and our fundamental understanding of physics.
      </p>
    </section>

      {/* AT THE SPACE STATION */}
      <div className="section-header">
        <h2>Famous Astronauts in Space History</h2>
      </div>
      <section className="space-station-crew">
        {FamousAstronauts.map((member, index) => (
            <div className="crew-member" key={index}>
            <div className="crew-photo">
                <img src={member.image} alt={member.alt} className="astronaut-image" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.agency}</p>
            </div>
        ))}
        </section>
      
      {/* AT THE SPACE STATION */}
      <div className="section-header">
        <h2>astronauts At the Space Station </h2>
      </div>
      <section className="space-station-crew">
        {crewMembers.map((member, index) => (
            <div className="crew-member" key={index}>
            <div className="crew-photo">
                <img src={member.image} alt={member.alt} className="astronaut-image" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.agency}</p>
            </div>
        ))}
        </section>

      {/* ACTIVE ASTRONAUTS */}
      <div className="section-header">
        <h2>ACTIVE ASTRONAUTS</h2>
      </div>
      <section className="space-station-crew">
        {activeMembers.map((member, index) => (
            <div className="crew-member" key={index}>
            <div className="crew-photo">
                <img src={member.image} alt={member.alt} className="astronaut-image" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.agency}</p>
            </div>
        ))}
        </section>

      <section>
        <h2>History</h2>
        <p>
          The space age began in earnest with the Soviet Union's launch of Yuri Gagarin on April 12, 1961,
          making him the first human in space. The United States followed with Alan Shepard's suborbital flight
          on May 5, 1961. The first American to orbit Earth was John Glenn in 1962.
        </p>
        <p>
          The first class of NASA astronauts, selected in 1959, consisted of seven military test pilots known as the Mercury 7:
          Alan Shepard, Gus Grissom, John Glenn, Scott Carpenter, Wally Schirra, Gordon Cooper, and Deke Slayton.
        </p>
        <p>
          The Apollo program (1961-1972) saw 12 astronauts walk on the Moon, beginning with Neil Armstrong and Buzz Aldrin
          in 1969. Following programs included Skylab, the Space Shuttle, and the International Space Station (ISS).
          Since Expedition 1 launched in 2000, there has been a continuous human presence aboard the ISS for over two decades.
        </p>
        <p>
          The first woman in space was Soviet cosmonaut Valentina Tereshkova in 1963. Sally Ride became the first American woman
          in space in 1983. Mae Jemison made history in 1992 as the first African American woman in space.
        </p>
      </section>

      <section>
        <h2>Training and Requirements</h2>
        <p>
          Astronaut training is rigorous and comprehensive, typically lasting two years before assignment to a mission.
          Training includes:
        </p>
        <ul>
          <li><strong>Technical training:</strong> Systems of the ISS, spacecraft operations, and robotics</li>
          <li><strong>Survival training:</strong> Preparing for emergency landings in various environments</li>
          <li><strong>Spacewalk training:</strong> Practicing EVAs (Extra-Vehicular Activities) underwater in the Neutral Buoyancy Laboratory</li>
          <li><strong>Physical fitness:</strong> Maintaining cardiovascular health and strength for space missions</li>
          <li><strong>T-38 jet training:</strong> Developing quick decision-making and spatial awareness</li>
          <li><strong>Language:</strong> Russian language skills, as it's the second official language of the ISS</li>
          <li><strong>Scientific research:</strong> Preparation for conducting experiments in space</li>
        </ul>
      </section>

      <section>
        <h2>Life in Space</h2>
        <p>
          Astronauts on the International Space Station experience 16 sunrises and sunsets every 24 hours as they orbit Earth
          at approximately 17,500 mph (28,000 km/h). Life in microgravity presents unique challenges:
        </p>
        <ul>
          <li><strong>Physiological effects:</strong> Bone density loss (1-1.5% per month), muscle atrophy, fluid redistribution, and changes to eyesight</li>
          <li><strong>Daily activities:</strong> Sleep in tethered sleeping bags, use special toilets with suction, and exercise 2 hours daily to counteract muscle loss</li>
          <li><strong>Food:</strong> Mostly dehydrated or thermostabilized, with occasional fresh produce delivered on resupply missions</li>
          <li><strong>Water:</strong> Recycled from air humidity, urine, and hygiene water (about 90% recycling efficiency)</li>
          <li><strong>Communication:</strong> Regular video conferences with family and mission control, with email and limited internet access</li>
        </ul>
        <p>
          A typical mission to the ISS lasts approximately 6 months, although some astronauts have stayed for longer durations,
          such as Scott Kelly and Mikhail Kornienko who completed a year-long mission in 2015-2016.
        </p>
      </section>

      <section>
        <h2>Future of Space Exploration</h2>
        <p>
          The role of astronauts is evolving as space exploration advances. Future missions include:
        </p>
        <ul>
          <li><strong>Artemis Program:</strong> NASA's initiative to return humans to the Moon by 2025, including the first woman and person of color</li>
          <li><strong>Mars exploration:</strong> Long-duration missions to Mars planned for the 2030s, requiring new technologies for radiation protection and life support</li>
          <li><strong>Commercial spaceflight:</strong> Private companies like SpaceX and Blue Origin increasing access to space for civilians</li>
          <li><strong>Space tourism:</strong> Short-duration orbital and suborbital flights for private citizens</li>
          <li><strong>Deep space habitats:</strong> Development of Gateway lunar space station and eventual Mars transit vehicles</li>
        </ul>
        <p>
          These ambitious goals will require astronauts with diverse skills beyond the traditional test pilot background,
          including geologists, doctors, engineers, and other specialists.
        </p>
      </section>

      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>Best degree field:</strong> Engineering, Bio/Physical/Computer Science, Mathematics, or Medicine.</li>
          <li><strong>Age restrictions:</strong> None (candidates have ranged from 26–46 years).</li>
          <li><strong>US citizenship:</strong> Required for NASA; international agencies have their own programs.</li>
          <li><strong>Flying experience:</strong> Not mandatory; 3 years of experience or 1,000 flight hours is preferred for pilot astronauts.</li>
          <li><strong>Physical requirements:</strong> Height between 62-75 inches (157-190 cm), blood pressure under 140/90, and vision correctable to 20/20.</li>
          <li><strong>Selection odds:</strong> Extremely competitive (last selection had over 12,000 applicants for 12 positions).</li>
          <li><strong>Salary:</strong> Approx. $152,258 per year (2024 rate) for civilian astronauts, based on the federal GS-13/GS-14 pay scale.</li>
        </ul>
      </section>

      <section>
        <h2>Application Process</h2>
        <p>
          NASA typically announces astronaut selection opportunities every 4-5 years. The process includes:
        </p>
        <ul>
          <li><strong>Initial application:</strong> Apply through USAJOBS during the announcement period</li>
          <li><strong>Qualification screening:</strong> Review of education, experience, and basic requirements</li>
          <li><strong>Panel review:</strong> Further evaluation by the Astronaut Rating Panel</li>
          <li><strong>Interviews:</strong> Top candidates (typically 120) invited for first round interviews</li>
          <li><strong>Finalist interviews:</strong> Approximately 50 finalists undergo medical screening and second interviews</li>
          <li><strong>Selection:</strong> Final selection of 8-12 candidates announced after comprehensive review</li>
          <li><strong>Training:</strong> Two-year Astronaut Candidate training program begins</li>
        </ul>
        <p>
          Submit a complete resume, answer the assessment questionnaire, and ensure all transcripts and required documents 
          are uploaded before the deadline. Military applicants must also include form DD-214.
        </p>
      </section>


      <section>
        <h2>Contact Information</h2>
        <p>For more information about the astronaut program:</p>
        <p>Email: <a href="mailto:astronaut.selection@nasa.gov">astronaut.selection@nasa.gov</a></p>
        <p>NASA Astronaut Selection Office<br />
           Johnson Space Center<br />
           2101 NASA Parkway<br />
           Houston, TX 77058</p>
        <p>Website: <a href="https://www.nasa.gov/astronauts" target="_blank" rel="noopener noreferrer">NASA Astronaut Program</a></p>
      </section>
    </div>
  );
};

export default Astronauts;