import { Grid, Col } from "@tremor/react";

interface LayoutProps {
    children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    return (
        <Grid numCols={1} className="gap-4">
            {children}
        </Grid>
    )
}