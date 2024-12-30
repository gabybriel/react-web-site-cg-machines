// Import des logos
import ilogs from '../assets/images/clients/ilogs.jpg';
import ponticelli from '../assets/images/clients/ponticelli.gif';
import renco from '../assets/images/clients/renco.png';
import saris from '../assets/images/clients/saris.jpg';
import bolore from '../assets/images/clients/bolore.png';
import perenco from '../assets/images/clients/perenco.png';

export default function GalerieSections() {
/*
    const clients = [
        { name: 'Ilogs', logo: ilogs },
        { name: 'Ponticelli', logo: ponticelli },
        { name: 'bolore', logo: bolore },
        { name: 'renco', logo: renco },
        { name: 'prenco', logo: perenco },
    ];
    */

    return (
        <section className="bg-white-50 py-16">

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Nos Réalisations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                </div>
            </div>

        </section>
    )

}