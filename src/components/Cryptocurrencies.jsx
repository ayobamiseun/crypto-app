import React, {useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input  } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
   const {data: cryptosLIst, isFetching} = useGetCryptosQuery(count);
   const [cryptos, setCryptos] = useState(cryptosLIst?.data?.coins);
  //  console.log(cryptos);

   if(isFetching) return "Loading...."
   
  return (
    <>
       <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies