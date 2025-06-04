import { useState, useEffect } from 'react';
import { Search, Grid, List, Filter, X, ChevronDown, Menu, User, Camera, Heart } from 'lucide-react';

// Mock data for demonstration
const categories = [
    "Landscapes", "Portraits", "Abstract", "Sci-Fi", "Fantasy",
    "Architecture", "Animals", "Space", "Surreal", "Minimalist"
];

const subcategories = {
    "Landscapes": ["Mountains", "Beaches", "Forests", "Cities", "Deserts"],
    "Portraits": ["Realistic", "Stylized", "Anime", "Fantasy", "Cyberpunk"],
    "Abstract": ["Geometric", "Fluid", "Textured", "Colorful", "Minimal"],
    "Sci-Fi": ["Cyberpunk", "Space Tech", "Futuristic Cities", "Robots", "Alien Worlds"],
    "Fantasy": ["Dragons", "Magic", "Medieval", "Mythical Creatures", "Enchanted Forests"],
    "Architecture": ["Modern", "Ancient", "Futuristic", "Brutalist", "Organic"],
    "Animals": ["Wildlife", "Pets", "Mythical", "Hybrid", "Underwater"],
    "Space": ["Galaxies", "Planets", "Nebulae", "Spaceships", "Astronauts"],
    "Surreal": ["Dreamlike", "Escher-inspired", "Dali-inspired", "Impossible Geometry", "Bizarre"],
    "Minimalist": ["Clean Lines", "Monochrome", "Simple Shapes", "Negative Space", "Typography"]
};

