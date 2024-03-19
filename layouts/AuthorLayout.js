import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <div className="mx-auto max-w-3xl ">
      <PageSEO title={`About ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="title">About me</h1>
        </div>
        <div className="items-start xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-row space-x-6 space-x-reverse">
            <div className="order-last flex-none items-center pt-8">
              <Image
                src={avatar}
                alt="avatar"
                width="192px"
                height="192px"
                className="h-24 w-24 rounded-lg"
              />
            </div>
            <div className="prose max-w-none flex-1 py-0 dark:prose-dark">
              <h2>Hi, I'm Bigbull</h2>
              <p>
              I’m a into web3 and crypto since 2019 
                and in Q4 2023 won the election to be 
                a 2024 Steward in the Governance Working 
                Group of the ApeCoin DAO.
                I am also a member of the 
                Bull Council of BOTB. 
              </p>
              <p>
              I have also invested in various private rounds in the 
              Crypto space, as well as invested in other companies unrelated to crypto. 
              </p>
              {/* <p>
                Previously I had co-founded{' '}
                <Link href="https://medium.com/interchange/introducing-interchange-from-the-picks-shovels-co-ea891352eede">
                  The Picks & Shovels Co.
                </Link>
                {', '}
                <Link href="https://www.youtube.com/watch?v=F5oyVKKEupc">Circa News</Link>
                {', '}
                <Link href="https://www.youtube.com/watch?v=VwnjfEaaMvg">SimpleGeo</Link>
                {', and '}
                <Link href="https://www.youtube.com/watch?v=KryicDrVUYU&t=93s">Socialthing</Link>.
              </p> */}
            </div>
          </div>
          <div className="prose max-w-none pt-0 pb-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </div>
  )
}
