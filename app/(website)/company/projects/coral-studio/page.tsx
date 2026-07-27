import React from 'react';
import { coralStudio } from '@/app/data/projects/coral-studio';
import ProjectDetailClient from '../[slug]/ProjectDetailClient';

export default function CoralStudioPage() {
    return <ProjectDetailClient project={coralStudio} />;
}
