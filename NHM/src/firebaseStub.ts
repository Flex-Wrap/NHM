// firebaseStub.ts

export type Event = {
  id: string;
  title: string;
  date: string; // ISO format
  imgUrl: string;
  description: string;
};

export type Story = {
  id: string;
  title: string;
  imageUrl: string;
};

// Helper to optimize Unsplash image URLs
function optimizeImageUrl(url: string, width = 300, height = 360, quality = 70): string {
  return `${url}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

// Raw mock data
const events: Event[] = [
  {
    id: "1",
    title: "The Homo Sapiens",
    date: "2025-07-01",
    imgUrl: "https://images.unsplash.com/photo-1567476783296-fff06012e17a",
    description: "Exploring contemporary art and its impact.",
  },
  {
    id: "2",
    title: "Sea Life Crisis",
    date: "2025-07-10",
    imgUrl: "https://images.unsplash.com/photo-1572713629470-3e9f5d4fdf4c",
    description: "A showcase of cutting-edge design innovations.",
  },
  {
    id: "3",
    title: "Past Event",
    date: "2024-11-10",
    imgUrl: "https://source.unsplash.com/featured/?history",
    description: "An event from the past.",
  },
];

const stories: Story[] = [
  {
    id: "expedition-to-africa",
    title: "Expedition to Africa",
    imageUrl: "https://images.unsplash.com/photo-1577971132997-c10be9372519",
  },
  {
    id: "the-global-backyard",
    title: "The Global Backyard",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

// Getters
export function getUpcomingEvents(count: number = 2): Event[] {
  const today = new Date();

  return events
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, count)
    .map((event) => ({
      ...event,
      imgUrl: optimizeImageUrl(event.imgUrl),
    }));
}

export function getStories(): Story[] {
  return stories.map((story) => ({
    ...story,
    imageUrl: optimizeImageUrl(story.imageUrl),
  }));
}

export type UsefulLink = {
  id: string;
  label: string;
};

const usefulLinks: UsefulLink[] = [
  { id: "ticket-prices", label: "Ticket prices" },
  { id: "opening-hours", label: "Opening hours" },
  { id: "route-parking", label: "Route & Parking" },
  { id: "social-media", label: "Social Media" },
  { id: "contact-info", label: "Contact info" },
];

export function getUsefulLinks(): UsefulLink[] {
  return usefulLinks;
}