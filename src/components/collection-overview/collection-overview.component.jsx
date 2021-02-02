import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherSectionProps }) => (
                <CollectionPreview key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);