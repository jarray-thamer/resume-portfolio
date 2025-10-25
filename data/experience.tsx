import { Link } from "lucide-react";

const experience = () => {
  return [
    {
      title: "Web Designer & Developer",
      company: "WeBloom",
      info: "Kairouan, Tunis | Remote",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Founded and developed <strong>WeBloom Studio</strong>, a creative
            web design and development brand helping businesses build modern,
            trustworthy online identities.
          </li>
          <li>
            Design and build responsive websites using{" "}
            <strong>React, Next.js, and TailwindCSS</strong> with a focus on
            performance, clarity, and user experience.
          </li>
          <li>
            Lead every step of the process — from client discovery and UI/UX
            design in Figma to front-end implementation and deployment.
          </li>
          <li>
            Collaborate with local businesses to create{" "}
            <strong>clean, mobile-first, and conversion-focused</strong> web
            solutions that reflect their brand identity.
          </li>
          <li>
            Integrate essential tools such as WhatsApp contact systems, Google
            Maps, and SEO optimization to increase client visibility and trust.
          </li>
        </ul>
      ),
      date: "2025 - Present",
      current: true,
    },
    {
      title: "Full‑Stack Developer - Freelancer",
      description: (
        <p>
          Designed and developed responsive websites for various international
          clients, delivering modern and conversion-focused solutions. One
          notable project was{" "}
          <strong className="underline inline-flex items-center gap-2">
            <a
              href="https://www.zenvisa.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenVisa
            </a>
            <Link className="size-4" />
          </strong>
          , a Dubai-based visa consultancy landing page built to streamline
          service inquiries through an integrated request form. Focused on clean
          UI, smooth performance, and optimized lead generation to enhance user
          experience.
        </p>
      ),
      date: "2023 - Present",
      current: true,
    },
    {
      title: "Full‑Stack Developer",
      company: "KM-Solution",
      info: "Kairouan, Tunis | Remote",
      description: (
        <ul className="space-y-2 pl-5 list-disc">
          <li>
            Contributed to the development of the company’s main website and
            multiple web applications.
          </li>
          <li>
            Built a fully customized e-commerce platform for a client, featuring
            an advanced admin dashboard, detailed analytics, and complete
            control over landing page products and content.
          </li>
        </ul>
      ),
      date: "2024 - 2025",
      current: false,
    },
    {
      title: "IT Technician",
      company: "National Institute of Statistics",
      info: "Kairouan, Tunis | Contract",
      description: (
        <ul className="space-y-2 pl-5 list-disc">
          <li>
            Managed and maintained over 95 tablets, ensuring optimal
            performance, security, and reliability.
          </li>

          <li>
            Resolved technical issues promptly to minimize downtime and maintain
            workflow continuity.
          </li>
          <li>
            Collaborated effectively with diverse teams to enhance communication
            and operational efficiency.
          </li>
        </ul>
      ),
      date: "2024 - 2024",
      current: false,
    },
    {
      title: "Team Member & Full‑Stack Developer",
      company: "Path for Freelancer",
      info: "Sousse, Tunis | Hybrid",
      description: (
        <ul className="space-y-2 pl-5 list-disc">
          <li>
            Developed and maintained Path4Freelancer’s web applications,
            focusing on performance and user experience.
          </li>
          <li>
            Collaborated with designers and product teams to launch new
            interactive features that improved event engagement.
          </li>
          <li>
            Built a custom earnings calculator to help freelancers estimate
            income based on project budgets and expenses.
          </li>
        </ul>
      ),
      date: "2023 - 2024",
      current: false,
    },
    {
      title: "Summer Internship",
      company: "Tunisian Company of Electricity and Gas(STEG)",
      info: "Kairouan, Tunis | On-Site",
      description: (
        <ul className="space-y-2 pl-5 list-disc">
          <li>
            Observed and learned about the operation and maintenance of
            electrical and gas distribution systems.
          </li>
        </ul>
      ),
      date: "2023 - 2023",
      current: false,
    },
  ];
};

export default experience;
