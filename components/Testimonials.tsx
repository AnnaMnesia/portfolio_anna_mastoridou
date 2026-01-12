import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <div id="projects" className="relative pb-20 pt-14">
      <div className="relative ">
        <div className="absolute -top-4 w-full h-[1px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <AnimatedTestimonials testimonials={testimonials} />
        <div className="absolute -bottom-4 w-full h-[1px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
}
