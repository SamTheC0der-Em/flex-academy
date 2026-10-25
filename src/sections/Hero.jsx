import imgone from "../assets/Rectangle-6.svg";
import imgtwo from "../assets/Rectangle-7.svg";
import imgthree from "../assets/Rectangle-8.svg";
import imgfour from "../assets/Rectangle-9.svg";
import Button from "../components/Button.jsx";
import yellowCircle from "../assets/hero-pill.svg";

export default function Hero() {
  return (
    <section className="mt-30.5 px-5 pb-20 text-center sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 inline-flex items-center gap-2 rounded-lg bg-[#E9EDED] px-2 py-1 text-sm font-bold text-[#274E4C]">
          <img src={yellowCircle} alt="" className="h-2 w-2" />
          Your rental business guide
        </p>

        <h1 className="mx-auto max-w-7xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
          Start with your <span className="text-[#888C8F]">first unit</span>,
          build toward an <span className="text-[#D16500]">income</span> you
          own.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl font-normal leading-relaxed text-[#555A5F]">
          Build a short-term rental business from the ground up with the right
          playbook, systems and guidance used to build a real STR operation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button className="rounded-2xl border-[1.5px] border-[#274E4C] bg-white px-6 py-3 text-base font-bold text-[#274E4C] transition-colors hover:bg-[#274E4C]/10">
            Book a free call
          </Button>

          <Button className="rounded-2xl border border-[#274E4C] bg-[#274E4C] px-4 py-3 text-base font-bold text-white hover:bg-[#1e3e3c]">
            Register for free webinar
          </Button>
        </div>
      </div>

    
   
      <div className="relative mx-auto mt-14 w-full max-w[1296px]">
        <div className="grid h-[454px] grid-cols-4 gap-2 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
          {[imgone, imgtwo, imgthree, imgfour].map((image, index) => (
            <div key={index} className="h-full min-w-0 overflow-hidden">
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

      
        <div className="absolute -bottom-0 left-1/2 z-10 flex w-[calc(100%-32px)] max-w-[1143px] -translate-x-1/2 flex-row overflow-hidden rounded-[24px] bg-white shadow-[0px_0px_36px_rgba(39,78,76,0.25)]">
          {[
            { value: "86", label: "STR established" },
            { value: "99+", label: "Businesses supported" },
            { value: "3000+", label: "Properties managed" },
            { value: "40+", label: "Countries covered" },
            { value: "$192.5 million", label: "Revenue we helped grow" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`flex h-[113px] min-w-0 flex-1 flex-col items-center justify-center gap-2 bg-white px-2 py-6 ${
                index !== 4 ? "border-r border-[#EBEBEC]" : ""
              }`}
            >
              
           <span className="w-full text-center font-['Aeonik_TRIAL'] text-2xl font-bold leading-[150%] tracking-normal text-black">
           {stat.value}
           </span>


              
          <span className="w-full text-center font-['Aeonik_TRIAL'] text-[14px] font-normal leading-[150%] tracking-normal text-[#555A5F]">
          {stat.label}
          </span>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
