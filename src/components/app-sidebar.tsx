import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingCart,
  Settings,
  LogOut,
  Banknote,
  FileText,
  Truck,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Warehouse,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: Banknote,
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icon: Truck,
  },
];

const bottomMenuItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const documentMenuItems = [
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavLink to="/">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  🥐
                </div>

                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Bakery BMIS</span>
                  <span className="text-xs text-muted-foreground">
                    Management System
                  </span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Bakery BMIS</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "bg-muted font-medium" : ""
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Documents Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Documents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {documentMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom navigation */}
      <SidebarFooter>
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                console.log("Logout clicked");
              }}
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
