/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import Intro from './Intro';
import SearchBar from './SearchBar';
import PostSummary from './PostSummary';
import Hi from '../Main/Hi';
import { BlogPostsProps } from '../../types/blog';

interface BlogProps {
  data: BlogPostsProps;
}

const Blog = ({ data }: BlogProps) => {
  return (
    <div>
      <Intro />
      <Box
        sx={{
          variant: 'styles.innerContainer',
          marginTop: '-5rem',
        }}
      >
        <div sx={{ display: ['block', 'block', 'flex'] }}>
          <div sx={{ flex: 2, order: 1, marginLeft: [0, 0, '3rem'] }}>
            {data.wpgraphql.posts.nodes.map((post) => (
              <div
                key={post.slug}
                sx={{
                  mb: '3rem',
                  p: '3rem',
                  border: (theme) => `1px solid ${theme.colors.gray[3]}`,
                  borderRadius: '10px',
                  backgroundColor: 'white',
                }}
              >
                <PostSummary post={post} titleSize="28px" />
              </div>
            ))}
          </div>
          <div sx={{ flex: 1, order: 0, maxWidth: '287px', mx: 'auto' }}>
            <SearchBar />
          </div>
        </div>
        <div>
          <Hi />
        </div>
      </Box>
    </div>
  );
};

export default Blog;
