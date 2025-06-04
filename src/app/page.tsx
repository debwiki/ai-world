"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Updated placeholder image URLs to ensure they work
const PLACEHOLDER = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";


const images = [
  {
    id: 1,
    title: "AI Landscape",
    url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    author: "Alice",
    likes: 245,
  },
  {
    id: 2,
    title: "Futuristic Robot",
    url: "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg",
    author: "Bob",
    likes: 189,
  },
  {
    id: 3,
    title: "AI Art Portrait",
    url: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    author: "Charlie",
    likes: 320,
  },
  {
    id: 4,
    title: "Dreamy Neural Scene",
    url: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg",
    author: "Diana",
    likes: 178,
  },
  {
    id: 5,
    title: "Digital Landscape",
    url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    author: "Ethan",
    likes: 231,
  },
  {
    id: 6,
    title: "Abstract Neural Art",
    url: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg",
    author: "Fiona",
    likes: 295,
  },
  {
    id: 7,
    title: "Cyberpunk City",
    url: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    author: "George",
    likes: 202,
  },
  {
    id: 8,
    title: "AI Generated Dreams",
    url: "https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg",
    author: "Hannah",
    likes: 267,
  },
];

const videos = [
  {
    id: 1,
    title: "Nature Timelapse",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Eve",
    views: "12.4K",
  },
  {
    id: 2,
    title: "City Drone Shot",
    url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Frank",
    views: "8.7K",
  },
  {
    id: 3,
    title: "Ocean Waves",
    url: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Grace",
    views: "10.2K",
  },
  {
    id: 4,
    title: "Mountain Adventure",
    url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Henry",
    views: "15.9K",
  },
  {
    id: 5,
    title: "Urban Life",
    url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Isabella",
    views: "7.3K",
  },
  {
    id: 6,
    title: "Digital Art Process",
    url: "https://samplelib.com/lib/preview/mp4/sample-40s.mp4",
    thumbnail: PLACEHOLDER,
    author: "Jack",
    views: "9.8K",
  },
];

const musics = [
  {
    id: 1,
    title: "Chill Vibes",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: PLACEHOLDER,
    artist: "DJ Relax",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Upbeat Energy",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: PLACEHOLDER,
    artist: "The Upbeats",
    duration: "4:12",
  },
  {
    id: 3,
    title: "Night Drive",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: PLACEHOLDER,
    artist: "Synthwave",
    duration: "3:28",
  },
];


