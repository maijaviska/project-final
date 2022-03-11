import { Link, useParams } from "react-router-dom"
import getArticleByIndex from "../API/getArticleByIndex"

function Article(){
    const {index} = useParams()
    const article = getArticleByIndex(index)
    
    return(
        <div>
        <h5>
            <Link to="/articles">Back</Link>
        </h5>
        <h2>{article.title}</h2>
        <p>{article.describtione}</p>
    </div>
    )
}
export default Article