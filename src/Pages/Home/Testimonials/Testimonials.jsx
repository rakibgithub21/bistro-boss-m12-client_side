import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios('reviews.json')
            .then(res => {
            setReviews(res.data)
        })
    },[])
    return (
        <div className="my-20">
            <SectionTitle
            subHeading={'What Our Client Say'}
            heading={'Testimonials'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            
                            <div className="mx-24 my-16 space-y-2 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;