//social icons https://jaketrent.github.io/react-social-icons/
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

//next
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

//components
import Date from "../components/date";

//styles
import style from "../styles/home.module.css";

//other
import { getSortedPostsData } from "../lib/posts";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function Home({ allPostsData }) {
    return (
        <div className={style.home}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>BLOGTITLE</title>
            </Head>

            <header className={style.header}>
                <Link href={`/about`}>
                    <h1>BLOGTITLE</h1>
                </Link>

                {/* <Image
                    priority
                    src="/images/profile.jpg"
                    className={style.profileImg}
                    height={144}
                    width={144}
                    alt=""
                /> */}
            </header>

            <section className={style.posts}>
                <ul>
                    {allPostsData.map(({ id, date, title, subtitle, url }) => (
                        <li key={id}>
                            <div className={style.postLeft}>
                                <Image
                                    src={url}
                                    height={180}
                                    width={180}
                                    alt=""
                                />
                            </div>
                            <div className={style.postRight}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <p>{subtitle}</p>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <footer>
                <SocialIcon
                    url="https://www.instagram.com/levhausen/"
                    bgColor="#caffd2d1"
                />
                <SocialIcon
                    url="https://open.spotify.com/artist/0CJguffLP0pVBf09ZhOl0k?si=uE-OTKAaTDKAktAeG_SM-Q"
                    bgColor="#caffd2d1"
                />
                <SocialIcon
                    url="https://www.youtube.com/channel/UC2KLtb2v-DiBmjnp7Kutebw"
                    bgColor="#caffd2d1"
                />
            </footer>
        </div>
    );
}
