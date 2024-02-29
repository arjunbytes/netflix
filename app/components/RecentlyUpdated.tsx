import Image from "next/image";
import prisma from "../utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { MovieCard } from "./MovieCard";

async function getData(userId: string) {
  const data = await prisma.movies.findMany({
    select: {
      id: true,
      description: true,
      title: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      imageLink: true,
      youtubeLink: true,
      agerestrict: true,
      release: true,
      duration: true,
    },
    orderBy: {
      uploadedAt: "desc",
    },
    take: 4,
  });

  return data;
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);

  return (
    <div>
      <h1 className="text-3xl">Recently Added</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {data.map((movie) => (
          <div key={movie.id} className="relative h-48">
            <Image
              src={movie.imageLink}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />

            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={movie.imageLink}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />
                <MovieCard
                  movieId={movie.id}
                  overview={movie.description}
                  title={movie.title}
                  wachtListId={movie.WatchLists[0]?.id}
                  youtubeUrl={movie.youtubeLink}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  key={movie.id}
                  age={movie.agerestrict}
                  time={movie.duration}
                  year={movie.release}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
