export const Quotes = ({quote, speaker}) => {
    return(
       <div>
        <p role='p'>{quote}</p><p>{speaker}</p>
        <button>Quote No Jutsu</button>
       </div> 
    )
}
