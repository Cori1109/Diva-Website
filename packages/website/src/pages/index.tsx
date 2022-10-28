import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DivaLogo, DivaType } from "../components/DivaLogo";
import { format, parseISO } from 'date-fns';
import { ReadingIcon } from '../components/ReadingIcon';
import { getAllPosts, getAllSlugs } from './api/getPosts'
import Link from 'next/link';
import { DESCRIPTION, HOME, TITLE } from '../constants';
import { useEffect, useState } from 'react';

export type Post = {
  author: string;
  content: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  coverImage: string;
  coverImageDescription: string;
  coverImageWidth: number;
  coverImageHeight: number;
  excerpt: string;
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts
        .map((v) => ({
          ...v,
          date: (v.date as unknown as Date).toISOString(),
        }))
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }),
    },
  };
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [displayBanner, setDisplayBanner] = useState<boolean>(true);

  useEffect(() => {
    setDisplayBanner(
      window?.localStorage?.getItem("DIVA-BANNER-REMINDER") == null
    );
  }, []);
  useEffect(() => {
    if (displayBanner === false) {
      window?.localStorage.setItem("DIVA-BANNER-REMINDER", "TRUE");
    }
  }, [displayBanner]);
  return (
    <>
      <Head>
        <title>Diva Protocol - Derivatives on the Ethereum blockchain</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/logo.svg" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={TITLE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:image:src" content={`${HOME}/logo.svg`} />
        <meta property="og:image" content={`${HOME}/logo.svg`} />
        <meta property="og:description" content={DESCRIPTION} />
      </Head>
      {displayBanner && (
        <header className="uppercase flex justify-center p-2 text-white bg-blue">
          <a
            href="https://www.divaprotocol.io/posts/diva-testnet-announcement"
            className="mr-3"
            target="_null"
          >
            🚀 Learn how to earn $diva tokens for trying out the app
          </a>
          <button
            onClick={() => {
              setDisplayBanner(false);
            }}
          >
            𝖷
          </button>
        </header>
      )}
      <main className="moving-gradient text-white overflow-auto">
        <div className="flex h-full flex-col">
          <figure className="h-3/4 md:h-full p-10 md:p-0 flex flex-col md:justify-center md:items-center">
            <DivaLogo
              className="stroke-text mb-16 w-40 max-w-xs"
              aria-label="Diva Protocol Logo"
            />
            <DivaType className="stroke-text w-80 max-w-full fill-text" />
          </figure>
          <p className="justify-center text-2xl full-width text-center mb-20">
            <a
              href="https://app.diva.finance/"
              className=" mr-1 bg-blue text-white  p-4 rounded-sm uppercase space-x-4 animate-pulse"
            >
              Launch Testnet App
            </a>
            <a
                href="/rewards"
                className="ml-1 bg-blue text-white  p-4 rounded-sm uppercase space-x-4 animate-pulse"
            >
              $DIVA Token Claim
            </a>
          </p>


          <div className="px-10 md:text-center mr-3 md:flex flex-col md:flex-row align-center justify-center md:text-2xl text-text pt-3 pb-11 md:space-x-12">
            <p className="pb-3 py-2">Powering the world of derivatives</p>
            <div className="space-x-10">
              <a
                className="inline-block py-1"
                href="https://twitter.com/divaprotocol_io"
              >
                <Image
                  width={30}
                  height={40}
                  alt="Discord"
                  src="/images/twitter.svg"
                />
              </a>
              <a
                className="inline-block py-1"
                href="https://discord.gg/DE5b8ZeJjK"
              >
                <Image
                  width={30}
                  height={40}
                  alt="Discord"
                  src="/images/discord.svg"
                />
              </a>
              <a
                className="inline-block py-1"
                href="https://docs.divaprotocol.io/"
              >
                <ReadingIcon
                  aria-label="Read our Documentation"
                  className="w-8"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <p className="text-3xl">Blog posts</p>
        </div>
        <div className="justify-center flex flex-col align-center space-y-20 pt-28 md:pt-10 pb-32 md:pb-44">
          <ul className="self-center px-10">
            {posts.map((v) => (
              <li className="md:pb-10" key={v.title}>
                <Link href={`/posts/${v.slug}`} passHref>
                  <a className="flex flex-col">
                    <span className="text-slate pb-3 md:text-center">
                      By <strong>{v.author}</strong> at{" "}
                      <time>{format(parseISO(v.date), "MMMM dd, yyyy")}</time>
                    </span>
                    <span className="text-2xl text-text md:text-center">
                      {v.title}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home
