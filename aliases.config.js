const path = require('path');

module.exports = (pathPrefix = 'src') => {
    const list = [
        // Redux
        { key: 'Actions', value: '/redux/actions' },
        { key: 'Reducers', value: '/redux/reducers' },
        { key: 'Store', value: '/redux/store' },

        // Other
        { key: 'Components', value: '/components' },
        { key: 'Utils', value: '/utils' },
    ];

    return list.map(alias => ({
        ...alias,
        value:  `${pathPrefix}${alias.value}`,
    }));
};