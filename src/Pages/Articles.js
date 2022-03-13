import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"

function Articles() {
    const articles = getArticles()
    const articlesList = articles.map((article, index) => {
        return (
            <div key={index} className="row p-2">
                <div className="col-3">
                    <img src={article.image1} className="card-img-top" alt="..." />
                </div>
                <div className="col-9">
                        <h5>
                            <Link to={`/articles/${index}`} style={{color: "#1C0A00"}}>
                                {article.title}
                            </Link>
                        </h5>
                        <p>{article.describtione}</p>
                    </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {articlesList}
            </div>
        </div>
    )
}

export default Articles