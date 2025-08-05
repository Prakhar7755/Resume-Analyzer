import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer - Prakhar" },
    { name: "description", content: "Feedback for you resume" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            eveniet.
          </h2>
        </div>

      {
        /* !loadingResumes &&*/ resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )
      }
      </section>
    </main>
  );
}