function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-[#23272f]/90 shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/api/placeholder/150/150"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border border-gray-300 dark:border-gray-700"
        />
        <span className="font-medium text-gray-700 dark:text-gray-200 hidden sm:block">Alex</span>
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#23272f] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50 transition-all duration-300 ease-in-out">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Image
                src="/api/placeholder/150/150"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Alex Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">@alexjohnson</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    845 views
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18l-5.143-5.143c-2.381-2.381-2.381-6.238 0-8.619 2.381-2.381 6.238-2.381 8.619 0 2.381-2.381 6.238-2.381 8.619 0 2.381 2.381 2.381 6.238 0 8.619L10 18z" />
                    </svg>
                    1.2K likes
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <button className="flex-1 mr-2 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">Edit Profile</button>
              <button className="py-1.5 px-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-sm font-medium transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <ul className="py-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                My Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                My Collections
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                </svg>
                Messages
                <span className="ml-auto bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">3</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Settings
              </a>
            </li>
            <li className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
              <a href="#" className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm9 6a1 1 0 11-2 0V6a1 1 0 112 0v3zm0 3a1 1 0 100 2h.01a1 1 0 100-2H12z" clipRule="evenodd" />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function MediaCard({ type, item }) {
  const [isHovered, setIsHovered] = useState(false);

  if (type === "image") {
    return (
      <div
        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1e2129] border border-gray-100 dark:border-gray-800 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={item.url}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3`}>
            <h3 className="text-white font-bold truncate">{item.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-200 text-xs">by {item.author}</span>
              <div className="flex items-center text-xs text-white">
                <svg className="w-3 h-3 text-red-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18l-5.143-5.143c-2.381-2.381-2.381-6.238 0-8.619 2.381-2.381 6.238-2.381 8.619 0 2.381-2.381 6.238-2.381 8.619 0 2.381 2.381 2.381 6.238 0 8.619L10 18z" />
                </svg>
                {item.likes}
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <button className="bg-white/80 dark:bg-gray-900/70 p-1 rounded-full shadow hover:bg-white dark:hover:bg-gray-900 transition">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
            <button className="bg-white/80 dark:bg-gray-900/70 p-1 rounded-full shadow hover:bg-white dark:hover:bg-gray-900 transition">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (type === "video") {
    return (
      <div
        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1e2129] border border-gray-100 dark:border-gray-800 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition p-3 rounded-full">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3">
            <h3 className="text-white font-bold truncate">{item.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-200 text-xs">by {item.author}</span>
              <div className="flex items-center text-xs text-white">
                <svg className="w-3 h-3 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                {item.views}
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <button className="bg-white/80 dark:bg-gray-900/70 p-1 rounded-full shadow hover:bg-white dark:hover:bg-gray-900 transition">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
            <button className="bg-white/80 dark:bg-gray-900/70 p-1 rounded-full shadow hover:bg-white dark:hover:bg-gray-900 transition">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (type === "music") {
    return (
      <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-[#1e2129] shadow-md hover:shadow-xl transition-all duration-300 p-3 border border-gray-100 dark:border-gray-800 relative group">
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="64px"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-800 dark:text-gray-100 truncate">{item.title}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.artist}</div>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{item.duration}</span>
          </div>
        </div>
        <div className="flex-shrink-0 flex gap-1">
          <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#121218] dark:to-[#1a1f2a] px-4 sm:px-6 py-6 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/api/placeholder/48/48"
              alt="Site Logo"
              fill
              className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-lg border border-blue-400"
            />
          </div>
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 drop-shadow-sm">MediaHub</span>
        </div>

        <div className="relative w-full sm:w-64 md:w-80">
          <input
            type="text"
            placeholder="Search media..."
            className="w-full px-4 py-2 pl-10 rounded-full bg-white/90 dark:bg-[#23272f]/90 shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <nav className="flex gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium items-center">
          <Link
            href="/screens/imagesPage"
            className="px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Images
          </Link>
          <Link
            href="/screens/videosPage"
            className="px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Videos
          </Link>
          <Link
            href="/screens/musicPage"
            className="px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Music
          </Link>
          <span className="hidden sm:inline-block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
          <ProfileMenu />
        </nav>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Categories Filter */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/80 dark:bg-[#23272f]/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#23272f] border border-gray-200 dark:border-gray-700"
              }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            All
          </button>
          <button
            onClick={() => setActiveTab("trending")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === "trending"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/80 dark:bg-[#23272f]/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#23272f] border border-gray-200 dark:border-gray-700"
              }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
            Trending
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === "recent"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/80 dark:bg-[#23272f]/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#23272f] border border-gray-200 dark:border-gray-700"
              }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Recent
          </button>
          <button
            onClick={() => setActiveTab("popular")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === "popular"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/80 dark:bg-[#23272f]/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#23272f] border border-gray-200 dark:border-gray-700"
              }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Popular
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === "favorites"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/80 dark:bg-[#23272f]/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#23272f] border border-gray-200 dark:border-gray-700"
              }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Favorites
          </button>
        </div>

        {/* Images Section */}
        <section id="images" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Trending Images
            </h2>
            <Link
              href="/screens/imagesPage"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
            >
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {images.slice(0, 8).map((img) => (
              <MediaCard key={img.id} type="image" item={img} />
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              Popular Videos
            </h2>
            <Link
              href="/screens/videosPage"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
            >
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.slice(0, 6).map((vid) => (
              <MediaCard key={vid.id} type="video" item={vid} />
            ))}
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Top Music
            </h2>
            <Link
              href="/screens/musicPage"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
            >
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {musics.map((music) => (
              <MediaCard key={music.id} type="music" item={music} />
            ))}
          </div>
        </section>

        {/* Featured Creator */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 md:flex items-center gap-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/30 shadow-xl mb-6 md:mb-0 mx-auto md:mx-0">
              <Image
                src="/api/placeholder/150/150"
                alt="Featured Creator"
                fill
                className="rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Featured Creator: Jessica Wilson</h3>
              <p className="text-white/80 mb-4 max-w-xl">Digital artist specializing in AI-generated artwork and animations. Join her community of 248k followers for daily inspiration.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <button className="px-4 py-2 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition shadow-md">
                  Follow
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Uploads Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Recent Uploads
            </h2>
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
            >
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {images.slice(0, 4).map((img) => (
              <div key={`recent-${img.id}`} className="relative group">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-1 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <div className="text-white text-xs font-medium truncate">{img.title}</div>
                  <div className="text-white/70 text-[10px]">{img.timeAgo}</div>
                </div>
              </div>
            ))}
            {videos.slice(0, 4).map((vid) => (
              <div key={`recent-v-${vid.id}`} className="relative group">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/30 p-1 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-1 right-1 bg-black/50 text-white text-[10px] px-1 py-0.5 rounded">
                    {vid.duration}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-1 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <div className="text-white text-xs font-medium truncate">{vid.title}</div>
                  <div className="text-white/70 text-[10px]">{vid.timeAgo}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 mt-14 border-t border-gray-200 dark:border-gray-800 pt-6 pb-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">MediaHub</span>
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span>Demo content for preview purposes only</span>
          <span className="hidden sm:inline-block">•</span>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms</a>
          <span className="hidden sm:inline-block">•</span>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
}