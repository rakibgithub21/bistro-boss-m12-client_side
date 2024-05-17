import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuBG from '../../assets/menu/banner3.jpg'
import desertBG from '../../assets/menu/dessert-bg.jpeg'
import pizzaBG from '../../assets/menu/pizza-bg.jpg'
import saladBG from '../../assets/menu/salad-bg.jpg'
import soupBG from '../../assets/menu/soup-bg.jpg'
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
            <MenuCategory items={deserts} coverImg={desertBG} title={'desert'}></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaBG} title={'pizza'}></MenuCategory>
            <MenuCategory items={salad} coverImg={saladBG} title={'salad'}></MenuCategory>
            <MenuCategory items={soup} coverImg={saladBG} title={'soup'}></MenuCategory>
        </div>
    );
};

export default Menu;