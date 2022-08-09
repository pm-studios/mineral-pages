import React, { Component } from 'react';
import ReactTable from 'react-table'

import 'react-table/react-table.css'
import '../App.css';
import './TokenHolders.css'


export class TokenHolders extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = [
      { wallet: '0x5194b63f10691e46635b27925100cfc0a5ceca62', token: 2, amount: '$250', detail: [
        { hash: '0xa442b1733e9acac6e2e17631b9f87f4e6227f33cd7b61814fb66727ae19044a2', amount: 100 },
        { hash: '0x56cb5286914603811023ef622204656dbc868bb735316a68a23bbd27e9e0d674', amount: 150 },
      ]}, 
      { wallet: '0x77374848aa43c42a020eb4cc8b52ef7ff5124de8', token: 2, amount: '$150', detail: [
        { hash: '0x5ca335cfc10db33362e2b4ddfbd9d02ec412f1bca9b4ac974fab98ce493f9fa9', amount: 85 },
        { hash: '0xcf318115535bf6130e2c45667bbaccfbad7f955d92c53bb780d0ab69c080ca61', amount: 65 },
      ]}, 
      { wallet: '0x82e1591b55211f061bd8d6004515419a454f87de', token: 2, amount: '$75', detail: [
        { hash: '0x1697d3c31ba97ed5154b28557bcb1ab32c84f68ceca1a5f547da219c64749232', amount: 50 },
        { hash: '0xc0a3a43041baf80f4e868426a2249dee0df5088d7244dc37b1f86434738aeb74', amount: 25 },
      ]}, 
      { wallet: '0x6ca6a8bc14fb06a8c83b6838d59e94f864f5a731', token: 1, amount: '$25', detail: [
        { hash: '0xe04fedb425b802e410617f73c2cf74ea52b60907ae4f186b5489018961f850ec', amount: 25 },
      ]}, 
      { wallet: '0xee10f664d40b587acc24793fae603ea5f871b256', token: 1, amount: '$35', detail: [
        { hash: '0xf55e1559e19feb235004c4dfb6ad2c83ee37acb27c5a81db5598a45ef9b19db6', amount: 35 },
      ]}, 
      { wallet: '0x5194b63f10691e46635b27925100cfc0a5ceca62', token: 2, amount: '$250', detail: [
        { hash: '0xa442b1733e9acac6e2e17631b9f87f4e6227f33cd7b61814fb66727ae19044a2', amount: 100 },
        { hash: '0x56cb5286914603811023ef622204656dbc868bb735316a68a23bbd27e9e0d674', amount: 150 },
      ]}, 
      { wallet: '0x77374848aa43c42a020eb4cc8b52ef7ff5124de8', token: 2, amount: '$150', detail: [
        { hash: '0x5ca335cfc10db33362e2b4ddfbd9d02ec412f1bca9b4ac974fab98ce493f9fa9', amount: 85 },
        { hash: '0xcf318115535bf6130e2c45667bbaccfbad7f955d92c53bb780d0ab69c080ca61', amount: 65 },
      ]}, 
      { wallet: '0x82e1591b55211f061bd8d6004515419a454f87de', token: 2, amount: '$75', detail: [
        { hash: '0x1697d3c31ba97ed5154b28557bcb1ab32c84f68ceca1a5f547da219c64749232', amount: 50 },
        { hash: '0xc0a3a43041baf80f4e868426a2249dee0df5088d7244dc37b1f86434738aeb74', amount: 25 },
      ]}, 
      { wallet: '0x6ca6a8bc14fb06a8c83b6838d59e94f864f5a731', token: 1, amount: '$25', detail: [
        { hash: '0xe04fedb425b802e410617f73c2cf74ea52b60907ae4f186b5489018961f850ec', amount: 25 },
      ]}, 
      { wallet: '0xee10f664d40b587acc24793fae603ea5f871b256', token: 1, amount: '$35', detail: [
        { hash: '0xf55e1559e19feb235004c4dfb6ad2c83ee37acb27c5a81db5598a45ef9b19db6', amount: 35 },
      ]}, 
      { wallet: '0x5194b63f10691e46635b27925100cfc0a5ceca62', token: 2, amount: '$250', detail: [
        { hash: '0xa442b1733e9acac6e2e17631b9f87f4e6227f33cd7b61814fb66727ae19044a2', amount: 100 },
        { hash: '0x56cb5286914603811023ef622204656dbc868bb735316a68a23bbd27e9e0d674', amount: 150 },
      ]}, 
      { wallet: '0x77374848aa43c42a020eb4cc8b52ef7ff5124de8', token: 2, amount: '$150', detail: [
        { hash: '0x5ca335cfc10db33362e2b4ddfbd9d02ec412f1bca9b4ac974fab98ce493f9fa9', amount: 85 },
        { hash: '0xcf318115535bf6130e2c45667bbaccfbad7f955d92c53bb780d0ab69c080ca61', amount: 65 },
      ]}, 
      { wallet: '0x82e1591b55211f061bd8d6004515419a454f87de', token: 2, amount: '$75', detail: [
        { hash: '0x1697d3c31ba97ed5154b28557bcb1ab32c84f68ceca1a5f547da219c64749232', amount: 50 },
        { hash: '0xc0a3a43041baf80f4e868426a2249dee0df5088d7244dc37b1f86434738aeb74', amount: 25 },
      ]}, 
      { wallet: '0x6ca6a8bc14fb06a8c83b6838d59e94f864f5a731', token: 1, amount: '$25', detail: [
        { hash: '0xe04fedb425b802e410617f73c2cf74ea52b60907ae4f186b5489018961f850ec', amount: 25 },
      ]}, 
      { wallet: '0xee10f664d40b587acc24793fae603ea5f871b256', token: 1, amount: '$35', detail: [
        { hash: '0xf55e1559e19feb235004c4dfb6ad2c83ee37acb27c5a81db5598a45ef9b19db6', amount: 35 },
      ]},
    ]

    const columns = [{
      Header: 'Total Supply: 2821 Minerals | Total Holders: 2,632',
      headerClassName: 'thc-header',
      columns: [ {
        expander: true,
        Header: '',
        headerClassName: 'thc-tableHeader',
        width: 30,
      }, {
        Header: 'Wallet Address',
        headerClassName: 'thc-tableHeader',
        accessor: 'wallet',
        width: 600,
      }, {
        Header: 'Token(s)',
        headerClassName: 'thc-tableHeader',
        accessor: 'token',
        width: 150,
      }, {
        Header: 'Fund Amount(USD)',
        headerClassName: 'thc-tableHeader',
        accessor: 'amount',
        width: 150,
      }]
    }]

    return (
      <div className="tokenHolders">
        <div className="th-title">
          <h1>{this.props.item.title} Token Holders</h1>
        </div>
        <div className="th-container">
          <ReactTable 
            className="-striped -highlight thc-table"
            data={data} 
            columns={columns} 
            defaultPageSize={10} 
            SubComponent={row => {
              return (
                <div className="thc-subCell">
                  {row.original.detail.map((detail) => 
                    <div className="thcs-item">
                      <p>• Transaction Hash: <a href={"https://ropsten.etherscan.io/tx/" + detail.hash} target="_blank">{detail.hash}</a></p>
                      <p>• Fund Amount: ${detail.amount}</p>
                    </div>
                  )}
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default TokenHolders;
