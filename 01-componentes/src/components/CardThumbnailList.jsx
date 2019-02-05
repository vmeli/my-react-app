import React from 'react'


const CardThumbnailList = (props) => (
    <div>
        {
            props.cardThumbnail.map((item, k) => (
                <article className="comp_card-thumbnail" key={k}>
                    <div className="card-thumbnail__content">
                        <div className="card-thumbnail__title">
                            {item.title}
                        </div>
                    </div>
                    <figure className="card-thumbnail__figure">
                        <a href="">
                            <img src={item.img} alt="" />
                        </a>
                    </figure>
                </article>
            ))
        }
    </div>
)

export default CardThumbnailList