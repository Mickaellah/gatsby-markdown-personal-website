import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
    </Layout>
  );
};

export default AboutPage;
