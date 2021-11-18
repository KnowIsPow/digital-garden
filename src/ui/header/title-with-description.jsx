import { isRequired } from 'functions/error-handling/required-props';
import { classNames } from 'functions/utils/classnames';

export function TitleWithDescription({
  title = isRequired('TitleWithDescription', 'title'),
  description = isRequired('TitleWithDescription', 'description'),
  center = false,
  wide = false,
  tag: Tag = 'h1',
}) {
  return (
    <header className={classNames(center && 'text-center')}>
      <Tag
        className={classNames(
          'display',
          Tag === 'h1' ? 'display-lg' : Tag === 'h2' ? 'display-md' : 'display-sm'
        )}
      >
        {title}
      </Tag>
      <p className={classNames('body mt-2', wide ? 'max-w-4xl' : 'max-w-2xl', center && 'mx-auto')}>
        {description}
      </p>
    </header>
  );
}
