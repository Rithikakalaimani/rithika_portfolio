import Image from "next/image";
import SectionTitle from "./SectionTitle";

const techGroups = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    label: "Backend & Databases",
    items: ["Node.js", "Express.js", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Languages",
    items: ["Java", "C", "Python"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Firebase", "Postman"],
  },
];

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>
            Hi, I&apos;m Rithika S, a final-year Computer Science undergraduate
            and full-stack developer who enjoys building scalable web
            applications and solving problems end-to-end.
          </p>
          <p>
            I thrive in collaborative, knowledge-sharing environments and bring
            a strong willingness to learn, adapt quickly, and deliver impact.
            Whether it&apos;s debugging a tough issue late at night or picking
            up a new framework on the fly, I approach challenges with persistence
            and enthusiasm.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {techGroups.map((group) => (
              <div
                key={group.label}
                className='rounded-lg border border-textGreen/20 bg-[#112240]/40 p-3 backdrop-blur-sm'
              >
                <span className='text-textGreen text-xs font-titleFont font-semibold tracking-wider uppercase block mb-2'>
                  {group.label}
                </span>
                <div className='flex flex-wrap gap-1.5'>
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className='inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium text-textLight/90 border border-textGreen/30 bg-[#0a192f]/60 hover:border-textGreen/60 hover:text-textGreen transition-colors duration-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group flex justify-center lgl:block'>
          <div className='absolute w-full h-80 left-0 lgl:-left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-0 lgl:pl-6'>
              <Image
                className='rounded-lg object-cover'
                src='/screenshots/photo.jpeg'
                alt='Rithika'
                fill
                sizes='(max-width: 1024px) 100vw, 33vw'
              />
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  );
};

export default About;
