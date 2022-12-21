import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Posts() {
  return <div>Posts</div>;
}

Posts.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
