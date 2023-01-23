import Head from "next/head";
import Link from "next/link";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

//styles
import content from "../../styles/content.module.css";

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
        <div className="content">
            <Head>
                <title>{postData.title}</title>
            </Head>

            <header className={content.header}>
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

            <div>
                <Link href="/">← Back to home</Link>
            </div>

            <article>
                {/* <h1>{postData.subtitle}</h1> */}

                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </div>
    );
}
