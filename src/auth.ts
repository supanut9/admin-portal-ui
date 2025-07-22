import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { unauthorized } from 'next/navigation';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account }) {
      const response = await fetch(
        `${process.env.ADMIN_PORTAL_API_BASE_URL}/api/auth/google-login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken: account?.id_token }),
        }
      );

      if (response.status === 401) {
        unauthorized();
      }

      if (!response.ok) {
        return false;
      }

      return true;
    },
  },
});
