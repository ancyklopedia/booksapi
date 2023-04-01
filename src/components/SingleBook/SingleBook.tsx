import { BookProps } from "../../helpers/interfaces"
import "./SingleBook.css"

const SingleBook: React.FC<BookProps> = ({book}) => {

  return (
    <div className="card">
      
      <a href={book.url}> 
      <img className="cover" src={`https://wolnelektury.pl/media/${book.cover}`} />
        <div className="cover text-cover"> 
          <div className="title"> {book.title} </div>
          <div className="text"> Autor: {book.author} </div>
          <div className="text"> Rodzaj:  {book.genre} </div>
          <div className="text"> Epoka: {book.epoch} </div>
        </div>
      </a>
    </div>
  )
}

export default SingleBook