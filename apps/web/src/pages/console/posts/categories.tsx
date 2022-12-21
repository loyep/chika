import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function PostsCategories() {
  return <div>PostsCategories</div>;
}

PostsCategories.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
