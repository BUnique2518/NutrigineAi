import SidebarLayout from "@/components/layouts/SidebarLayout";
import type React from "react";

export default function MealLayout({
    children,
}: {
    children: React.NodeNode;
}) {
    return <SidebarLayout>{children}</SidebarLayout>;
}
