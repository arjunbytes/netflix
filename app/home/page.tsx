import MovieGrid from "../components/MovieGrid";
import RecentlyAdded from "../components/RecentlyUpdated";

export default function Homepage() {
  return (
    <div className="p-5 lg:px-20">
      <MovieGrid />
      <RecentlyAdded />
    </div>
  );
}
