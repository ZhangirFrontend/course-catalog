import { getCourse } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { id } = await params;

  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {course.title}
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        {course.description}
      </p>

      <div className="space-y-2 mb-6">
        <p>
          <strong>Credits:</strong> {course.credits}
        </p>

        <p>
          <strong>Type:</strong>{" "}
          {course.isElective ? "Elective" : "Required"}
        </p>

        <p>
          <strong>Likes:</strong> {course.likes}
        </p>
      </div>

      <LikeButton initialLikes={course.likes} />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { id: "web" },
    { id: "database" },
    { id: "data-analysis" },
    { id: "linear-programming" },
    { id: "power-bi" },
    { id: "software-engineering" },
  ];
}