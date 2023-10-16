import { Chevright, Dashboard, Favorite, Home, Mail, Settings, Location, ArrowDown, Calendar, User, Search, Notif, Star, Edit, Explore } from "@assets/icons";
import React, { FC } from "react";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: IconType;
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
}
export type IconType = keyof typeof Icons;
const Icons = {
    mail: <Mail />,
    home: <Home />,
    settings: <Settings />,
    dashboard: <Dashboard />,
    favourite: <Favorite />,
    chevRight: <Chevright />,
    arrowDown: <ArrowDown />,
    calendar: <Calendar />,
    user: <User />,
    location: <Location />,
    search: <Search />,
    notif: <Notif />,
    star: <Star />,
    edit: <Edit />


}
const Icon: FC<IconProps> = ({ name, className, width = 24, height = 24 }) => {
    // Import or define your SVG icons as React components

    return (
        <>
            {Icons[name]
                ? React.cloneElement(Icons[name], { className, width, height })
                : null}
        </>
    );
};

export default Icon;