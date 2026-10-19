import Button from "../components/Button.jsx";
import yellowCircle from "../assets/hero-pill.svg";
export default function Hero() {
  return (
    <section className="px-5 pb-20  text-center sm:px-8 mt-30.5">
      <div className="mx-auto max-w-5xl  ">
        <p className="mb-8 inline-flex items-center gap-2 rounded-lg bg-[#E9EDED] px-2 py-1 text-sm font-bold text-[#274E4C]">
          <img src={yellowCircle} alt="" className="h-2 w-2" />
          Your rental business guide
        </p>
        <h1 className="mx-auto max-w-7xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
          Start with your <span className="text-[#888C8F]">first unit</span>,
          build toward an <span className="text-[#D16500]">income</span> you
          own.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#555A5F] font-[400px]">
          Build a short-term rental business from the ground up with the right
          playbook, systems and guidance used to build a real STR operation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button className="rounded-2xl border-[1.5px] border-[#274E4C] bg-white px-6 py-3 text-base font-bold text-[#274E4C] transition-colors hover:bg-[#274E4C]/10">
            Book a free call
          </Button>
          <Button className="rounded-2xl bg-[#274E4C] border border-[#274E4C] px-4 py-3 text-base font-bold text-white  hover:bg-[#1e3e3c]">
            Register for free webinar
          </Button>
        </div>
      </div>
    </section>
  );
}
