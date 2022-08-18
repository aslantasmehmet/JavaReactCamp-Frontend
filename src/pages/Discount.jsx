import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';

export default function Discount() {






    return (
        <div>
            <Card>
                <Link to={`/productlist`}>
                    <Card.Img variant="top" src="https://img-morhipo.mncdn.com/Content/Banners/buyuk_bannerd6695c702733415fae28cdbe6206f8a0.jpg" />
                </Link>
                <Card.Body>
                    <Card.Text>
                        Huawei'de Beklediğin İndirimler-Fırsaları Kaçırma
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Link to={`/productlist`}>
                    <Card.Img variant="top" src="https://img-morhipo.mncdn.com/Content/Banners/_buyukbanneradf2c5477f4743a2997ca8214f8345bb.jpg" />
                </Link>
                <Card.Body>
                    <Card.Text>
                        Huawei'de Beklediğin İndirimler-Fırsaları Kaçırma
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}
