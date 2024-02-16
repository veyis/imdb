export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
