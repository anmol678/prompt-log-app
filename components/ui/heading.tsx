import { cn } from "@/lib/utils"

type HeadingProps = {
    children: React.ReactNode
    className?: string
}

export function Heading2({ children, className }: HeadingProps) {
    return (
        <h2
            className={cn(
                "text-2xl font-bold text-foreground/90",
                className
            )}
        >
            {children}
        </h2>
    )
}

export function Heading3({ children, className }: HeadingProps) {
    return (
        <h3
            className={cn(
                "text-lg font-bold text-foreground/90",
                className
            )}
        >
            {children}
        </h3>
    )
}