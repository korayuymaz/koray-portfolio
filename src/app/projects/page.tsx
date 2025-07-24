import ProjectCard from "@/components/project-components/project-card";

const projects = [
	{
		screenshot: "/projects/responsive.png",
		title: "Responsive Website",
		description: `A collection of responsive design templates using simple HTML, CSS, and JavaScript, bundled and served via Vite. 
		The project is structured to demonstrate responsive layouts using modern CSS techniques.`,
		link: "https://pokemon-for-responsive-design.netlify.app/",
		techStack: ["HTML", "CSS", "React", "Axios", "JavaScript", "Vite"],
		github: "https://github.com/korayuymaz/responsive-design",
	},
	{
		screenshot: "/projects/adaka.png",
		title: "Adaka",
		description: `Adaka.com.tr is a corporate website developed for a leading Turkish manufacturer specializing in kraft paper bags. 
		The site presents the company’s product range — including valve and open-mouth industrial paper bags — tailored for sectors such as cement, 
		food, and chemicals. It features multilingual support (Turkish/English), responsive design, and clear product categorization. 
		The interface emphasizes clarity and industrial professionalism, while ensuring accessibility across devices. `,
		link: "https://adaka.com.tr/",
		techStack: [
			"Next.js",
			"Tailwind CSS",
			"TypeScript",
			"Shadcn UI",
			"OpenAI",
			"Axios",
		],
		github: "https://github.com/korayuymaz/adaka",
	},
];

const ProjectsPage = () => {
	return (
		<div className="mb-10 w-[80%] mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
