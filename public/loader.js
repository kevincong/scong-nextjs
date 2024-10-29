export default function myImageLoader({ src, width, quality }) {
    return `https://scong.ca/${src}?w=${width}&q=${quality || 75}`
}
