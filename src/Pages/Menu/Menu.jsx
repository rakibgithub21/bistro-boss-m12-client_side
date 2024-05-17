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
            
        </div>
    );
};

export default Menu;