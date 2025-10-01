'use client';

import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '../configs/db';
import { Users } from '../configs/schema';
import { eq } from 'drizzle-orm';

export default function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      saveUserToDB();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const saveUserToDB = async () => {
    try {
      // check if the user already exists
      const existing = await db
        .select()
        .from(Users)
        .where(eq(Users.email, user.primaryEmailAddress?.emailAddress));

      if (existing.length === 0) {
        // insert a new user
        await db.insert(Users).values({
          name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          email: user.primaryEmailAddress?.emailAddress,
          imageURL: user.imageUrl,
          subscription: false, // default value
        });

        console.log('✅ New user saved to DB');
      } else {
        console.log('ℹ️ User already exists in DB');
      }
    } catch (err) {
      console.error('❌ Error saving user:', err);
    }
  };

  return <>{children}</>;
}
