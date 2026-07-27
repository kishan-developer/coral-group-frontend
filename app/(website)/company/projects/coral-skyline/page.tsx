import React from 'react';
import { coralSkyline } from '@/app/data/projects/coral-skyline';
import ProjectDetailClient from '../[slug]/ProjectDetailClient';

export default function CoralSkylinePage() {
    return <ProjectDetailClient project={coralSkyline} />;
}
