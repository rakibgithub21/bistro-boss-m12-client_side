import SectionTitle from "../../../components/SectionTitle";
import FeaturedImage from '../../../assets/home/featured.jpg'
import './Featrued.css'
const Featured = () => {

    return (
        <div className="featured-image bg-fixed pt-8 my-20">
            <SectionTitle  heading={'Featured Item'} subHeading={'Check it Out'}></SectionTitle>
            <div className="md:flex justify-center pt-12 bg-slate-500 opacity-70 pb-20 px-36  items-center">
                <div>
                    <img src={FeaturedImage} alt="" />
                </div>
                <div className="md:ml-10 space-y-2 text-white">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I Can Get Some</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ex soluta voluptas, quas dignissimos amet ullam velit sed, repellendus praesentium, dolor dicta voluptates facilis alias est accusantium quam. Delectus quod dolores alias voluptatum fugiat? Maxime necessitatibus illum in facere, pariatur quia quod nemo harum sequi, ipsum, quaerat beatae veniam alias!</p>
                    <button className="btn border-0 border-b-2 btn-outline mt-4">Order Now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Featured;