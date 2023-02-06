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
                <title>LEVHAUSEN</title>
            </Head>

            <header className={style.header}>
                <h1>LEVHAUSEN</h1>

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
                                    src="/images/1.jpeg"
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
        </div>
    );
}
