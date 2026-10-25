
const programmes = [
  {
    badge: "Newbies",
    title: "Launch",
    description:
      "For newcomers starting their first STR business. Join a free webinar to learn about the programme and how to get started.",
    feeLabel: "Entry fee:",
    price: "$XXX.xx",
    button: "Register for free webinar",
    badgeBg: "#E9EDED",
  },
  {
    badge: "Early operators",
    title: "Scale",
    description:
      "For operators who want to grow beyond a few units and build a structured, scalable business.",
    feeLabel: "Premium fee:",
    price: "$XXX.xx",
    button: "Book a free call",
    badgeBg: "#FAF0E6",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#FFFAE7] px-5 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[805px] text-center">
          <p className="text-[17px] text-[#32383E]">
            Programmes
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black sm:text-[35px]">
            At Flex Academy, we engage...
          </h2>

          <p className="mt-3 text-[17px] leading-relaxed text-[#555A5F] sm:text-xl">
            Both newbies and early operators. Launch helps aspiring STR entrepreneurs go from idea to their first unit, while Scale helps operators build a structured, scalable business.
          </p>
        </div>

        <div className="mt-12 grid justify-items-center gap-6 md:grid-cols-2">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className="flex min-h-[413px] w-full max-w-[393px] flex-col rounded-3xl bg-white p-8 shadow-[0_0_24px_rgba(0,0,0,0.08)]"
            >
              <span
                className="flex w-fit items-center gap-2 rounded-full px-3 py-2 text-sm"
                style={{ backgroundColor: programme.badgeBg }}
              >
                <span className="h-2 w-2 rounded-full bg-[#FFCB0F]" />
                {programme.badge}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#274E4C]">
                {programme.title}
              </h3>

              <p className="mt-3 text-base leading-6 text-[#555A5F]">
                {programme.description}
              </p>

              <div className="mt-6">
                <p className="text-sm text-[#555A5F]">
                  {programme.feeLabel}
                <span className="mt-1 text-2xl font-bold text-[#274E4C]">
                  {programme.price}
                </span>
                </p>
              </div>

              <button
                type="button"
                className="mt-auto h-12 w-full rounded-lg bg-[#274E4C] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1D3D3B]"
              >
                {programme.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
