import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <Card className="transition hover:border-blue-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span>Credits: {credits}</span>
              <span className="ml-3 text-sm text-muted-foreground">
                {isElective ? "Elective" : "Required"}
              </span>
            </div>

            <Button variant="ghost" size="sm">
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}