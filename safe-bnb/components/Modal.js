// adding in Modal

export default props => (


    <div className='nav-container'>
        {/* cool, an empty div? maybe it's the whole modal background; very nice trick */}
        <div className='modal-background' onClick={() => console.log('close')}></div>
    </div>
    <div className='modal'>{props.children}</div>
)