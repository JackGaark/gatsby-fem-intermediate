import React from 'react';
import { graphql } from 'gatsby';
import DocsPage from '../components/docs-page';

export const query = graphql`
  query($pageID: String!) {
    docsPage(id: { eq: $pageID }) {
      title
      updated(fromNow: true)
      body
    }
  }
`;

const DocsPageTemplate = ({ data }) => <DocsPage page={data.docsPage} />;
<<<<<<< HEAD

=======
>>>>>>> ae614b9f5fd39d703cd27c09f613b7d833429722
export default DocsPageTemplate;
