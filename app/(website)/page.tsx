import HeroSection from "@/components/home/hero";
import SearchBar from "@/components/home/search-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection
        title="DriveJournal"
        description="Discover, Share, and Chronicle Your Vehicle Experiences"
        subDescription="A community-driven platform to explore honest vehicle reviews, insights, and stories from enthusiasts like you."
      />
    <SearchBar />
    <div className="py-8 px-4 flex flex-col">
      <h1>Title</h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
          className="border rounded-lg shadow-md p-2 bg-white hover:shadow-lg transition"
        >
            <h2 className="text-lg font-bold text-gray-800 mb-2">Title</h2>
            <p className="text-gray-600 text-sm mb-4">Content Description</p>
            <img
                src='/pic1.png'
                alt='Post'
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
        </div>
      </div>
    </div>
    </div>
  );
}
