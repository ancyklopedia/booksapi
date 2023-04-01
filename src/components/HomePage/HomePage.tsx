import axios from 'axios';
import {useState, useEffect} from 'react'
import { BookObj } from '../../helpers/interfaces';
import SingleBook from '../SingleBook/SingleBook';
import "./HomePage.css"

const HomePage = () => {

    const [bookData, setBookData]=useState([]);

    useEffect(()=>{
        axios.get("https://wolnelektury.pl/api/audiobooks/").then((response)=> {setBookData(response.data)}).catch((err)=>console.error(err.message))
    }, [])
   
  return (
    <>
    <div className="bookspage"> 
        {bookData.length !== 0 && bookData.map((book:BookObj) => {
            return <SingleBook book={book} key={book.full_sort_key}/>
})}
    </div>
    </>
  )
}

export default HomePage