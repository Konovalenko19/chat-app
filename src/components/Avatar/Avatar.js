import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Avatar.styled';

const propTypes = {
    size: PropTypes.string,
    imageSrc: PropTypes.string,
    text: PropTypes.node,
    borderRadius: PropTypes.string,
}

const defaultProps = {
    size: '50px',
    imageSrc: '',
    text: null,
    borderRadius: '50%',
};

const Avatar = (props) => {
    const {
        size,
        imageSrc,
        text,
        borderRadius,
        ...args
    } = props;

    if (!text && !imageSrc) {
        return null;
    }

    return (
        <S.Wrapper
            propSize={size}
            borderRadius={borderRadius}
            {...args}
        >
            {imageSrc && (
                <S.Image imageSrc={imageSrc} />
            )}

            <S.Text>{text}</S.Text>
        </S.Wrapper>
    );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
