import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  isElective,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="rounded-lg border p-5 shadow-sm hover:shadow-md transition">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between text-sm">
          <span>
            Credits: {credits}
          </span>

          <span>
            {isElective ? "Elective" : "Required"}
          </span>

          <span>
            ❤️ {likes}
          </span>
        </div>
      </div>
    </Link>
  );
}