// ─── Era definitions ──────────────────────────────────────────────────────────
const ERAS = [
  { id: "college",    label: "College Era",     years: "2025-Present", cssClass: "" },
  { id: "highschool", label: "High School Era",  years: "2022-2025",   cssClass: "hs-era" }
];

// ─── Project data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "daq-board",
    era: "college",
    title: "Multi-sensor DAQ Board",
    tagline: "Custom PCB reading 6 thermistors, 4 load cells, a current sensor, and an RPM sensor, streaming live over WiFi with backup SD logging.",
    date: "2025",
    tags: ["ESP32-S3", "HX711", "MCP3208", "ACS724", "MQTT", "4-Layer"],
    thumbnail: "photos/DAQ.JPEG",
    thumbnailAlt: "DAQ Board with ESP32-S3 and sensor connectors",
    cardText: "Custom PCB reading 6 thermistors, 4 load cells, a current sensor, and an RPM sensor, streaming live over WiFi with backup SD logging.",
    heroImage: "photos/DAQ.JPEG",
    heroAlt: "DAQ Board with ESP32-S3 and sensor connectors",
    overview: `<p>Designed during a summer internship at Avol Aerospace, this board instruments a motor
      thrust stand. The goal was to swap ESCs and motors quickly and compare thrust-to-efficiency
      ratios, so the DAQ needed to read a wide sensor mix — 6 thermistors, 4 load cells, a current
      sensor, and an RPM pickup — and stream everything to a dashboard in real time.</p>`,
    technical: `<p>The board is built around an ESP32-S3-WROOM module. Load cells are read through two
      HX711 ADCs, the current sensor is an ACS724, and RPM is captured with a Hall effect sensor.
      For the thermistors I added an external MCP3208 SPI ADC rather than relying on the ESP32's
      ADC2 — on the earlier breadboard prototype, WiFi transmissions coupled noise straight into
      the thermistor readings through ADC2's shared radio front end. Moving to a dedicated external
      ADC solved the problem cleanly.</p>
      <p>Data streams over MQTT to a separate dashboard application, and simultaneously logs to an
      onboard SD card over SDMMC. The dual path means we could test in the field without a network
      connection and still capture full-rate data. If the server drops mid-run, nothing is lost.</p>
      <p>The final design is a 4-layer board with the sensor connectors along the edges for easy
      hookup on the thrust stand.</p>`
  },
  {
    id: "buck-converter",
    era: "college",
    title: "3-Channel 48 V Buck Converter",
    tagline: "48V input supply delivering 24V, 12V, and 7V rails off a 12S LiPo, taken from component selection through bench bring up.",
    date: "2025",
    tags: ["LMR51430", "Power Electronics", "DFM", "2-Layer"],
    thumbnail: "photos/buckconverter.png",
    thumbnailAlt: "Buck converter PCB layout showing 48V to 24V, 12V, and 7V rails",
    cardText: "48V input supply delivering 24V, 12V, and 7V rails off a 12S LiPo, taken from component selection through bench bring up.",
    heroImage: "photos/buckconverter.png",
    heroAlt: "Buck converter PCB layout showing 48V to 24V, 12V, and 7V rails",
    overview: `<p>Also built at Avol Aerospace, this board powers the onboard electronics of a drone
      from the full voltage range of a 12S LiPo pack. Three identical buck channels step the pack
      voltage down to regulated 24 V, 12 V, and 7 V rails, each rated for roughly 4 A continuous
      with a 5 A peak.</p>`,
    technical: `<p>All three channels use the LMR51430. I selected inductors and output capacitors
      myself rather than copying a reference design. This board was really an exercise in design
      for manufacturing — it may be produced in larger quantities in the future, so every component
      choice had to consider lead times and second-source availability. That process taught me that
      every part you pick is a dependency on a supply chain, and the fix is to choose common,
      widely stocked components and understand your circuit well enough to swap parts when
      needed.</p>
      <p>The first revision did not work. Debugging traced the issue to incorrect voltage feedback
      divider resistors. For the second revision I added overvoltage protection, reverse polarity
      protection, and soft start. The final board achieves around 50 mV of output ripple on a
      two-layer layout, which I was pleased with given the switching currents involved.</p>`
  },
  {
    id: "myhand-ble",
    era: "college",
    title: "MyHand BLE",
    tagline: "Motor driver board for an EMG skin sensing hand opener at ROAM Lab, giving stroke patients a physical actuator driven by surface signals.",
    date: "Spring 2025",
    tags: ["PCB Design", "DRV8871", "Bluetooth MCU", "Power Management"],
    thumbnail: "photos/reactemgthumbnail.png",
    thumbnailAlt: "MyHand BLE Project",
    cardText: "Motor driver board for an EMG skin sensing hand opener at ROAM Lab, giving stroke patients a physical actuator driven by surface signals.",
    heroImage: "photos/BLEPCB.png",
    heroAlt: "MyHand BLE PCB",
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
    id: "acoustic-sensing",
    era: "college",
    title: "Acoustic Sensing Device",
    tagline: "ESP32-S3 board built for a Columbia PhD researcher, capturing audio through a PDM MEMS mic for an acoustic stethoscope.",
    date: "2025",
    tags: ["ESP32-S3", "IM67D", "PDM", "Freelance", "4-Layer"],
    thumbnail: "",
    thumbnailAlt: "Acoustic Sensing Device",
    cardText: "Freelance contract: an ESP32-S3 capture board with a PDM MEMS mic, designed for a Columbia researcher's acoustic sensing application.",
    heroImage: "",
    heroAlt: "Acoustic Sensing Device",
    overview: `<p>A freelance contract for a Columbia PhD researcher. The brief was a compact capture
      board that could record high-quality audio from a PDM MEMS microphone and log it for later
      analysis.</p>`,
    technical: `<p>The board uses an ESP32-S3 paired with an IM67D PDM MEMS microphone on a hub-and-spoke
      PCB layout, sampling at 12-bit depth. I took advantage of the ESP32-S3's dual cores, dedicating
      one core to SD card logging and the other to audio processing, so neither task blocks the
      other. The final design is a 4-layer board.</p>`
  },
  {
    id: "aquas",
    era: "college",
    title: "AQUAS Projects",
    tagline: "Motor driver with an integrated buck converter for an autonomous underwater vehicle's propulsion system.",
    date: "2025–Present",
    tags: ["PCB Design", "Buck Converters", "Waterproof Design", "Team Lead"],
    thumbnail: "photos/aquas-thumbnail.jpg",
    thumbnailAlt: "AQUAS Projects",
    cardText: "Motor driver with an integrated buck converter for an autonomous underwater vehicle's propulsion system.",
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
    tagline: "Self stabilizing camera gimbal running a closed loop PID controller.",
    date: "Spring 2025",
    tags: ["IMU", "Motor Driver", "Arduino Nano", "Rapid Prototyping"],
    thumbnail: "photos/Hackathonthumbnail-page.JPG",
    thumbnailAlt: "Hackathon",
    cardText: "Self stabilizing camera gimbal running a closed loop PID controller.",
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
    tagline: "Final project for an Electrical Engineering class: a fully working arcade machine, built end to end.",
    date: "Fall 2025",
    tags: ["Arduino Mega", "Perfboard", "Team Project", "Game Design"],
    thumbnail: "photos/ArcadeMachine.JPEG",
    thumbnailAlt: "Arcade Machine",
    cardText: "Final project for an Electrical Engineering class: a fully working arcade machine, built end to end.",
    heroImage: "photos/ArcadeMachine.JPEG",
    heroAlt: "Arcade Machine",
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
    title: "Electric Guitar Pedal",
    tagline: "A run of pedal builds across high school, from simple amplifiers through a Boss DS-1 clone to a tremolo pedal and a distortion pedal.",
    date: "2024",
    tags: ["LM386", "NE5532", "Germanium Diodes", "Analog Audio"],
    thumbnail: "photos/tonepedal.jpg",
    thumbnailAlt: "Tone Pedal",
    cardText: "A run of pedal builds across high school, from simple amplifiers through a Boss DS-1 clone to a tremolo pedal and a distortion pedal.",
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
    tagline: "LED driver that reacts to the volume and frequency of music, an early hands on introduction to frequency spectrum analysis and FFTs.",
    date: "2023",
    tags: ["TL072", "Arduino Nano", "FFT", "LED Control"],
    thumbnail: "photos/Light Pulser.jpg",
    thumbnailAlt: "Light Pulser",
    cardText: "LED driver that reacts to the volume and frequency of music, an early hands on introduction to frequency spectrum analysis and FFTs.",
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
    tagline: "Fully breadboarded 3 band analog equalizer.",
    date: "2022",
    tags: ["NE5532", "Band-pass Filters", "Analog Design"],
    thumbnail: "photos/Equalizer.JPEG",
    thumbnailAlt: "Equalizer",
    cardText: "Fully breadboarded 3 band analog equalizer.",
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
  }
];
