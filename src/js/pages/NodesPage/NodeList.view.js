import React from 'react';
import PropTypes from 'prop-types';

import {NodeListItem} from './NodeListItem.view';

export class NodeList extends React.Component {
    static propTypes = {
        nodes: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {
        return (
            <table className="nodes table-sm-transform">
                <thead>
                    <tr>
                        <th>Nodo</th>
                        <th className="version">Versión</th>
                        <th className="height">Tamaño Actual</th>
                        <th className="target">Objetivo base:</th>
                        <th className="utxs">UTxs</th>
                        <th className="txs">Mantenedor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.nodes.map((node, index) => {
                        return (<NodeListItem key={index} node={node} />);
                    })}
                </tbody>
            </table>
        );
    }
}
