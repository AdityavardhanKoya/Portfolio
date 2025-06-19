import React from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import employeetracker from "../../public/images/projects/employeetrack.jpg";
import virtualmouse from "../../public/images/projects/virtualmouse.jpg";
import expensetracker from "../../public/images/projects/expensetrack.png";
import kanbanboard from "../../public/images/projects/kanbanboard.jpeg";
import Bankapp from "../../public/images/projects/bankapp.jpg";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 sm:p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto hover:scale-110 transition ease-in-out delay-100 duration-200"
        />
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6">
        <span className="text-primary font-medium text-lg sm:text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-sm sm:text-base text-dark text-justify">{summary}</p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-dark text-light p-2 px-6 text-sm sm:text-base font-medium"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Aditya | Projects</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-5">
          <div className="w-full flex justify-center items-center">
            <AnimatedText
              text="Ventures in Innovation!"
              className="mb-8 text-center text-xl sm:text-4xl md:text-5xl font-bold"
            />
          </div>

          <div className="grid grid-cols-12 gap-y-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Banking Application"
                summary="This is a secure banking solution with customer and admin roles, implementing account management, secure transactions, and authentication. Added transaction history, balance management, and PDF export. Built using Eclipse IDE, Tomcat 9, and MySQL."
                type="Project"
                image={Bankapp}
                link="https://github.com/AdityavardhanKoya/Banking_App"
                github="https://github.com/AdityavardhanKoya/Banking_App"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Online Expense Tracker"
                summary="Developed a user-friendly Online Expense Tracker using the MERN stack. Implemented secure authentication with CRUD operations and used React.js for a responsive front end. Built the back end with Node.js and Express.js for smooth communication with MongoDB. Ensured efficient data storage and scalability."
                type="Featured Project"
                image={expensetracker}
                link="https://github.com/AdityavardhanKoya/Expense_Tracker"
                github="https://github.com/AdityavardhanKoya/Expense_Tracker"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Employee Time Tracker"
                summary="Developed an Employee Time Tracker with role-based access control for task and hour management. Implemented task addition, editing, deletion, and duration summaries with charts. Ensured secure authentication, prevented duplicate entries, and enforced an 8-hour task limit."
                type="Project"
                image={employeetracker}
                link="https://github.com/AdityavardhanKoya/Employee_Time_Tracker"
                github="https://github.com/AdityavardhanKoya/Employee_Time_Tracker"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Gesture Control Virtual Mouse"
                summary="Designed a Gesture-controlled Virtual mouse using Mediapipe and OpenCV, paired with voice assistance for hands-free computing. Ensured cross-platform usability and created intuitive interfaces with visual feedback for seamless interaction."
                type="Project"
                image={virtualmouse}
                link="https://github.com/AdityavardhanKoya/Gesture-Virtual-Mouse"
                github="https://github.com/AdityavardhanKoya/Gesture-Virtual-Mouse"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Kanban Board"
                summary="Developed a Kanban Board using React.js for task management. Implemented a user-friendly interface with drag-and-drop functionality. Built with Create React App, ensuring a responsive and interactive front end. Utilized modern React features for efficient state management and performance optimization."
                type="Project"
                image={kanbanboard}
                link="https://github.com/AdityavardhanKoya/Kanban_Board"
                github="https://github.com/AdityavardhanKoya/Kanban_Board"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
