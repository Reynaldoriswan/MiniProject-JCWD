// "use server";
// import axios from "axios";
// import * as jose from "jose";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

// const base_api = "http://localhost:5670";

// export async function getAllPosts() {
//   try {
//     const res = await axios.get(base_api + "/post");
//     return res.data;
//   } catch (err) {
//     console.error("Failed to fetch posts: ", err);
//     // Handle error
//   }
// }

// export async function createPost(params: any) {
//   try {
//     const authToken = cookies().get("authToken")?.value;
//     if (!authToken) {
//       redirect("/login");
//       return;
//     }

//     const session = await jose.jwtVerify(
//       authToken,
//       new TextEncoder().encode("mySecretAcademia")
//     );

//     const res = await axios.post(
//       base_api + "/post",
//       {
//         title: params.title,
//         body: params.body,
//         user_id: session.payload.id,
//       },
//       {
//         headers: {
//           Authorization: "Bearer " + authToken,
//         },
//       }
//     );

//     redirect("/post");
//   } catch (err) {
//     console.error("Failed to create post: ", err);
//     // Handle error, maybe set some error state to show a message to the user
//   }
// }
