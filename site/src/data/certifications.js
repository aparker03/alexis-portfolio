// certifications.js

const certifications = [
  {
    title: "Applied Data Science with Python",
    provider: "University of Michigan",
    type: "Specialization",
    category: "Data Science",
    specialization: null,
    link: "https://coursera.org/share/15ad35bb13421f4bd0f995cf0fea9625"
  },
  {
    title: "Statistics with Python",
    provider: "University of Michigan",
    type: "Specialization",
    category: "Statistics + Math",
    specialization: null,
    link: "https://coursera.org/share/fb3d2e104ac5302569b3c769bdc6d8f8"
  },
  {
    title: "Python 3 Programming",
    provider: "University of Michigan",
    type: "Specialization",
    category: "Programming",
    specialization: null,
    link: "https://coursera.org/share/39422921c3915a4a34e48110b0190772"
  },
  {
    title: "Python for Everybody",
    provider: "University of Michigan",
    type: "Specialization",
    category: "Programming",
    specialization: null,
    link: "https://coursera.org/share/20c1e1ba6fcece40592f475301a04151"
  },
  {
    title: "Mind and Machine",
    provider: "University of Colorado Boulder",
    type: "Specialization",
    category: "Cognitive Science + AI",
    specialization: null,
    link: "https://coursera.org/share/9112db53abde7b4b3590fbf2f472a9b8"
  },
  {
    title: "Expressway to Data Science: Essential Math",
    provider: "University of Colorado Boulder",
    type: "Specialization",
    category: "Math for Data Science",
    specialization: null,
    link: "https://coursera.org/share/33f48c5576377e62d44022c9cde0d871"
  },
  {
    title: "Java Programming and Software Engineering Fundamentals",
    provider: "Duke University",
    type: "Specialization",
    category: "Software Engineering",
    specialization: null,
    link: "https://coursera.org/share/5d57dc8fd0ee13a78fe71e3e22d91018"
  },
  {
    title: "Computational Social Science",
    provider: "University of California, Davis",
    type: "Specialization",
    category: "Social Science + Ethics",
    specialization: null,
    link: "https://coursera.org/share/4e0c8a838d2a5016403f5ef2d575cf11"
  },
  {
    title: "Genomic Data Science",
    provider: "Johns Hopkins University",
    type: "Specialization",
    category: "Healthcare + Neuro",
    specialization: null,
    link: "https://coursera.org/share/c2ca7cfeef89789a786304666b44d282"
  },
  {
    title: "Data Science",
    provider: "Johns Hopkins University",
    type: "Specialization",
    category: "Data Science",
    specialization: null,
    link: "https://coursera.org/share/6d9c77e92cee52e34e6c47ec7e4fca4c"
  },
  {
    title: "IBM Data Science",
    provider: "IBM",
    type: "Specialization",
    category: "Data Science",
    specialization: null,
    link: "placeholder"
  },
  {
    title: "Neuroscience and Neuroimaging",
    provider: "Johns Hopkins University",
    type: "Specialization",
    category: "Healthcare + Neuro",
    specialization: null,
    link: "https://coursera.org/share/84e9585f0b15e6acad7d186834baa2aa"
  },
  {
    title: "Advanced Machine Learning on Google Cloud",
    provider: "Google Cloud",
    type: "Specialization",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/165b388610c89c95a03cd037a191ca30"
  },
  {
    title: "Machine Learning on Google Cloud",
    provider: "Google Cloud",
    type: "Specialization",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/8f3b81df04e7e329fc3eea861b26e2e3"
  },
  {
    title: "AI for Medicine",
    provider: "DeepLearning.AI",
    type: "Specialization",
    category: "Healthcare + Neuro",
    specialization: null,
    link: "https://coursera.org/share/7ad32b696f72a31b4c676bfc53da76f3"
  },
  {
    title: "Deep Learning",
    provider: "DeepLearning.AI",
    type: "Specialization",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/05ed41fae065000e1489e5a2f95574f0"
  },
  {
    title: "Machine Learning",
    provider: "DeepLearning.AI, Stanford University",
    type: "Specialization",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/37c94f22e1e6df9a9f084cf71ed7c774"
  },

  // ⏭️ Next up: BATCH 2 of 5
  // 🔹 BATCH 2 of 5

  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "AI/ML",
    specialization: "Deep Learning",
    link: "https://coursera.org/share/092ccbd1fabdec95c844dd6479399d3a"
  },
  {
    title: "Neural Networks and Deep Learning",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "AI/ML",
    specialization: "Deep Learning",
    link: "https://coursera.org/share/d67610d2b1ea6c5c1fff9e82515d0734"
  },
  {
    title: "Structuring Machine Learning Projects",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "AI/ML",
    specialization: "Deep Learning",
    link: "https://coursera.org/share/ac046e99ae1e44b83a647222d33b46c1"
  },
  {
    title: "Convolutional Neural Networks",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "AI/ML",
    specialization: "Deep Learning",
    link: "https://coursera.org/share/b2353f796a08f039d8780508e816cd18"
  },
  {
    title: "Sequence Models",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "AI/ML",
    specialization: "Deep Learning",
    link: "https://coursera.org/share/aefc38ae6b50b43b003fe2de72dcd3a7"
  },
  {
    title: "AI For Medical Diagnosis",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "Healthcare + Neuro",
    specialization: "AI for Medicine",
    link: "https://coursera.org/share/ab842e72753d898f040b1cb8499e1f32"
  },
  {
    title: "AI For Medical Prognosis",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "Healthcare + Neuro",
    specialization: "AI for Medicine",
    link: "https://coursera.org/share/4c8f9e75ee600510c8f80771935495dc"
  },
  {
    title: "AI For Medical Treatment",
    provider: "DeepLearning.AI",
    type: "Course",
    category: "Healthcare + Neuro",
    specialization: "AI for Medicine",
    link: "https://coursera.org/share/cdaad44798b19ee2f56574f84d2474ec"
  },
  {
    title: "Data Science Capstone",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/25d10f918ad88dd86202984400c668ca"
  },
  {
    title: "The Data Scientist’s Toolbox",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/20c0a0ba426020f8d4318de21e01e3c9"
  },
  {
    title: "R Programming",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "R Programming",
    specialization: "Data Science",
    link: "https://coursera.org/share/8c1e40e89e0e78eab390eff655c0c355"
  },
  {
    title: "Getting and Cleaning Data",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/0b00994888a681b9c9a27e73653f6fdf"
  },
  {
    title: "Exploratory Data Analysis",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/7d0deca22d2eeb1686f99b1e5410f73c"
  },
  {
    title: "Reproducible Research",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/9fe90be5d08b9c48de4d9fa7164d2245"
  },
  {
    title: "Statistical Inference",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Statistics + Math",
    specialization: "Data Science",
    link: "https://coursera.org/share/324af6a7e73893fb2db9cb153ecdd21b"
  },

  // ⏭️ Next up: BATCH 3 of 5
  // 🔹 BATCH 3 of 5

  {
    title: "Regression Models",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Statistics + Math",
    specialization: "Data Science",
    link: "https://coursera.org/share/cbbea5cc7a67bc6b94819661944a716a"
  },
  {
    title: "Practical Machine Learning",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "AI/ML",
    specialization: "Data Science",
    link: "https://coursera.org/share/d55dc1ddf574c54e494492802302f3b6"
  },
  {
    title: "Developing Data Products",
    provider: "Johns Hopkins University",
    type: "Course",
    category: "Data Science",
    specialization: "Data Science",
    link: "https://coursera.org/share/6688c1849da74b18e25bf04a37d63db6"
  },
  {
    title: "Python Data Structures",
    provider: "University of Michigan",
    type: "Course",
    category: "Programming",
    specialization: "Python for Everybody",
    link: "https://coursera.org/share/99a49361c1eb7125ad24e453173ce99b"
  },
  {
    title: "Using Python to Access Web Data",
    provider: "University of Michigan",
    type: "Course",
    category: "Programming",
    specialization: "Python for Everybody",
    link: "https://coursera.org/share/431e5de652bc7c0a978bf43cda987aa5"
  },
  {
    title: "Using Databases with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Databases",
    specialization: "Python for Everybody",
    link: "https://coursera.org/share/b1a3bbb830cc0aab3ed910dc398d1fc9"
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Data Science",
    specialization: "Python for Everybody",
    link: "https://coursera.org/share/eb57b9b6374aacf63c0e218cba60b05f"
  },
  {
    title: "Introduction to Data Science in Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Data Science",
    specialization: "Applied Data Science with Python",
    link: "https://coursera.org/share/d6d9ce783ac200406a19f679adad338a"
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Visualization",
    specialization: "Applied Data Science with Python",
    link: "https://coursera.org/share/22b8e8a0dfce2666e3cff44174fc34f8"
  },
  {
    title: "Applied Machine Learning in Python",
    provider: "University of Michigan",
    type: "Course",
    category: "AI/ML",
    specialization: "Applied Data Science with Python",
    link: "https://coursera.org/share/40e6fc5cec2b170e00f63dabe53ada94"
  },
  {
    title: "Applied Text Mining in Python",
    provider: "University of Michigan",
    type: "Course",
    category: "AI/ML",
    specialization: "Applied Data Science with Python",
    link: "https://coursera.org/share/55d4e8c7faff940027cbc7c5f6f88ee2"
  },
  {
    title: "Applied Social Network Analysis in Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Social Science + Ethics",
    specialization: "Applied Data Science with Python",
    link: "https://coursera.org/share/fc2e31c5f50e49564db3b6b9a8b8999c"
  },
  {
    title: "Fitting Statistical Models to Data with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Statistics + Math",
    specialization: "Statistics with Python",
    link: "https://coursera.org/share/8ced134132659ad0a0cbc95160cd1904"
  },
  {
    title: "Understanding and Visualizing Data with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Statistics + Math",
    specialization: "Statistics with Python",
    link: "https://coursera.org/share/074ba37a88014507cb82aab58496d36a"
  },
  {
    title: "Inferential Statistical Analysis with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Statistics + Math",
    specialization: "Statistics with Python",
    link: "https://coursera.org/share/47f1d2e7fe0ec463aba020969fd101ab"
  },

  // ⏭️ Next up: BATCH 4 of 5
  // 🔹 BATCH 4 of 5

  {
    title: "What is “the mind” and what is artificial intelligence?",
    provider: "University of Colorado Boulder",
    type: "Course",
    category: "Cognitive Science + AI",
    specialization: "Mind and Machine",
    link: "https://coursera.org/share/a1a91f0735091d57ded48c353228cc09"
  },
  {
    title: "Computational Vision",
    provider: "University of Colorado Boulder",
    type: "Course",
    category: "Cognitive Science + AI",
    specialization: "Mind and Machine",
    link: "https://coursera.org/share/3c2689cb7c23c4a878abb230c7f97a35"
  },
  {
    title: "Interpersonal, Developmental, and Evolutionary Perspectives of the Mind",
    provider: "University of Colorado Boulder",
    type: "Course",
    category: "Cognitive Science + AI",
    specialization: "Mind and Machine",
    link: "https://coursera.org/share/ca576e193a75340d701dde5bd749b308"
  },
  {
    title: "Methods for Solving Problems",
    provider: "University of Colorado Boulder",
    type: "Course",
    category: "Cognitive Science + AI",
    specialization: "Mind and Machine",
    link: "https://coursera.org/share/db3c49ede872916e4b8ec8957700b8fb"
  },
  {
    title: "Social Network Analysis",
    provider: "University of California, Davis",
    type: "Course",
    category: "Social Science + Ethics",
    specialization: "Computational Social Science",
    link: "https://coursera.org/share/15a74c39b7935985ee854837af5ce6fd"
  },
  {
    title: "Big Data, Artificial Intelligence, and Ethics",
    provider: "University of California, Davis",
    type: "Course",
    category: "Social Science + Ethics",
    specialization: "Computational Social Science",
    link: "https://coursera.org/share/32fc83391697aae15c7940e2b103559a"
  },
  {
    title: "Computational Social Science Capstone Project",
    provider: "University of California, Davis",
    type: "Course",
    category: "Social Science + Ethics",
    specialization: "Computational Social Science",
    link: "https://coursera.org/share/e23a922ec2432569bb4b8c8a184ffbc9"
  },
  {
    title: "Machine Learning Operations (MLOps): Getting Started",
    provider: "Google Cloud",
    type: "Course",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/044c3917ffd47734e7428ffd6ee4aa77"
  },
  {
    title: "Mining Quality Prediction Using Machine & Deep Learning",
    provider: "Coursera Project Network",
    type: "Course",
    category: "AI/ML",
    specialization: null,
    link: "https://coursera.org/share/8e050c61f59a8c2b34c16a8d10fa9a59"
  },
  {
    title: "Data Science Project: MATLAB for the Real World",
    provider: "MathWorks",
    type: "Course",
    category: "Data Science",
    specialization: "Practical Data Science with MATLAB",
    link: "https://coursera.org/share/0ab3b2721e3e8d52464465f1611f00fb"
  },
  {
    title: "Share Data Through the Art of Visualization",
    provider: "Google",
    type: "Course",
    category: "Visualization",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/2c068cedc3cb1ee10b6a31557829f823"
  },
  {
    title: "Google Data Analytics Capstone: Complete a Case Study",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/9dc65ff375dd11b50d953e0ae2c17221"
  },
  {
    title: "Prepare Data for Exploration",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/2400dae2a8888dd7cb2a47556a905953"
  },
  {
    title: "Process Data from Dirty to Clean",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/a7f303feb68fa196096c867996f6e1f6"
  },
  {
    title: "Analyze Data to Answer Questions",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/c3bf777951f0f986d9677dc7252fc1df"
  },
  {
    title: "Data Analysis with R Programming",
    provider: "Google",
    type: "Course",
    category: "R Programming",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/aa3b313079e542cd411cdc84df380d1a"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/c2f28ce55b90177af9f4f371058dac91"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    provider: "Google",
    type: "Course",
    category: "Data Science",
    specialization: "Google Data Analytics",
    link: "https://coursera.org/share/40a7551e367165da66dc5abd0c363189"
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    provider: "University of Michigan",
    type: "Course",
    category: "Data Science",
    specialization: "Python for Everybody",
    link: "https://coursera.org/share/eb57b9b6374aacf63c0e218cba60b05f"
  },
  {
    title: "Applied Data Science Capstone",
    provider: "IBM",
    type: "Course",
    category: "Data Science",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/2492a979b572c74d7f053dfee48324a4"
  },
  {
    title: "Data Visualization with Python",
    provider: "IBM",
    type: "Course",
    category: "Visualization",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/476ac73adf1fc0055ce62817d7eeb3bf"
  },
  {
    title: "Data Analysis with Python",
    provider: "IBM",
    type: "Course",
    category: "Data Science",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/d773b164d30960738c9ec0cf8ea964e7"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    provider: "IBM",
    type: "Course",
    category: "Databases",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/cbb1aaf9c956fa211efafb27cecd44e0"
  },
  {
    title: "Python Project for Data Science",
    provider: "IBM",
    type: "Course",
    category: "Programming",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/f0c42dd2b197b33a2888f486bbd30037"
  },
  {
    title: "Data Science Methodology",
    provider: "IBM",
    type: "Course",
    category: "Data Science",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/8c7b049e5f4e844028fdc1460c216385"
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "IBM",
    type: "Course",
    category: "Programming",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/03d43dd0d185d0ed3b06a27eba6a78d2"
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM",
    type: "Course",
    category: "AI/ML",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/df94f587aa26018555df5c8609ef345d"
  },
  {
    title: "What is Data Science?",
    provider: "IBM",
    type: "Course",
    category: "Data Science",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/99a0f73614076f7cffaf528747c96bb7"
  },
  {
    title: "Tools for Data Science",
    provider: "IBM",
    type: "Course",
    category: "Data Science",
    specialization: "IBM Data Science",
    link: "https://coursera.org/share/b255aca553a100d05614e157f0fc03d2"
  },

];

export default certifications;
