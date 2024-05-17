import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuBG from '../../assets/menu/banner3.jpg'
import PopulerMenu from "../Home/PopularMenue/PopulerMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuBG} title={'Our Menu'}></Cover>
            <PopulerMenu></PopulerMenu>
            <Cover img={menuBG} title={'Our Menu'}></Cover>
            <PopulerMenu></PopulerMenu>
            <Cover img={menuBG} title={'Our Menu'}></Cover>
            <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Menu;