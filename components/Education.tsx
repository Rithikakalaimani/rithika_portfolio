import SectionTitle from "./SectionTitle";

const timeline = [
  {
    title: "12th",
    institution: "Boaz Public School",
    location: "India",
    period: "2021 – 2022",
  },
  {
    title: "B.E. Computer Science",
    institution: "St. Joseph's Institute of Technology",
    location: "India",
    period: "2022 – 2024",
  },
  {
    title: "B.E. Computer Science",
    institution: "SSN College of Engineering",
    location: "India",
    period: "2024 – 2026",
  },
  {
    title: "Technology Summer Intern",
    institution: "Barclays",
    location: "",
    period: "Jun 2025 – Aug 2025",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Education & Experience" titleNo="02" />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-[2px] bg-textGreen/30 rounded-full" />
        <div className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex gap-6 md:gap-8 pl-10 md:pl-12 pb-12 last:pb-0">
              {/* Node */}
              <div className="absolute left-0 top-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-textGreen bg-bodyColor flex items-center justify-center z-10 shrink-0">
                <div className="w-2 h-2 rounded-full bg-textGreen" />
              </div>
              {/* Card */}
              <div className="flex-1 rounded-lg border border-textGreen/20 bg-[#112240]/40 p-4 md:p-5 hover:border-textGreen/40 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-base md:text-lg font-semibold text-textLight">
                    {item.title}
                  </h3>
                  <span className="text-xs md:text-sm text-textGreen font-medium shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm md:text-base text-textDark font-medium">
                  {item.institution}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
