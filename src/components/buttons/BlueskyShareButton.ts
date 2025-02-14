import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function blueskyLink(
  url: string,
  {
    title,
  }: { title?: string; },
) {
  return (
    'https://bsky.app/intent/compose' +
    transformObjectToParams({
      text: `${title} ${url}`,
    })
  );
}

const BlueskyShareButton = createShareButton<{
  title?: string;
  hashtags?: string[];
}>(
  'bluesky',
  blueskyLink,
  (props) => ({
    title: props.title,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default BlueskyShareButton;
