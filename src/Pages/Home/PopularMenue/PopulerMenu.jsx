import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerMenu = () => {
  const[menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-12">
            <SectionTitle heading={'From Our Menue'} subHeading={'Popular Items'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopulerMenu;