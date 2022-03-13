import { Link, useParams } from "react-router-dom"
import getArticleByIndex from "../API/getArticleByIndex"

function Article() {
    const { index } = useParams()
    const article = getArticleByIndex(index)
    const imageStyle = { maxWidth: '300px' };
    const imageStyle2 = { maxWidth: '150px' };

    return (
        <div>

            <h5>
                <Link to="/articles">Back</Link>
            </h5>
            <div className="row">
                <div className="col-12">
                    <h2>{article.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            <a data-fancybox href={article.image1}>
                                <img className="fancy-box-image" src={article.image1} style={imageStyle} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <p>{article.describtione}</p>
                    <div className="row d-flex mt-3 ">

                        <div className="col-6 text-center">
                            <p className="one-product-price">{article.price} EUR</p>
                        </div>

                        <div className="col-6 text-center">
                            <button className="btn btn-success address-btn" id="address-button" onclick="addAddress()">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row mt-3 mb-3">
                    <div className="col-6 first-left">
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