const educations = () => {
  return [
    {
      title: "Software Development Bootcamp",
      company: "GoMyCode",
      info: "Kairouan, Tunis",
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
      date: "2025 - 2025",
      current: false,
    },
    {
      title:
        "National License in Science and Technology – Information Systems Engineering",
      company: "Higher Institute of Applied Sciences and Technology",
      info: "Kairouan, Tunis",
      description: (
        <p>
          Designed and developed responsive websites for various international
          clients, delivering modern and conversion-focused solutions. One
          notable project was , a Dubai-based visa consultancy landing page
          built to streamline service inquiries through an integrated request
          form. Focused on clean UI, smooth performance, and optimized lead
          generation to enhance user experience.
        </p>
      ),
      date: "2021 - 2024",
      current: false,
    },
  ];
};

export default educations;
