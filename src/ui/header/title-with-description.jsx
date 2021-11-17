import { isRequired } from 'functions/error-handling/required-props';
import { classNames } from 'functions/utils/classnames';

export function TitleWithDescription({
  title = isRequired('TitleWithDescription', 'title'),
  description = isRequired('TitleWithDescription', 'description'),
  center = false,
  tag: Tag = 'h1',
}) {
  return (
    <header className={classNames(center && 'text-center')}>
      <Tag className="display display-lg">{title}</Tag>
      <p className={classNames('body max-w-xl mt-2', center && 'mx-auto')}>{description}</p>
    </header>
  );
}
