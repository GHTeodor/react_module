const SpaceX = ({name, year, img}) => {

    return (
        <div className='spaseX'>
            <div>
                <h1>{name}</h1>
                <small>{year}</small>
            </div>
            <img src={img} alt={name}/>
        </div>
    );
}

export default SpaceX;