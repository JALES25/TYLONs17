import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface SideBarIconProps {
    icon: IconType;  // Use IconType from react-icons for specifying icon type
    text?: string;
}

    export default function SideBarIcon({ icon: Icon, text = 'tooltip ?' }: SideBarIconProps) {
    return (
        <div className="sidebar-icon group">
            <Icon />

            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
    }

