'use client'
import { useState, useEffect } from 'react';
import { Search, Play, Pause, SkipBack, SkipForward, Volume2, List, Heart, Clock, Music, Calendar, Star, TrendingUp, Shuffle, Repeat, MoreHorizontal, Home, Library, PlusSquare, ChevronLeft, ChevronRight, User } from 'lucide-react';
import Image from 'next/image';

// Mock data for music
const recentlyPlayed = [
  {
    id: 1,
    title: "Neural Dreams",
    artist: "AI Composer X",
    cover: "https://picsum.photos/200",
    duration: "3:45",
    plays: 125000,
    dateAdded: "2024-02-15",
    genre: "Electronic",
    mood: "Chill",
    liked: false
  },
  {
    id: 2, 
    title: "Digital Symphony No. 1",
    artist: "DeepMind Music",
    cover: "https://picsum.photos/201", 
    duration: "4:12",
    plays: 98000,
    dateAdded: "2024-02-14",
    genre: "Classical",
    mood: "Focused",
    liked: true
  },
  {
    id: 3,
    title: "Synthwave Nights",
    artist: "Neural Beats",
    cover: "https://picsum.photos/202",
    duration: "3:22",
    plays: 145000,
    dateAdded: "2024-02-10",
    genre: "Synthwave",
    mood: "Energetic",
    liked: true
  },
  {
    id: 4,
    title: "Quantum Harmony",
    artist: "AI Orchestra",
    cover: "https://picsum.photos/203",
    duration: "5:18",
    plays: 87000,
    dateAdded: "2024-02-08",
    genre: "Ambient",
    mood: "Relaxing",
    liked: false
  },
  {
    id: 5,
    title: "Binary Sunset",
    artist: "Algorithm",
    cover: "https://picsum.photos/204",
    duration: "4:05",
    plays: 112000,
    dateAdded: "2024-02-12",
    genre: "Electronic",
    mood: "Melancholic",
    liked: false
  },
  {
    id: 6,
    title: "Machine Learning Lullaby",
    artist: "Neural Network",
    cover: "https://picsum.photos/205",
    duration: "3:47",
    plays: 76000,
    dateAdded: "2024-02-05",
    genre: "Ambient",
    mood: "Peaceful",
    liked: true
  }
];

const topWeekly = [
  {
    id: 7,
    title: "Artificial Emotions",
    artist: "Deep Neural",
    cover: "https://picsum.photos/206",
    duration: "3:58",
    plays: 245000,
    dateAdded: "2024-01-28",
    genre: "Electronic",
    mood: "Introspective",
    liked: true
  },
  {
    id: 8,
    title: "Silicon Dreams",
    artist: "Circuit Waves",
    cover: "https://picsum.photos/207",
    duration: "4:32",
    plays: 198000,
    dateAdded: "2024-01-30",
    genre: "IDM",
    mood: "Dreamy",
    liked: false
  },
  {
    id: 9,
    title: "Neural Flow",
    artist: "AI Composer X",
    cover: "https://picsum.photos/208",
    duration: "3:15",
    plays: 220000,
    dateAdded: "2024-01-25",
    genre: "Electronic",
    mood: "Focused",
    liked: true
  },
  {
    id: 10,
    title: "Digital Heartbeat",
    artist: "Algorithm",
    cover: "https://picsum.photos/209",
    duration: "4:08",
    plays: 187000,
    dateAdded: "2024-01-27",
    genre: "Techno",
    mood: "Energetic",
    liked: false
  }
];

const playlists = [
  {
    id: 1,
    name: "Today's Top Hits",
    description: "The hottest tracks right now",
    coverImages: ["https://picsum.photos/210", "https://picsum.photos/211"],
    followers: "22.5M"
  },
  {
    id: 2,
    name: "Discover Weekly",
    description: "Your personal playlist, updated every Monday",
    coverImages: ["https://picsum.photos/212", "https://picsum.photos/213"],
    followers: "12.8M"
  },
  {
    id: 3,
    name: "Neural Beats",
    description: "AI-created electronic music",
    coverImages: ["https://picsum.photos/214", "https://picsum.photos/215"],
    followers: "5.3M"
  },
  {
    id: 4,
    name: "Deep Focus",
    description: "Keep calm and focus with ambient music",
    coverImages: ["https://picsum.photos/216", "https://picsum.photos/217"],
    followers: "8.7M"
  },
  {
    id: 5,
    name: "Chill Vibes",
    description: "Beats to relax and unwind to",
    coverImages: ["https://picsum.photos/218", "https://picsum.photos/219"],
    followers: "15.2M"
  }
];

