
function PhotoElements( {image, title, text} ) {
    return (
        <div style={{width: '170px', marginTop: '100px', marginBottom: '100px', marginLeft: '50px', marginRight: '50px'}}>
            <img src={image} style={{objectFit: 'cover'}} />
            <div className="ps-4">
                <div className="fw-bold" style={{fontSize: '25px'}}>{title}</div>
                <div>{text}</div>
            </div>
        </div>
    );
}

export default PhotoElements;