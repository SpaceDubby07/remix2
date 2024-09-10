import { redirect } from '@remix-run/node';

export const loader = async () => {
  return redirect(`/husky`);
};

export default function Index() {
  return null;
}
