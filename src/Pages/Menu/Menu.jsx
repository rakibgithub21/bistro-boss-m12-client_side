import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuBG from '../../assets/menu/banner3.jpg'
import desertBG from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuBG} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTitle heading={"Todays Offer"} subHeading="Don't Miss"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={deserts} coverImg={desertBG} title={'Desert'}></MenuCategory>
        </div>
    );
};

export default Menu;