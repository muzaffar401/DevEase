'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import Colors from '@/data/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import Link from 'next/link';
import { Download, Rocket, Menu } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { ActionContext } from '@/context/ActionContext';

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const onActionBtn = (actn) => {
    setAction({
      actionType: actn,
      timeStamp: Date.now()
    })
  }

  // Don't show header on landing page
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link href={'/'} className="flex items-center space-x-2">
              <Image src={'/logo.png'} alt="logo" width={32} height={32} />
              <span className="font-bold text-lg text-gray-900 hidden sm:block">CodeMind AI</span>
            </Link>
          </div>
          {/* Actions */}
          <div className="flex items-center space-x-3">
            {pathname.includes('/workspace/') && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onActionBtn('export')}
                  className="flex items-center bg-black hover:bg-neutral-900 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>

                <Button
                  onClick={() => onActionBtn('deploy')}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Deploy
                </Button>
              </>
            )}

            {userDetail && userDetail.picture && (
              <Image
                onClick={toggleSidebar}
                src={userDetail.picture}
                alt="userImage"
                width={32}
                height={32}
                className="rounded-full cursor-pointer object-cover ring-2 ring-gray-200 hover:ring-blue-300 transition-all"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
