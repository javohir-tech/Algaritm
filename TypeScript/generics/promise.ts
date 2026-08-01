interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getFetch<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`,
    );

    if (!response.ok) {
      throw new Error("Failed fetch error");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    const result = error as Error;
    throw new Error(result.message);
  }
}

async function getUsers() {
  getFetch<IUser[]>("users").then((res) =>
    res.forEach((u) => console.log(u.name)),
  );
}

async function getPosts() {
  const posts = await getFetch<IPost[]>("posts");
  posts.forEach((p) => console.log(p.title));
}

// getPosts()
getUsers();
