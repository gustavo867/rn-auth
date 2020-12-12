export default function signIn(): Promise<{
  token: string;
  user: {
    name: string;
    email: string;
    profilePic: string;
  };
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '327091tgdsquig7ut213ghfbashd',
        user: {
          name: 'Gustavo',
          email: 'gustavo@gmail.com',
          profilePic:
            'https://avatars3.githubusercontent.com/u/63013756?s=460&u=9a2e6eec4d606113ee70c10eee30bcf7f57a75cb&v=4',
        },
      });
    }, 1500);
  });
}
