import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerSecondContainer}>
                    <section>
                        <p>Adresse</p>
                        <br />
                        <p>Intet nyt - Godt nyt ApS</p>
                        <br />
                        <p>Tulipanvej 232</p>
                        <p>7320</p>
                        <p>Valby Øster</p>
                    </section>
                    <section>
                        <p>Links</p>
                        <br />
                        <p>vikanweb.dk</p>
                        <p>overpådenandenside.dk</p>
                        <p>retsinformation.dk</p>
                        <p>nogetmednews.dk</p>
                    </section>
                    <section>
                        <p>Politik</p>
                        <br />
                        <p>Privatlivspolitik</p>
                        <p>Cookiepolitik</p>
                        <p>Købsinformation</p>
                        <p>Delingspolitik</p>
                    </section>
                    <section>
                        <p>Kontakt</p>
                        <br />
                        <p>ingn@nyhed.dk</p>
                        <p>teletfon: 23232323</p>
                        <p>fax: 123123-333</p>
                    </section>
                </div>
            </div>
        </>
    )
}