'use client'
import { useState, useEffect } from 'react';
import { Search, Play, Pause, Volume2, Settings, Share2, ThumbsUp, ThumbsDown, MessageSquare, Flag, Download, Clock, Filter, TrendingUp, Bookmark, Menu, Mic, Bell, User } from 'lucide-react';
import Image from 'next/image';

// Mock data for videos
const videos = [
  {
    id: 1,
    title: "The Last of Us - Official Trailer | HBO Max Original Series",
    creator: "HBO Max",
    thumbnail: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    duration: "2:32",
    views: "12M",
    uploadDate: "2 weeks ago",
    verified: true,
    likes: "1.2M",
    description: "Watch the official trailer for The Last of Us, coming to HBO Max."
  },
  {
    id: 2,
    title: "Wednesday - Netflix Series Review | A Dark Comedy Masterpiece?",
    creator: "Screen Culture",
    thumbnail: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    duration: "10:45",
    views: "850K",
    uploadDate: "3 days ago",
    verified: true,
    likes: "95K",
    description: "An in-depth review of Netflix's Wednesday series."
  },
  {
    id: 3,
    title: "House of the Dragon Episode 1 Breakdown | Easter Eggs You Missed!",
    creator: "Film Theory",
    thumbnail: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    duration: "15:15",
    views: "2.1M",
    uploadDate: "1 week ago",
    verified: false,
    likes: "180K",
    description: "Breaking down every detail from the first episode."
  },
  {
    id: 4,
    title: "Learn React in 2024 | Complete Beginner's Tutorial",
    creator: "CodeMaster",
    thumbnail: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    duration: "1:25:30",
    views: "500K",
    uploadDate: "5 days ago",
    verified: true,
    likes: "45K",
    description: "Complete React tutorial for beginners in 2024."
  },
  {
    id: 5,
    title: "Making the Perfect Pizza From Scratch | Cooking Guide",
    creator: "Chef's Table",
    thumbnail: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    duration: "18:22",
    views: "750K",
    uploadDate: "1 month ago",
    verified: true,
    likes: "82K",
    description: "Learn how to make authentic Italian pizza at home."
  },
  {
    id: 6,
    title: "Top 10 Upcoming Games of 2024 | Most Anticipated Releases",
    creator: "GameSpot",
    thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    duration: "12:45",
    views: "1.5M",
    uploadDate: "4 days ago",
    verified: true,
    likes: "125K",
    description: "Our most anticipated games coming in 2024."
  },
  {
    id: 7,
    title: "Morning Yoga Routine for Beginners | 15-Minute Workout",
    creator: "Yoga With Sarah",
    thumbnail: "https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    duration: "15:00",
    views: "250K",
    uploadDate: "2 days ago",
    verified: false,
    likes: "20K",
    description: "Start your day with this energizing yoga routine."
  },
  {
    id: 8,
    title: "iPhone 15 Pro Max - One Month Later | Long-Term Review",
    creator: "TechReviewer",
    thumbnail: "https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    duration: "20:18",
    views: "980K",
    uploadDate: "1 week ago",
    verified: true,
    likes: "85K",
    description: "My experience using the iPhone 15 Pro Max for a month."
  },
  {
    id: 9,
    title: "The Science Behind Dreams | Explained Simply",
    creator: "Science Daily",
    thumbnail: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    duration: "8:45",
    views: "420K",
    uploadDate: "6 days ago",
    verified: true,
    likes: "38K",
    description: "Understanding what happens in our brains when we dream."
  },
  {
    id: 10,
    title: "Making a Game in 24 Hours | Game Dev Challenge",
    creator: "DevLog",
    thumbnail: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    duration: "24:30",
    views: "300K",
    uploadDate: "3 days ago",
    verified: false,
    likes: "28K",
    description: "Watch me create a complete game in just 24 hours!"
  },
  {
    id: 11,
    title: "5 Easy DIY Home Decor Ideas | Budget Friendly",
    creator: "DIY Queen",
    thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    duration: "14:22",
    views: "180K",
    uploadDate: "5 days ago",
    verified: true,
    likes: "15K",
    description: "Transform your space with these simple DIY projects."
  },
  {
    id: 12,
    title: "The History of Ancient Egypt | Documentary",
    creator: "History Channel",
    thumbnail: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    duration: "45:10",
    views: "890K",
    uploadDate: "2 weeks ago",
    verified: true,
    likes: "76K",
    description: "Explore the fascinating history of Ancient Egypt."
  },
  {
    id: 13,
    title: "Street Food Tour in Tokyo | Japan Travel Vlog",
    creator: "Travel With Me",
    thumbnail: "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    duration: "22:15",
    views: "450K",
    uploadDate: "1 week ago",
    verified: false,
    likes: "42K",
    description: "Exploring the best street food spots in Tokyo."
  },
  {
    id: 14,
    title: "Building a Modern Website | Web Development Tutorial",
    creator: "WebDev Pro",
    thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    duration: "1:08:45",
    views: "320K",
    uploadDate: "4 days ago",
    verified: true,
    likes: "28K",
    description: "Step-by-step guide to building a modern website."
  },
  {
    id: 15,
    title: "10 Life Hacks That Will Change Your Life",
    creator: "Life Hacker",
    thumbnail: "https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    duration: "11:55",
    views: "680K",
    uploadDate: "2 days ago",
    verified: true,
    likes: "55K",
    description: "Simple but effective life hacks for everyday problems."
  }
];

