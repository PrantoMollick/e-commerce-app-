import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return <div className='shop-page'>
      {collections.map(({id, ...otherCollections}) => <CollectionPreview key={id} {...otherCollections} />)}
    </div>;
  }
}


export default ShopPage