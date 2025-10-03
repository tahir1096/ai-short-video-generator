import Link from "next/link";
import Header from "./dashboard/_components/Header";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />

      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-5xl text-gray-900">
          Generate <span className="text-primary">AI videos</span> from simple text prompts
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
          Prompt your video idea and our AI video generator writes the script,
          adds visuals generated with AI, adds voiceovers, subtitles, music,
          and more. Create professional videos for any topic in minutes.
        </p>

        <Link href="/dashboard/createvideo" className="mt-6 sm:mt-8">
          <Button
            size="lg"
            className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold bg-primary text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all duration-300 hover:scale-105 flex items-center"
          >
            Start Creating for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm border-t">
        © {new Date().getFullYear()} AI Video Generator -  Muhammad Tahir. All rights reserved.
      </footer>
    </div>
  );
}
