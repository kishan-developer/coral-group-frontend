import React from 'react';
import { coralStudios } from '@/app/data/projects/coral-studios';
import ProjectDetailClient from '../[slug]/ProjectDetailClient';

export default function CoralStudiosPage() {
    return <ProjectDetailClient project={coralStudios} />;
}
