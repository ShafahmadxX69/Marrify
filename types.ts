
export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  imageUrl: string;
  type: 'event' | 'story' | 'info';
  timestamp?: string;
}

export interface RSVPData {
  name: string;
  attending: boolean;
  guests: number;
  songRequest: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
