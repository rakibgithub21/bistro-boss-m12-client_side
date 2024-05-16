import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios('menu.json')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    console.log(menu);

    return (
        <section className="mb-12">
            <SectionTitle heading={'From Our Menue'} subHeading={'Popular Items'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopulerMenu;