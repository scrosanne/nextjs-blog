import Head from "next/head";
import Link from "next/link";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

//styles
import style from "../../styles/content.module.css";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function Post({ postData }) {
    return (
        <div className={style.content}>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <header className={style.header}>
                <h1>
                    {postData.title} <br />
                    <span>
                        <Date dateString={postData.date} />
                    </span>
                </h1>

                <div></div>

                {/* <Image
                    priority
                    src="/images/profile.jpg"
                    className={home.profileImg}
                    height={144}
                    width={144}
                    alt=""
                /> */}
            </header>

            <main>
                <div className={style.backHome}>
                    <Link href="/">← Back to home</Link>
                </div>

                <article>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </article>
            </main>
        </div>
    );
}
