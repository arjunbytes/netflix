import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import BannerButtons from "./BannerButtons";

async function getData() {
  try {
    const data = await prisma.movies.findFirst({
      select: {
        title: true,
        description: true,
        videoSource: true,
        imageLink: true,
        release: true,
        duration: true,
        id: true,
        agerestrict: true,
        youtubeLink: true,
      },
      where: {
        id: 1, // Use a number instead of a string
      },
      // You can include additional conditions if needed
    });

    return data;
  } catch (error) {
    throw error; // Optional: You can handle the error or rethrow it
  }
}

export default async function MovieVideo() {
  const data = await getData();

  return (
    <div className="w-full flex h-[55vh] lg:h-[60vh]  justify-start items-center">
      <video
        poster={data?.imageLink}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[70vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-2xl md:text-2xl lg:text-3xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">
          {data?.description}
        </p>
        <div className="flex gap-x-3 mt-4">
          <BannerButtons
            age={data?.agerestrict as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.description as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeLink as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}
