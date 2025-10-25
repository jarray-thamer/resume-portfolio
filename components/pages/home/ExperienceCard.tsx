"use client";
import React from "react";

type ExperienceCardProps = {
  title: string;
  company?: string;
  info?: string;
  description: React.ReactNode;
  current?: boolean;
  date: string;
};

export default function ExperienceCard({
  title,
  description,
  info,
  company,
  date,
  current,
}: ExperienceCardProps) {
  return (
    <div className="relative flex items-start gap-2">
      {/* left column for dot */}
      <div className="w-4 flex justify-center shrink-0">
        <div className="relative flex items-start pt-2">
          <span className="block w-2 h-2 rounded-full bg-accent" />
          {current && (
            <span className="absolute w-2 h-2 rounded-full bg-accent animate-ping" />
          )}
        </div>
      </div>

      {/* right content */}
      <div className="flex-1">
        <h3 className="font-semibold text-xl text-current">{title}</h3>
        <h6 className="text-sm">
          {company && (
            <>
              <span className="border-b-[0.09375rem] border-accent">
                {company}
              </span>{" "}
              -
            </>
          )}{" "}
          {info}
        </h6>
        <p className="text-sm text-faded">{date}</p>
        <div className="mt-1 text-sm text-gray-700">{description}</div>
      </div>
    </div>
  );
}
