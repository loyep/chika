import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function PagesFunctional() {
  return <div>PagesFunctional</div>;
}

PagesFunctional.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
