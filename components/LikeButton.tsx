"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({
  initialLikes,
}: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      ❤️ {likes}
    </button>
  );
}