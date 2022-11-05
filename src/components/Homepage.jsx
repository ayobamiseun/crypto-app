import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic  } from 'antd'
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/CryptoApi';

const {Title }= Typography;
const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery();
    const globalStat = data?.data?.stats;
    console.log(data);

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title> 
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStat.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges"  value={globalStat.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume"  /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" /></Col>
        <Col span={12}><Statistic title="Total Markets" /></Col>
      </Row>
    </>
  )
}

export default Homepage