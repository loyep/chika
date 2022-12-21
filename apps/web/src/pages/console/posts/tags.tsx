import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function PostsTags() {
  return <div>PostsTags</div>;
}

PostsTags.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
