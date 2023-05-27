"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils"
import { Icons } from '@/components/icons';

interface NavigationItemProps {
    route: string;
    title: string;
    icon: React.ComponentType<any>
}

const NavigationItem: React.FC<NavigationItemProps> = ({ route, title, icon: Icon }) => {
    const pathname = usePathname();
    const isActive = pathname.endsWith(route)
    return (
        <Link
            href={route}
            className={cn(
                "flex items-center w-full justify-start hover:bg-secondary transition-all rounded-md px-2 py-1 font-medium",
                isActive && "bg-secondary",
            )}
        >
            <Icon className="mr-2 h-4 w-4" />
            {title}
        </Link>
    );
};

interface NavigationGroupProps {
    title: string;
    children: React.ReactNode;
}

const NavigationGroup: React.FC<NavigationGroupProps> = ({ title, children }) => (
    <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">{title}</h2>
        <div className="space-y-2">{children}</div>
    </div>
);

const Logo: React.FC = () => (
    <Link
        href="/"
        className="flex items-center space-x-2 px-4"
    >
        <Image alt="Logo" width="32" height="32" src="/logo.svg" className="rounded-full" />
        <h1 className="font-bold text-xl">Prompt Layer</h1>
    </Link>
);

const NavigationSidebar: React.FC = () => (
    <nav className="space-y-4 py-4">
        <Logo />
        <NavigationGroup title={''}>
            {/* <NavigationItem route="/" title="Home" icon={Icons.logo} /> */}
            <NavigationItem route="/logs" title="Logs" icon={Icons.list} />
        </NavigationGroup>
    </nav>
);

export default NavigationSidebar;