const categories = [
  "All",
  "Gaming",
  "Music",
  "Movies",
  "Live",
  "News",
  "Sports",
  "Learning",
  "Fashion & Beauty",
  "Podcasts",
  "Technology",
  "Cooking",
  "Travel",
  "Fitness",
  "DIY"
];

const VideoPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isHovered, setIsHovered] = useState(null);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200">
                <Menu size={22} className="text-white" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
                <span className="text-xl font-bold tracking-tight">VideoHub</span>
              </div>
            </div>
            
            <div className="flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex flex-1 relative">
                <div className="flex flex-1 items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-3 backdrop-blur-sm">
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="absolute right-0 top-0 bottom-0 px-6 bg-white/10 rounded-r-2xl hover:bg-white/20 transition-all duration-200 border border-l-0 border-white/10">
                  <Search size={20} className="text-gray-300" />
                </button>
              </div>
              <button className="p-3 hover:bg-white/10 rounded-xl ml-4 transition-all duration-200">
                <Mic size={20} className="text-gray-300" />
              </button>
            </div>
  
            <div className="flex items-center space-x-2">
              <button className="p-3 hover:bg-white/10 rounded-xl transition-all duration-200 relative">
                <Bell size={20} className="text-gray-300" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-3 hover:bg-white/10 rounded-xl transition-all duration-200">
                <User size={20} className="text-gray-300" />
              </button>
            </div>
          </div>
        </header>
  
        {/* Main Content */}
        <div className="pt-20">
          {/* Categories */}
          <div className="sticky top-20 bg-black/60 backdrop-blur-xl z-40 px-6 py-4 border-b border-white/5">
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-black shadow-lg shadow-white/20'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
  
          {/* Videos Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {videos.map(video => (
                <div 
                  key={video.id} 
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(video.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium border border-white/20">
                      {video.duration}
                    </span>
                    
                    {isHovered === video.id && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30">
                            <Play size={20} className="text-white fill-white ml-0.5" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30">
                            <Bookmark size={20} className="text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex mt-4 space-x-3">
                    <img
                      src={video.avatar}
                      alt={video.creator}
                      className="rounded-full w-10 h-10 hover:scale-110 transition-transform duration-200 border-2 border-white/20"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold line-clamp-2 text-white leading-snug mb-2">
                        {video.title}
                      </h3>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-400">
                          <span className="hover:text-white transition-colors cursor-pointer">
                            {video.creator}
                          </span>
                          {video.verified && (
                            <span className="ml-2 text-blue-400">✓</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    );
  };
  
  export default VideoPage;