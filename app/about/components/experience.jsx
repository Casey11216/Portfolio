import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2007 - 2012</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
						SC Technology Solutions, LLC
						</h3>
						<h4 className=" font-light text-md mb-4">
							Fullstack Developer 
						</h4>
						<p className="text-justify">
						-Modernized outdated applications to improve efficiency and reliability, while designing and developing C#/ASP.NET and PHP web solutions, including inventory management systems with role-based access control and real-time reporting.
						-Revamped legacy applications to enhance performance and maintainability while designing and developing PHP web solutions, including e-commerce platforms with user authentication, inventory management, and dynamic reporting.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								C#
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ASP.NET
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								PHP
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Laravel
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2012 - 2019</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
						TechHeights
						</h3>
						<h4 className=" font-light text-md mb-4">
							Senior Full Stack Developer
						</h4>
						<p className="text-justify">
						-Built and optimized Angular components for large-scale enterprise applications, enabling smooth user interactions, while designing and developing policy, claims, and financial management web applications.
						-Engineered a responsive front-end web application for property tax assessments using React, Vue, React Hooks, and Material UI, delivering a seamless user experience.

						</p>

						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								React
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Vue.js
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Angular
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2019 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
						ASRInc
						</h3>
						<h4 className=" font-light text-md mb-4">
							Lead Full Stack Developer
						</h4>
						<p className="text-justify">
						-Led a cross-functional team of 6 software engineers, 2 QA engineers, and 1 designer to develop a scalable e-learning platform for language education in schools.
						-Coordinated project planning, set milestones for deliverables, and ensured software met high-quality standards
						-Developed and deployed an AI-powered sales automation solution using TensorFlow and Terraform, enhancing performance through distributed processing in Django with Kubernetes
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								React
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Next.js
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Angular
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Vue.js
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Python
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Machine Learning
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Deep Learning
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								WordPress
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
