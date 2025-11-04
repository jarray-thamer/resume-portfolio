"use client";
import { SectionTitle } from "@/components/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import educations from "@/data/education";

const EducationHistory = () => {
  return (
    <div>
      <SectionTitle
        heading="Education"
        text="Below you will find a summary of my education."
      />

      <div className="relative">
        {/* vertical line (aligned under the center of the left column: pl-8 + w-8/2 => left-12) */}
        <div className="absolute left-[7.5px] top-2 bottom-0 w-px bg-gray-700/20" />

        <div className="space-y-6">
          {educations().map((exp, idx) => (
            <div key={idx} className="relative">
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                description={exp.description}
                info={exp.info}
                date={exp.date}
                current={exp.current}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationHistory;
