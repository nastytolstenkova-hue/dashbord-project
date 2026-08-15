import Link from "next/link"
import { PanelsTopLeft, 
  ChartNoAxesColumnIncreasing, 
  Users, 
  Box, 
  Mail, 
  Wallet, 
  Settings, 
  ShieldKeyhole,
  ChevronDown } from 'lucide-react';

export default function LeftBar() {
  const baseLinkStyle = 'flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200';
  const activeLinkStyle = 'bg-[#292856] text-white relative before:absolute before:left-[-16px] before:top-2 before:bottom-2 before:w-1.5 before:bg-indigo-500 before:rounded-r-md';
  const inactiveLinkStyle = 'text-indigo-100/70 hover:text-white hover:bg-white/5';

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-[#1a193b] text-white flex flex-col justify-between p-4 z-50">
      
      
      <div className="flex flex-col gap-6">
        
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Syntho</span>
        </div>

        <nav className="flex flex-col gap-1.5">
          <p className="px-3 text-[11px] font-bold uppercase tracking-widest text-indigo-200/40 mb-1">
            Menu
          </p>
          
          <Link href="/overview" className={`${baseLinkStyle} ${activeLinkStyle}`}>
            <PanelsTopLeft className="w-5 h-5 text-indigo-400" />
            <span>Overview</span>
          </Link>

          <Link href="/statistics" className={`${baseLinkStyle} ${inactiveLinkStyle}`}>
            <ChartNoAxesColumnIncreasing className="w-5 h-5" />
            <span>Statistics</span>
          </Link>

          <Link href="/customers" className={`${baseLinkStyle} ${inactiveLinkStyle}`}>
            <Users className="w-5 h-5" />
            <span>Customers</span>
          </Link>

        
          <Link href="/product" className={`${baseLinkStyle} ${inactiveLinkStyle} justify-between`}>
            <div className="flex items-center gap-3.5">
              <Box className="w-5 h-5" />
              <span>Product</span>
            </div>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Link>

          <Link href="/messages" className={`${baseLinkStyle} ${inactiveLinkStyle} justify-between`}>
            <div className="flex items-center gap-3.5">
              <Mail className="w-5 h-5" />
              <span>Messages</span>
            </div>
            <span className="bg-indigo-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
              24
            </span>
          </Link>

          <Link href="/transactions" className={`${baseLinkStyle} ${inactiveLinkStyle}`}>
            <Wallet className="w-5 h-5" />
            <span>Transactions</span>
          </Link>
        </nav>

       
        <div className="flex flex-col gap-1.5 pt-2 border-t border-indigo-900/40">
          <p className="px-3 text-[11px] font-bold uppercase tracking-widest text-indigo-200/40 mb-1">
            General
          </p>
          
          <Link href="/settings" className={`${baseLinkStyle} ${inactiveLinkStyle}`}>
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>

          <Link href="/security" className={`${baseLinkStyle} ${inactiveLinkStyle}`}>
            <ShieldKeyhole className="w-5 h-5" />
            <span>Security</span>
          </Link>
        </div>
      </div>

      
      <div className="pt-4 border-t border-indigo-900/40">
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="w-10 h-10 rounded-full bg-indigo-600/30 overflow-hidden shrink-0 border border-indigo-400/30 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">JS</span>
          </div>
          
          <div className="flex flex-col min-w-0">
            <p className="text-xs font-semibold text-white truncate">Johan Smith</p>
            <p className="text-[10px] text-indigo-200/50 truncate">johansmith@gmail.com</p>
          </div>
        </div>
      </div>

    </aside>
  );
}