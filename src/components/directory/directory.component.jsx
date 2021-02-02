import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
)

const mapStateToprops = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToprops)(Directory);