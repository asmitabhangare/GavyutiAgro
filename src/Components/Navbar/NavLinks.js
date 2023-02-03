import React, { useState } from "react";
import {Link} from "react-router-dom"

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const links = [
        {
            name: "About Us", submenu: true, sublinks: [
                { name: "Overview", link: "/overview" },
                { name: "Team", link: "/team" },
                { name: "Mission & Vision", link: "/missionvision" },
                { name: "Research", link: "/research" },
                { name: "Recognition", link: "/recognition" }

            ]
        }];

    return (
        <>
            {links.map((l) => (
                <div>
                    <div className="px-3 md:cursor-pointer group hover:underline underline-offset-8
                    decoration-textunder decoration-4 font-body">
                        <h1 className="py-7" onClick={() =>
                            heading !== l.name ? setHeading(l.name) : setHeading('')}>
                            {l.name}
                        </h1>
                        {/* {heading} */}
                        {l.submenu && <div>
                            <div>
                                <div className="absolute top-16 hidden z-50 group-hover:md:block hover:md:block">

                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-textunder rotate-45">

                                        </div>
                                    </div>
                                    <div className="bg-textunder p-1.5 rounded-md opacity-100">
                                        {
                                            l.sublinks.map((mysublinks) => (
                                                // {console.log(mysublinks.link)}
                                                <div>
                                                    <li className="text-lg text-white my-2.5 text-left bg-textunder border-solid border-b-2 border-navbg font-body">

                                                        <Link to={mysublinks.link} className="hover:text-navbg">
                                                            {mysublinks.name}
                                                        </Link>


                                                    </li> </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    {/* Mobile NavBar  */}
                    <div className={`
                    ${heading === l.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {
                            l.sublinks.map((slink) => (
                                <div>
                                    <div className="bg-textunder">
                                        <h1 className="py-1 pl-7 md:pr-0 pr-5 text-left text-sm text-white">
                                            <li>
                                                <Link to={slink.link} className="">
                                                    {slink.name}
                                                </Link>
                                            </li>
                                        </h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;