export default function HowToCheckSMS() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to Check SEE Result 2082/2083 via SMS
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
          Several service providers offer SEE results through SMS. Companies
          such as Nepal Telecom, Swift Technology Pvt. Ltd., Janaki Technology
          Pvt. Ltd., and Aakash Tech Pvt. Ltd. publish results via SMS services.
          Follow the steps below to check your SEE result using SMS:
        </p>

        {/* Content Grid */}
        <div className="space-y-8 max-w-3xl">
          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">
              1.
            </div>
            <p className="text-gray-700 leading-relaxed">
              Open the messaging app on your mobile phone with an active SIM
              card.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">
              2.
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Compose a new message in the following format:{" "}
                <span className="font-semibold text-gray-900">
                  SEE &lt;space&gt; Symbol-Number
                </span>
              </p>
              <p className="text-gray-600 mt-2">
                Example:{" "}
                <span className="font-semibold text-gray-900">
                  SEE 3208984
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">
              3.
            </div>
            <p className="text-gray-700 leading-relaxed">
              Send the message to{" "}
              <span className="font-semibold text-gray-900">
                1600, 31003, 35001
              </span>{" "}
              or other official numbers provided for the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}