import { Grid, Col } from "@tremor/react";

interface LayoutProps {
    children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    return (
        <Grid numCols={1} className="gap-2">
            <Col numColSpan={1}>
                {children}
            </Col>
        </Grid >
    )
}