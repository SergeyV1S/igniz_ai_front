import { ExitIcon } from "@radix-ui/react-icons";
import { ChevronUp, File, User2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { ThemeSubGroup } from "@shared/theme/ThemeSubGroup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@shared/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger
} from "@shared/ui/sidebar";

const last = [
  {
    title: "file1",
    url: "#",
    icon: File
  },
  {
    title: "file2",
    url: "#",
    icon: File
  }
];
const last30 = [
  {
    title: "file1",
    url: "#",
    icon: File
  },
  {
    title: "file2",
    url: "#",
    icon: File
  }
];

export const AppLayout = () => (
  <SidebarProvider>
    <Sidebar className='font-medium ' variant='inset'>
      <SidebarHeader className='ml-2'>IgnizAI</SidebarHeader>
      <SidebarContent className='px-2'>
        <SidebarMenu>
          <SidebarGroup>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "bg-sidebar-foreground text-background rounded-lg" : ""
              }
            >
              <SidebarMenuItem>
                <SidebarMenuButton>+ Новый файл</SidebarMenuButton>
              </SidebarMenuItem>
            </NavLink>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarHeader>Последние файлы</SidebarHeader>
            {last.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarHeader>За последние 30 дней</SidebarHeader>
            {last30.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side='top' className='w-[--radix-popper-anchor-width]'>
                <ThemeSubGroup />
                <DropdownMenuItem>
                  <div className='flex items-center gap-2'>
                    <ExitIcon />
                    <span>Выйти</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarTrigger className='mt-2' />
    <main className='container flex min-h-svh bg-accent'>
      <div className='w-full flex m-20 rounded-3xl justify-center bg-background'>
        <Outlet />
      </div>
    </main>
  </SidebarProvider>
);
