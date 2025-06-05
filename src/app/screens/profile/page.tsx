// src/app/screens/profile/page.tsx
'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Settings, Grid, Music, Film, Heart, Share2, Edit, LogOut, Upload, User as UserIcon, Image as ImageIcon, Video, BarChart2, Bookmark, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('creations');
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    username: 'creative_ai_artist',
    displayName: 'Creative AI Artist',
    bio: 'Digital creator specializing in AI-generated art, music and videos. Exploring the intersection of technology and creativity.',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    coverImage: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg',
    followers: 1245,
    following: 328,
    joined: 'January 2023',
    location: 'San Francisco, CA',
    website: 'creativeart.ai'
  });

  // Mock content data
  const creations = [
    { id: 1, type: 'image', title: 'Neural Dreams', thumbnail: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg', likes: 245, date: '2 days ago' },
    { id: 2, type: 'video', title: 'Digital Symphony', thumbnail: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg', likes: 189, date: '1 week ago' },
    { id: 3, type: 'music', title: 'Quantum Harmony', thumbnail: 'https://picsum.photos/202', likes: 320, date: '2 weeks ago' },
    { id: 4, type: 'image', title: 'Abstract Minds', thumbnail: 'https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890', likes: 178, date: '3 weeks ago' },
    { id: 5, type: 'video', title: 'Future Vision', thumbnail: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg', likes: 231, date: '1 month ago' },
    { id: 6, type: 'music', title: 'Neural Beats', thumbnail: 'https://picsum.photos/203', likes: 295, date: '1 month ago' },
  ];

  const favorites = [
    { id: 7, type: 'image', title: 'Cosmic Wonder', creator: 'space_ai', thumbnail: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg', likes: 429, date: '3 days ago' },
    { id: 8, type: 'video', title: 'AI Documentary', creator: 'tech_visionary', thumbnail: 'https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg', likes: 312, date: '1 week ago' },
    { id: 9, type: 'music', title: 'Digital Dreams', creator: 'neural_beats', thumbnail: 'https://picsum.photos/204', likes: 187, date: '2 weeks ago' },
  ];

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const renderCreations = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {creations.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div className="relative h-40 w-full">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            {item.type === 'video' && <Video className="absolute bottom-2 right-2 text-white" size={20} />}
            {item.type === 'music' && <Music className="absolute bottom-2 right-2 text-white" size={20} />}
          </div>
          <div className="p-3">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-400">{item.date}</span>
              <div className="flex items-center">
                <Heart size={16} className="text-red-500 mr-1" />
                <span className="text-sm text-gray-400">{item.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFavorites = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div className="relative h-40 w-full">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            {item.type === 'video' && <Video className="absolute bottom-2 right-2 text-white" size={20} />}
            {item.type === 'music' && <Music className="absolute bottom-2 right-2 text-white" size={20} />}
          </div>
          <div className="p-3">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">by @{item.creator}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-400">{item.date}</span>
              <div className="flex items-center">
                <Heart size={16} className="text-red-500 mr-1" fill="currentColor" />
                <span className="text-sm text-gray-400">{item.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderStats = () => (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Activity Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Content Overview</h3>
          <div className="flex justify-between mb-2">
            <span>Images</span>
            <span>24</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Videos</span>
            <span>12</span>
          </div>
          <div className="flex justify-between">
            <span>Music</span>
            <span>8</span>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Engagement</h3>
          <div className="flex justify-between mb-2">
            <span>Total Likes</span>
            <span>4.2K</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Comments</span>
            <span>342</span>
          </div>
          <div className="flex justify-between">
            <span>Shares</span>
            <span>128</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Cover Image */}
      <div className="relative h-64 w-full">
        <Image
          src={userData.coverImage}
          alt="Cover"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>

      {/* Profile Info */}
      <div className="container mx-auto px-4 relative -mt-20">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-gray-900">
            <Image
              src={userData.avatar}
              alt="Profile"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{userData.displayName}</h1>
                <p className="text-gray-400">@{userData.username}</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                {!isEditing && (
                  <>
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
                      onClick={() => setIsEditing(true)}
                    >
                      <Edit size={16} className="mr-2" />
                      Edit Profile
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <UserIcon size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">{userData.followers} followers</span>
              </div>
              <div className="flex items-center">
                <BarChart2 size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">{userData.following} following</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">Joined {userData.joined}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{userData.bio}</p>
          </div>
        </div>

        {/* Edit Profile Form (conditionally rendered) */}
        {isEditing && (
          <form
            className="bg-gray-800 rounded-lg p-6 mt-8"
            onSubmit={handleProfileUpdate}
          >
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-400">Display Name</label>
                <input
                  type="text"
                  value={userData.displayName}
                  onChange={e => setUserData({ ...userData, displayName: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-400">Username</label>
                <input
                  type="text"
                  value={userData.username}
                  onChange={e => setUserData({ ...userData, username: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-gray-400">Bio</label>
                <textarea
                  value={userData.bio}
                  onChange={e => setUserData({ ...userData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-400">Location</label>
                <input
                  type="text"
                  value={userData.location}
                  onChange={e => setUserData({ ...userData, location: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-400">Website</label>
                <input
                  type="text"
                  value={userData.website}
                  onChange={e => setUserData({ ...userData, website: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mt-12 border-b border-gray-700">
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'creations' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('creations')}
          >
            <Grid size={18} className="inline mr-2" />
            Creations
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'favorites' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart size={18} className="inline mr-2" /> Favorites
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'stats' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('stats')}
          >
            <BarChart2 size={18} className="inline mr-2" /> Stats
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8 mb-16">
          {activeTab === 'creations' && renderCreations()}
          {activeTab === 'favorites' && renderFavorites()}
          {activeTab === 'stats' && renderStats()}
        </div>
      </div>
    </div>
  );
}
