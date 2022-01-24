import { useRouter } from 'next/router'

// export const getStaticPaths = async () {
//   return {
//     paths: [
//       
//     ],
//     fallback: true,
//   }
// 
// }

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post