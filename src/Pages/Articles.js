import { useState } from "react"
import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"

function Articles() {
    const [startList, setStartList] = useState(0)
    const endList = startList + 5

    const moveLeft = () => {
        let nextSelected = startList - 5
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 5
        if (nextSelected > 15) {
            nextSelected = 15
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(5)
    }
    const changePageThree = () => {
        setStartList(10)
    }
    const changePageFour = () => {
        setStartList(15)
    }

    const articles = getArticles()
    const articlesList = articles.slice(startList, endList).map((article, index) => {
        return (
            <div key={index} className="row p-2">
                <div className="col-3">
                    <img src={article.image1} className="card-img-top" alt="..." />
                </div>
                <div className="col-9">
                    <h5>
                        <Link to={`/articles/${index}`} style={{ color: "#1C0A00" }}>
                            {article.title}
                        </Link>
                    </h5>
                    <p>{article.describtione}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="container p-5">
            <div className="row">
                {articlesList}
            </div>
            <div className="row">
                <div className="col">
                    <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                        <button onClick={() => moveLeft(startList)} type="button" class="btn btn-outline-secondary">«</button>
                        <button onClick={() => changePageOne(startList)} type="button" class="btn btn-outline-secondary">1</button>
                        <button onClick={() => changePageTwo(startList)} type="button" class="btn btn-outline-secondary">2</button>
                        <button onClick={() => changePageThree(startList)} type="button" class="btn btn-outline-secondary">3</button>
                        <button onClick={() => changePageFour(startList)} type="button" class="btn btn-outline-secondary">4</button>
                        <button onClick={() => moveRight(startList)} type="button" class="btn btn-outline-secondary">»</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles