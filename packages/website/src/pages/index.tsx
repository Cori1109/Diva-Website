import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DivaLogo, DivaType } from "../components/DivaLogo";
import { format, parseISO } from 'date-fns';
import { ReadingIcon } from '../components/ReadingIcon';
import { getAllPosts, getAllSlugs } from './api/getPosts'
import Link from 'next/link';
import { HOME } from '../constants';

export type Post = {
  author: string;
  content: string;
  title: string;
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
      posts: posts.map((v) => ({
        ...v,
        date: (v.date as unknown as Date).toISOString(),
      })),
    },
  };
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Diva Protocol - Derivatives on the Ethereum blockchain</title>
        <meta
          name="description"
          content="DIVA is an open and permissionless standard to create and settle derivative assets"
        />
        <link rel="icon" href="/logo.svg" />
        <meta
          name="twitter:description"
          content="DIVA is an open and permissionless standard to create and settle derivative assets"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:title"
          content="DIVA Protocol - Derivatives on the Ethereum blockchain"
        />
        <meta
          name="twitter:title"
          content="DIVA Protocol - Derivatives on the Ethereum blockchain"
        />
        <meta name="twitter:image:src" content={`${HOME}/logo.svg`} />
        <meta property="og:image" content={`${HOME}/logo.svg`} />
        <meta
          property="og:description"
          content="DIVA is an open and permissionless standard to create and settle derivative assets"
        />
      </Head>

      <main className="moving-gradient text-white overflow-auto">
        <div className="flex h-full flex-col">
          <figure className="h-3/4 md:h-full p-10 md:p-0 flex flex-col md:justify-center md:items-center">
            <DivaLogo
              className="stroke-text mb-16 w-40 max-w-xs"
              aria-label="Diva Protocol Logo"
            />
            <DivaType className="stroke-text w-80 max-w-full fill-text" />
          </figure>
          <div className="px-10 md:text-center mr-3 md:flex flex-col md:flex-row align-center justify-center md:text-2xl text-text pt-3 pb-11 md:space-x-12">
            <p className="pb-3 py-2">The future of derivatives is coming</p>
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
                href="/pdf/DIVA_Whitepaper_v1.0.0.pdf"
              >
                <ReadingIcon aria-label="Read our Whitepaper" className="w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="justify-center flex flex-col align-center space-y-20 pt-28 md:pt-60 pb-32 md:pb-44">
          <ul className="self-center px-10">
            {posts.map((v) => (
              <li key={v.title}>
                <Link href={`/posts/${v.slug}`} passHref>
                  <a className="flex flex-col">
                    <span className="text-slate pb-3 md:text-center">
                      By <strong>{v.author}</strong> at{" "}
                      <time>{format(parseISO(v.date), "MMMM dd, yyyy")}</time>
                    </span>
                    <span className="text-2xl text-text">{v.title}</span>
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
