import {netflix,yummify,bot} from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

// const Projects = () => {
//   return (
//     <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
//       <SectionTitle title='Projects' titleNo='03' />
//       {/* ============ project One Start here ================ */}
//       <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
//         <div className='flex flex-col xl:flex-row gap-6'>
//           <a
//             className='w-full xl:w-1/2 h-auto relative group'
//             href='https://github.com/Rithikakalaimani/netflix_gpt'
//             target='_blank'
//           >
//             <div>
//               <Image
//                 className='w-full h-full object-contain'
//                 src={netflix}
//                 alt='netflix'
//               />
//               <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
//             </div>
//           </a>
//           <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
//             <div>
//               <p className='font-titleFont text-textGreen text-sm tracking-wide'>
//                 Featured Project
//               </p>
//               <h3 className='text-2xl font-bold'>Netflix_GPT</h3>
//             </div>
//             <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
//               A personalized movie recommendation system using React and
//               OpenAI’s GPT to suggest movies based on user preferences. It
//               integrates real-time data through APIs to pull movie details and
//               recommendations, enhancing user engagement.{" "}
//               {/* <span className='text-textGreen'>O-auth</span> and then make the
//               purchage using <span className='text-textGreen'>stripe</span>. */}
//             </p>
//             <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
//               <li>React</li>
//               <li>Javascript</li>
//               <li>TailwindCSS</li>
//               <li>Redux</li>
//               <li>OpenAI API</li>
//             </ul>
//             <div className='text-2xl flex gap-4'>
//               <a
//                 className='hover:text-textGreen duration-300'
//                 href='https://github.com/Rithikakalaimani/netflix_gpt'
//                 target='_blank'
//               >
//                 <TbBrandGithub />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* ============ project One End here ================== */}
//         {/* ============ project Two Start here ================ */}
//         <div className='flex flex-col xl:flex-row-reverse gap-6'>
//           <a
//             className='w-full xl:w-1/2 h-auto relative group'
//             href='https://github.com/Rithikakalaimani/WealthWise'
//             target='_blank'
//           >
//             <div>
//               <Image
//                 className='w-full h-full object-contain'
//                 src={bot}
//                 alt='bot'
//               />
//               <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
//             </div>
//           </a>
//           <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10'>
//             <div>
//               <p className='font-titleFont text-textGreen text-sm tracking-wide'>
//                 Featured Project
//               </p>
//               <h3 className='text-2xl font-bold'>WealthWise</h3>
//             </div>
//             <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16'>
//               The Wealth Wise Bot is a Discord financial assistant enabling
//               users to track expenses, manage budgets, and receive financial
//               insights. It supports expense logging, budget tracking, spending
//               summaries, and top-category analysis, ensuring efficient financial
//               management.{" "}
//               {/* <span className='text-textGreen'>comments on</span> it by passing
//               your ideas besides you can try to add your own{" "}
//               <span className='text-textGreen'>post</span> on it by logging on
//               the portal. */}
//             </p>
//             <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
//               <li>Node.js</li>
//               <li>Discord.js</li>
//               <li>MongoDB</li>
//               {/* <li>Sanity</li>
//               <li>React Hook Form</li> */}
//             </ul>
//             <div className='text-2xl flex gap-4'>
//               <a
//                 className='hover:text-textGreen duration-300'
//                 href='https://github.com/Rithikakalaimani/WealthWise'
//                 target='_blank'
//               >
//                 <TbBrandGithub />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* ============ project Two End here ================== */}
//         {/* ============ project Three Start here ============== */}
//         <div className='flex flex-col xl:flex-row gap-6'>
//           <a
//             className='w-full xl:w-1/2 h-auto relative group'
//             href='https://github.com/Rithikakalaimani/yummify'
//             target='_blank'
//           >
//             <div>
//               <Image
//                 className='w-full h-full object-contain'
//                 src={yummify}
//                 alt='bot'
//               />
//               <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
//             </div>
//           </a>
//           <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10'>
//             <div>
//               <p className='font-titleFont text-textGreen text-sm tracking-wide'>
//                 Featured Project
//               </p>
//               <h3 className='text-2xl font-bold'>Yummify</h3>
//             </div>
//             <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md'>
//               A fast, user-friendly food ordering app built with React and Redux
//               for state management. Features include swiggy's API integration
//               for up-to-date menus, orders, and delivery status, optimizing
//               performance with 30% faster load times.{" "}
//               {/* <span className='text-textGreen'>O-auth</span> and then make the
//               purchage using <span className='text-textGreen'>stripe</span>. */}
//             </p>
//             <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
//               <li>React</li>
//               <li>Javascript</li>
//               <li>TailwindCSS</li>
//               <li>Redux</li>
//             </ul>
//             <div className='text-2xl flex gap-4'>
//               <a
//                 className='hover:text-textGreen duration-300'
//                 href='https://github.com/Rithikakalaimani/yummify'
//                 target='_blank'
//               >
//                 <TbBrandGithub />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* ============ project Three End here ================== */}
//       </div>
//     </section>
//   );
// };
const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Projects' titleNo='03' />
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        {/* Project One */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://github.com/Rithikakalaimani/netflix_gpt'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={netflix}
                alt='Netflix_GPT'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Netflix_GPT</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              A personalized movie recommendation system using React and
              OpenAI’s GPT to suggest movies based on user preferences. It
              integrates real-time data through APIs to pull movie details and
              recommendations, enhancing user engagement.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark'>
              <li>React</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>Redux</li>
              <li>OpenAI API</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Rithikakalaimani/netflix_gpt'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://github.com/Rithikakalaimani/WealthWise'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={bot}
                alt='WealthWise'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-right z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>WealthWise</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
              A Discord financial assistant bot enabling users to track
              expenses, manage budgets, and receive financial insights. It
              supports expense logging, budget tracking, spending summaries, and
              top-category analysis for efficient financial management.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark'>
              <li>Node.js</li>
              <li>Discord.js</li>
              <li>MongoDB</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Rithikakalaimani/WealthWise'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* Project Three */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 h-auto relative group'
            href='https://github.com/Rithikakalaimani/yummify'
            target='_blank'
          >
            <div>
              <Image
                className='w-full h-full object-contain'
                src={yummify}
                alt='Yummify'
              />
              <div className='absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-right xl:-ml-16 z-10'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Yummify</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              A fast, user-friendly food ordering app built with React and Redux
              for state management. Features include Swiggy&apos;s API
              integration for real-time menu updates, orders, and delivery
              status, optimizing performance with 30% faster load times.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark'>
              <li>React</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>Redux</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Rithikakalaimani/yummify'
                target='_blank'
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
