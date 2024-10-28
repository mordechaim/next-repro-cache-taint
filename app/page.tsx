import { taintUniqueValue } from 'next/dist/server/app-render/rsc/taint';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const getUser = async () => {
    'use cache';

    const user = {
      name: 'John Doe',
      password: 'hunter2',
    };

    taintUniqueValue(
      "Don't pass the password to the client",
      user,
      user.password
    );
    return user;
  };

  const user = await getUser();

  return user.name;
}
