import React from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Code,
    Star,
    Linkedin,
    Github,
    FileText,
    KeyRound, // Icon for Blockchain
    Database, // Icon for databases
    FlaskConical, // Icon for smart contracts
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Curriculum data (you can move this to a JSON file or a custom hook)
const curriculumData = {
    profile: {
        name: 'Javier Medina',
        tagline: 'Full Stack Blockchain Developer',
        email: 'javier.260355@gmail.com',
        phone: '+58 412-6112155',
        location: 'Caracas, Venezuela',
        linkedin: 'www.linkedin.com/in/javier-medina-6bb0aa184',
        github: 'https://github.com/eljavis',
    },
    summary:
        'Junior Blockchain Developer with experience in developing smart contracts. Proficient in full-stack development, from frontend with React to backend with Typescript and smart contract implementation with Solidity. Eager to apply my knowledge in creating innovative solutions in Blockchain technology.',
    skills: [
        'JavaScript',
        'React',
        'Git',
        'HTML',
        'CSS',
        'TypeScript',
        'Solidity',
        'Web3.js/Ethers.js',
        'Hardhat/Truffle',
        'Foundry',
        'IPFS',
        'Chainlink',
        'Smart Contract Development',
    ],
    education: [
        
        {
            title: 'Blockchain Development Certification',
            institution: 'Platzi',
            location: 'Online',
            date: '2025',
        },
    ],
    projects: [
        {
            title: "Decentralized Lottery",
            date: "2025",
            description: "Development of a contract where users can join in a Lottery using cryptocurrencies, with smart contract logic to ensure security and decentralization.",
            technologies: ["Solidity"],
            link: "https://github.com/eljavis/solidity-lottery-contract",
        },
        {
            title: "Ethereum Challenge",
            date: "2025",
            description: "Implementing a smart contract as a solution to a development challenge, enabling the creation, ownership, and potential interaction of digital Pokémon in a decentralized manner.",
            technologies: ["Solidity"],
            link: "https://github.com/eljavis/solidity-eth-challenge",
        },
        {
            title: "Rock, Paper, Scissors",
            date: "2023",
            description: "Creation of a `Rock, Paper, Scissors Game`",
            technologies: ["Javascript"],
            link: "https://github.com/eljavis/Rock-Paper-Scissors",
        },
        {
            title: "My Dynamic NFT",
            date: "2025",
            description: "Creation of a dynamic NFT based on the life of a butterfly",
            technologies: ["Solidity"],
            link: "https://github.com/eljavis/my-butterfly-nft",
        },
        {
            title: "Create your own NFT",
            date: "2025",
            description: "This is a contract developed by me so that people can create their own NFT with an easier interface to interact with.",
            technologies: ["Solidity", "React", "TypeScript"],
            link: "https://github.com/eljavis/create-your-nft",
        },
    ],
};

// Animation variants for sections
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

// Component to display a list of items (education, projects, etc.)
const ListItems = ({ items, title, icon: Icon }: { items: any[], title: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }) => (
    <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Card className="mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 shadow-lg"> {/* Updated card background and border */}
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-sm text-purple-300"> {/* Updated title color */}
                    <Icon className="w-5 h-5 text-purple-500" /> {/* Updated icon color */}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {items.map((item, index) => {
                    const description = Array.isArray(item.description) ? item.description : [item.description];
                    return (
                        <div key={index} className={cn(
                            "mb-4 last:mb-0",
                            index !== items.length - 1 && "pb-4 border-b border-gray-700" // Updated border color
                        )}>
                            {/* Updated text color */}
                            <h3 className="text-body-lg font-semibold text-white">{item.title}</h3> 
                            {/* Updated text color */}
                            <p className="text-sm text-gray-400">{item.institution || item.company}</p> 
                            {/* Updated text color */}
                            <p className="text-sm text-gray-400">{item.date}</p> 
                            {item.description && (
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    {description.map((desc, i) => (
                                        // Updated text color
                                        <li key={i} className="text-sm text-gray-300">{desc}</li> 
                                    ))}
                                </ul>
                            )}
                            {item.technologies && (
                                <div className="mt-2">
                                    {/* Updated text color */}
                                    <span className="font-semibold text-sm text-gray-400">Technologies: </span> 
                                    {/* Updated text color */}
                                    <span className="text-sm text-gray-300">{item.technologies.join(', ')}</span> 
                                </div>
                            )}
                            {item.link && (
                                <div className="mt-2">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // Updated link color
                                        className="text-blue-400 hover:underline text-sm" 
                                    >
                                        View Project
                                    </a>
                                </div>
                            )}
                        </div>
                    )
                })}
            </CardContent>
        </Card>
    </motion.section>
);

