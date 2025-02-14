import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

function blueskyLink(
  url: string,
  {
    title,    
    hashtags = [],
  }: { title?: string;hashtags?: string[]; },
) {
  return (
    'https://bsky.app/intent/compose' +
    transformObjectToParams({
      text: `${title}${hashtags.length > 0 ? ` #${hashtags.join('#')}` : ''} ${url}`,
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
