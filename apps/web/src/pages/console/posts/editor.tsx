import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function PostsEditor() {
  return <div>PostsEditor</div>;
}

PostsEditor.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
