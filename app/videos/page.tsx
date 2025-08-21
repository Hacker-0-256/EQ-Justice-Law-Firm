'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Play, Clock, Eye, Search, Filter, BookOpen, Users, Mic, Star, Calendar, ArrowRight, Volume2, Maximize, TrendingUp, Award, Globe, Zap, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionDivider } from '@/components/ui/section-divider'
import { Navigation } from '@/components/navigation'

const categories = [
  { id: 'all', name: 'All Videos', icon: Play, color: 'from-blue-500 to-indigo-600' },
  { id: 'education', name: 'Legal Education', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
  { id: 'firm', name: 'Firm Introduction', icon: Users, color: 'from-purple-500 to-violet-600' },
  { id: 'webinars', name: 'Webinars & Talks', icon: Mic, color: 'from-amber-500 to-orange-600' },
  { id: 'testimonials', name: 'Client Stories', icon: Star, color: 'from-rose-500 to-pink-600' },
]

const videosData = [
  {
    id: 1,
    title: 'Understanding Your Work Rights in Rwanda',
    description: 'Comprehensive guide to employee rights, overtime compensation, workplace protections, and legal remedies under Rwandan labour law.',
    category: 'education',
    duration: '12:45',
    views: '23.4K',
    likes: '1.2K',
    thumbnail: '/images/video-thumbnails/work-rights-rwanda.png',
    publishDate: '2024-01-10',
    featured: true,
    trending: true,
    quality: '4K'
  },
  {
    id: 2,
            title: 'Welcome to EQ-Justice Law Firm: Our Story',
    description: 'Meet our distinguished legal team and discover our mission to provide world-class legal services that transform Rwanda\'s legal landscape.',
    category: 'firm',
    duration: '8:30',
    views: '18.7K',
    likes: '892',
    thumbnail: '/images/video-thumbnails/eq-justice-story.png',
    publishDate: '2023-12-15',
    featured: true,
    trending: false,
    quality: '4K'
  },
  {
    id: 3,
    title: 'Starting a Business in Rwanda: Complete Legal Guide',
    description: 'Step-by-step legal roadmap for entrepreneurs covering business registration, licensing, compliance, and growth strategies.',
    category: 'education',
    duration: '18:20',
    views: '31.2K',
    likes: '1.8K',
    thumbnail: '/images/video-thumbnails/business-guide-rwanda.png',
    publishDate: '2024-01-05',
    featured: true,
    trending: true,
    quality: '4K'
  },
  {
    id: 4,
    title: 'Tax Compliance Masterclass 2024',
    description: 'Live expert session covering new tax regulations, compliance strategies, and optimization techniques for businesses in Rwanda.',
    category: 'webinars',
    duration: '45:15',
    views: '8.9K',
    likes: '456',
    thumbnail: '/images/video-thumbnails/tax-masterclass.png',
    publishDate: '2024-01-20',
    featured: false,
    trending: false,
    quality: 'HD'
  },
  {
    id: 5,
    title: 'Client Success: Tech Startup Journey',
            description: 'Inspiring story of how EQ-Justice Law Firm helped a local tech startup navigate complex regulations and secure international investment.',
    category: 'testimonials',
    duration: '6:45',
    views: '12.3K',
    likes: '678',
    thumbnail: '/images/video-thumbnails/Tech Startup Success.png',
    publishDate: '2023-12-20',
    featured: false,
    trending: true,
    quality: 'HD'
  },
  {
    id: 6,
    title: 'Immigration Law Updates & Opportunities',
    description: 'Latest changes to work permits, visa requirements, investment immigration, and citizenship procedures in Rwanda.',
    category: 'labour',
    duration: '15:30',
    views: '19.8K',
    likes: '934',
    thumbnail: '/images/video-thumbnails/immigration-updates.png',
    publishDate: '2024-01-15',
    featured: true,
    trending: false,
    quality: '4K'
  }
]

const featuredPlaylist = [
  {
    id: 'playlist-1',
    title: 'Legal Foundations for Entrepreneurs',
    description: 'Essential legal knowledge every business owner needs',
    videoCount: 8,
    totalDuration: '2h 15m',
    thumbnail: '/images/playlist-thumbnails/entrepreneur-playlist.png'
  },
  {
    id: 'playlist-2',
    title: 'Labour, Employment & Immigration Essentials',
    description: 'Complete guide to workplace rights, obligations, and immigration matters',
    videoCount: 6,
    totalDuration: '1h 45m',
    thumbnail: '/images/playlist-thumbnails/employment-playlist.png'
  }
]

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedVideo, setSelectedVideo] = useState<typeof videosData[0] | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0)


  const filteredVideos = videosData.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredVideos = videosData.filter(video => video.featured)
  const trendingVideos = videosData.filter(video => video.trending)

  const nextPlaylist = () => {
    setCurrentPlaylistIndex((prev) => (prev + 1) % featuredPlaylist.length)
  }

  const prevPlaylist = () => {
    setCurrentPlaylistIndex((prev) => (prev - 1 + featuredPlaylist.length) % featuredPlaylist.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-black">
      {/* Navigation */}
      <Navigation currentPage="/videos" />

      {/* Cinematic Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-navy-900/90 to-indigo-900/90"></div>
          <div className="absolute inset-0 bg-[url('/images/background-patterns/video-pattern.png')] bg-cover bg-center opacity-20"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
                style={{
                  left: `${(i * 5.5) % 100}%`,
                  top: `${(i * 7.3) % 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + (i * 0.1),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Play className="h-5 w-5 text-gold-400" />
              <span className="text-white/90 font-medium">Video Learning Center</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-lora font-bold text-white mb-8 leading-tight">
              Legal Insights
              <span className="block bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-500 bg-clip-text text-transparent">
                in Motion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Watch our expert lawyers break down complex legal topics, share professional insights, 
              and provide guidance through Rwanda's evolving legal landscape.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-200 to-yellow-100 hover:from-yellow-300 hover:to-yellow-200 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
                onClick={() => document.getElementById('featured-videos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="h-5 w-5 mr-2" />
                Start Watching
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white border-2 border-white text-black hover:bg-slate-50 px-8 py-4 rounded-full font-semibold shadow-lg"
                onClick={() => document.getElementById('video-library')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Trending Now
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Slanted Section Divider */}
      <div className="relative">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Featured Playlist Slider */}
      <section id="featured-videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-navy-900 mb-6">
              Featured Learning Playlists
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Curated video series designed to build your legal knowledge systematically
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlaylistIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      <Award className="h-4 w-4" />
                      Featured Playlist
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-lora font-bold text-navy-900 mb-4">
                      {featuredPlaylist[currentPlaylistIndex].title}
                    </h3>
                    
                    <p className="text-xl text-slate-600 mb-6">
                      {featuredPlaylist[currentPlaylistIndex].description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-slate-600 mb-8">
                      <span className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        {featuredPlaylist[currentPlaylistIndex].videoCount} videos
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        {featuredPlaylist[currentPlaylistIndex].totalDuration}
                      </span>
                    </div>
                    
                    <Button size="lg" className="bg-gradient-to-r from-navy-600 to-blue-600 hover:from-navy-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <Play className="h-5 w-5 mr-2" />
                      Start Learning
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={featuredPlaylist[currentPlaylistIndex].thumbnail || "/placeholder.svg"}
                      alt={featuredPlaylist[currentPlaylistIndex].title}
                      className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="h-6 w-6 text-navy-600 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevPlaylist}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-navy-600" />
            </button>
            
            <button
              onClick={nextPlaylist}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-navy-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredPlaylist.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlaylistIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPlaylistIndex ? 'bg-navy-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="video-library" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-navy-900 mb-6">
              Explore Our Video Library
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover expert insights across all areas of Rwandan law
            </p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6 group-focus-within:text-navy-600 transition-colors" />
              <Input
                type="text"
                placeholder="Search videos by topic, speaker, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 h-16 text-lg bg-white border-2 border-slate-200 focus:border-navy-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-gold-500/5 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-navy-600 to-blue-600 text-white shadow-2xl shadow-navy-500/25'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-navy-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : `bg-gradient-to-r ${category.color}`}`}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-white'}`} />
                  </div>
                  {category.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeVideoTab"
                      className="absolute inset-0 bg-gradient-to-r from-navy-600 to-blue-600 rounded-2xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Video Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail || "/placeholder.svg"} 
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300"
                        >
                          <Play className="h-6 w-6 text-navy-600 ml-1" />
                        </motion.div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {video.duration}
                      </div>
                      
                      {/* Quality Badge */}
                      <div className="absolute top-4 left-4 bg-gold-500 text-black px-2 py-1 rounded text-xs font-bold">
                        {video.quality}
                      </div>
                      
                      {/* Trending Badge */}
                      {video.trending && (
                        <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-lora font-bold text-xl text-navy-900 mb-3 group-hover:text-navy-700 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                        {video.description}
                      </p>

                      {/* Video Stats */}
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {video.likes}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(video.publishDate).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Category Tag */}
                      <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === video.category)?.name}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-navy-100 rounded-xl">
                    <Play className="h-6 w-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-lora font-bold text-navy-900 line-clamp-1">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedVideo.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {selectedVideo.views} views
                      </span>
                      <span className="bg-gold-500 text-black px-2 py-1 rounded text-xs font-bold">
                        {selectedVideo.quality}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="hover:bg-slate-100 rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Video Player */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-navy-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </motion.div>
                    <p className="text-white/80 text-lg">Click to play video</p>
                    <p className="text-white/60 text-sm mt-2">Premium video player would be embedded here</p>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <span className="text-sm">00:00 / {selectedVideo.duration}</span>
                    </div>
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Video Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {selectedVideo.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Published {new Date(selectedVideo.publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {selectedVideo.likes} likes
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-navy-600 to-blue-600 hover:from-navy-700 hover:to-blue-700 text-white font-semibold rounded-xl">
                      <Star className="h-4 w-4 mr-2" />
                      Add to Favorites
                    </Button>
                    <Button variant="outline" className="w-full border-2 border-slate-200 hover:border-navy-300 rounded-xl">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Next Video
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/background-patterns/video-pattern.png')] opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <Zap className="h-5 w-5 text-gold-400" />
              <span className="text-white/90 font-medium">Stay Updated</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-lora font-bold text-white mb-6">
              Never Miss Legal Insights
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Subscribe to get notified when we publish new educational content, legal updates, and expert insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-gold-500 to-yellow-400 hover:from-gold-600 hover:to-yellow-500 text-black font-semibold px-6 rounded-xl shadow-xl hover:shadow-gold-500/25 transition-all duration-300">
                Subscribe
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              Join 10,000+ legal professionals who trust EQ-Justice Law Firm for expert insights
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
