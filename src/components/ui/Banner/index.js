import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Banner = ({ title, subtitle, content, linkText, subcontent }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
      <Styled.Content>{subcontent}</Styled.Content>
      <a href="https://github.com/Mickaellah">
        <Button primary>{linkText}</Button>
      </a>
    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  subcontent: PropTypes.any.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Banner;
