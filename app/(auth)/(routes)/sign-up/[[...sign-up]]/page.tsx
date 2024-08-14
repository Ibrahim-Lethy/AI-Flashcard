"use client";

import { SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

export default function SignUpPage() {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  const syncUserWithFirebase = async () => {
    try {
      const token = await getToken();

      const response = await fetch('/api/syncUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to sync user with Firebase');
      }

      console.log('User synced with Firebase successfully');
    } catch (error) {
      console.error('Error syncing user with Firebase:', error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      syncUserWithFirebase().then(() => {
        router.push('/dashboard');
      });
    }
  }, [isSignedIn, router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 animate-bg"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
        <SignUp redirectUrl="/dashboard" />
      </div>
    </div>
  );
}
