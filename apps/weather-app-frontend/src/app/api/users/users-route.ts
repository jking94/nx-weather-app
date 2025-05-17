export async function getUsers() {
  console.log('hotpink - hitting get users');
  await fetch('http://localhost:3001/api/users').then((res) => {
    console.log('hotpink - res: ', res.body)
  })
  return new Response('Will get users');
}
