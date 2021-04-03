import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  //query object is {id:'1'}
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post