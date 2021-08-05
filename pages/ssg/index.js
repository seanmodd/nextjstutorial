import { Heading, Link, Text, VStack } from '@chakra-ui/react';

const UsersList = ({ users }) => {
  const video17 =
    'https://www.youtube.com/watch?v=7UouvxZ6OaM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=18';
  const snippets =
    'https://marketplace.visualstudio.com/items?itemName=willstakayama.vscode-nextjs-snippets';
  const othernextsnippets =
    'https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets';
  return (
    <VStack justify="center" h="90vh">
      <Heading>Next JS Pre-Rendering</Heading>
      <Text>via Static Generation with getStatic Props!</Text>
      <Link href={snippets} isExternal color="teal.500">
        Next JS snippets!
      </Link>
      <Link href={othernextsnippets} isExternal color="teal.500">
        MORE Next JS snippets!
      </Link>
      <Link href={video17} isExternal color="teal.500">
        Next.js Tutorial - 17 - Static Generation with getStaticProps
      </Link>
      <br />
      <p>List of users</p>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} isExternal color="teal.500">
          {user.name}
        </Link>
      ))}
    </VStack>
  );
};

export default UsersList;

// ? below is done using ngspr snippet:
export const getStaticProps = async (ctx) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
};

//! the snippet is either or nextgetStaticProps OR ngspr
// ? below is the nextgetStaticProps
// & You should use getStaticProps when:
// & - The data required to render the page is available at build time ahead of a user’s request.
// & - The data comes from a headless CMS.
// & - The data can be publicly cached (not user-specific).
// & - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
//* export const getStaticProps = async (ctx) => {
//*   const { data } = await  // your fetch function here

//*  return {
//*    props: {

//*    }
//*  }
//* }

// ? below is the ngspr
//* export const getStaticProps = async (ctx) => {

//*   return {
//*    props:{
//*      data:null
//*    }
//*  }
//* }
