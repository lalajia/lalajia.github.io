import pj1 from "../assets/project sunflower.png";
import pj2 from "../assets/Blog.png";
import pj3 from "../assets/Diabeatit.png";
import pj5 from "../assets/Algorithm graph.png";
import pj6 from "../assets/Database.png";

const ProjectDatas = [
  {
    img: pj1,
    title: "Project Sunflower(Group)",
    text: "Project Sunflower is a Google Chrome extension that blocks distracting websites, improves productivity, and encourages focus. Users can set customizable time limits for blocking websites, create whitelists and blacklists, and earn virtual sunflowers as rewards for completing focus periods. The extension also includes a leaderboard for comparing sunflower awards with friends. With Project Sunflower, users can effectively manage distractions, enhance their productivity, and stay motivated to reach their goals.",
    prototype:
      "https://www.figma.com/file/spQrnQjCkC8aJvCrcoMfSm/Sunflower?type=design&node-id=207%3A88&mode=design&t=lEyhEmtIT8Z6KfsC-1",
    video: "https://youtu.be/qjJsyrPawF8",
    techs: ["Javascript", "CSS", "HTML", "ReactJS", "NodeJS", "Firebase"],
    // embedvideo: "https://www.youtube.com/embed/qjJsyrPawF8",
  },
  {
    img: pj2,
    title: "Blog Website",
    text: "The Blog website is a full-stack project that provides dynamic content for both logged-in users and normal users. Logged-in users have additional privileges such as posting, editing, and deleting comments, while normal users can only view the posts. This project allows users to engage with the content by sharing their thoughts and opinions through comments. The website aims to create a collaborative and interactive environment where users can participate in discussions and share their perspectives.",
    techs: [
      "Javascript",
      "CSS",
      "HTML",
      "ReactJS",
      "NodeJS",
      "Prisma",
      "Authentication",
    ],
  },
  {
    embedvideo: "https://www.youtube.com/embed/SpCnUI41TQ4",
    title: "Java Game Project",
    text: "The Java Game project focuses on creating a dungeon environment using the Kruskal algorithm. The algorithm ensures that the dungeon forms with a minimal spanning tree, allowing for only one path from the starting point to the endpoint. Within the dungeon, there are three types of treasures that players can collect. Additionally, players can gather arrows to defend themselves against monsters. Monsters can attack the player, and if attacked twice, the player will be defeated. However, the player can use two arrows to eliminate one monster. The game provides an immersive experience where players navigate the dungeon, collect treasures, strategically use arrows, and avoid or defeat monsters to progress through the challenges.",
    video: "https://youtu.be/SpCnUI41TQ4",
    techs: [
      "Java",
      "OOD",
      "OOP",
      "TDD",
      "Algorithm",
      "UML",
      "Entity-Relationship Diagrams",
    ],
  },
  {
    img: pj3,
    title: "Project Diabeatit",
    text: "The Diabeatit Game project is an educational game developed using Unity and C#. The game is designed to teach children about diabetes and educate them on how to manage and treat it. Through engaging animations and mini-games, players learn about the condition, its causes, symptoms, and treatment options. The game aims to make learning about diabetes interactive and enjoyable for children, fostering a better understanding of the disease and promoting healthy habits.",
    prototype:
      "https://www.figma.com/proto/2hCVxqgFyPg2jb1xfutOto/diabeatit-wi21?node-id=435-4662&starting-point-node-id=435%3A4662&mode=design&t=3WgBzwph8cadJTu7-1",
    source: "https://github.com/lalajia/Diabetit",
    techs: ["Unity", "C#"],
  },
  {
    img: pj5,
    title: "Algorithm Analysis (Group)",
    text: "In our collaborative group project, we analyzed and compared the performance of different shortest path algorithms on graphs. Using Python, we extracted and cleaned the data, and made necessary modifications to the graph. We implemented Dijkstra's algorithm, Bellman-Ford algorithm, A* algorithm and Greedy Best First Search Algorithm to find the shortest path between two points on the graph. By analyzing factors like execution time, we gained insights into the efficiency of each algorithm, enhancing our understanding of their real-world applications.",
    source:
      "https://drive.google.com/file/d/1pMXPzqi9mUIqxJfqnUDRqkySrVskCUpM/view?usp=sharing",
    techs: ["Python", "Algorithm"],
  },
  {
    img: pj6,
    title: "Database Design (Group)",
    text: "In our database design group project, we utilized ERDs in 3NF and Relational Models to create a robust database system that ensured efficient organization and data integrity. We parsed extensive data from XML files, extracting information such as book names, publication dates, and author details. Through data extraction and transformation, we generated Fact tables and graphs based on specific criteria. Our project showcased our expertise in handling complex data and designing functional databases.",
    source:
      "https://drive.google.com/file/d/1MEhhqmP2Re1bHmB_hsMJxc4aBR-QL9cC/view?usp=sharing",
    techs: [
      "SQL",
      "MySQL",
      "MySQLite",
      "R",
      "Rstudio",
      "CSV",
      "XML",
      "SQL injection",
      "SQL triggers",
      "ERDs",
    ],
  },
];
export default ProjectDatas;
