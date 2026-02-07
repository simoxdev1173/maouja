import { cn } from '@/lib/utils'
import Link from 'next/link'

type GalleryImage = {
  src: string
  alt: string
}

type GallerySection = {
  type?: string
  images: GalleryImage[]
}

const Gallery = ({ sections }: { sections: GallerySection[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-16 flex flex-col items-center text-center'>
          <h2 className='mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
            <span className='relative inline-block'>
              L'univers Maouja
              <span className='bg-primary absolute -bottom-2 left-0 -z-1 h-1.5 w-full rounded-full opacity-30' aria-hidden='true'></span>
            </span>
          </h2>

          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
            <p className="text-xl font-medium text-[#03045e] md:text-2xl">
              Bienvenue chez Maouja. <br className="hidden sm:block" />
              Plus qu’apprendre à surfer, <span className="">développer ton vrai niveau.</span>
            </p>

            <p>
              Chez Maouja, le surf n’est pas juste une activité : c’est un <span className="italic">processus de progression</span>. 
              Ici, on ne se contente pas de te mettre debout sur une planche — on t’aide à 
              <span className="font-semibold text-[#03045e]"> comprendre, maîtriser et faire évoluer </span> 
              ton surf, étape par étape.
            </p>

            <p>
              Coach <span className="text-[#03045e] font-semibold">certifié et passionné</span>, je travaille avec une école de surf mobile, pensée pour s’adapter à toi et aux conditions. 
              Que tu sois débutant motivé ou surfeur intermédiaire, chaque session est construite pour faire monter ton 
              <span className="font-semibold text-[#03045e]"> niveau réel dans l’eau.</span>
            </p>

            <p className="text-sm font-bold uppercase tracking-widest text-primary/80">
              Maîtrise. Style. Progression.
            </p>
          </div>
        </div>

        {/* Gallery Grid - Logic and positions strictly maintained */}
        <div className='grid gap-6 md:grid-cols-2'>
          {sections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className={cn({ 'grid grid-cols-2 gap-6': section.type === 'grid' })}
            >
              {section.images.map((image, imageIndex) => (
                <img 
                  key={imageIndex} 
                  src={image.src} 
                  alt={image.alt} 
                  className='aspect-square w-full rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-[1.01]' 
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12 flex justify-center items-center'>
        <Link href="/gallery">
        <button
        className="bg-[#0F172B] hover:bg-[#1e293b] text-white px-10 py-4 rounded-full font-bold text-sm shadow-xl transition-all active:scale-95">
          Voir tout l'univers
        </button>
        </Link>
      </div>
    </section>
  )
}

export default Gallery