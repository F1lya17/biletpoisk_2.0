import Link from "next/link";

const Footer = function () {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <Link className="footer__link" href="/qa">Вопросы и ответы</Link>
                    <Link className="footer__link" href="/about">О нас</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;