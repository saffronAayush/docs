// export const templates = [
//   { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" },
//   {
//     id: "software-proposal",
//     label: "Software Proposal proposal",
//     imageUrl: "/software-proposal.svg",
//   },
//   {
//     id: "project-proposal",
//     label: "Project Proposal proposal",
//     imageUrl: "/project-proposal.svg",
//   },
//   {
//     id: "business-letter",
//     label: "Business letter",
//     imageUrl: "/business-letter.svg",
//   },
//   {
//     id: "resume",
//     label: "Resume",
//     imageUrl: "/resume.svg",
//   },
//   {
//     id: "cover-letter",
//     label: "Cover letter",
//     imageUrl: "/cover-letter.svg",
//   },
//   {
//     id: "letter",
//     label: "Letter",
//     imageUrl: "/letter.svg",
//   },
// ];

export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: `<p><br></p>`, // Empty content
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<h1>Software Proposal</h1>
<p><strong>Project Name:</strong> [Enter Project Name]</p>
<p><strong>Prepared by:</strong> [Your Name or Company]</p>
<p><strong>Date:</strong> [MM/DD/YYYY]</p>
<h2>1. Introduction</h2>
<p>Provide an overview of the problem and how your software solves it.</p>
<h2>2. Objectives</h2>
<ul>
  <li>Objective 1</li>
  <li>Objective 2</li>
</ul>
<h2>3. Features</h2>
<p>List key software features and functionality.</p>
<h2>4. Timeline</h2>
<p>Include a development timeline and key milestones.</p>
<h2>5. Budget</h2>
<p>Estimated cost and pricing structure.</p>`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<h1>Project Proposal</h1>
<p><strong>Project Title:</strong> [Enter Title]</p>
<p><strong>Submitted by:</strong> [Your Name]</p>
<p><strong>Date:</strong> [MM/DD/YYYY]</p>
<h2>1. Overview</h2>
<p>Brief summary of the project and its goals.</p>
<h2>2. Problem Statement</h2>
<p>Describe the issue this project aims to resolve.</p>
<h2>3. Proposed Solution</h2>
<p>Explain your approach or strategy for addressing the problem.</p>
<h2>4. Deliverables</h2>
<ul>
  <li>Deliverable 1</li>
  <li>Deliverable 2</li>
</ul>
<h2>5. Timeline and Budget</h2>
<p>Provide a schedule and financial estimate.</p>`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State ZIP Code]</p>
<p>[Email Address]</p>
<p>[Today’s Date]</p>

<p>[Recipient Name]</p>
<p>[Company Name]</p>
<p>[Recipient Address]</p>

<p>Dear [Recipient Name],</p>

<p>I am writing to [state your reason for writing the letter in a concise manner].</p>

<p>[Body of the letter]</p>

<p>Thank you for your time and consideration.</p>

<p>Sincerely,<br>[Your Name]</p>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<h1>[Your Full Name]</h1>
<p><strong>Email:</strong> your.email@example.com | <strong>Phone:</strong> (123) 456-7890</p>
<h2>Objective</h2>
<p>A brief statement of your career goals and what you aim to achieve in your next role.</p>
<h2>Education</h2>
<p><strong>Degree</strong>, University Name – Graduation Year</p>
<h2>Experience</h2>
<p><strong>Job Title</strong>, Company Name</p>
<ul>
  <li>Responsibility or achievement 1</li>
  <li>Responsibility or achievement 2</li>
</ul>
<h2>Skills</h2>
<ul>
  <li>Skill 1</li>
  <li>Skill 2</li>
</ul>`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[Email Address]</p>
<p>[Phone Number]</p>
<p>[Date]</p>

<p>[Hiring Manager’s Name]</p>
<p>[Company Name]</p>

<p>Dear [Hiring Manager's Name],</p>

<p>I am writing to express my interest in the [Job Title] position at [Company Name]. I am confident that my background and skills make me a strong candidate for this role.</p>

<p>[Paragraph 2 – Elaborate on experience, skills, or a relevant story]</p>

<p>I would welcome the opportunity to contribute to your team. Thank you for considering my application.</p>

<p>Sincerely,<br>[Your Name]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[Date]</p>

<p>[Recipient Name]</p>
<p>[Recipient Address]</p>

<p>Dear [Recipient Name],</p>

<p>[Start your message here. This is a general-purpose letter template.]</p>

<p>Sincerely,<br>[Your Name]</p>`,
  },
];
