import Adivisor1 from "../assets/Advisor1.png";
import Advisor2 from "../assets/Advisor2.png";
import Cluster1 from "../assets/Cluster1.png";
import Cluster2 from "../assets/Cluster2.png";
import Iokee from "../assets/Iokee.png";

interface IProjects {
    id: number,
    name: string,
    description: string,
    subjects: string[],
    images: string[]
}

export const projects: IProjects[] = [
    {
        id:1,
        name: 'Advisor',
        description: 'SaaS Promotion Management Solution.',
        subjects: ['Design System', 'Project Management', 'Vision Design', 'UX Research'],
        images: [Adivisor1, Advisor2]
    },
    {
        id:2,
        name: 'Cluster',
        description: 'Chemical sales company Website',
        subjects: ['B2B SaaS', 'Front & Back Office', 'UI Design', 'UX Research'],
        images: [Cluster1, Cluster2]
    },
    {
        id:3,
        name: 'Iokee',
        description: 'Energy equipment managment app for AJTEC Company',
        subjects: ['Eletric Car Supply Manager', 'Insights Organization', 'Mobile Design'],
        images: [Iokee]
    },
]