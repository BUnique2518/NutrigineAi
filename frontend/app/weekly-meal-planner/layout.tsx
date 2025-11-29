import SidebarLayout from "@/components/layouts/SidebarLayout";
import type React from "react";

export default function WeeklyMealPlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SidebarLayout>{children}</SidebarLayout>;
}
