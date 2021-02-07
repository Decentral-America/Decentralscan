import React from 'react';
import PropTypes from 'prop-types';

import {BlockListItem} from './BlockListItem.view';

export class BlockList extends React.Component {
    static propTypes = {
        blocks: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {
        return (
            <table className="blocks table-sm-transform">
                <thead>
                    <tr>
                        <th className="timestamp">№ / Fecha</th>
                        <th className="target nowrap">Objetivo Base</th>
                        <th>ID de Bloque / Generador</th>
                        <th className="txs">Transacciones</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.blocks.map((block, index) => {
                    return (<BlockListItem key={index} block={block} />);
                })}
                </tbody>
            </table>
        );
    }
}
