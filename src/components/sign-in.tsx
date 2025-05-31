import { auth, signIn, signOut } from '@/auth';
import { Button } from '@mui/material';

const SignIn = async () => {
  const session = await auth();

  console.log(session ? 'true' : 'false');

  return (
    <>
      {session ? (
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button variant="outlined" type="submit" sx={{ color: 'white' }}>
            Logout
          </Button>
        </form>
      ) : (
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <Button variant="outlined" type="submit" sx={{ color: 'white' }}>
            Login
          </Button>
        </form>
      )}
    </>
  );
};

export default SignIn;
