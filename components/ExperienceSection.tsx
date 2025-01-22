import React from "react";

const experiences = [
  {
    period: "Sept 2023 - Present",
    role: "Product Designer",
    company: "Design Scientist",
    logo: "/path/to/design-scientist-logo.png",
  },
  {
    period: "Sept 2023 - April 2024",
    role: "Senior Product Designer",
    company: "Orbit",
    logo: "/path/to/orbit-logo.png",
    note: "acquired by Postman",
  },
  {
    period: "May 2023 - Dec 2023",
    role: "Lead Product Designer",
    company: "ZST",
    logo: "/path/to/zst-logo.png",
  },
  {
    period: "Oct 2022 - May 2023",
    role: "Lead Product Designer",
    company: "Borderless Delivery",
    logo: "/path/to/borderless-logo.png",
  },
  {
    period: "2022",
    role: "Product Designer",
    company: "awesomic",
    logo: "/path/to/awesomic-logo.png",
  },
  {
    period: "May 2021 - Sept 2022",
    role: "UX Designer",
    company: "CBit Industries",
  },
  {
    period: "March 2021 - May 2022",
    role: "Product Designer",
    company: "Suburban Fiberco (Legend Internet)",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
        WHERE I HAVE PUT IN VALUE
      </h3>
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">
        My experience so far
      </h2>

      <div className="grid gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between items-start text-gray-800"
          >
            <p className="text-sm text-gray-600 min-w-[150px]">{exp.period}</p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{exp.role}</p>
              {exp.logo && (
                <img src={exp.logo} alt={exp.company} className="h-4" />
              )}
              <p className="text-sm text-gray-600">{exp.company}</p>
              {exp.note && (
                <span className="italic text-gray-500 text-xs">{exp.note}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
