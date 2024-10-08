import Facebook from '../components/socialmedia/Facebook';
import Instagram from '../components/socialmedia/Instagram';
import Youtube from '../components/socialmedia/Youtube';
import Gmail from '../components/socialmedia/Gmail';
import Whatsapp from '../components/socialmedia/Whatsapp';

export const HeroData = {
    headline1: 'Buy Premium Beats',
    headline2: 'for Your Next Hit',
    subheadline1: 'Discover a curated collection of high-quality beats crafted by top producers.',
    subheadline2: 'Find the perfect sound to inspire your next track and make your music stand out.'
}

export const Playlist = [
    { id: "1", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: '/beats/floating.mp3', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "2", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: '/beats/love_keys.mp3', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "3", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: '/beats/spi.mp3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "4", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: '/beats/spi.mp3', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "5", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: '/beats/spi.mp3', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "6", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: '/beats/spi.mp3', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "7", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: '/beats/spi.mp3', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
    { id: "8", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: '/beats/spi.mp3', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05', price: '100', bpm: '120 bpm', amount:'1' },
];

export const SocialMediaData = [
    { label: 'facebook', url: 'https://facebook.com', icon: <Facebook /> },
    { label: 'instagram', url: 'https://instagram.com', icon: <Instagram /> },
    { label: 'youtube', url: 'https://youtube.com', icon: <Youtube /> },
    { label: 'gmail', url: 'mailto:example@gmail.com', icon: <Gmail /> },
    { label: 'whatsapp', url: 'https://wa.me/1234567890', icon: <Whatsapp /> },
]

export const PricingData = [
    {
        title: 'MP3',
        description: 'Instant Delivery',
        currency:'$',
        price: '30',
        list: ['Untagged MP3', 'Sell up to 3,000 units', 'Non-Exclusive Rights', 'Keep 100% Royalties', 'Instant Delivery'],
        most_popular: false,
        promo: [true, "20% Off"]
    },
    {
        title: 'WAV',
        description: 'Instant Delivery',
        currency:'$',
        price: '50',
        list: ['Untagged MP3', 'Sell up to 3,000 units', 'Non-Exclusive Rights', 'Keep 100% Royalties', 'Instant Delivery'],
        most_popular: true,
        promo: [false, " "]
    },
    {
        title: 'Trackout',
        description: 'Instant Delivery',
        currency:'$',
        price: '100',
        list: ['Untagged MP3', 'Sell up to 3,000 units', 'Non-Exclusive Rights', 'Keep 100% Royalties', 'Instant Delivery'],
        most_popular: false,
        promo: [false, " "]
    },
    {
        title: 'Exclusive',
        description: 'Instant Delivery',
        currency:'$',
        price: '2000+',
        list: ['Untagged MP3', 'Sell up to 3,000 units', 'Non-Exclusive Rights', 'Keep 100% Royalties', 'Instant Delivery'],
        most_popular: false,
        promo: [false, " "]
    },
]

