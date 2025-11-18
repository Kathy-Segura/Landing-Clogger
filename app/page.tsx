'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroBanner from '@/components/hero-banner';
import QrSection from '@/components/qr-section';
import DownloadSection from '@/components/download-section';
import VideoSection from '@/components/video-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />
      <HeroBanner />
      <QrSection />
      <DownloadSection />
      <VideoSection />
      <Footer />
    </main>
  );
}
