// Import des images
import img1 from '../assets/images/galeries/EPI001.jpg';
import img2 from '../assets/images/galeries/EPI002.jpg';
import img3 from '../assets/images/galeries/EPI003.jpg';
import img4 from '../assets/images/galeries/EPI004.jpg';
import img5 from '../assets/images/galeries/EPI005.jpg';
import img6 from '../assets/images/galeries/EPI006.jpg';

export default function GalerieSections() {

    return (
        <section className="bg-white-50 py-16">

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Vente des EPI
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img1} alt="EPI" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
                </div>                
            </div>

        </section>
    )

}