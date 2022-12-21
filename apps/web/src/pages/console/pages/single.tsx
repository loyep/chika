import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function PagesSingle() {
  return <div>Admin</div>;
}

PagesSingle.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