// Componente para mostrar las habilidades
const Skills = ({ skills }: { skills: string[] }) => (
    <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Card className="mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 shadow-lg"> {/* Updated card background and border */}
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-sm text-purple-300"> {/* Updated title color */}
                    <Star className="w-5 h-5 text-purple-500" /> {/* Updated icon color */}
                    Skills
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            // Updated skill tag colors
                            className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm font-medium border border-purple-500" 
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    </motion.section>
);

// Componente principal del currículum
const CurriculumVitae = () => {
    const { profile, summary, skills, education, projects } = curriculumData;

    return (
        // Updated overall background and text color
        <div className="container mx-auto p-4 md:p-8 bg-gradient-to-br from-gray-900 to-black text-gray-100 min-h-screen"> 
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="text-center mb-8"
            >
                {/* Updated name color */}
                <h1 className="text-4xl font-bold text-purple-400">{profile.name}</h1> 
                {/* Updated tagline color */}
                <p className="text-xl text-gray-300">{profile.tagline}</p> 
                <div className="flex justify-center gap-4 mt-4">
                    {/* Updated link color */}
                    <a href={`mailto:${profile.email}`} className="text-blue-400 hover:underline flex items-center gap-1"> 
                        {/* Updated icon color */}
                        <Mail className="w-4 h-4 text-blue-500" /> {profile.email} 
                    </a>
                    {/* Updated link color */}
                    <a href={`tel:${profile.phone}`} className="text-blue-400 hover:underline flex items-center gap-1"> 
                        {/* Updated icon color */}
                        <Phone className="w-4 h-4 text-blue-500" /> {profile.phone} 
                    </a>
                    {/* Updated text color */}
                    <div className="flex items-center gap-1 text-gray-300"> 
                        {/* Updated icon color */}
                        <MapPin className="w-4 h-4 text-blue-500" /> {profile.location} 
                    </div>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Updated link color
                        className="text-blue-400 hover:underline flex items-center gap-1" 
                    >
                        {/* Updated icon color */}
                        <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn 
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Updated link color
                        className="text-blue-400 hover:underline flex items-center gap-1" 
                    >
                        {/* Updated icon color */}
                        <Github className="w-4 h-4 text-blue-500" /> GitHub 
                    </a>
                </div>
            </motion.header>

            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {/* Updated card background and border */}
                <Card className="mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 shadow-lg"> 
                    <CardHeader>
                        {/* Updated title color */}
                        <CardTitle className="flex items-center gap-2 text-heading-sm text-purple-300"> 
                            {/* Updated icon color */}
                            <FileText className="w-5 h-5 text-purple-500" /> 
                            Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Updated text color */}
                        <p className="text-body-md text-gray-300">{summary}</p> 
                    </CardContent>
                </Card>
            </motion.section>

            <Skills skills={skills} />
            <ListItems items={education} title="Education" icon={GraduationCap} />
            <ListItems items={projects} title="Projects" icon={Code} />

            <div className="mt-8 text-center">
                {/* Updated button colors */}
                <Button variant="outline" asChild className="bg-purple-600 hover:bg-purple-700 text-white border-purple-800 hover:border-purple-900 shadow-md"> 
                    <a href="/cv.pdf" download>
                        Download CV (PDF)
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default CurriculumVitae;

