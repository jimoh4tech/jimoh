import { IconType } from "react-icons";

export interface NavItemProps {
	label: string;
	href: string;
	onClose?: () => void;
}

export interface NavIconProps {
	icon: IconType;
	href: string;
	
}

