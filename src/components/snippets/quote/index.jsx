import {
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { Callout } from "../callout";

export default function Quote({ text, author }) {
  return (
    <Callout color="yellow" title={text} icon={ChatBubbleLeftRightIcon}>
      {author}
    </Callout>
  );
}
