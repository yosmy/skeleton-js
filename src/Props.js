import React from 'react';
import PropTypes from 'prop-types';

const CredentialProps = PropTypes.shape({
    token: PropTypes.string.isRequired,
    phone: PropTypes.shape({
        country: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    roles: PropTypes.array
});

export {
    CredentialProps
}