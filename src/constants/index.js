import Facebook from '../components/socialmedia/Facebook';
import Instagram from '../components/socialmedia/Instagram';
import Youtube from '../components/socialmedia/Youtube';
import Gmail from '../components/socialmedia/Gmail';
import Whatsapp from '../components/socialmedia/Whatsapp';

export const HeroData = {
    headline1: 'Buy Premium Beats',
    headline2: 'for your next hit',
    subheadline1: 'Discover a curated collection of high-quality beats crafted by top producers.',
    subheadline2: 'Find the perfect sound to inspire your next track and make your music stand out.'
}

// export const Playlist = [
//     { id:'1', uid: "51d64597", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/floating.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125832Z&X-Amz-Expires=900&X-Amz-Signature=2cf98a957cfab04aed9f489915495345ceffbfb497aeced42b8ac350c342207f&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'2', uid: "67ddeced", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/love_keys.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125942Z&X-Amz-Expires=900&X-Amz-Signature=dbc4655035c0250967ddbb414dd6e34aaa76bd262720c1f4e00c4b3eecb2defa&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'3', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'4', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'5', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'6', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'7', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'8', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'9', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'10', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'11', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'12', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'13', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'14', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'15', uid: "51d64597", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/floating.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125832Z&X-Amz-Expires=900&X-Amz-Signature=2cf98a957cfab04aed9f489915495345ceffbfb497aeced42b8ac350c342207f&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'16', uid: "67ddeced", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/love_keys.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125942Z&X-Amz-Expires=900&X-Amz-Signature=dbc4655035c0250967ddbb414dd6e34aaa76bd262720c1f4e00c4b3eecb2defa&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'17', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'18', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'19', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'20', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'21', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'22', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'23', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'24', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'25', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'26', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'27', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
//     { id:'28', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: 'https://pendukobeats.s3.ap-southeast-2.amazonaws.com/spi.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYUDOGIQ73DAIO3XH%2F20241016%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241016T125913Z&X-Amz-Expires=900&X-Amz-Signature=0cd2fa6815909a407458f2d418e1f426f4f668723a9ad4bf4c7a6b0177eeb682&X-Amz-SignedHeaders=host&x-id=GetObject', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },

// ];

export const licensePrices = {
    MP3: 30,
    WAV: 50,
    Trackout: 100,
    Exclusive: 1000
  };

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
        price: '1000',
        list: ['Untagged MP3', 'Sell up to 3,000 units', 'Non-Exclusive Rights', 'Keep 100% Royalties', 'Instant Delivery'],
        most_popular: false,
        promo: [false, " "]
    },
]

