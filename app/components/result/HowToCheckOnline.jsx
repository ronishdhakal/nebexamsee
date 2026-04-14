export default function HowToCheckOnline() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to Check SEE Result 2082/2083 Online
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
          Checking your SEE Result online is quick and easy. You can use reliable
          platforms like College Info Nepal to access accurate and timely
          results. Follow the steps below to view your SEE result online:
        </p>

        {/* Content Grid */}
        <div className="space-y-8 max-w-3xl">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                1
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Go to{" "}
                <span className="text-blue-600">
                  see.collegeinfonepal.com
                </span>
              </p>
              <p className="text-gray-600 mt-2">
                Alternatively, search for "SEE Result College Info Nepal" on
                Google or any search engine.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                2
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Enter Your Symbol Number
              </p>
              <p className="text-gray-600 mt-2">
                Type your symbol number correctly as shown on your SEE admit
                card.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                3
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Submit and View Result
              </p>
              <p className="text-gray-600 mt-2">
                Click on the submit button, and your SEE result will appear on
                the screen instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}