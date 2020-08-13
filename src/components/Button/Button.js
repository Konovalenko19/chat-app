import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Button.styled';

const propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    isDisabled: PropTypes.bool,
    children: PropTypes.node,
};

const defaultProps = {
    type: 'button',
    isDisabled: false,
};

const Button = ({
    type,
    isDisabled,
    children,
}) => (
    <S.ButtonWrapper
        type={type}
        disabled={isDisabled}
    >
        {children}
    </S.ButtonWrapper>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
