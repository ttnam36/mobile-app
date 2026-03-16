export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  imageUrl: string;
}

export interface Playlist {
  id: string;
  title: string;
  artist: string;
  songCount: number;
  imageUrl: string;
  songs?: Song[];
}

export const categories = ['All', 'New Release', 'Trending', 'Top'];

export const myMusicTabs = ['All', 'Playlists', 'Liked Songs', 'Downloads'];

// Using placeholder avatar URLs (these would be real images in production)
export const userProfile = {
  name: 'Samantha',
  avatar: 'https://i.pravatar.cc/100?img=1',
};

export const featuredPlaylist = {
  id: 'featured-1',
  title: 'Discover weekly',
  description: 'The original slow instrumental best playlists.',
  imageUrl: 'https://i.pravatar.cc/300?img=32',
};

export const dailyPlaylists: Playlist[] = [
  {
    id: 'pl-1',
    title: 'Starlit Reverie',
    artist: 'Budiarti',
    songCount: 8,
    imageUrl: 'https://i.pravatar.cc/100?img=5',
  },
  {
    id: 'pl-2',
    title: 'Midnight Confessions',
    artist: 'Alexiao',
    songCount: 24,
    imageUrl: 'https://i.pravatar.cc/100?img=11',
  },
  {
    id: 'pl-3',
    title: 'Lost in the Echo',
    artist: 'Alexiao',
    songCount: 24,
    imageUrl: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 'pl-4',
    title: 'Letters I Never Sent',
    artist: 'Alexiao',
    songCount: 24,
    imageUrl: 'https://i.pravatar.cc/100?img=16',
  },
  {
    id: 'pl-5',
    title: 'Breaking the Silence',
    artist: 'Alexiao',
    songCount: 24,
    imageUrl: 'https://i.pravatar.cc/100?img=20',
  },
  {
    id: 'pl-6',
    title: 'Tears on the Vinyl',
    artist: 'Alexiao',
    songCount: 24,
    imageUrl: 'https://i.pravatar.cc/100?img=25',
  },
];

export const nowPlayingSong: Song & { lyrics: string; albumArtist: string } = {
  id: 'song-1',
  title: 'Starlit Reverie',
  artist: 'Budiarti x Lil magrib',
  albumArtist: 'Budiarti x Lil magrib',
  duration: '2:15',
  imageUrl: 'https://i.pravatar.cc/400?img=5',
  lyrics:
    'Whispers in the midnight breeze,\nCarrying dreams across the seas,\nI close my eyes, let go, and drift away.',
};
