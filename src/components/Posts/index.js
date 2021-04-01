import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Posts = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "project section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" }, published: { eq: true } } }
        
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              tags
              priority
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const posts = allMarkdownRemark.edges;
  const sortPostByPriority = posts.sort((a, b) => a.node.frontmatter.priority - b.node.frontmatter.priority);

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Posts>
        {sortPostByPriority.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, tags }
          } = item.node;

          return (
            <Styled.Post key={id}>
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
