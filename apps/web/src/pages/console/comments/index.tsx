import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Comments() {
  return <div>Admin</div>;
}

Comments.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