const userPlaylists = [
  "Favorites 2024",
  "Workout Mix",
  "Study Session",
  "Party Playlist",
  "Chill Evening",
  "Road Trip",
  "90s Nostalgia",
  "Morning Coffee"
];

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState(recentlyPlayed[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 100);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const togglePlay = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-8">Spotify</h1>
          <div className="space-y-4">
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Home size={24} />
              <span className="font-medium">Home</span>
            </button>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Search size={24} />
              <span className="font-medium">Search</span>
            </button>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Library size={24} />
              <span className="font-medium">Your Library</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6 mb-4">
          <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <PlusSquare size={20} />
            <span className="font-medium">Create Playlist</span>
          </button>
          <button className="flex items-center gap-3 mt-4 text-gray-300 hover:text-white transition-colors">
            <Heart size={20} />
            <span className="font-medium">Liked Songs</span>
          </button>
        </div>
        
        <div className="border-t border-gray-800 my-4 pt-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {userPlaylists.map((playlist, index) => (
              <button key={index} className="text-sm text-gray-400 hover:text-white w-full text-left truncate">
                {playlist}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-y-auto">
        {/* Top bar */}
        <div className="sticky top-0 bg-black/30 backdrop-blur-lg p-4 flex justify-between items-center z-10">
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-black/70">
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 rounded-full bg-black/70">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <button className="bg-white text-black font-medium py-1 px-4 rounded-full text-sm hover:scale-105 transition-transform">
              Upgrade
            </button>
            <button className="p-1 rounded-full bg-black/70">
              <User size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Good evening</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recentlyPlayed.slice(0, 6).map((item, index) => (
                <div 
                  key={index}
                  onClick={() => togglePlay(item)}
                  className="bg-gray-800/30 hover:bg-gray-700/40 transition-colors flex items-center rounded-md overflow-hidden cursor-pointer group"
                >
                  <Image 
                    src={item.cover} 
                    alt={item.title} 
                    width={80} 
                    height={80} 
                    className="h-[64px] w-[64px] object-cover"
                  />
                  <div className="flex-1 flex justify-between items-center px-4">
                    <span className="font-medium truncate">{item.title}</span>
                    <button className="p-3 rounded-full bg-green-500 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Play size={16} fill="white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Made for you</h2>
              <button className="text-sm text-gray-400 hover:text-white font-bold">Show all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {playlists.map((playlist) => (
                <div 
                  key={playlist.id} 
                  className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-700/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <Image
                      src={playlist.coverImages[0]}
                      alt={playlist.name}
                      width={150}
                      height={150}
                      className="rounded-md shadow-lg w-full"
                    />
                    <button className="absolute right-2 bottom-2 p-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0">
                      <Play size={20} fill="white" />
                    </button>
                  </div>
                  <h3 className="font-bold text-base truncate">{playlist.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 h-10">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Recently played</h2>
              <button className="text-sm text-gray-400 hover:text-white font-bold">Show all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {recentlyPlayed.map((track) => (
                <div 
                  key={track.id}
                  className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-700/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative mb-3">
                    <Image
                      src={track.cover}
                      alt={track.title}
                      width={140}
                      height={140}
                      className="rounded-md shadow-lg w-full"
                    />
                    <button 
                      onClick={() => togglePlay(track)}
                      className="absolute right-2 bottom-2 p-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0"
                    >
                      {currentTrack?.id === track.id && isPlaying ? (
                        <Pause size={20} fill="white" />
                      ) : (
                        <Play size={20} fill="white" />
                      )}
                    </button>
                  </div>
                  <h3 className="font-bold text-sm truncate">{track.title}</h3>
                  <p className="text-gray-400 text-xs truncate">{track.artist}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3 flex items-center">
        <div className="flex items-center w-1/4">
          {currentTrack && (
            <>
              <Image 
                src={currentTrack.cover}
                alt={currentTrack.title}
                width={56}
                height={56}
                className="rounded-md mr-3"
              />
              <div>
                <div className="text-sm font-medium">{currentTrack.title}</div>
                <div className="text-xs text-gray-400">{currentTrack.artist}</div>
              </div>
              <button className="ml-4 text-gray-400 hover:text-white">
                <Heart size={16} />
              </button>
            </>
          )}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 mb-1">
            <button 
              className="text-gray-400 hover:text-white"
              onClick={() => setShuffle(!shuffle)}
            >
              <Shuffle size={18} color={shuffle ? "#1DB954" : "currentColor"} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={18} />
            </button>
            <button 
              className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" />}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={18} />
            </button>
            <button 
              className="text-gray-400 hover:text-white"
              onClick={() => setRepeat(!repeat)}
            >
              <Repeat size={18} color={repeat ? "#1DB954" : "currentColor"} />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-2 text-xs text-gray-400">
            <span>{Math.floor(progress / 100 * 3)}:{ String(Math.floor((progress / 100 * 180) % 60)).padStart(2, '0')}</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-300 rounded-full hover:bg-green-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span>3:00</span>
          </div>
        </div>
        
        <div className="w-1/4 flex justify-end items-center gap-3">
          <button 
            className="text-gray-400 hover:text-white"
            onClick={() => setShowQueue(!showQueue)}
          >
            <List size={18} />
          </button>
          <div className="flex items-center gap-1">
            <Volume2 size={18} className="text-gray-400" />
            <div className="w-20 h-1 bg-gray-700 rounded-full relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-300 rounded-full hover:bg-green-500" 
                style={{ width: `${volume}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
