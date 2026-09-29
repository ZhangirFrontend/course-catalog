export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

const courses: Course[] = [
  {
    id: "web",
    title: "Advanced Web Technologies",
    description:
      "Modern web development using Next.js, React and TypeScript.",
    credits: 5,
    isElective: false,
    likes: 12,
  },
  {
    id: "database",
    title: "Database Systems",
    description:
      "Database design, SQL, PostgreSQL and database management.",
    credits: 5,
    isElective: false,
    likes: 8,
  },
  {
    id: "data-analysis",
    title: "Exploratory Data Analysis",
    description:
      "Data analysis and visualization using Python and Jupyter Notebook.",
    credits: 5,
    isElective: true,
    likes: 15,
  },
  {
    id: "linear-programming",
    title: "Linear Programming",
    description:
      "Optimization problems and mathematical methods for decision making.",
    credits: 4,
    isElective: true,
    likes: 6,
  },
  {
    id: "power-bi",
    title: "Power BI",
    description:
      "Data visualization, dashboards and business intelligence.",
    credits: 4,
    isElective: true,
    likes: 10,
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description:
      "Software development principles, architecture and project management.",
    credits: 5,
    isElective: false,
    likes: 9,
  },
];

export async function getCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return courses;
}

export async function getCourse(id: string): Promise<Course | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return courses.find((course) => course.id === id);
}