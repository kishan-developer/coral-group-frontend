import React from 'react';
import { projects } from '@/app/data/projects';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/company/projects" className="text-[#94cb3d] hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={18} /> Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectDetailClient project={project} />;
}