const mockImages = [
    { id: 1, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Landscapes", subcategory: "Mountains", likes: 245, user: "artcreator1" },
    { id: 2, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Portraits", subcategory: "Stylized", likes: 189, user: "ai_artist" },
    { id: 3, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Abstract", subcategory: "Geometric", likes: 302, user: "designerX" },
    { id: 4, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Sci-Fi", subcategory: "Cyberpunk", likes: 156, user: "future_vision" },
    { id: 5, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Fantasy", subcategory: "Dragons", likes: 421, user: "magic_maker" },
    { id: 6, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Landscapes", subcategory: "Forests", likes: 193, user: "nature_ai" },
    { id: 7, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Abstract", subcategory: "Fluid", likes: 287, user: "abstract_dreams" },
    { id: 8, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Portraits", subcategory: "Realistic", likes: 342, user: "portraitpro" },
    { id: 9, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Space", subcategory: "Galaxies", likes: 276, user: "cosmic_ai" },
    { id: 10, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Surreal", subcategory: "Dreamlike", likes: 319, user: "surreal_mind" },
    { id: 11, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Architecture", subcategory: "Futuristic", likes: 234, user: "future_build" },
    { id: 12, url: "https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Animals", subcategory: "Mythical", likes: 385, user: "creature_create" },
];

export default function AIImageGallery() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState('newest');
    const [windowWidth, setWindowWidth] = useState(0);

    // Set window width on client-side
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    // Filter images based on selected categories and search query
    const filteredImages = mockImages.filter(img => {
        const matchesCategory = selectedCategory ? img.category === selectedCategory : true;
        const matchesSubcategory = selectedSubcategory ? img.subcategory === selectedSubcategory : true;
        const matchesSearch = searchQuery ?
            img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            img.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
            img.user.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        return matchesCategory && matchesSubcategory && matchesSearch;
    });

    // Sort images based on selected sort option
    const sortedImages = [...filteredImages].sort((a, b) => {
        if (sortBy === 'newest') return b.id - a.id;
        if (sortBy === 'popular') return b.likes - a.likes;
        return 0;
    });

    const resetFilters = () => {
        setSelectedCategory('');
        setSelectedSubcategory('');
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile Header */}
            <header className="md:hidden bg-white dark:bg-gray-800 shadow-sm z-10 fixed top-0 left-0 right-0">
                <div className="flex items-center justify-between p-4">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">AI Gallery</h1>
                    <button
                        onClick={toggleFilter}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Filter className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </button>
                </div>

                {/* Mobile Search */}
                <div className="px-4 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search images..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-2.5"
                            >
                                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20">
                        <div className="bg-white dark:bg-gray-800 h-full w-64 shadow-lg p-4 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menu</h2>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                </button>
                            </div>

                            <nav className="space-y-2">
                                <a href="#" className="flex items-center p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                                    <Camera className="w-5 h-5 mr-3" />
                                    <span>Explore Images</span>
                                </a>
                                <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Heart className="w-5 h-5 mr-3" />
                                    <span>Liked Images</span>
                                </a>
                                <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <User className="w-5 h-5 mr-3" />
                                    <span>My Profile</span>
                                </a>
                            </nav>

                            <div className="mt-auto">
                                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Upload Your AI Art</h3>
                                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                        Upload New Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Filter Panel */}
                {isFilterOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20">
                        <div className="bg-white dark:bg-gray-800 h-full w-64 shadow-lg p-4 flex flex-col absolute right-0">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Filters</h2>
                                <button
                                    onClick={toggleFilter}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Sort By
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600"
                                    >
                                        <option value="newest">Newest</option>
                                        <option value="popular">Most Popular</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Category
                                    </label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => {
                                            setSelectedCategory(e.target.value);
                                            setSelectedSubcategory('');
                                        }}
                                        className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600"
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                {selectedCategory && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Subcategory
                                        </label>
                                        <select
                                            value={selectedSubcategory}
                                            onChange={(e) => setSelectedSubcategory(e.target.value)}
                                            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600"
                                        >
                                            <option value="">All Subcategories</option>
                                            {subcategories[selectedCategory].map(subcat => (
                                                <option key={subcat} value={subcat}>{subcat}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <button
                                    onClick={resetFilters}
                                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Reset Filters
                                </button>

                                <button
                                    onClick={toggleFilter}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Desktop Layout */}
            <div className="flex min-h-screen">
                {/* Desktop Sidebar */}
                <aside className="hidden md:flex md:flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">AI Gallery</h1>
                    </div>

                    <nav className="flex-1 p-4 space-y-2">
                        <a href="#" className="flex items-center p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                            <Camera className="w-5 h-5 mr-3" />
                            <span>Explore Images</span>
                        </a>
                        <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Heart className="w-5 h-5 mr-3" />
                            <span>Liked Images</span>
                        </a>
                        <a href="#" className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <User className="w-5 h-5 mr-3" />
                            <span>My Profile</span>
                        </a>
                    </nav>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-2">Upload Your AI Art</h3>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                            Upload New Image
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 ${isMobile ? 'pt-28 pb-6' : 'p-6'} ${isMobile ? '' : 'ml-64'}`}>
                    {/* Desktop Header and Controls */}
                    <div className="hidden md:block mb-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Explore AI Images</h2>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                >
                                    <Grid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-6">
                            <div className="relative flex-1 max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search images..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-2.5"
                                    >
                                        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </button>
                                )}
                            </div>

                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 pr-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                >
                                    <option value="newest">Newest</option>
                                    <option value="popular">Most Popular</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
                            <button
                                onClick={() => {
                                    setSelectedCategory('');
                                    setSelectedSubcategory('');
                                }}
                                className={`px-3 py-1 text-sm rounded-full ${!selectedCategory ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                            >
                                All
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setSelectedSubcategory('');
                                    }}
                                    className={`px-3 py-1 text-sm rounded-full ${selectedCategory === cat ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {selectedCategory && (
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Subcategory:</span>
                                <button
                                    onClick={() => setSelectedSubcategory('')}
                                    className={`px-3 py-1 text-sm rounded-full ${!selectedSubcategory ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                >
                                    All
                                </button>
                                {subcategories[selectedCategory].map(subcat => (
                                    <button
                                        key={subcat}
                                        onClick={() => setSelectedSubcategory(subcat)}
                                        className={`px-3 py-1 text-sm rounded-full ${selectedSubcategory === subcat ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                                    >
                                        {subcat}
                                    </button>
                                ))}
                            </div>
                        )}

                        {(selectedCategory || selectedSubcategory || searchQuery) && (
                            <button
                                onClick={resetFilters}
                                className="mt-4 px-4 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Reset Filters
                            </button>
                        )}
                    </div>

                    {/* Active Filters for Mobile */}
                    {isMobile && (selectedCategory || selectedSubcategory || searchQuery) && (
                        <div className="px-4 mb-4 flex flex-wrap gap-2">
                            {selectedCategory && (
                                <div className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                                    <span>{selectedCategory}</span>
                                    <button onClick={() => {
                                        setSelectedCategory('');
                                        setSelectedSubcategory('');
                                    }}>
                                        <X className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            )}

                            {selectedSubcategory && (
                                <div className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                                    <span>{selectedSubcategory}</span>
                                    <button onClick={() => setSelectedSubcategory('')}>
                                        <X className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            )}

                            {searchQuery && (
                                <div className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                                    <span>"{searchQuery}"</span>
                                    <button onClick={() => setSearchQuery('')}>
                                        <X className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Results Count */}
                    <div className={`${isMobile ? 'px-4' : ''} mb-4`}>
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing {sortedImages.length} {sortedImages.length === 1 ? 'result' : 'results'}
                            {selectedCategory && ` in ${selectedCategory}`}
                            {selectedSubcategory && ` > ${selectedSubcategory}`}
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                    </div>

                    {/* Grid View */}
                    {viewMode === 'grid' && (
                        <div className={`${isMobile ? 'px-4' : ''} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4`}>
                            {sortedImages.map(image => (
                                <div key={image.id} className="group relative">
                                    <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                                        <img
                                            src={image.url}
                                            alt={`${image.category} - ${image.subcategory}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                        />
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <div className="truncate">
                                            <p className="text-xs text-gray-500 dark:text-gray-400">@{image.user}</p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{image.subcategory}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm">
                                            <Heart className="w-4 h-4 text-red-500" />
                                            <span className="text-gray-700 dark:text-gray-300">{image.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* List View (Desktop Only) */}
                    {viewMode === 'list' && (
                        <div className="space-y-4">
                            {sortedImages.map(image => (
                                <div key={image.id} className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                    <div className="w-32 h-32 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                                        <img
                                            src={image.url}
                                            alt={`${image.category} - ${image.subcategory}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{image.subcategory}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">@{image.user}</p>
                                        <div className="mt-2 flex items-center gap-4">
                                            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                                {image.category}
                                            </span>
                                            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                                {image.subcategory}
                                            </span>
                                        </div>
                                        <div className="mt-4 flex items-center gap-1">
                                            <Heart className="w-4 h-4 text-red-500" />
                                            <span className="text-gray-700 dark:text-gray-300">{image.likes} likes</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No Results */}
                    {sortedImages.length === 0 && (
                        <div className={`${isMobile ? 'px-4' : ''} flex flex-col items-center justify-center py-12 text-center`}>
                            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                                <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No images found</h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-md">
                                We couldn't find any images matching your search criteria. Try adjusting your filters or search query.
                            </p>
                            <button
                                onClick={resetFilters}
                                className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}