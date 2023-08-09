const writers = [
  {
    id: 1,
    name: "James Cook",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Computer Science, Mathematics, Science, Philosophy",
    rating: "4.6",
    projectsCompleted: "87",
    bio: "James is a highly skilled essay writer with over 6 years of experience. Holding a Master's Degree in Computer Science, he has a deep understanding of the subject and can provide insightful and well-researched essays in various computer science topics. James's expertise extends to mathematics, science, and philosophy, allowing him to offer comprehensive and knowledgeable perspectives in his writing."
  },
  {
    id: 2,
    name: "Emily Johnson",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Business Studies, Economics, Political Science, Environmental Studies",
    rating: "4.4",
    projectsCompleted: "57",
    bio: "With 4 years of experience, Emily is a proficient writer who holds an MBA degree. Her expertise lies in the field of business studies, making her an excellent choice for essays related to business administration. Emily's deep understanding of business concepts allows her to craft persuasive essays that delve into topics such as economics, political science, and environmental studies, providing well-reasoned arguments and insights."
  },
  {
    id: 3,
    name: "Olivia Brown",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Marketing, Business Studies, Art History, Cultural Studies",
    rating: "4.8",
    projectsCompleted: "93",
    bio: "Olivia is a talented writer with 5 years of experience and a Bachelor's Degree in Marketing. Her strong foundation in marketing allows her to create persuasive and engaging essays on various marketing topics. In addition to marketing and business studies, Olivia has a keen interest in art history and cultural studies. Her ability to intertwine these subjects with marketing concepts results in well-rounded and captivating essays."
  },
  {
    id: 4,
    name: "John Jones",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Finance, Economics, Business Studies, Mathematics",
    rating: "4.6",
    projectsCompleted: "71",
    bio: "With 8 years of experience, John is a finance specialist who holds a Master's Degree in Finance. His deep knowledge of financial principles and investment strategies enables him to provide in-depth analysis and comprehensive essays in finance-related topics. John's expertise extends to economics, business studies, and mathematics, allowing him to deliver well-supported arguments and simplify complex ideas for his clients."
  },
  {
    id: 5,
    name: "Emma Davis",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Psychology, Literature, Social Studies, English Language Arts",
    rating: "4.5",
    projectsCompleted: "63",
    bio: "Emma is a skilled essay writer with a background in psychology. With 5 years of experience, she possesses a deep understanding of various psychological theories and research studies. Emma's expertise also extends to subjects like literature, social studies, and English Language Arts. Her ability to connect concepts across these disciplines allows her to provide well-written and insightful essays for clients."
  },
  {
    id: 6,
    name: "William Miller",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Computer Science, Mathematics, Science, Philosophy",
    rating: "4.9",
    projectsCompleted: "11",
    bio: "William is a highly experienced writer with a master's degree in computer science. With 8 years of experience, he possesses a deep understanding of algorithms, programming languages, and software development concepts. In addition to computer science, William's expertise extends to mathematics, science, and philosophy. His attention to detail and ability to provide clear explanations make him a sought-after writer in these subjects."
  },
  {
    id: 7,
    name: "Ava Taylor",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Communications, Social Studies, Art History, Cultural Studies",
    rating: "4.7",
    projectsCompleted: "79",
    bio: "Ava is a talented writer with 6 years of experience, specializing in communications. She excels in producing well-crafted essays that explore various aspects of mass media, public relations, and interpersonal communication. Ava's expertise also extends to subjects like social studies, art history, and cultural studies. Her effective communication skills and attention to detail make her an excellent choice for impactful essays in these fields."
  },
  {
    id: 8,
    name: "David Diaz",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Civil Engineering, Mathematics, Science, Environmental Studies",
    rating: "4.5",
    projectsCompleted: "69",
    bio: "David is a knowledgeable writer with a master's degree in civil engineering. With 7 years of experience, he provides detailed explanations and analyses of structural designs, construction methods, and infrastructure projects. David's expertise also extends to subjects like mathematics, science, and environmental studies. His ability to present technical information in a clear and concise manner ensures that his essays are informative and well-received."
  },
  {
    id: 9,
    name: "Sophia Thomas",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Literature, History, Philosophy, Cultural Studies",
    rating: "4.8",
    projectsCompleted: "88",
    bio: "Sophia has experience writing essays and a love for English literature. With 5 years of experience, she possesses profound knowledge of literary works, critical analysis, and writing techniques. Sophia's expertise also extends to subjects like history, philosophy, and cultural studies. Her ability to articulate complex ideas and conduct meticulous research makes her a trusted choice for well-crafted essays in these fields."
  },
  {
    id: 10,
    name: "Joseph Martinez",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Information Technology, Business Studies, Economics, Political Science",
    rating: "4.5",
    projectsCompleted: "61",
    bio: "Joseph is a proficient writer with a master's degree in IT. With 6 years of experience, he possesses a comprehensive understanding of database management, network security, and software development. Joseph's expertise also extends to subjects like business studies, economics, and political science. His ability to simplify complex IT concepts and provide practical examples in his essays makes him a reliable writer in these areas."
  },
  {
    id: 11,
    name: "Isabella Robinson",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Nursing, Art History, Visual Communication, Cultural Studies",
    rating: "4.9",
    projectsCompleted: "99",
    bio: "Isabella is a talented writer with a background in nursing. With 6 years of experience, her expertise allows her to explore various design principles, visual communication techniques, and creative processes in her essays. Isabella's ability to blend design theory with practical examples and her commitment to delivering visually engaging essays make her a sought-after writer in the field of graphic design. Her knowledge extends to subjects like art history and cultural studies, allowing her to provide well-rounded insights in her writing."
  },
  {
    id: 12,
    name: "Daniel Clark",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Biology, Science, Environmental Studies, Research Analysis",
    rating: "4.7",
    projectsCompleted: "75",
    bio: "Daniel is a knowledgeable writer with a bachelor's degree in biology. With 5 years of experience, he provides in-depth analysis and well-researched essays on various biological concepts, research studies, and ecological systems. Clients seeking biology-related content can rely on Daniel for his attention to detail and his capacity to communicate complicated scientific ideas in a simple and straightforward manner. His expertise also extends to subjects like science, environmental studies, and research analysis."
  },
  {
    id: 13,
    name: "Mia Rodriguez",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Human Resources, Organizational Behavior, Employment Law, Business Studies",
    rating: "4.6",
    projectsCompleted: "69",
    bio: "Mia is a skilled writer with 7 years of experience and expertise in human resources. Holding a master's degree in HR, she possesses a deep understanding of organizational behavior, talent management, and employment law. Mia's ability to analyze complex HR challenges and provide well-structured essays makes her a reliable writer for clients seeking HR-related content. Her knowledge also extends to subjects like business studies, allowing her to provide comprehensive insights in her writing."
  },
  {
    id: 14,
    name: "Benjamin Lee",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Economics, Political Science, Business Studies, Philosophy",
    rating: "4.8",
    projectsCompleted: "94",
    bio: "Benjamin is a proficient writer with 6 years of experience, specializing in economics essays. With a bachelor's degree in economics, he provides insightful analysis and well-supported arguments on various economic theories, market dynamics, and policy implications. Benjamin's ability to explain complex economic concepts in a concise and accessible manner ensures that his essays are informative and engaging. His expertise also extends to subjects like political science and philosophy, enabling him to provide a multidimensional perspective in his writing."
  },
  {
    id: 15,
    name: "Harper Wilson",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Fine Arts, Art History, Cultural Studies, Literature",
    rating: "4.4",
    projectsCompleted: "54",
    bio: "Harper is a talented writer with 4 years of experience and a background in fine arts. Her expertise allows her to explore various art forms, artistic movements, and cultural influences in her essays. Harper's ability to provide nuanced interpretations and convey visual experiences through writing makes her a valuable writer for clients seeking content related to the world of fine arts. Her knowledge extends to subjects like art history and literature, allowing her to offer well-rounded perspectives in her writing."
  },
  {
    id: 16,
    name: "Christopher Wright",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Mechanical Engineering, Mathematics, Physics, Science",
    rating: "4.9",
    projectsCompleted: "108",
    bio: "Christopher is a highly skilled writer with 8 years of experience, specializing in mechanical engineering essays. With a master's degree in mechanical engineering, he possesses extensive knowledge of thermodynamics, fluid mechanics, and machine design. Christopher's ability to apply theoretical knowledge to real-world applications and his attention to detail make him a reliable writer for clients seeking mechanical engineering content. His expertise also extends to subjects like mathematics, physics, and science, enabling him to provide comprehensive insights in his writing."
  },
  {
    id: 17,
    name: "Abigail Moore",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Sociology, Social Studies, Cultural Studies, Research Analysis",
    rating: "4.7",
    projectsCompleted: "81",
    bio: "Abigail is a knowledgeable writer with 6 years of experience and a background in sociology. Her expertise allows her to examine social issues, cultural phenomena, and research methodologies in her essays. Abigail's ability to provide critical analysis, supported by empirical evidence, makes her a valuable asset for clients seeking sociology-related content. Her knowledge extends to subjects like social studies and cultural studies, enabling her to offer a comprehensive understanding of societal dynamics in her writing."
  },
  {
    id: 18,
    name: "Matthew Taylor",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Master's Degree",
    specializedIn: "Education, Psychology, Social Studies, Research Analysis",
    rating: "4.6",
    projectsCompleted: "65",
    bio: "Matthew is a proficient writer with 5 years of experience, specializing in education essays. With a master's degree in education, he possesses a comprehensive understanding of pedagogical theories, instructional strategies, and educational policies. Matthew's ability to provide practical insights and his commitment to producing well-structured essays make him a reliable writer for clients seeking education-related content. His expertise also extends to subjects like psychology and social studies, allowing him to provide a multidisciplinary approach in his writing."
  },
  {
    id: 19,
    name: "Charlotte Hernandez",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Nursing, Healthcare, Medical Sciences, Research Analysis",
    rating: "4.8",
    projectsCompleted: "92",
    bio: "Charlotte is a skilled writer with 7 years of experience and a background in nursing. Her expertise allows her to explore various healthcare topics, patient care practices, and medical advancements in her essays. Charlotte's ability to provide evidence-based arguments and her attention to detail make her a trusted choice for clients seeking nursing-related content. Her knowledge extends to subjects like healthcare and medical sciences, enabling her to offer well-rounded insights in her writing."
  },
  {
    id: 20,
    name: "Michael Williams",
    imgSrc: "https://www.dropbox.com/s/lusbj2w7pb9chba/cardgirl.jpg?raw=1",
    degree: "Bachelor's Degree",
    specializedIn: "Electrical Engineering, Mathematics, Science, Physics",
    rating: "4.9",
    projectsCompleted: "104",
    bio: "Michael is an exceptional writer with 7 years of experience and a Bachelor's Degree in Electrical Engineering. His technical background and expertise in the field enable him to explain complex concepts with clarity. Michael's specialization includes electrical engineering, mathematics, science, and physics. His ability to break down intricate ideas and provide well-structured essays is highly valued by clients."
  },
];

// Export the writers array if needed

  
  export default writers;
  

  

