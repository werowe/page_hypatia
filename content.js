/*
  Hypatia Academy — site content
  ================================
  This file holds every word of text on the site. Edit the text between
  the quotes/backticks below and save — the page will pick it up on
  reload. You should not need to touch index.html or style.css to
  change wording.

  Notes on editing:
  - Text wrapped in backticks `like this` can span multiple lines.
  - Keep the quotes and commas around each piece of text.
  - Lines starting with // are comments and are ignored.
*/

const CONTENT = {

  // Browser tab title and search-engine description
  meta: {
    title: "Hypatia Academy — Learn How Computers Really Work",
    description: "Free 9-month C and Arduino course for teenagers living in Europe. Live online classes taught by Walker Rowe."
  },

  // Top navigation bar
  nav: {
    brand: "Hypatia Academy",
    links: [
      { label: "The Course", href: "#course" },
      { label: "What You'll Learn", href: "#learn" },
      { label: "About", href: "#about" },
      { label: "Apply", href: "#apply" }
    ],
    cta: "Apply to Join"
  },

  // Hero banner (top of page)
  hero: {
    eyebrow: "Free 9-month C and Arduino course for teenagers living in Europe",
    title: "Learn How Computers Really Work",
    ctaPrimary: "Apply to Join",
    ctaSecondary: "Watch on YouTube"
  },

  // Short punchy intro right under the hero
  intro: {
    paragraphs: [
      "Most Arduino courses teach students how to connect a sensor, copy some code, and make a project work.",
      "At Hypatia Academy, we go deeper.",
      "Students learn what is happening inside a computer: how electricity represents information, how logic gates make decisions, how memory and processors are built, and how C programs control hardware.",
      "The goal is not simply to use an Arduino.",
      "The goal is to understand computers from the ground up."
    ],
    tagline: "Live classes. Real programming. Real electronics. Completely free."
  },

  // "More Than an Arduino Course" section
  moreThanArduino: {
    title: "More Than an Arduino Course",
    intro: [
      "Arduino is an excellent tool for learning, but it is only the beginning.",
      "Students will not spend nine months simply plugging sensors into a board and downloading finished programs. They will learn how electronic components, logic and software work together.",
      "We begin with fundamental ideas:"
    ],
    fundamentals: [
      "Voltage, current and resistance",
      "Binary numbers",
      "Boolean logic",
      "AND, OR, NOT, NAND and XOR gates",
      "Transistors and electronic switches",
      "How logic gates are combined into larger circuits",
      "How computers store and process information"
    ],
    closing: [
      "Students then learn C programming and use it to control real hardware with Arduino.",
      "By the end of the course, they will understand much more than how to make an LED blink. They will understand why it blinks, what the program is doing, and how the computer follows each instruction."
    ]
  },

  // "What Students Will Learn" — four topic cards
  whatStudentsLearn: {
    title: "What Students Will Learn",
    cards: [
      {
        title: "Logic and Computer Fundamentals",
        paragraphs: [
          "Students learn binary, Boolean logic and the basic operations used by every computer.",
          "They build and study logic gates, then combine them to create more complex circuits."
        ]
      },
      {
        title: "Electronics",
        paragraphs: [
          "Students learn how to use breadboards, LEDs, resistors, buttons, transistors and integrated circuits.",
          "They also learn how to read simple circuit diagrams and troubleshoot their own work."
        ]
      },
      {
        title: "C Programming",
        paragraphs: [
          "C is one of the most important languages in computing. It is widely used in operating systems, embedded devices, microcontrollers and high-performance software.",
          "Students learn:"
        ],
        items: [
          "Variables and data types",
          "Conditions and loops",
          "Functions",
          "Arrays",
          "Pointers",
          "Binary operations",
          "Memory",
          "Input and output",
          "Debugging",
          "Structured program design"
        ]
      },
      {
        title: "Arduino",
        paragraphs: [
          "Students use Arduino to connect software with the physical world.",
          "They write their own programs, build circuits and learn how a microcontroller reads input, processes information and controls output.",
          "Projects may include lights, buttons, displays, motors and sensors, but every project is used to teach a deeper computing principle."
        ]
      }
    ]
  },

  // "A Different Kind of Programming Course"
  different: {
    title: "A Different Kind of Programming Course",
    intro: [
      "Many beginner programming courses focus on making quick projects.",
      "Hypatia Academy focuses on understanding.",
      "Students are encouraged to ask:"
    ],
    questions: [
      "What is the computer doing?",
      "How does the circuit work?",
      "What happens inside memory?",
      "How does a processor make decisions?",
      "How does C communicate with hardware?",
      "How can a complex computer be built from simple logical operations?"
    ],
    closing: "This approach gives students a foundation they can use later in computer science, electronics, robotics, engineering and embedded systems."
  },

  // "Who Can Join?" and "Completely Free" combined info section
  info: {
    whoCanJoin: {
      title: "Who Can Join?",
      paragraphs: [
        "The course is designed for teenagers living in Europe.",
        "Students do not need previous experience with C, Arduino or electronics. They should be curious, willing to solve problems and prepared to attend live classes regularly.",
        "The course runs for nine months.",
        "All classes are live. This is not a recorded video course."
      ]
    },
    free: {
      title: "Completely Free",
      paragraphs: [
        "There are no tuition fees.",
        "Hypatia Academy was created to give young people access to serious technical education regardless of their family's income.",
        "Students may need a basic Arduino starter kit and a computer, but the teaching itself is completely free."
      ]
    }
  },

  // About Hypatia Academy + instructor bio
  about: {
    title: "About Hypatia Academy",
    paragraphs: [
      "Hypatia Academy has been teaching young people since 2021.",
      "More than 100 students have taken part in our classes.",
      "Our courses are designed to be demanding, practical and intellectually serious. Students do not simply memorize instructions. They learn to reason, experiment, make mistakes and understand how things work."
    ],
    instructor: {
      photo: "img/walker.png",
      name: "Walker Rowe",
      bio: "All classes are taught live online by Walker Rowe. Walker Rowe is a retired American programmer, writer, and educator living in Cyprus."
    }
  },

  // "From Logic Gates to C Programs" — the conceptual path
  path: {
    title: "From Logic Gates to C Programs",
    intro: "A computer may seem impossibly complicated, but every computer is built from simple ideas.",
    steps: [
      "A transistor can act as a switch.",
      "Switches can form logic gates.",
      "Logic gates can perform calculations.",
      "Those calculations can become a processor.",
      "C programs can control that processor."
    ],
    closing: "At Hypatia Academy, students follow that path step by step.",
    flow: [
      "From electricity to logic.",
      "From logic to circuits.",
      "From circuits to computers.",
      "From computers to C."
    ]
  },

  // Final "Apply to Join" call-to-action section
  apply: {
    title: "Apply to Join",
    intro: "Applications are open to teenagers living in Europe who are interested in programming, electronics and understanding how computers work.",
    details: [
      { label: "Course length", value: "9 months" },
      { label: "Format", value: "Live online classes" },
      { label: "Subjects", value: "C programming, Arduino, electronics and computer logic" },
      { label: "Cost", value: "Free" },
      { label: "Experience required", value: "None" }
    ],
    cta: "Apply to Join"
  },

  // Contact links used in the header/footer
  contact: {
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdunF0S2aaWxjip0yh989nvvklVRr_bDWnC74IjUHUV6cPUnQ/viewform",
    whatsapp: "https://wa.me/35797629604",
    email: "werowe@walkerrowe.com",
    linkedin: "https://www.linkedin.com/in/walkerrowe/",
    youtube: "https://www.youtube.com/channel/UCeVVG0cwtAb311Di1pp9dfA"
  },

  footer: {
    tagline: "Hypatia Academy — free, live, serious computer science education for teenagers in Europe.",
    copyright: "© " + new Date().getFullYear() + " Hypatia Academy. All rights reserved.",
    privacyLink: "Privacy Policy"
  }
};
