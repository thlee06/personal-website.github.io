// ─── Era definitions ──────────────────────────────────────────────────────────
// To add a new era, append an object here.
const ERAS = [
  { id: "college",    label: "College Era",     years: "2025-Present", cssClass: "" },
  { id: "highschool", label: "High School Era",  years: "2022-2025",   cssClass: "hs-era" }
];

// ─── Project data ─────────────────────────────────────────────────────────────
// To add a new project:
//   1. Add a photo to the photos/ folder.
//   2. Append a new object below — fill in all fields.
//   3. That's it. The listing page and detail page are generated automatically.
//
// Fields:
//   id            – used in the URL: project.html?id=<id>
//   era           – must match one of the ERAS ids above
//   title         – displayed as the card heading and page <h1>
//   tagline       – short subtitle on the detail page
//   thumbnail     – image shown on the projects listing card
//   thumbnailAlt  – alt text for the thumbnail
//   cardText      – description shown on the listing card (plain text or HTML string)
//   heroImage     – large image shown at the top of the detail page
//   heroAlt       – alt text for the hero image
//   overview      – Project Overview section content (HTML string)
//   technical     – Technical Details section content (HTML string)

const PROJECTS = [
  {
    id: "react-emg",
    era: "college",
    title: "ReactEMG",
    tagline: "Low-level signal processing & PCB Design",
    thumbnail: "photos/reactemgthumbnail.png",
    thumbnailAlt: "ReactEMG Project",
    cardText: "A project by the Columbia University ROAM lab. ReactEMG is a low-level EMG signal processing system designed for stroke patients.",
    heroImage: "photos/BLEPCB.png",
    heroAlt: "ReactEMG PCB",
    overview: `<p>ReactEMG is a method for real-time intent detection using surface electromyography (sEMG).
      The approach models neuromuscular activity as a continuous temporal segmentation problem rather than
      a static classification task, enabling the system to detect both the onset and persistence of user
      actions with low latency. A masked self-supervised learning strategy is used during training to
      improve robustness to noise, inter-user variability, and limited labeled data, allowing the model
      to learn stable representations of muscle activation patterns. This design supports responsive
      human–machine interfaces, such as prosthetic or assistive robotic control, where reliable, fast
      interpretation of motor intent is critical.</p>`,
    technical: `<p>My role as the sole PCB designer for this project was to interface the server's commands
      with the motors on the hand. This involved designing a custom board with a microcontroller, two motor
      drivers, connection pins, and a stable power supply.</p>
      <p>The first challenge I encountered was selecting the appropriate motor drivers and calibrating the
      torque parameters to ensure smooth and responsive movement of the hand. I also had to carefully manage
      power distribution and calculate trace widths to handle the high current requirements while maintaining
      thermal stability. For this, I selected the DRV8871 motor driver, which provided the necessary current
      handling capabilities and built-in protection features.</p>
      <p>Additionally, I had to ensure proper power supply for the module. Because we were using a low power
      Bluetooth microcontroller, stable, clean power was essential. Because of the relatively low voltage gap
      between the 12V power input and the 9V max Vin of the MCU, I elected to use a low current linear
      voltage regulator.</p>`
  },
  {
    id: "aquas",
    era: "college",
    title: "AQUAS Projects",
    tagline: "Columbia Robotics Club",
    thumbnail: "photos/aquas-thumbnail.jpg",
    thumbnailAlt: "AQUAS Projects",
    cardText: `AQUAS is a robotics group at Columbia University focused on aquatic robotics. Since 2025,
      I have served as the electrical lead, designing PCBs, teaching members, and collaborating across
      mechanical and software teams.`,
    heroImage: "photos/aquaspage.png",
    heroAlt: "Aquas PCB",
    overview: `<p>The AQUAS club is dedicated to building autonomous aquatic vehicles that can perform
      various tasks, such as environmental monitoring and water treatment.</p>`,
    technical: `<p>Part of my role in this club was designing the circuitry for the dispersal and sampling
      system. This proved quite the challenge, as the systems were under some heavy constraints.</p>
      <p>Firstly, the battery. Both systems are subject to long periods of deployment, and are limited to
      small batteries that can be carried by our vehicle. To design a board that can operate multiple motors
      and servos under low power is therefore a challenge. I learned to minimize power draw through various
      methods, such as stepping down voltages using buck converters and using low power components.</p>
      <p>Secondly, the environment. Both systems are subject to water damage, and must be designed to be
      waterproof. This meant designing a board that could be easily sealed in a waterproof enclosure and
      that could withstand the pressure of being submerged. Collaborating with the Mechanical design team,
      we came up with a product that accomplished both tasks.</p>
      <p>Finally, the teaching. I am not just a designer, but also a teacher. I had to explain complex
      concepts in a way that was easy to understand for people with varying levels of experience in
      electronics.</p>`
  },
  {
    id: "hackathon",
    era: "college",
    title: "Columbia Hackathon",
    tagline: "A project built in 24 hours at the 2025 Columbia Engineering Hackathon",
    thumbnail: "photos/Hackathonthumbnail-page.JPG",
    thumbnailAlt: "Hackathon",
    cardText: "Competed in the 2025 Columbia Hackathon, where I helped create a self-stabilizing gimbal for camera and film applications.",
    heroImage: "photos/Hackathonthumbnail-page.JPG",
    heroAlt: "Hackathon Gimbal",
    overview: `<p>For the 2025 Columbia Engineering Hackathon, I worked with a team of 4 other students
      to create a self-stabilizing gimbal for camera and film applications.</p>`,
    technical: `<p>Because I was the only one on the team with experience in hardware, I took on the role
      of designing and building the circuitry for the project. This involved using a combination of
      off-the-shelf components — an IMU and a motor driver — along with an Arduino Nano.</p>
      <p>The first challenge I faced was integrating the IMU with the Arduino. I had to research how to
      read data from the IMU and use that data to control the motors. I also had to design a circuit that
      would power the motors and the Arduino while keeping everything compact and lightweight.</p>
      <p>In the end, we were able to create a working prototype and demonstrate it at the hackathon. It
      was a great experience, and I learned a lot about working with hardware in a team setting.</p>`
  },
  {
    id: "arcademachine",
    era: "college",
    title: "Arcade Machine",
    tagline: "A simplified arcade machine",
    thumbnail: "photos/ArcadeMachine.JPEG",
    thumbnailAlt: "Arcade Machine",
    cardText: "Designed and built an arcade machine with a team of 5 students. Games include Snake, Tetris, Pong, and Beat Stacker.",
    heroImage: "photos/arcademachine.png",
    heroAlt: "Arcade Machine PCB",
    overview: `<p>For my final project in an introductory Art of Engineering course, I worked with a team
      of 5 people to design an arcade machine that could run numerous arcade games.</p>`,
    technical: `<p>Growing up, seeing my grandparents was always a treat — not just for the company, but
      also for the arcade machine in their basement. For a final, open-form project in my Art of Engineering
      class, I decided to recreate that.</p>
      <p>My role was integrating a microcontroller. Finding a suitable one was difficult, as we had to
      balance 5V logic, enough GPIO pins for buttons and joysticks, and enough processing power to run the
      games. I elected to use the Arduino Mega, which had 54 digital I/O pins and ran on 5V logic.</p>
      <p>Because the turnaround was so tight, I could not use a custom PCB and instead used a perfboard,
      soldering everything by hand. I had to design the layout to be easy to solder, minimize noise and
      interference, and allow for quick troubleshooting under a tight deadline.</p>`
  },
  {
    id: "tonepedal",
    era: "highschool",
    title: "An Electric Guitar Pedal!",
    tagline: "A custom-built guitar effects pedal",
    thumbnail: "photos/tonepedal.jpg",
    thumbnailAlt: "Tone Pedal",
    cardText: "Born out of a desire to build a custom guitar pedal with a unique sound. I reverse engineered the Boss DS-1 and other legacy pedal circuits to create my very own.",
    heroImage: "photos/tonepedal-page.jpg",
    heroAlt: "Tone Pedal",
    overview: `<p>For this project, I designed and built a custom guitar effects pedal. The pedal includes
      a simple distortion effect controlled by a potentiometer. The circuit is built around an op amp, which
      amplifies the guitar signal and creates the distortion effect. The pedal also includes a bypass switch,
      allowing the user to toggle between the distorted and clean signal.</p>`,
    technical: `<p>These pedals were built around two distinctive op amps: the LM386, a low voltage audio
      amplifier, and the NE5532.</p>
      <p>The first pedal was an overdrive — a device which boosts a signal to the point of distortion. I
      accomplished this by creating a simple non-inverting amplifier with a gain of about 200. This pedal
      was a bit too noisy for my liking, and the distortion was not as smooth as I wanted.</p>
      <p>For my second pedal, I wanted a smoother distortion more suitable for lead guitar. I used an NE5532
      to boost the signal and a pair of germanium diodes in a non-polar parallel configuration. This created
      a much smoother distortion. I also added a simple tone control, allowing me to shape the frequency
      response.</p>`
  },
  {
    id: "lightpulser",
    era: "highschool",
    title: "Light Pulser",
    tagline: "An integrated analog processing and microcontroller project",
    thumbnail: "photos/Light Pulser.jpg",
    thumbnailAlt: "Light Pulser",
    cardText: "Designed a light pulser that creates rhythmic lighting effects synchronized to music, for stage performances and home entertainment.",
    heroImage: "photos/lightpulser-page.png",
    heroAlt: "Light Pulser",
    overview: `<p>A device that flashes lights in response to sound.</p>`,
    technical: `<p>I have always loved concert visuals — the way the lights pulse and change color in
      response to the music is mesmerizing. I wanted to create a small device that could replicate this
      in my room.</p>
      <p>At this point in my circuitry journey, I understood the basics of both digital and analog circuits,
      but had never integrated the two. I started by buying a strip of LED lights, which came with a small
      controller PCB. Decoding it proved challenging, as the datasheet was in Chinese and the serial pins
      had been disabled by the manufacturer. I eventually scratched my way into the signal line for the
      lights, attaching my own Arduino Nano's output pins directly to the controller.</p>
      <p>Next, I had to tap into the music without affecting the signal quality. I used a TL072 — an op amp
      with a famously high input impedance — to create a simple non-inverting amplifier, boosting the aux
      signal to a level the Arduino could read. I then biased the signal up to 2.5V. Using the Fast Fourier
      Transform library, I analyzed the frequency content of the signal and mapped it to an RGB spectrum.</p>`
  },
  {
    id: "equalizer",
    era: "highschool",
    title: "Analog Equalizer",
    tagline: "A simple adventure in Analog Processing",
    thumbnail: "photos/Equalizer.JPEG",
    thumbnailAlt: "Equalizer",
    cardText: "My first project in analog circuits. I was frustrated with digital equalizers when listening to music, so I built my own.",
    heroImage: "photos/equalizer-page.png",
    heroAlt: "Equalizer",
    overview: `<p>A project born from frustration in my music production workflow. I wanted a simple,
      analog equalizer to shape the sound of my guitar and vocals. Digital plugins didn't have the same
      warmth and character I was after — so I decided to build my own.</p>`,
    technical: `<p>My first project in analog processing. Transferring from digital to analog circuits was
      quite the challenge! At this point in my life, I had developed an intuitive understanding of digital
      circuits. Learning about analog — and its negative phase — was disorienting, as it completely changed
      my perception of how current flows. It also introduced new concepts: band filters, op amps, and gain.</p>
      <p>I accomplished my goal through a combination of old schematics and trial and error. I started by
      building a simple op amp with the NE5532 — still my favorite to this day — then added three band-pass
      filters and a gain stage.</p>
      <p>Plugging in my contraption, I was disappointed. Nothing was coming out of the speaker! I put my
      ear closer and started hearing something interesting — people talking.</p>
      <p>I was shocked.</p>
      <p>Was something talking to me? Had God abandoned the burning bush in favor of an 8-ohm speaker? I
      was confused and a little scared. Probing around, I found my problem: the op amp wasn't grounded
      correctly. About 20 minutes of research later, I realized I had accidentally created a simple radio.
      The op amp was amplifying radio signals from the air and sending them to the speaker. I was amazed —
      and it sparked a lasting interest in radio and wireless communication.</p>`
  },
  {
    id: "react-emg-v2",
    era: "college",
    title: "React EMG (v2)",
    tagline: "A revision of the original mid-current motor driver.",
    thumbnail: "photos/react-emg-v2-thumbnail.png",
    thumbnailAlt: "React EMG (v2) Thumbnail",
    cardText: "A revision of the original mid-current motor driver.",
    heroImage: "photos/react-emg-v2-hero.png",
    heroAlt: "React EMG (v2) Hero",
    overview: `<p>This compact, two-layer controller provides a filtered power stage and dual-channel motor driving capabilities to enable precise BLE-based robotic manipulation.</p>`,
    technical: `<p>When I set out to build the MyHand BLE interface board, my goal was to bridge a Seeed Xiao ESP32-C6 with the high-power demands of a motor and a linear actuator. One of the first hurdles I faced was power stability; early on, I realized the MCU would brown out during motor spikes. I solved this by adding a beefy 220µF bulk capacitor and specific filtering caps (C7, C8) to keep the 12V line clean. I also had to make a tough call on the voltage regulation. While a buck converter is more efficient, I opted for an L7805 linear regulator to save space—a trade-off that worked perfectly since the MCU’s current draw is relatively low.</p>
      <p>The motor control side brought its own set of "learning moments." I originally struggled with the motor drivers because the DRV8871 current-limit pins (ILIM) can’t be left floating, or the chip won't play nice. I calculated and settled on 80kΩ resistors for R1 and R2 to keep the torque right where it needs to be. I also learned a lesson in "ghost" movements: the ESP32-C6 pulls its TX/RX pins high on startup, which caused the motors to twitch unexpectedly. To fix this, I remapped the actuator and motor controls to dedicated, non-special GPIO pins to ensure the hand stays still until I actually tell it to move.</p>`
  }
];
