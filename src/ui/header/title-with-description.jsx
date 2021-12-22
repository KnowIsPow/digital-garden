import { isRequired } from 'functions/error-handling/required-props';
import { classNames } from 'functions/utils/classnames';
import { slugify } from 'functions/utils/slugify';

export function TitleWithDescription({
  title = isRequired('TitleWithDescription', 'title'),
  description = isRequired('TitleWithDescription', 'description'),
  anchor = slugify(title),
  center = false,
  wide = false,
  tag: Tag = 'h1',
}) {
  return (
    <div className={classNames(center && 'text-center')}>
      <Tag id={anchor}>{title}</Tag>
      <p className={classNames('mt-2', wide ? 'max-w-4xl' : 'max-w-2xl', center && 'mx-auto')}>
        {description}
      </p>
    </div>
  );
}
