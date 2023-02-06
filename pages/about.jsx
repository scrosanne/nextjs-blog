import Head from "next/head";
import Link from "next/link";

//styles
import style from "./../styles/content.module.css";

export default function About() {
    return (
        <div className={style.content}>
            <Head>
                <title>about</title>
            </Head>

            <header className={style.header}>
                <h1>wo liegt levhausen?</h1>
            </header>

            <main>
                <div className={style.backHome}>
                    <Link href="/">← Back to home</Link>
                </div>

                <article>
                    <h2>schön hier</h2>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi, quod quaerat at necessitatibus iste
                        eaque ullam ipsa minima ad, nam saepe non beatae?
                        Voluptatem expedita possimus, aliquid quas eaque
                        explicabo!
                    </div>
                </article>
            </main>
        </div>
    );
}
