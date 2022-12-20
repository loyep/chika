import type { AppRouter } from '@chika/trpc';
import type { inferProcedureOutput } from '@trpc/server';
import type { NextPage } from 'next';
import { signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter['post']['all']>[number];
}> = ({ post }) => {
  return (
    <div className="max-w-2xl rounded-lg border-2 border-gray-500 p-4 transition-all hover:scale-[101%]">
      <h2 className="text-2xl font-bold text-[hsl(280,100%,70%)]">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery: { data?: any[] } = trpc.post.all.useQuery();

  return (
    <>
      <Head>
        <title>Chika</title>
        <meta name="description" content="Chika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
          Chika
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: session } = trpc.auth.getSession.useQuery();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!session?.user },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {session?.user && (
        <p className="text-center text-2xl text-white">
          {session && <span>Logged in as {session?.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => signOut() : () => signIn()}>
        {session ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};
