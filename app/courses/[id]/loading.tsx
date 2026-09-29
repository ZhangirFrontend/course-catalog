export default function Loading() {
  return (
    <main className="min-h-screen p-8">
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-2/3 mb-4" />

        <div className="h-5 bg-gray-200 rounded w-full mb-2" />

        <div className="h-5 bg-gray-200 rounded w-5/6 mb-6" />

        <div className="h-8 bg-gray-200 rounded w-32" />
      </div>
    </main>
  );
}