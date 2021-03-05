/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Fragment } from 'react';
import { Post } from '../../types/blog';
import { Link } from 'gatsby';
import AuthorInfo from './AuthorInfo';

interface PostSummaryProps {
  post: Post;
  titleSize: string;
}

const PostSummary = ({ post, titleSize }: PostSummaryProps) => {
  const featuredImageStyle = {
    width: '207px',
    height: '207px',
    backgroundColor: 'ghostWhite',
    borderRadius: '10px',
    mx: 'auto',
  };
  const { slug, title, date, author, categories, featuredImage } = post;

  return (
    <Fragment>
      <Link
        to={slug}
        sx={{
          variant: slug ? 'buttons.a' : 'buttons.a.disabled',
        }}
      >
        <div
          sx={{
            display: slug
              ? ['block', 'flex', 'block', 'flex']
              : ['block', 'flex'],
            justifyContent: 'space-between',
          }}
        >
          <div
            sx={{
              order: 0,
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {categories.nodes.map((category) => (
                <p
                  key={category.slug}
                  sx={{ textDecoration: 'none', color: 'main' }}
                >
                  {category.name}
                </p>
              ))}
              <Heading
                sx={{
                  my: '15px',
                  fontWeight: 'bold',
                  fontSize: `${titleSize}`,
                  lineHeight: '110%',
                }}
              >
                {title}
              </Heading>
            </div>
            <AuthorInfo author={author} date={date} color="fadeGray" />
          </div>
          <div
            sx={{
              order: 1,
              flex: 1,
              display: 'flex',
            }}
          >
            {featuredImage ? (
              <img
                alt={featuredImage.node.altText}
                src={featuredImage.node.sourceUrl}
                sx={featuredImageStyle}
              />
            ) : (
              <div sx={featuredImageStyle} />
            )}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PostSummary;
