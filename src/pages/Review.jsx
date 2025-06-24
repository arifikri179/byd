import React from "react";

const Review = () => {
  const videos = [
    "https://www.youtube.com/embed/mjUlIMxRhmc?si=TO39ob00xlz-wqym",
    "https://www.youtube.com/embed/b5sDEM7GgNs?si=8CqOF5eYkowdxGOL",
    "https://www.youtube.com/embed/Ui8KJo1rTIc?si=zl7BsVk-krQVBvRM",
    "https://www.youtube.com/embed/njJbMAyTino?si=vhKInMSJugc91J7K",
  ];

  return (
    <section id="review" className="w-full bg-gray-100 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Video Review</h2>
          <div className="mx-auto w-24 h-1 bg-blue-600 rounded"></div>
        </div>

        {/* Grid Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((videoUrl, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <div className="w-full h-48 sm:h-56">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={videoUrl}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
