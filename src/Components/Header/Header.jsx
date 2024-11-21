import avatar from "../../assets/Avatar.jpg";
import Logo from "../../assets/SDE.png";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ComputerDesktopIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import {
  GlobeAmericasIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Bell, Briefcase, CarFrontIcon, Folder, ShirtIcon, User } from "lucide-react";


const navListMenuItems = [
  {title: "Products", description: "All products available.", icon: ShoppingCartIcon,},
  {title: "BSHM", description: "Bachelor of Science in Hospitality Management", icon: HomeModernIcon,},
  {title: "Others", description: "T-Shirts (Washday, NSTP, Anniversary shirts)", icon: ShirtIcon,},
  {itle: "ICT", description: "Bachelor of Science in: Information Technology (IT), Computer Science (CS), Computer Engineering (CpE)", icon: ComputerDesktopIcon,},
  {title: "BSTM", description: "Bachelor of Science in Tourism Management", icon: GlobeAmericasIcon,},
  {title: "BSBA", description: "Bachelor of Science in Business Administration", icon: Briefcase,},
  {title: "SHS", description: "Senior High School students of STI College Fairview", icon: NewspaperIcon,},
  {title: "BACOMM", description: "Bachelor of Arts in Communication", icon: User,},
  {title: "P.E.", description: "Physical Education", icon: UserGroupIcon,},
  {title: "Miscellaneous", description: "Wala pang laman", icon: Folder,},
  {title: "Limited", description: "Limited edition items",icon: TagIcon,},
];



const CustomMenuItem = ({ icon: Icon, title, description }) => (
  <a href="#">
    <MenuItem className="flex items-center gap-3 rounded-lg">
      <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <Typography variant="h6" color="blue-gray" className="text-justify text-sm font-bold">
          {title}
        </Typography>
        <Typography variant="paragraph" className="text-xs text-blue-gray-500">
          {description}
        </Typography>
      </div>
    </MenuItem>
  </a>
);

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map((item, key) => (
    <CustomMenuItem key={key} {...item} />
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-6 px-5 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Categories
              <ChevronDownIcon
                className={`h-3 w-3 ${isMenuOpen ? "rotate-180" : ""} ${
                  isMobileMenuOpen ? "block lg:hidden" : "hidden lg:block"
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-x-2 gap-y-2 border-spacing-2 bg-gradient-to-b from-yellow-300 to-blue-500 items-center justify-center p-8">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
};


const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-wrap">
      <Navbar className="mx-auto w-full px-4 py-1 bg-gradient-to-r from-yellow-200 to-blue-300 border-none shadow-none rounded-none">
  <div className="flex items-center justify-between w-full gap-4 px-6 lg:px-12">
    
    <Typography as="a" href="/home" variant="h6" className="cursor-pointer">
      <img src={Logo} alt="SDE_Logo" className="h-20 w-20" />
    </Typography>
      
    
    <div className="ml-20 hidden lg:flex gap-20 py-4 px-4">
      <Typography as="a" href="/home" variant="small" className="font-medium">
        <ListItem className="text-neutral-950 text-center flex items-center py-6 px-4 gap-2 hover:bg-blue-gray-50">
          Home
        </ListItem>
      </Typography>
      <Typography as="a" href="/contact" variant="small" className="font-medium">
        <ListItem className="text-neutral-950 text-center flex items-center py-6 px-4 gap-2 hover:bg-blue-gray-50">
          Contact Us
        </ListItem>
      </Typography>
      <NavListMenu />
    </div>

    
    <div class="flex px-4 py-3 rounded-md border-2 bg-white border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </div>

    
    <div className="flex items-center gap-20 py-4 px-4">
      
      <Typography as="a" href="/notifications" variant="small" className="text-neutral-950 font-medium">
        <ListItem className="text-center flex items-center gap-4 hover:bg-blue-gray-50">
          <Bell className=" h-6 w-6" />
          Notifications
        </ListItem>
      </Typography>

      <Typography as="a" href="/cart" variant="small" className="text-neutral-950 font-medium">
        <ListItem className="text-center flex items-center gap-2 hover:bg-blue-gray-50">
          <ShoppingCartIcon className="h-6 w-6" />
          Cart
        </ListItem>
      </Typography>

      
      <Typography as="a" href="/profile">
        <img className="h-10 w-10 p-1 rounded-full ring-2 ring-green-900-500" src={avatar} alt="User Avatar" />
      </Typography>
    </div>
  </div>
</Navbar>
    </div>
  );
};


export default Header;
