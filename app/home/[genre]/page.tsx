import { MovieCard } from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(genre: string, userId: string) {
  switch (genre) {
    case "tvshows": {
      const data = await prisma.movies.findMany({
        where: {
          genre: "show",
        },
        select: {
          agerestrict: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageLink: true,
          description: true,
          youtubeLink: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case "movies": {
      const data = await prisma.movies.findMany({
        where: {
          genre: "movie",
        },
        select: {
          agerestrict: true,
          duration: true,
          id: true,
          release: true,
          imageLink: true,
          description: true,
          youtubeLink: true,
          title: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }
    case "recent": {
      const data = await prisma.movies.findMany({
        where: {
          genre: "recent",
        },
        select: {
          agerestrict: true,
          duration: true,
          id: true,
          release: true,
          imageLink: true,
          description: true,
          youtubeLink: true,
          title: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });

      return data;
    }
    default: {
      throw new Error();
    }
  }
}

export default async function GenrePage({
  params,
}: {
  params: { genre: string };
}) {
  const session = await getServerSession(authOptions);
  const data = await getData(params.genre, session?.user?.email as string);

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageLink}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageLink}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard
                key={movie.id}
                age={movie.agerestrict}
                movieId={movie.id}
                overview={movie.description}
                time={movie.duration}
                title={movie.title}
                wachtListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0 ? true : false}
                year={movie.release}
                youtubeUrl={movie.youtubeLink}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
