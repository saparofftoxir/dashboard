import "./Cars.css"
function CarsCard({ item,deleteCar,editCarHandler}) {
    
    return (
        <div className='cars-container'>
            <img src={item.rasm} alt="" />
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <button onClick={()=> editCarHandler(item.id)} className='delete-btn'>edit</button>
            <button onClick={()=> deleteCar(item.id)} className='delete-btn'>delete</button>
        </div>
    )
}

export default CarsCard;