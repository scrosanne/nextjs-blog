//next
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

//components
import Date from "../components/date";

//styles
import home from "../styles/home.module.css";

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
        <div className="home">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>LEVHAUSEN</title>
            </Head>

            <header className={home.header}>
                <h1>
                    this is <br />
                    <span>LEVHAUSEN</span>
                </h1>

                <Image
                    priority
                    src="/images/profile.jpg"
                    className={home.profileImg}
                    height={144}
                    width={144}
                    alt=""
                />
            </header>

            <section className={home.posts}>
                <ul>
                    {allPostsData.map(({ id, date, title, url }) => (
                        <li key={id}>
                            <div className={home.postLeft}></div>
                            <div className={home.postRight}>
                                <Link href={`/posts/${id}`}>{title}</Link>
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
