import websiteImg1 from '../assets/ecommerce-websites.jpg';
// import websiteImg2 from '../assets/food-ecommerce.jpg';
// import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with React & Firebase API',
                link: 'https://github.com/Prabu333/e_commerce',
                demo: 'https://tjsjmart.netlify.app'
            }
            // ,
            // {
            //     image: websiteImg2,
            //     description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
            //     link: 'https://github.com/jvlcode/food'
            // },
            // {
            //     image: websiteImg3,
            //     description: 'Basic Blog Website. Built with Next JS and MongoDB',
            //     link: 'https://github.com/jvlcode/blog'
            // }
        ]
    }

    // Function to handle image click and open in a new tab
    const handleImageClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img
                                className='h-[200px] w-[500px] cursor-pointer'
                                src={project.image}
                                alt={project.description}
                                onClick={() => handleImageClick(project.demo)}
                            />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
