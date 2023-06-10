import { cn } from "@/lib/utils"

type TitleProps = {
    children: React.ReactNode
    className?: string
}

export default function Title({ children, className }: TitleProps) {
    return (
        <h2
            className={cn(
                "text-2xl font-bold text-foreground",
                className
            )}
        >
            {children}
        </h2>
    )
}