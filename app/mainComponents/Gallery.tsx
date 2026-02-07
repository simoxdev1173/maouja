import Gallery from './components/gallery-component'

const gallerySections = [
  {
    images: [
      {
        src: '/images/gallery-1.png',
        alt: 'Coastal cliffs and ocean view'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: '/images/gallery-2.jpeg',
        alt: 'Silhouettes on beach'
      },
      {
        src: '/images/gallery-3.png',
        alt: 'Snowy mountain peaks'
      },
      {
        src: '/images/gallery-4.jpeg',
        alt: 'Rolling green hills'
      },
      {
        src: '/images/gallery-5.jpeg',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src:'/images/gallery-6.jpeg',
        alt: 'Silhouettes on beach'
      },
      {
        src:'/images/gallery-7.jpeg',
        alt: 'Snowy mountain peaks'
      },
      {
        src: '/images/gallery-8.jpeg',
        alt: 'Rolling green hills'
      },
      {
        src: '/images/gallery-9.jpeg',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    images: [
      {
        src: '/images/gallery-10.jpeg',
        alt: 'Coastal cliffs and ocean view'
      }
    ]
  }
]

const GallerySection = () => {
  return <Gallery sections={gallerySections} />
}

export default GallerySection;