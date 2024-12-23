import React from "react";

interface HeroProps {
  title: string;
  description: string;
  subDescription: string;
  showTitle?: boolean; // Optional prop to hide title
  showDescription?: boolean; // Optional prop to hide description
  showSubDescription?: boolean; // Optional prop to hide sub-description
}

const HeroSection: React.FC<HeroProps> = ({
  title,
  description,
  subDescription,
  showTitle = true,
  showDescription = true,
  showSubDescription = true,
}) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-700 text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        {/* Hero Content */}
        <div className="text-center space-y-6">
          {/* Title with Background */}
          {showTitle && (
            <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-2 rounded-md shadow-lg">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
                {title}
              </h1>
            </div>
          )}

          {/* Description with Subtle Background */}
          {showDescription && (
            <p className="text-xl lg:text-2xl bg-gray-800 bg-opacity-40 p-4 rounded-lg shadow-sm">
              {description}
            </p>
          )}

          {/* Sub-description with Border and Style */}
          {showSubDescription && (
            <p className="text-sm text-gray-300 tracking-wide max-w-md mx-auto border-t-2 border-gray-500 pt-2">
              {subDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
