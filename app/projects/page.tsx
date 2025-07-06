import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Cozy Family Living Room',
    description: 'A spacious living room designed for family gatherings, featuring warm tones and modern furnishings for a welcoming atmosphere.',
    image: '/image/project3.jpg',
    link: '',
  },
  {
    id: 2,
    name: 'Modern Minimalist Kitchen',
    description: 'A sleek kitchen with minimalist cabinetry and clean lines, combining functionality with contemporary style.',
    image: '/image/project2.jpg',
    link: '',
  },
  {
    id: 3,
    name: 'Elegant Master Bedroom Retreat',
    description: 'A tranquil master bedroom with soft lighting and elegant decor, creating a peaceful space for relaxation.',
    image: '/image/project4.png',
    link: '',
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div key={project.id} className='relative overflow-hidden rounded-xl group'>
            <div>
              <Image src={project.image} width={480} height={380} alt={project.name} className='w-full' />
            </div>
            <div className='absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0'>
              <h1 className='text-2xl font-semibold'>{project.name}</h1>
              <p className='py-4'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
