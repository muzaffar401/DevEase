'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '@/components/custom/Header';
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/custom/AppSideBar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ActionContext } from '@/context/ActionContext';
import { useRouter } from 'next/navigation';
import ClientOnly from '@/components/custom/ClientOnly';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Provider({ children }) {
  const [messages, setMessages] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [action, setAction] = useState(null);
  const router = useRouter();
  const convex = useConvex();

  useEffect(() => {
    IsAuthenticated();
  }, []);

  const IsAuthenticated = async () => {
    if (typeof window !== 'undefined') {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
          router.push('/')
          return
        }
        // Fetch user from the database
        const result = await convex.query(api.users.GetUser, {
          email: user?.email,
        });
        setUserDetail(result);
      } catch (error) {
        console.error('Error during authentication:', error);
        router.push('/');
      }
    }
  };

  return (
    <ClientOnly>
      <div>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}
        >
          <Elements stripe={stripePromise}>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
              <MessagesContext.Provider value={{ messages, setMessages }}>
                <ActionContext.Provider value={{action, setAction}}>
                  <NextThemesProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                  >
                    <SidebarProvider defaultOpen={false}>
                      <ClientOnly>
                        <AppSideBar />
                      </ClientOnly>
                      <main className="w-full">
                        <ClientOnly>
                          <Header />
                        </ClientOnly>
                        {children}
                      </main>
                    </SidebarProvider>
                  </NextThemesProvider>
                </ActionContext.Provider>
              </MessagesContext.Provider>
            </UserDetailContext.Provider>
          </Elements>
        </GoogleOAuthProvider>
      </div>
    </ClientOnly>
  );
}

export default Provider;
