import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom"
import getArticleByIndex from "../API/getArticleByIndex"

function Article() {
    const { index } = useParams()
    const article = getArticleByIndex(index)
    const imageStyle = { maxWidth: '400px' };
    const imageStyle2 = { maxWidth: '150px' };

    return (
        <div>
            <h5 className="p-1">
                <Link to="/articles" className="btn btn-outline-dark"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
            </h5>
            <div className="row">
                <div className="col-12">
                    <h2 style={{ color: "#1C0A00" }}>{article.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <a data-fancybox href={article.image1}>
                        <img className="fancy-box-image" src={article.image1} style={imageStyle} alt="" />
                    </a>
                </div>
                <div className="col-7">
                    <div className="row d-flex">
                        <div className="col-12 text-start">
                            <p>{article.describtione}</p>
                        </div>

                        <div className="col-6 text-start">
                            <p className="one-product-price">{article.price} EUR</p>
                            <button className="btn btn-warning"><FontAwesomeIcon icon={faBasketShopping} /> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row mt-2 mb-2">
                    <div className="col-5 first-left">
                        <div className="row d-flex">
                            <div className="col-4">
                                <a data-fancybox href={article.image2}>
                                    <img className="fancy-box-image" src={article.image2} style={imageStyle2} alt="" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a data-fancybox href={article.image3}>
                                    <img className="fancy-box-image" src={article.image3} style={imageStyle2} alt="" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a data-fancybox href={article.image4}>
                                    <img className="fancy-box-image" src={article.image4} style={imageStyle2} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Article